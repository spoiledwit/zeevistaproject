import { useState } from "react";
import { desktopNav } from "../navs";
import InfoHeader from "./InfoHeader";
import {FiChevronDown} from "react-icons/fi";


const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="text-white glass ">
      <InfoHeader />
      <ul className="flex w-full items-center justify-center border-t border-b border-gray-300">
        {desktopNav.map((item) => (
          <li
            key={item.id}
            // @ts-ignore
            onMouseEnter={() => setActiveMenu(item.id)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a href={item.href} className="p-4 inline-block">
              {item.title}
              {item.children && <FiChevronDown className="inline-block ml-1" />}
            </a>
            {item.children && activeMenu === item.id && (
              <div className="absolute bg-white text-black w-56 rounded-b-xl">
                <ul>
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <a href={child.href} className="block p-4">
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu;