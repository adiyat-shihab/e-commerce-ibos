"use client";
import { AuthProvider } from "@/context/AuthContext";
import { ProductProvider } from "@/context/ProductsContext";
import { CartProvider } from "@/context/CartContext";

const Context = ({ children }) => {
  return (
    <div>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>{children}</CartProvider>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
};

export default Context;
