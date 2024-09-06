import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      {children}
      <div className="lg:w-1/2 hidden lg:block relative bg-gray-900">
        <Image
          src="/login-bg.png"
          alt="Dark armchair"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="bg-blue-500 rounded-full p-4 mb-4">
            <span className="text-4xl font-bold">F</span>
          </div>
          <h2 className="text-4xl font-bold mb-2">
            Furni<span className="text-blue-500">Flex</span>
          </h2>
          <p className="text-center max-w-md">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
