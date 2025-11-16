import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar } from "lucide-react";

//todo: remove mock functionality
const mockMessages = [
  {
    id: "1",
    name: "David Martinez",
    email: "david.m@email.com",
    phone: "(555) 234-5678",
    projectType: "Interior Painting",
    message: "I need to repaint my living room and two bedrooms. Looking for a quote.",
    createdAt: new Date("2024-01-23T10:30:00"),
  },
  {
    id: "2",
    name: "Lisa Thompson",
    email: "lisa.t@email.com",
    phone: "(555) 345-6789",
    projectType: "Exterior Painting",
    message: "Interested in getting the exterior of my house painted before spring. About 2000 sq ft.",
    createdAt: new Date("2024-01-23T14:15:00"),
  },
  {
    id: "3",
    name: "Robert Wilson",
    email: "rwilson@business.com",
    phone: "(555) 456-7890",
    projectType: "Commercial",
    message: "Need a quote for painting our office space. Can you schedule a site visit?",
    createdAt: new Date("2024-01-24T09:00:00"),
  },
];

export function MessagesList() {
  const handleReply = (id: string) => {
    console.log("Reply to message:", id);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif font-bold">Client Messages</h2>
        <span className="text-sm text-muted-foreground">
          {mockMessages.length} unread
        </span>
      </div>

      {mockMessages.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground mb-4">No messages yet</p>
          <p className="text-sm text-muted-foreground">
            Client inquiries will appear here
          </p>
        </Card>
      ) : (
        <div className="space-y-3">
          {mockMessages.map((msg) => (
            <Card key={msg.id} className="p-6 hover-elevate" data-testid={`card-message-${msg.id}`}>
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-semibold text-lg" data-testid={`text-sender-${msg.id}`}>
                        {msg.name}
                      </h3>
                      <Badge variant="secondary" data-testid={`badge-type-${msg.id}`}>
                        {msg.projectType}
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3" />
                        <a href={`mailto:${msg.email}`} className="hover:text-foreground">
                          {msg.email}
                        </a>
                      </div>
                      {msg.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3" />
                          <a href={`tel:${msg.phone}`} className="hover:text-foreground">
                            {msg.phone}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(msg.createdAt)}</span>
                      </div>
                    </div>
                    <p className="text-foreground" data-testid={`text-message-${msg.id}`}>
                      {msg.message}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleReply(msg.id)}
                    data-testid={`button-reply-${msg.id}`}
                  >
                    Reply
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
