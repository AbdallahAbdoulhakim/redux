import { useSelector } from "react-redux";
import { getMenuItems } from "./menuSlice";

const Menu = () => {
  const menuItems = useSelector(getMenuItems);
  const renderMenuItems = menuItems.map((menuItem, index) => (
    <a key={index} href={menuItem.link}>
      <li className="border border-slate-500 p-2 hover:bg-slate-900 active:scale-95">
        {menuItem.title}
      </li>
    </a>
  ));

  return <ul className="bg-slate-800 p-4 flex space-x-1">{renderMenuItems}</ul>;
};

export default Menu;
