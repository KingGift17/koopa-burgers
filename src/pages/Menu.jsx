import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import BannerImage from "../assets/marioYellowBackground.jpg";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu" style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
