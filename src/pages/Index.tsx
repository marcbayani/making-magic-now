import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import AssetTable from "@/components/AssetTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <AssetTable />
      </div>
    </div>
  );
};

export default Index;
