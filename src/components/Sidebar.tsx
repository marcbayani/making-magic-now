import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r bg-background p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">ASSET</h1>
        <h2 className="text-xl text-muted-foreground">MANAGEMENT</h2>
      </div>
      
      <div className="space-y-6 mt-6">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-3 block">
            FILTER BY DEPARTMENT
          </label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="cashier">Cashier</SelectItem>
              <SelectItem value="it">IT</SelectItem>
              <SelectItem value="hr">HR</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium text-muted-foreground mb-3 block">
            FILTER BY CATEGORY
          </label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="hardware">Hardware - PC Unit</SelectItem>
              <SelectItem value="software">Software</SelectItem>
              <SelectItem value="furniture">Furniture</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;