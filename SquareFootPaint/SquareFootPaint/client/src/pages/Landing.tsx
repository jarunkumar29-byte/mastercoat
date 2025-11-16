import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Calculator, Phone, Mail, Award, Clock, DollarSign } from "lucide-react";

export default function Landing() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen" style={{ backgroundImage: 'url(/creamy-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <img 
              src="/logo.jpg" 
              alt="MasterCoat Painters" 
              className="h-14 w-auto"
            />
            <div className="flex items-center gap-6">
              <a
                href="tel:+12489414679"
                className="hidden lg:flex items-center gap-2 text-sm hover-elevate active-elevate-2 rounded-md px-3 py-2"
                data-testid="link-phone"
                style={{ color: 'hsl(220 80% 15%)' }}
              >
                <Phone className="h-4 w-4 text-accent" />
                <span className="font-medium">(248) 941-4679</span>
              </a>
              <a
                href="mailto:ajppainting2025co@gmail.com"
                className="hidden lg:flex items-center gap-2 text-sm hover-elevate active-elevate-2 rounded-md px-3 py-2"
                data-testid="link-email"
                style={{ color: 'hsl(220 80% 15%)' }}
              >
                <Mail className="h-4 w-4 text-accent" />
                <span className="font-medium">Email Us</span>
              </a>
              <Button 
                onClick={() => setLocation("/app")}
                data-testid="button-header-quote"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 
                className="text-5xl lg:text-7xl font-serif font-bold mb-6"
                style={{ 
                  color: 'hsl(220 80% 15%)',
                  letterSpacing: '0.02em',
                  lineHeight: '1.1'
                }}
              >
                MASTERCOAT
                <br />
                <span style={{ color: 'hsl(40 80% 35%)' }}>PAINTERS</span>
              </h1>
              
              <p className="text-3xl lg:text-4xl font-serif mb-6" style={{ color: 'hsl(40 80% 35%)' }}>
                Life's too short for boring walls
              </p>
              
              <p className="text-xl mb-8" style={{ color: 'hsl(220 60% 25%)' }}>
                Professional painting services with transparent pricing and exceptional quality. Est. 2025
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="text-lg px-8 h-auto"
                  onClick={() => setLocation("/app")}
                  data-testid="button-get-started"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Get a Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 h-auto"
                  onClick={() => setLocation("/app")}
                  data-testid="button-calculator"
                >
                  Area Calculator
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-accent/30 rounded-lg p-12 text-center">
              <p className="text-sm mb-3" style={{ color: 'hsl(220 60% 25%)' }}>Simple, Transparent Pricing</p>
              <p className="text-6xl lg:text-7xl font-serif font-bold text-accent mb-3">$2</p>
              <p className="text-2xl font-medium mb-6" style={{ color: 'hsl(220 80% 15%)' }}>per square foot</p>
              <div className="space-y-2 text-sm" style={{ color: 'hsl(220 60% 25%)' }}>
                <p>✓ Professional quality</p>
                <p>✓ No hidden fees</p>
                <p>✓ Fast turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2" style={{ color: 'hsl(220 80% 15%)' }}>Quality Work</h3>
              <p style={{ color: 'hsl(220 60% 30%)' }}>Premium materials and expert craftsmanship on every project</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2" style={{ color: 'hsl(220 80% 15%)' }}>Fast Service</h3>
              <p style={{ color: 'hsl(220 60% 30%)' }}>Quick quotes and efficient project completion</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <DollarSign className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2" style={{ color: 'hsl(220 80% 15%)' }}>Fair Pricing</h3>
              <p style={{ color: 'hsl(220 60% 30%)' }}>Transparent rates with no surprise charges</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm" style={{ color: 'hsl(220 60% 25%)' }}>
          <p>© 2025 MasterCoat Painting Co. • (248) 941-4679 • ajppainting2025co@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
