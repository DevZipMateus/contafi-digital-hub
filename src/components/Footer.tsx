import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/lovable-uploads/90baa305-3917-4a9a-8f29-1c0c16736599.png"
              alt="CONTAFI Contabilidade"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <h3 className="text-xl font-bold mb-4">CONTAFI CONTABILIDADE</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Escritório familiar com 35 anos de tradição em serviços contábeis de excelência.
            </p>
            <p className="text-secondary font-medium italic">
              "No que precisar é só nos chamar!"
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Av. Sigismundo Nunes de Oliveira, 730<br />
                  Marília/SP - CEP: 17512-752
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <a 
                  href="tel:14997117811"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                >
                  (14) 99711-7811
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <a 
                  href="mailto:contafi.adm@gmail.com"
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                >
                  contafi.adm@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Seg-Sex: 8h-18h | Sáb: 8h-12h
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Principais Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>• Contabilidade Geral</li>
              <li>• Tributação Empresarial</li>
              <li>• Folha de Pagamento</li>
              <li>• Abertura de Empresas</li>
              <li>• Registro de Marcas</li>
              <li>• Consultoria Empresarial</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/60">
            <p>CNPJ: 19.836.544/0001-16</p>
            <p>© {currentYear} CONTAFI Contabilidade. Todos os direitos reservados.</p>
          </div>
          <div className="text-sm text-primary-foreground/60">
            <p>www.contaficontabilidade.com.br</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;