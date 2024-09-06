import { Button } from "@/components/ui/button";
import { ProductGrid, Sidebar } from "@/components/ui/Products";

const Pagination = () => (
  <div className="flex justify-center space-x-2 mt-8">
    <Button variant="outline" size="sm">
      1
    </Button>
    <Button variant="outline" size="sm">
      2
    </Button>
    <Button variant="outline" size="sm">
      ...
    </Button>
    <Button variant="outline" size="sm">
      9
    </Button>
    <Button variant="outline" size="sm">
      10
    </Button>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full  md:w-1/5">
            <Sidebar />
          </aside>
          <div className="w-full">
            <ProductGrid />
            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
}
