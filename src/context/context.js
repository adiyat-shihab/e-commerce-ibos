"use client";
import { AuthProvider } from "@/context/AuthContext";
import { ProductProvider } from "@/context/ProductsContext";

const Context = ({ children }) => {
  return (
    <div>
      <AuthProvider>
        <ProductProvider>{children}</ProductProvider>
      </AuthProvider>
    </div>
  );
};

export default Context;
