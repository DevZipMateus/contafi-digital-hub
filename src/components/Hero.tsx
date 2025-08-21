import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Trophy } from "lucide-react";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="inicio" className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden pt-20 md:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="animate-float">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-8">
              
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 text-shadow">
                CONTAFI
                <span className="block gradient-text">CONTABILIDADE</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 font-medium">
                No que precisar é só nos chamar!
              </p>
              <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto lg:mx-0">
                Escritório familiar com 35 anos de tradição, oferecendo serviços contábeis de excelência com toda tecnologia e cuidado humano que sua empresa merece.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => scrollToSection("servicos")} className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold shadow-glow hover:shadow-strong transition-all duration-300">
                Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contato")} className="bg-primary-foreground/10 border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Features Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Tradição & Confiança
              </h3>
              <p className="text-sm text-muted-foreground">
                35 anos de experiência e história familiar na contabilidade
              </p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Atendimento Personalizado
              </h3>
              <p className="text-sm text-muted-foreground">
                Foco no relacionamento e atenção dedicada a cada cliente
              </p>
            </div>

            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 sm:col-span-2">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Excelência em Serviços
              </h3>
              <p className="text-sm text-muted-foreground">
                Estrutura semi-digital com profissionais capacitados para todas as demandas contábeis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;