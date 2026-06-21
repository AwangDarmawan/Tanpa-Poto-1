import {
  LayoutDashboard,
  MessageSquare,
} from "lucide-react";

function NavbarAdmin() {
  const menus = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6" />
      ),
    },
    {
      label: "Pesan",
      href: "/admin/pesan",
      icon: (
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
      ),
    },
  ];

  return (
    <div className="w-full px-2 py-6   bg-transparent
        
          border-gold/10 sticky top-0 z-50">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-3">
          {menus.map((menu) => (
            <a
              key={menu.href}
              href={menu.href}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
          
                bg-gradient-to-r
        from-[#8A6438]
        via-[#D9B16A]
        to-[#8A6438]
                text-white
                p-3
                transition-all
                duration-300
              
                hover:scale-105
                shadow-lg
              "
            >
              {menu.icon}

              <span
                className="
                  text-xs
                  sm:text-sm
                  font-medium
                  font-netflix
                "
              >
                {menu.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavbarAdmin;