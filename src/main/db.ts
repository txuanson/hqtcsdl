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
      database: "master",
      user,
      password,
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
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

export const getConnection = async () => {
  try {
    if(pool){
      return pool;
    }

    pool.on('error', async (error : any) => {
      console.error(error);
      await closePool();
    })
  } catch (error) {
    console.error(error);
    pool = null;
  }
}
