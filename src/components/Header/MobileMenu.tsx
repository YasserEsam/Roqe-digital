import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import menuData from "./menuData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  openIndex: number;
  onToggleSubmenu: (index: number) => void;
}

const MobileMenu = ({
  isOpen,
  onClose,
  openIndex,
  onToggleSubmenu,
}: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 dark:bg-gray-900 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-end px-4">
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6">
          {menuData.map((menu, index) => (
            <div key={index}>
              {menu.path ? (
                <Link
                  href={menu.path}
                  onClick={onClose}
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
                    onClick={() => onToggleSubmenu(index)}
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
                          onClick={onClose}
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
  );
};

export default MobileMenu;
