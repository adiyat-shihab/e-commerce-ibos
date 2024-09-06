"use client";
import { useProducts } from "@/context/ProductsContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export const Sidebar = () => (
  <div className=" p-4 border-r h-screen">
    <ul className="space-y-2 text-[#717171]  cursor-pointer font-medium text-lg">
      <li className=" hover:bg-black hover:rounded-lg hover:text-white py-3  px-6 cursor-pointer">
        Rocking chair
      </li>
      <li className=" hover:bg-black hover:rounded-lg hover:text-white py-3  px-6 cursor-pointer">
        Side chair
      </li>
      <li className="  hover:bg-black hover:rounded-lg hover:text-white py-3  px-6 cursor-pointer">
        Lounge chair
      </li>
    </ul>
  </div>
);
export const ProductGrid = () => {
  const { products } = useProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};
const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  discount,
  description,
  imageUrl,
}) => {
  const { cart, addToCart } = useCart();
  console.log(cart);
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className={"bg-[#F2F2F2] rounded-md"}>
        <Image
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          className=" w-[12.8125rem] h-[12.8125rem] mx-auto object-cover mb-4 rounded"
        />
      </div>
      <h3 className="font-bold">{name}</h3>
      <div className="flex items-center space-x-2 mb-2">
        <span className="font-bold">€{price}</span>
        <span className="text-gray-500 line-through">€{originalPrice}</span>
        <span className="text-red-500">{discount}% OFF</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <Button
        className="w-full bg-gray-900 text-white hover:bg-gray-800"
        onClick={() =>
          addToCart({
            id,
            name,
            price,
            originalPrice,
            discount,
            description,
            imageUrl,
          })
        }
      >
        <Image
          src={"/cartWhite.svg"}
          alt={"cart"}
          width={17}
          height={17}
          className={"mr-2"}
        />{" "}
        Add to cart
      </Button>
    </div>
  );
};
