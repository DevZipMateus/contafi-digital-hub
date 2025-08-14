import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Laptop } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre a <span className="gradient-text">CONTAFI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos um escritório de contabilidade familiar com estrutura semi-digital, onde todo o atendimento é focado nas ferramentas online disponíveis com todo o cuidado e atenção de profissionais totalmente capacitados.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              35 Anos de História Familiar
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O escritório foi elaborado totalmente em família há 35 anos e assim perpetua pela família de contadores. Nossa trajetória é marcada pela dedicação, profissionalismo e comprometimento com a excelência.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nosso foco é em um serviço de excelência buscando pela satisfação plena de nossos clientes e sendo assim não mediremos esforços para atingir esse objetivo.
            </p>
            <div className="bg-gradient-secondary p-6 rounded-lg shadow-soft">
              <p className="text-secondary-foreground font-semibold text-lg italic">
                "No que precisar é só nos chamar!"
              </p>
              <p className="text-secondary-foreground/80 mt-2">
                Este é nosso compromisso com você.
              </p>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-6 animate-slide-up">
            <Card className="border-l-4 border-l-secondary shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">
                      Tradição de 35 Anos
                    </h4>
                    <p className="text-muted-foreground">
                      Décadas de experiência acumulada em gestão contábil e tributária, passando de geração em geração na família.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">
                      Empresa Familiar
                    </h4>
                    <p className="text-muted-foreground">
                      Valores familiares aplicados aos negócios: confiança, dedicação e relacionamento próximo com cada cliente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Laptop className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">
                      Estrutura Semi-Digital
                    </h4>
                    <p className="text-muted-foreground">
                      Combinamos tecnologia moderna com atendimento humanizado, oferecendo praticidade sem perder o toque pessoal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">35+</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Foco no Cliente</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Suporte Online</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Dedicação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;