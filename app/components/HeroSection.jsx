 // components/HeroSection.js
const HeroSection = () => {
    return (
      <section className="relative bg-gray-900 text-white h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://via.placeholder.com/1500x600" // এখানে তোমার ইমেজের URL দিবে
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 py-24 text-center h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Welcome to MyShop
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the best products at unbeatable prices.
          </p>
          <a
            href="#products"
 
          >
            Shop Now
          </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  