import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PRICE_PER_SQ_FT = 2;

type ShapeType = "rectangle" | "circle" | "lshape";

export function AreaCalculator() {
  const [shape, setShape] = useState<ShapeType>("rectangle");
  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
    radius: "",
    length1: "",
    width1: "",
    length2: "",
    width2: "",
  });

  const calculateArea = (): number => {
    switch (shape) {
      case "rectangle": {
        const l = parseFloat(dimensions.length) || 0;
        const w = parseFloat(dimensions.width) || 0;
        return l * w;
      }
      case "circle": {
        const r = parseFloat(dimensions.radius) || 0;
        return Math.PI * r * r;
      }
      case "lshape": {
        const l1 = parseFloat(dimensions.length1) || 0;
        const w1 = parseFloat(dimensions.width1) || 0;
        const l2 = parseFloat(dimensions.length2) || 0;
        const w2 = parseFloat(dimensions.width2) || 0;
        return l1 * w1 + l2 * w2;
      }
      default:
        return 0;
    }
  };

  const area = calculateArea();
  const totalCost = area * PRICE_PER_SQ_FT;

  const updateDimension = (key: string, value: string) => {
    setDimensions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Visual Diagram</h3>
        <div className="flex items-center justify-center min-h-[300px] bg-muted rounded-lg p-8">
          {shape === "rectangle" && (
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-48 h-32 border-2 border-primary rounded-md bg-primary/10" />
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-medium">
                  {dimensions.length || "L"} ft
                </span>
                <span className="absolute top-1/2 -right-12 -translate-y-1/2 text-sm font-medium">
                  {dimensions.width || "W"} ft
                </span>
              </div>
            </div>
          )}
          {shape === "circle" && (
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-48 h-48 border-2 border-primary rounded-full bg-primary/10" />
                <div className="absolute top-1/2 left-1/2 w-24 h-[2px] bg-primary origin-left" />
                <span className="absolute top-1/2 left-1/2 translate-x-12 -translate-y-6 text-sm font-medium">
                  r = {dimensions.radius || "R"} ft
                </span>
              </div>
            </div>
          )}
          {shape === "lshape" && (
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-48 h-32 border-2 border-primary rounded-md bg-primary/10" />
                <div className="absolute -bottom-16 left-0 w-32 h-16 border-2 border-primary rounded-md bg-primary/10" />
                <span className="absolute -top-6 left-12 text-xs font-medium">
                  {dimensions.length1 || "L1"}×{dimensions.width1 || "W1"}
                </span>
                <span className="absolute -bottom-20 left-4 text-xs font-medium">
                  {dimensions.length2 || "L2"}×{dimensions.width2 || "W2"}
                </span>
              </div>
            </div>
          )}
        </div>
      </Card>

      <Card className="p-6">
        <Tabs value={shape} onValueChange={(v) => setShape(v as ShapeType)}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="rectangle" data-testid="tab-rectangle">Rectangle</TabsTrigger>
            <TabsTrigger value="circle" data-testid="tab-circle">Circle</TabsTrigger>
            <TabsTrigger value="lshape" data-testid="tab-lshape">L-Shape</TabsTrigger>
          </TabsList>

          <TabsContent value="rectangle" className="space-y-4">
            <div>
              <Label htmlFor="length">Length (feet)</Label>
              <Input
                id="length"
                type="number"
                placeholder="Enter length"
                value={dimensions.length}
                onChange={(e) => updateDimension("length", e.target.value)}
                data-testid="input-length"
              />
            </div>
            <div>
              <Label htmlFor="width">Width (feet)</Label>
              <Input
                id="width"
                type="number"
                placeholder="Enter width"
                value={dimensions.width}
                onChange={(e) => updateDimension("width", e.target.value)}
                data-testid="input-width"
              />
            </div>
          </TabsContent>

          <TabsContent value="circle" className="space-y-4">
            <div>
              <Label htmlFor="radius">Radius (feet)</Label>
              <Input
                id="radius"
                type="number"
                placeholder="Enter radius"
                value={dimensions.radius}
                onChange={(e) => updateDimension("radius", e.target.value)}
                data-testid="input-radius"
              />
            </div>
          </TabsContent>

          <TabsContent value="lshape" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="length1">Length 1 (ft)</Label>
                <Input
                  id="length1"
                  type="number"
                  placeholder="L1"
                  value={dimensions.length1}
                  onChange={(e) => updateDimension("length1", e.target.value)}
                  data-testid="input-length1"
                />
              </div>
              <div>
                <Label htmlFor="width1">Width 1 (ft)</Label>
                <Input
                  id="width1"
                  type="number"
                  placeholder="W1"
                  value={dimensions.width1}
                  onChange={(e) => updateDimension("width1", e.target.value)}
                  data-testid="input-width1"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="length2">Length 2 (ft)</Label>
                <Input
                  id="length2"
                  type="number"
                  placeholder="L2"
                  value={dimensions.length2}
                  onChange={(e) => updateDimension("length2", e.target.value)}
                  data-testid="input-length2"
                />
              </div>
              <div>
                <Label htmlFor="width2">Width 2 (ft)</Label>
                <Input
                  id="width2"
                  type="number"
                  placeholder="W2"
                  value={dimensions.width2}
                  onChange={(e) => updateDimension("width2", e.target.value)}
                  data-testid="input-width2"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 pt-6 border-t border-accent/30 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Area:</span>
            <span className="text-lg font-semibold" data-testid="text-area">
              {area.toFixed(2)} sq ft
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Rate:</span>
            <span className="text-lg font-semibold">${PRICE_PER_SQ_FT}/sq ft</span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-accent/50">
            <span className="font-serif text-xl font-bold">Total Cost:</span>
            <span className="font-serif text-3xl font-bold text-accent" data-testid="text-total-cost">
              ${totalCost.toFixed(2)}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
