import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "servicos", label: "Serviços" },
    { id: "localizacao", label: "Localização" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background shadow-medium"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/lovable-uploads/90baa305-3917-4a9a-8f29-1c0c16736599.png"
              alt="CONTAFI Contabilidade"
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-secondary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="default"
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-secondary hover:shadow-glow transition-all duration-300"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg shadow-medium mt-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-secondary hover:bg-muted rounded-md transition-colors duration-300 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="default"
                onClick={() => scrollToSection("contato")}
                className="w-full mt-2 bg-gradient-secondary hover:shadow-glow transition-all duration-300"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;