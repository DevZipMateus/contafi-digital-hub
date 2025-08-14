import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossa <span className="gradient-text">Localização</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos localizados em Marília/SP, prontos para atender sua empresa com toda a dedicação e profissionalismo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Endereço
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Avenida Sigismundo Nunes de Oliveira, 730<br />
                      Marília/SP - CEP: 17512-752
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Telefone
                    </h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="tel:14997117811" 
                        className="hover:text-secondary transition-colors duration-300"
                      >
                        (14) 99711-7811
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      E-mail
                    </h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="mailto:contafi.adm@gmail.com"
                        className="hover:text-secondary transition-colors duration-300"
                      >
                        contafi.adm@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Horário de Funcionamento
                    </h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p className="text-sm italic">
                        Atendimento online disponível 24h
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="animate-slide-up">
            <div className="bg-card rounded-lg shadow-soft overflow-hidden">
              <div className="h-96 bg-primary-lighter relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8947394542837!2d-49.94863268502073!3d-22.21395598537058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfd0e93d1c0d0d%3A0x5c7d4e4b4b4b4b4b!2sAv.%20Sigismundo%20Nunes%20de%20Oliveira%2C%20730%2C%20Mar%C3%ADlia%20-%20SP%2C%2017512-752!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6 bg-card">
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  Visite nosso escritório
                </h4>
                <p className="text-sm text-muted-foreground">
                  Estamos estrategicamente localizados em Marília/SP para melhor atendê-los. 
                  Agende uma visita e conheça nossa estrutura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;