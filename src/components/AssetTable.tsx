import { Search, Plus, Upload, Download, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useRef } from "react";

const mockAssets = [
  {
    id: 1,
    itemCode: "ConnecticutIF",
    department: "Cashier",
    category: "Hardware - PC Unit",
    description: "Desktop Processor",
    unitPrice: "₱6,500",
    ticketCount: 1,
  },
  {
    id: 2,
    itemCode: "ConnecticutIF",
    department: "Cashier",
    category: "Hardware - PC Unit",
    description: "Desktop Processor",
    unitPrice: "₱6,500",
    ticketCount: 0,
  },
];

const AssetTable = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBulkUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
      // Handle file upload logic here
    }
  };

  const handleDownloadTemplate = () => {
    // Create a simple CSV template
    const csvContent = "Item Code,Department,Category,Description,Unit Price\nSample001,IT,Hardware,Desktop Computer,5000\n";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'asset_template.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search..." 
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            ADD
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={handleBulkUpload}
          >
            <Upload className="h-4 w-4 mr-2" />
            BULK UPLOAD
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileChange}
            className="hidden"
          />
          <Button className="bg-primary hover:bg-primary/90">
            <Download className="h-4 w-4 mr-2" />
            EXPORT
          </Button>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-medium">ITEM CODE</TableHead>
              <TableHead className="font-medium">DEPARTMENT</TableHead>
              <TableHead className="font-medium">CATEGORY</TableHead>
              <TableHead className="font-medium">DESCRIPTION</TableHead>
              <TableHead className="font-medium">UNIT PRICE</TableHead>
              <TableHead className="font-medium">TICKET COUNT</TableHead>
              <TableHead className="font-medium">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockAssets.map((asset) => (
              <TableRow key={asset.id}>
                <TableCell className="font-medium">{asset.itemCode}</TableCell>
                <TableCell>{asset.department}</TableCell>
                <TableCell>{asset.category}</TableCell>
                <TableCell>{asset.description}</TableCell>
                <TableCell>{asset.unitPrice}</TableCell>
                <TableCell>
                  {asset.ticketCount > 0 ? (
                    <Badge variant="destructive" className="bg-red-500 hover:bg-red-600">
                      {asset.ticketCount}
                    </Badge>
                  ) : (
                    <span>{asset.ticketCount}</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4 text-primary" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <Button 
          className="bg-primary hover:bg-primary/90"
          onClick={handleDownloadTemplate}
        >
          <Download className="h-4 w-4 mr-2" />
          DOWNLOAD TEMPLATE
        </Button>
      </div>
    </div>
  );
};

export default AssetTable;