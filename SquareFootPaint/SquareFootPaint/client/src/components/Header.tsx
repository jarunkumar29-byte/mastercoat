import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  onNewQuote?: () => void;
}

export function Header({ onNewQuote }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="MasterCoat Painters" 
              className="h-14 w-auto" 
            />
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+12489414679"
              className="flex items-center gap-2 text-sm hover-elevate active-elevate-2 rounded-md px-3 py-2"
              data-testid="link-phone"
              style={{ color: 'hsl(220 80% 15%)' }}
            >
              <Phone className="h-4 w-4 text-accent" />
              <span className="font-medium">(248) 941-4679</span>
            </a>
            <a
              href="mailto:ajppainting2025co@gmail.com"
              className="flex items-center gap-2 text-sm hover-elevate active-elevate-2 rounded-md px-3 py-2"
              data-testid="link-email"
              style={{ color: 'hsl(220 80% 15%)' }}
            >
              <Mail className="h-4 w-4 text-accent" />
              <span className="font-medium">ajppainting2025co@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            {onNewQuote && (
              <Button onClick={onNewQuote} data-testid="button-new-quote">
                New Quote
              </Button>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
