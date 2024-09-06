import { Button } from "@/components/ui/button";

const ProductCard = ({
  name,
  price,
  originalPrice,
  discount,
  description,
  imageUrl,
}) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-48 object-cover mb-4 rounded"
    />
    <h3 className="font-bold">{name}</h3>
    <div className="flex items-center space-x-2 mb-2">
      <span className="font-bold">€{price}</span>
      <span className="text-gray-500 line-through">€{originalPrice}</span>
      <span className="text-red-500">{discount}% OFF</span>
    </div>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
      Add to cart
    </Button>
  </div>
);

const Sidebar = () => (
  <div className=" p-4 border-r">
    <h2 className="font-bold text-lg mb-4">Rocking chair</h2>
    <ul className="space-y-2">
      <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
        Side chair
      </li>
      <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
        Lounge chair
      </li>
    </ul>
  </div>
);

const ProductGrid = () => {
  const products = [
    {
      name: "Recliner Chair Wood",
      price: "299.00",
      originalPrice: "350.00",
      discount: 30,
      description:
        "It has a backrest that can be tilted back, and offers a footrest extended",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Timber Ride Padded",
      price: "59.00",
      originalPrice: "75.00",
      discount: 30,
      description:
        "High Back Rocking Side Pocket Portable Folding Outdoor Camping Chairs",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Colored Wooden Chair",
      price: "299.00",
      originalPrice: "350.00",
      discount: 30,
      description:
        "It has a backrest that can be tilted back, and offers a footrest extended",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Blank Bamboo Wicker",
      price: "299.00",
      originalPrice: "350.00",
      discount: 30,
      description:
        "Lightweight, easy to clean, sturdy, safe and stable. Non-slip legs",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Isolated Wooden Rock",
      price: "185.00",
      originalPrice: "400.00",
      discount: 30,
      description:
        "It has a backrest that can be tilted back, and offers a footrest extended",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Minimal Empty Rocking",
      price: "299.00",
      originalPrice: "350.00",
      discount: 30,
      description:
        "A seat, especially for one person, usually having four legs for support",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

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
