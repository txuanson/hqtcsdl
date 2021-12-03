"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("tailwindcss/tailwind.css");
require("antd/dist/antd.css");
var Login_1 = require("./pages/Login");
var Register_1 = require("./pages/Register");
function App() {
    return (React.createElement(react_router_dom_1.MemoryRouter, null,
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { path: "/register", component: Register_1["default"] }),
            React.createElement(react_router_dom_1.Route, { path: "/", component: Login_1["default"] }))));
}
exports["default"] = App;
