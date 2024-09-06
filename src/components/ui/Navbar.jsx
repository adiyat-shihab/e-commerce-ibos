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

const Navbar = () => {
  const { logOut } = useAuth();

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b py-6">
      <div className="flex items-center">
        <div className="bg-blue-500 text-white rounded-full p-2 mr-2">
          <span className="text-xl font-bold">F</span>
        </div>
        <span className="text-xl font-bold">FurniFlex</span>
      </div>
      <div className="hidden md:flex space-x-4 text-black hover:text-gray-900 text-xl gap-12 font-medium">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">Custom</a>
        <a href="#">Blog</a>
      </div>
      <div className="flex items-center space-x-4">
        <Image
          src={"/cartBlack.svg"}
          width={30}
          height={30}
          alt={"cart "}
          className="text-gray-600"
        />
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
