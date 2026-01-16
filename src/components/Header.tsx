import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDay = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm">
      <div className="flex items-start justify-between text-xs uppercase tracking-wider">
        <div className="space-y-1">
          <Link to="/" className="font-bold hover:text-muted-foreground transition-colors">STUDIO NAME</Link>
          <p className="text-muted-foreground">DESIGN & BRANDING</p>
          <p className="text-muted-foreground">
            {formatDay(currentTime)} {formatTime(currentTime)}
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors">
            WORK
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            ABOUT
          </a>
          <a href="#services" className="hover:text-foreground transition-colors">
            SERVICES
          </a>
        </nav>

        <div className="text-right space-y-1">
          <Link
            to="/contact"
            className="font-bold hover:text-muted-foreground transition-colors block"
          >
            CONTACT
          </Link>
          <p className="text-muted-foreground">AVAILABLE FOR PROJECTS</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
