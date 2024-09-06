"use client";
import { LogOut, ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { useProducts } from "@/context/ProductsContext";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const Navbar = () => {
  const { logOut } = useAuth();
  const { cart } = useCart();
  return (
    <div className="flex items-center lg:px-[7.5rem] justify-between p-4 bg-white border-b py-6">
      <div className="flex items-center">
        <div className="bg-blue-500 text-white rounded-full p-2 mr-2">
          <span className="text-xl font-bold">F</span>
        </div>
        <span className="text-xl font-bold">FurniFlex</span>
      </div>
      <div className="hidden md:flex space-x-4 text-black hover:text-gray-900 text-xl lg:gap-12 font-medium">
        <Link href={"/dashboard"}>Home</Link>
        <Link href={"/dashboard"}>Products</Link>
        <a href="#">Categories</a>
        <a href="#">Custom</a>
        <a href="#">Blog</a>
      </div>
      <div className="flex items-center space-x-4">
        <Link href={"/dashboard/cart"} className={"relative"}>
          <Image
            src={"/cartBlack.svg"}
            width={37}
            height={37}
            alt={"cart "}
            className="text-gray-600"
          />
          <span className="absolute font-bold bg-black text-[0.7rem] text-white rounded-full py-1 px-[0.6rem] left-4 -bottom-2">
            {cart.length}
          </span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className={"cursor-pointer"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className={"cursor-pointer"} onClick={logOut}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
