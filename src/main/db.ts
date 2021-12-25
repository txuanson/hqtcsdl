import * as sql from 'mssql';

let pool : sql.ConnectionPool | any = null;

export const authenticate = async(user: string, password: string) => {
  try {
    if(pool){
      console.log("Connection exists... Closing existing connection...");
      await closePool();
    }

    pool = await sql.connect({
      server: "localhost",
      database: "QLUD",
      user,
      password,
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
      requestTimeout: 60000,
      options: {
        trustServerCertificate: true,
      }
    });
  } catch (error) {
    console.error(error);
    pool = null;
  }
}

export const closePool = async () =>{
  try {
    await pool.close();
    pool = null;
  } catch (error) {
    console.error(error);
    pool = null;
  }
}

export const getConnection = async () : Promise<sql.ConnectionPool>  =>  {
  try {
    pool.on('error', async (error : any) => {
      console.error(error);
      await closePool();
    })

    return pool;
  } catch (error) {
    console.error(error);
    pool = null;
    throw error;
    return pool;
  }
}

export const getUser = async () => {
  const connection = await getConnection();
  const request = connection.request();
  const user = await request.query("SELECT CURRENT_USER");
  return user.recordset[0][""];
}

export const getRole = async (name: string) => {
  const connection = await getConnection();
  const request = connection.request();
  const role = await request.query(`SELECT LOAINGUOIDUNG FROM TAIKHOAN WHERE TENTK = '${name}'`);
  return role.recordset[0]["LOAINGUOIDUNG"];
}

export const getPartnerOrder = async(username: string) =>{
  const connection = await getConnection();
  const request = connection.request();
  const order = await request.query(`SELECT d.* FROM DONHANG d JOIN DT_DH dh ON d.MADH = dh.MADH JOIN DOITAC dt ON dh.MADOITAC = dt.MADOITAC WHERE dt.TENTK = '${username}'`);
  return order.recordset;
}

export const getDriverOrder = async(username: string) => {
  const connection = await getConnection();
  const request = connection.request();
  const order = await request.query(`SELECT d.* FROM DONHANG d JOIN TAIXE t ON d.MATX = t.MATX WHERE t.TENTK = '${username}'`);
  return order.recordset;
}

export const getGuestOrder = async(username: string) => {
  const connection = await getConnection();
  const request = connection.request();
  const order = await request.query(`SELECT d.* FROM DONHANG d JOIN KHACHHANG k ON k.MAKH = d.MAKH WHERE k.TENTK = '${username}'`);
  return order.recordset;
}

export const partnerSetOrderStatus = async(orderId: number, status: number) => {
  const connection = await getConnection();
  const request = connection.request();
  request.input('orderId', sql.Int, orderId);
  request.input('status', sql.Int, status);
  try {
    await request.execute('Partner_UpdateOrderStatus')
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export const getOrderDetail = async(orderId: number) =>{
  const connection = await getConnection();
  const request = connection.request();
  const order = await request.query(`SELECT * FROM DONHANG WHERE MADH = ${orderId}`);
  return order.recordset[0];
}

//        LOST UPDATE
export const driverSetOrderStatus = async(orderId: number, status: number) => {
  const connection = await getConnection();
  const request = connection.request();
  request.input('orderId', sql.Int, orderId);
  request.input('status', sql.Int, status);
  try {
    await request.execute('Partner_UpdateOrderStatus')
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//        DIRTY READ
export const guestGetProductStatusDirtyRead = async(productId: number) => {
  const connection = await getConnection();
  const request = connection.request();
  try {
    request.input('MADONHANG', sql.Int, productId);
    const product = await request.execute('USP_khachhangxemtinhrangdonhang');
    return product.recordset;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const driverUpdateOrderStatusDirtyRead = async(productId: number, status: number) => {
  const connection = await getConnection();
  const request = connection.request();
  try {
    request.input('MADONHANG', sql.Int, productId);
    request.input('TINHTRANG', sql.Int, status);
    const product = await request.execute('USP_taixecapnhatdonhang');
    return product.returnValue;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//      UNREPEATABLE READ

export const guestGetProductByName = async(productName: string) => {
  const connection = await getConnection();
  const request = connection.request();
  try {
    request.input('tensp', sql.NVarChar(40), productName);
    const product = await request.execute('HienThiSanPham');
    return product.recordset;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const partnerEditProduct = async(productId: number, productName: string, quantity: number, price: number) =>{
  const connection = await getConnection();
  const request = connection.request();
  try {
    request.input('MASANPHAM', sql.Int, productId);
    request.input('TENSANPHAM', sql.NVarChar(20), productName);
    request.input('SOLUONG', sql.Int, quantity);
    request.input('DONGIA', sql.Money, price);
    await request.execute('USP_doitacsuasanpham');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//        PHANTOM READ

export const guestAddProductToOrder = async(orderId: number, productId: number, quantity: number, price: number) => {
  const connection = await getConnection();
  const request = connection.request();
  try {
    request.input('MADH', sql.Int, orderId);
    request.input('MASP', sql.Int, productId);
    request.input('SOLUONG', sql.Int, quantity);
    request.input('DONGIA', sql.Money, price);
    await request.execute('USP_ThemSanPhamDonHang');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const partnerDeleteProduct = async(productId: number) => {
  const connection = await getConnection();
  const request = connection.request();
  try {
    request.input('MASP', sql.Int, productId);
    await request.execute('USP_XoaSanPham');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const allGetProfile = async() => {
  const connection = await getConnection();
  const request = connection.request();
  try{
    const profile = await request.execute('ViewProfile');
    return profile.recordset[0];
  } catch(error){
    console.error(error);
    throw error;
  }
}

export const updateProfile = async(email: string, name: string, address: string, phone: string) => {
  const connection = await getConnection();
  const request = connection.request();
  try{
    request.input('EMAIL', email);
    request.input('HOTEN', name);
    request.input('DIACHI', address);
    request.input('SODIENTHOAI', phone);
    await request.execute('ViewUpdateDT1');
  } catch(error){
    console.error(error);
    throw error;
  }
}

export const employeeGetListContract = async() => {
  const connection = await getConnection();
  const request = connection.request();
  try {
    const contract = await request.query("SELECT * FROM HOPDONG");
    return contract.recordset;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const partnerGetListContract = async(username: string) => {
  const connection = await getConnection();
  const request = connection.request();
  try {
    const contract = await request.query(`SELECT h.* FROM HOPDONG h JOIN DOITAC d ON h.MADOITAC = d.MADOITAC WHERE d.TENTK = '${username}'`);
    return contract.recordset;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const partnerRequestRenewContract = async(contractId: number, newDate: Date) =>{
  const connection = await getConnection();
  const request = connection.request();
  try {
    request.input('mahd', contractId);
    request.input('newDate', newDate);
    await request.execute('RequestRenewContract');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const employeeUpdateContract = async() => {
  const connection = await getConnection();
  const request = connection.request();
  try {
    await request.execute('UpdateHopdong');
  } catch (error) {
    console.error(error);
    throw error;
  }
}
