import { useState } from "react";
import { desktopNav } from "../navs";
import InfoHeader from "./InfoHeader";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  return (
    <nav className="text-white glass">
      <InfoHeader />
      <ul className="flex w-full items-center justify-center border-t border-b border-gray-300">
        {desktopNav.map((item) => (
          <li
            key={item.id}
            //@ts-ignore
            onMouseEnter={() => setActiveMenu(item.id)}
            onMouseLeave={() => setActiveMenu(null)}
            className="relative" // Add relative positioning to the li
          >
            <Link to={item.href} className="p-4 inline-block">
              {item.title}
              {item.children && <FiChevronDown className="inline-block ml-1" />}
            </Link>
            {item.children && activeMenu === item.id && (
              <div className="absolute bg-white text-black w-56 rounded-b-xl top-full left-0 z-10">
                {/* Adjust positioning here */}
                <ul>
                  {item.children.map((child) => (
                    <li
                      key={child.id}
                      //@ts-ignore
                      onMouseEnter={() => setActiveSubMenu(child.id)}
                      onMouseLeave={() => setActiveSubMenu(null)}
                      className="relative"
                    >
                      <Link to={child.href} className="block p-4">
                        {child.title}
                        {child.children && (
                          <FiChevronRight className="inline-block ml-1" />
                        )}
                      </Link>
                      {child.children && activeSubMenu === child.id && (
                        <div className="absolute bg-white text-black w-56 rounded-br-xl top-0 left-full z-20">
                          <ul>
                            {child.children.map((subChild) => (
                              <li key={subChild.id}>
                                <Link to={subChild.href} className="block p-4">
                                  {subChild.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
