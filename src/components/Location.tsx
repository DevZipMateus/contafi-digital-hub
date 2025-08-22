

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

        <div className="max-w-2xl mx-auto">
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
                      Localização
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Marília/SP
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
                      <p>Segunda a Sexta: 8h30 às 18h30</p>
                      <p className="text-sm italic">
                        Atendimento online disponível 24h
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

