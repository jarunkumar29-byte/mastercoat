import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileText, Send } from "lucide-react";

export function QuoteGenerator() {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    address: "",
    squareFeet: "",
    notes: "",
  });

  const squareFeet = parseFloat(formData.squareFeet) || 0;
  const totalCost = squareFeet * 2;

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGeneratePDF = () => {
    console.log("Generate PDF clicked", formData);
  };

  const handleSendQuote = () => {
    console.log("Send quote clicked", formData);
  };

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-serif font-bold mb-6">Generate Quote</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="clientName">Client Name</Label>
            <Input
              id="clientName"
              placeholder="John Doe"
              value={formData.clientName}
              onChange={(e) => updateField("clientName", e.target.value)}
              data-testid="input-client-name"
            />
          </div>
          <div>
            <Label htmlFor="clientEmail">Email Address</Label>
            <Input
              id="clientEmail"
              type="email"
              placeholder="john@example.com"
              value={formData.clientEmail}
              onChange={(e) => updateField("clientEmail", e.target.value)}
              data-testid="input-client-email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="clientPhone">Phone Number</Label>
            <Input
              id="clientPhone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.clientPhone}
              onChange={(e) => updateField("clientPhone", e.target.value)}
              data-testid="input-client-phone"
            />
          </div>
          <div>
            <Label htmlFor="address">Project Address</Label>
            <Input
              id="address"
              placeholder="123 Main St, City, State"
              value={formData.address}
              onChange={(e) => updateField("address", e.target.value)}
              data-testid="input-address"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="squareFeet">Total Square Feet</Label>
          <Input
            id="squareFeet"
            type="number"
            placeholder="500"
            value={formData.squareFeet}
            onChange={(e) => updateField("squareFeet", e.target.value)}
            data-testid="input-square-feet"
          />
        </div>

        <div>
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            placeholder="Special requirements, color preferences, timeline..."
            rows={4}
            value={formData.notes}
            onChange={(e) => updateField("notes", e.target.value)}
            data-testid="textarea-notes"
          />
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/30">
          <h3 className="font-semibold mb-4 text-accent">Quote Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Area:</span>
              <span className="font-medium" data-testid="text-quote-area">
                {squareFeet.toFixed(2)} sq ft
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Rate:</span>
              <span className="font-medium">$2.00 / sq ft</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-accent/40">
              <span className="font-serif text-lg font-bold">Total:</span>
              <span className="font-serif text-2xl font-bold text-accent" data-testid="text-quote-total">
                ${totalCost.toFixed(2)}
              </span>
            </div>
          </div>
        </Card>

        <div className="flex gap-3">
          <Button
            onClick={handleGeneratePDF}
            variant="outline"
            className="flex-1"
            data-testid="button-generate-pdf"
          >
            <FileText className="mr-2 h-4 w-4" />
            Generate PDF
          </Button>
          <Button
            onClick={handleSendQuote}
            className="flex-1"
            data-testid="button-send-quote"
          >
            <Send className="mr-2 h-4 w-4" />
            Send to Client
          </Button>
        </div>
      </div>
    </Card>
  );
}
