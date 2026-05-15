import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PackagePlus, Tags, ShieldCheck, LogOut } from "lucide-react";
import CategoryManager from "@/components/admin/CategoryManager";
import ProductManager from "@/components/admin/ProductManager";

const ADMIN_KEY = "&xBPIJS.8+lBQ2o@";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("adminKey") === ADMIN_KEY
  );
  const [inputKey, setInputKey] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputKey === ADMIN_KEY) {
      localStorage.setItem("adminKey", ADMIN_KEY);
      setIsAuthenticated(true);
      toast.success("Access Granted! Welcome Admin.");
      setError("");
    } else {
      setError("Incorrect security key. Access denied.");
      toast.error("Invalid API Key.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminKey");
    setIsAuthenticated(false);
    toast.info("Logged out successfully.");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-background">
        <Card className="w-full max-w-md shadow-2xl border-t-4 border-t-primary animate-in fade-in zoom-in duration-300">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight">Admin Portal</CardTitle>
            <CardDescription>Please enter your secure API Key to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="••••••••••••••••"
                  value={inputKey}
                  onChange={(e) => {
                    setInputKey(e.target.value);
                    if (error) setError("");
                  }}
                  className={`bg-secondary border-border text-center text-lg tracking-widest text-foreground transition-all ${error ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : ''}`}
                  required
                />
                {error && (
                  <p className="text-[10px] font-black uppercase tracking-widest text-red-500 text-center animate-bounce mt-2">
                    {error}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full h-11 text-base font-semibold group font-body">
                Verify Identity
                <ShieldCheck className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 animate-in fade-in duration-500 font-body">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 border-b pb-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground font-display">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your store inventory and categories.</p>
        </div>
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full"
        >
          <LogOut className="mr-2 w-4 h-4" />
          Logout
        </Button>
      </div>

      <Tabs defaultValue="products" className="space-y-8">
        <TabsList className="bg-secondary p-1 rounded-xl w-fit">
          <TabsTrigger value="products" className="rounded-lg px-6 py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <PackagePlus className="w-4 h-4 mr-2" />
            Products
          </TabsTrigger>
          <TabsTrigger value="categories" className="rounded-lg px-6 py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <Tags className="w-4 h-4 mr-2" />
            Categories
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="animate-in slide-in-from-left-4 duration-300">
          <ProductManager />
        </TabsContent>

        <TabsContent value="categories" className="animate-in slide-in-from-left-4 duration-300">
          <CategoryManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
