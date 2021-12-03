"use strict";
exports.__esModule = true;
var antd_1 = require("antd");
var Option = antd_1.Select.Option;
var react_router_dom_1 = require("react-router-dom");
var register_png_1 = require("../../../assets/img/register.png");
function Register() {
    return (React.createElement(antd_1.Row, { className: "h-screen" },
        React.createElement(antd_1.Col, { span: 16, style: { backgroundImage: "url(" + register_png_1["default"] + ")" } }),
        React.createElement(antd_1.Col, { span: 8, className: "px-8" },
            React.createElement("div", { className: "flex flex-col h-screen place-content-center" },
                React.createElement("h3", { className: "font-bold text-4xl mb-7 text-center" }, "Register"),
                React.createElement(antd_1.Form, { layout: "vertical", autoComplete: "off", scrollToFirstError: true },
                    React.createElement(antd_1.Form.Item, { label: "Account type", name: "type", rules: [{ required: true, message: 'Please input your account type!' }] },
                        React.createElement(antd_1.Select, null,
                            React.createElement(Option, { value: "1" }, "Admin"),
                            React.createElement(Option, { value: "1" }, "Admin"),
                            React.createElement(Option, { value: "1" }, "Admin"),
                            React.createElement(Option, { value: "1" }, "Admin"),
                            React.createElement(Option, { value: "1" }, "Admin"))),
                    React.createElement(antd_1.Form.Item, { label: "Username", name: "username", rules: [{ required: true, message: 'Please input your username!' }] },
                        React.createElement(antd_1.Input, null)),
                    React.createElement(antd_1.Form.Item, { label: "Password", name: "password", rules: [{ required: true, message: 'Please input your password!' }] },
                        React.createElement(antd_1.Input.Password, null)),
                    React.createElement(antd_1.Form.Item, { label: "Email", name: "email", rules: [{
                                type: 'email',
                                message: 'The input is not valid E-mail!'
                            }, {
                                required: true,
                                message: 'Please input your E-mail!'
                            },] },
                        React.createElement(antd_1.Input, null)),
                    React.createElement(antd_1.Form.Item, { label: "Name", name: "name", rules: [{ required: true, message: 'Please input your name' }] },
                        React.createElement(antd_1.Input, null)),
                    React.createElement(antd_1.Form.Item, null,
                        React.createElement(antd_1.Button, { className: "w-full", type: "primary", htmlType: "submit" }, "Sign In"))),
                React.createElement("span", { className: "text-center" },
                    "Already had an account? ",
                    React.createElement(react_router_dom_1.Link, { to: "/" }, "Log In"))))));
}
exports["default"] = Register;
