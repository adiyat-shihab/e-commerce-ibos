"use client";
import { ShoppingBag, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Page = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subtotal;

  const increment = (productId) => {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  const decrement = (productId) => {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      if (item.quantity > 1) {
        updateQuantity(productId, item.quantity - 1);
      } else {
        removeFromCart(productId);
      }
    }
  };

  return (
    <div className="container px-[7.5rem]  p-4 mx-auto mb-48">
      <div className="flex md:justify-between flex-col md:flex-row gap-8">
        {cart.length !== 0 ? (
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 py-12">
              An overview of your order
            </h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  <div className="flex border rounded-lg items-center">
                    <Button
                      variant={"ghost"}
                      size="icon"
                      onClick={() => decrement(item.id)}
                      className="h-8 w-8"
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value) || 0;
                        if (newQuantity === 0) {
                          removeFromCart(item.id);
                        } else {
                          updateQuantity(item.id, newQuantity);
                        }
                      }}
                      className="h-8 w-16 text-center border-none"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => increment(item.id)}
                      className="h-8 w-8"
                    >
                      +
                    </Button>
                  </div>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.price}
                    </p>
                  </div>
                  <button
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Your Shopping Cart</h2>
            <div className="border rounded-lg p-8 text-center">
              <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link href={"/dashboard"}>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        )}

        <div className="w-full md:w-80 py-12">
          <h2 className="text-2xl font-semibold mb-4">Order details</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span>€ -</span>
            </div>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total</span>
            <span>€{total.toFixed(2)}</span>
          </div>
          <Button className="w-full bg-black text-white hover:bg-gray-800">
            GO TO CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Page;
