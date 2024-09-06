import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
