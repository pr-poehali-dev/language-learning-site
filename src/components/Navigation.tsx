import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/lessons", label: "Уроки", icon: "BookOpen" },
    { path: "/profile", label: "Профиль", icon: "User" },
    { path: "/games", label: "Игры", icon: "Gamepad2" },
    { path: "/leaderboard", label: "Рейтинг", icon: "Trophy" },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Icon name="BookOpen" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-primary">LinguaFun</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={
                    location.pathname === item.path ? "default" : "ghost"
                  }
                  className="flex items-center gap-2"
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
