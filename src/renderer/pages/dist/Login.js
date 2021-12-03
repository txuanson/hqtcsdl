"use strict";
exports.__esModule = true;
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var login_png_1 = require("../../../assets/img/login.png");
function Login() {
    return (React.createElement(antd_1.Row, { className: "h-screen" },
        React.createElement(antd_1.Col, { span: 16, style: { backgroundImage: "url(" + login_png_1["default"] + ")" } }),
        React.createElement(antd_1.Col, { span: 8, className: "px-8" },
            React.createElement("div", { className: "flex flex-col h-screen place-content-center" },
                React.createElement("h3", { className: "font-bold text-4xl mb-7 text-center" }, "Log in"),
                React.createElement(antd_1.Form, { layout: "vertical", autoComplete: "off" },
                    React.createElement(antd_1.Form.Item, { label: "Username", name: "username", rules: [{ required: true, message: 'Please input your username!' }] },
                        React.createElement(antd_1.Input, null)),
                    React.createElement(antd_1.Form.Item, { label: "Password", name: "password", rules: [{ required: true, message: 'Please input your password!' }] },
                        React.createElement(antd_1.Input.Password, null)),
                    React.createElement(antd_1.Form.Item, null,
                        React.createElement(antd_1.Button, { className: "w-full", type: "primary", htmlType: "submit" }, "Log in"))),
                React.createElement("span", { className: "text-center" },
                    "Don't have an account? ",
                    React.createElement(react_router_dom_1.Link, { to: "/register" }, "Register"))))));
}
exports["default"] = Login;
