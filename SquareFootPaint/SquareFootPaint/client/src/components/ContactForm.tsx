import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Contact form submitted:", formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <Card className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-serif font-bold mb-2">Get in Touch</h2>
        <p className="text-muted-foreground">
          Have a project in mind? Send us a message and we'll respond within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="contact-name">Your Name</Label>
            <Input
              id="contact-name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              required
              data-testid="input-contact-name"
            />
          </div>
          <div>
            <Label htmlFor="contact-email">Email Address</Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              required
              data-testid="input-contact-email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="contact-phone">Phone Number</Label>
            <Input
              id="contact-phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              data-testid="input-contact-phone"
            />
          </div>
          <div>
            <Label htmlFor="contact-project-type">Project Type</Label>
            <Select value={formData.projectType} onValueChange={(value) => updateField("projectType", value)}>
              <SelectTrigger id="contact-project-type" data-testid="select-project-type">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="interior">Interior Painting</SelectItem>
                <SelectItem value="exterior">Exterior Painting</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            placeholder="Tell us about your project..."
            rows={5}
            value={formData.message}
            onChange={(e) => updateField("message", e.target.value)}
            required
            data-testid="textarea-contact-message"
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
          data-testid="button-submit-contact"
        >
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  );
}
