import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  FileText, 
  Users, 
  TrendingUp, 
  Building, 
  Award,
  DollarSign,
  Briefcase
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade Geral",
      description: "Prestação completa de serviços contábeis para empresas de todos os portes e segmentos.",
      features: ["Escrituração contábil", "Balancetes mensais", "Demonstrações financeiras"]
    },
    {
      icon: TrendingUp,
      title: "Tributação Empresarial",
      description: "Gestão tributária especializada para MEI, ME, EPP, Lucro Presumido e Lucro Real.",
      features: ["Simples Nacional", "Lucro Presumido", "Lucro Real", "Planejamento tributário"]
    },
    {
      icon: Users,
      title: "Folha de Pagamento",
      description: "Apuração e elaboração completa de folha de pagamento com todos os encargos.",
      features: ["Cálculos trabalhistas", "Encargos sociais", "Rescisões", "eSocial"]
    },
    {
      icon: FileText,
      title: "Guias e Impostos",
      description: "Apuração e geração de todas as guias de impostos devidos dentro dos prazos.",
      features: ["GPS", "DARF", "DAS", "Certidões negativas"]
    },
    {
      icon: Building,
      title: "Legalização de Empresas",
      description: "Abertura, alteração e encerramento de empresas em geral com agilidade.",
      features: ["Abertura de CNPJ", "Alterações contratuais", "Baixa de empresas"]
    },
    {
      icon: Award,
      title: "Marcas e Patentes",
      description: "Registro de marcas e patentes para proteger sua propriedade intelectual.",
      features: ["Pesquisa de viabilidade", "Registro no INPI", "Acompanhamento processual"]
    },
    {
      icon: DollarSign,
      title: "Custos e Precificação",
      description: "Elaboração de custos e precificação estratégica de produtos e mercadorias.",
      features: ["Análise de custos", "Formação de preços", "Margem de contribuição"]
    },
    {
      icon: Briefcase,
      title: "Consultoria Empresarial",
      description: "Orientação especializada para otimização de processos e tomada de decisões.",
      features: ["Análise financeira", "Planejamento estratégico", "Consultoria fiscal"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços contábeis e tributários para atender todas as necessidades da sua empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-secondary animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg text-card-foreground group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 shadow-strong animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Precisa de algum desses serviços?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com segurança e organização contábil.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold shadow-glow hover:shadow-strong transition-all duration-300"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;