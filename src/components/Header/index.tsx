"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { X, Menu } from "lucide-react"; // Optional: cleaner icons

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <header
        className={`top-0 left-0 z-50 w-full py-2 transition-all ${
          sticky
            ? "fixed bg-white/80 shadow backdrop-blur dark:bg-gray-900"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold lg:text-3xl">
            رُقــيّ ديجيتال
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {menuData.map((menu, index) => (
              <div key={index} className="group relative">
                {menu.path ? (
                  <Link
                    href={menu.path}
                    className={`py-2 text-base font-medium ${
                      pathname === menu.path
                        ? "text-primary dark:text-white"
                        : "hover:text-primary text-gray-800 dark:text-white/70 dark:hover:text-white"
                    }`}
                  >
                    {menu.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="hover:text-primary flex items-center gap-1 text-base font-medium text-gray-800 dark:text-white/70"
                    >
                      {menu.title}
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <div className="invisible absolute top-full left-0 z-20 w-48 bg-white p-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 dark:bg-gray-800">
                      {menu.submenu.map((submenuItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={submenuItem.path}
                          className="hover:text-primary block px-3 py-2 text-sm text-gray-700 dark:text-white/70 dark:hover:text-white"
                        >
                          {submenuItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4 lg:gap-6">
            <ThemeToggler />
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {navbarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[9999] lg:hidden ${
          navbarOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            navbarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setNavbarOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 dark:bg-gray-900 ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 p-6">
            {menuData.map((menu, index) => (
              <div key={index}>
                {menu.path ? (
                  <Link
                    href={menu.path}
                    onClick={() => setNavbarOpen(false)}
                    className={`block py-2 text-lg font-medium ${
                      pathname === menu.path
                        ? "text-primary dark:text-white"
                        : "hover:text-primary text-gray-800 dark:text-white/70 dark:hover:text-white"
                    }`}
                  >
                    {menu.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      className="flex w-full items-center justify-between py-2 text-lg font-medium text-gray-800 dark:text-white/70"
                      onClick={() => toggleSubmenu(index)}
                    >
                      {menu.title}
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {openIndex === index && (
                      <div className="mt-2 ml-4 space-y-2">
                        {menu.submenu.map((submenuItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={submenuItem.path}
                            onClick={() => setNavbarOpen(false)}
                            className="hover:text-primary block text-sm text-gray-700 dark:text-white/70 dark:hover:text-white"
                          >
                            {submenuItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
