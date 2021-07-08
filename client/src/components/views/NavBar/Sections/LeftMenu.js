import React from "react";
import { Menu } from "antd";
//import Logo from "../../../../assets/images/Logo1.png";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      {/*<div className="menu__logo">
      <Menu.Item key="mail">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </Menu.Item>*/}
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
