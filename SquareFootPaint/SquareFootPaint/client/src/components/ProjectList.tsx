import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Trash2 } from "lucide-react";

//todo: remove mock functionality
const mockProjects = [
  {
    id: "1",
    clientName: "Sarah Johnson",
    address: "456 Oak Avenue, Springfield",
    squareFeet: "850.00",
    totalCost: "1700.00",
    status: "completed",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    clientName: "Michael Chen",
    address: "789 Pine Street, Riverside",
    squareFeet: "1200.00",
    totalCost: "2400.00",
    status: "in_progress",
    createdAt: new Date("2024-01-20"),
  },
  {
    id: "3",
    clientName: "Emily Rodriguez",
    address: "321 Maple Drive, Lakeview",
    squareFeet: "650.00",
    totalCost: "1300.00",
    status: "pending",
    createdAt: new Date("2024-01-22"),
  },
];

const statusColors = {
  pending: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
  in_progress: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  completed: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
};

const statusLabels = {
  pending: "Pending",
  in_progress: "In Progress",
  completed: "Completed",
};

export function ProjectList() {
  const handleView = (id: string) => {
    console.log("View project:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete project:", id);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif font-bold">Projects</h2>
        <span className="text-sm text-muted-foreground">
          {mockProjects.length} total projects
        </span>
      </div>

      {mockProjects.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground mb-4">No projects yet</p>
          <p className="text-sm text-muted-foreground">
            Create your first quote to get started
          </p>
        </Card>
      ) : (
        <div className="space-y-3">
          {mockProjects.map((project) => (
            <Card key={project.id} className="p-6 hover-elevate" data-testid={`card-project-${project.id}`}>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-semibold text-lg" data-testid={`text-client-name-${project.id}`}>
                      {project.clientName}
                    </h3>
                    <Badge
                      className={statusColors[project.status as keyof typeof statusColors]}
                      data-testid={`badge-status-${project.id}`}
                    >
                      {statusLabels[project.status as keyof typeof statusLabels]}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.address}</p>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Area: </span>
                      <span className="font-medium" data-testid={`text-area-${project.id}`}>
                        {parseFloat(project.squareFeet).toFixed(0)} sq ft
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Total: </span>
                      <span className="font-semibold text-accent" data-testid={`text-cost-${project.id}`}>
                        ${parseFloat(project.totalCost).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleView(project.id)}
                    data-testid={`button-view-${project.id}`}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(project.id)}
                    data-testid={`button-delete-${project.id}`}
                  >
                    <Trash2 className="h-4 w-4" />
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
