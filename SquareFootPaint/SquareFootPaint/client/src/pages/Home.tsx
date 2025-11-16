import { useState } from "react";
import { Header } from "@/components/Header";
import { AreaCalculator } from "@/components/AreaCalculator";
import { QuoteGenerator } from "@/components/QuoteGenerator";
import { ProjectList } from "@/components/ProjectList";
import { ContactForm } from "@/components/ContactForm";
import { MessagesList } from "@/components/MessagesList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, FileText, FolderOpen, MessageSquare, Mail } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("calculator");

  const handleNewQuote = () => {
    setActiveTab("quote");
  };

  return (
    <div className="min-h-screen" style={{ backgroundImage: 'url(/creamy-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <Header onNewQuote={handleNewQuote} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="calculator" className="gap-2" data-testid="tab-calculator">
              <Calculator className="h-4 w-4" />
              <span className="hidden sm:inline">Calculator</span>
            </TabsTrigger>
            <TabsTrigger value="quote" className="gap-2" data-testid="tab-quote">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Quote</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="gap-2" data-testid="tab-projects">
              <FolderOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="gap-2" data-testid="tab-messages">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Messages</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="gap-2" data-testid="tab-contact">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Contact</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-8">
            <div className="border-l-4 border-accent pl-6">
              <h1 className="text-4xl font-serif font-bold mb-2">Area Calculator</h1>
              <p className="text-muted-foreground mb-8">
                Calculate project costs instantly with our simple $2 per square foot pricing
              </p>
            </div>
            <AreaCalculator />
          </TabsContent>

          <TabsContent value="quote" className="space-y-8">
            <div className="border-l-4 border-accent pl-6">
              <h1 className="text-4xl font-serif font-bold mb-2">Create Quote</h1>
              <p className="text-muted-foreground mb-8">
                Generate professional quotes for your clients
              </p>
            </div>
            <QuoteGenerator />
          </TabsContent>

          <TabsContent value="projects" className="space-y-8">
            <ProjectList />
          </TabsContent>

          <TabsContent value="messages" className="space-y-8">
            <MessagesList />
          </TabsContent>

          <TabsContent value="contact" className="space-y-8">
            <div className="border-l-4 border-accent pl-6">
              <h1 className="text-4xl font-serif font-bold mb-2">Contact Us</h1>
              <p className="text-muted-foreground mb-8">
                Reach out for any inquiries or project discussions
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ContactForm />
              <div className="space-y-6">
                <div className="bg-card border border-accent/30 rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 text-accent">Business Information</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+12489414679" className="text-lg font-medium hover:text-accent transition-colors">
                        (248) 941-4679
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:ajppainting2025co@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">
                        ajppainting2025co@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Business Hours</p>
                      <p className="text-lg font-medium">Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-lg font-medium">Sat: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-accent/40 rounded-lg p-6 shadow-md">
                  <h3 className="font-semibold text-lg mb-2 text-primary">Our Pricing</h3>
                  <p className="text-4xl font-serif font-bold text-accent mb-2">$2 per sq ft</p>
                  <p className="text-sm text-muted-foreground">
                    Simple, transparent pricing with no hidden fees. Includes surface preparation, 
                    quality materials, and professional application.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
