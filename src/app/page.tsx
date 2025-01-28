import ImageCard from "@/components/card/ImageCard";
import Image from "next/image";
import Link from "next/link";

function LandingPage() {
  const landingNavigation = [
    { name: "features", href: "#features" },
    { name: "pricing", href: "#pricing" },
    { name: "about us", href: "#about" },
    { name: "dashboard", href: "#dashboard" },
    { name: "contact", href: "#contact" },
  ];

  const features = [
    {
      name: "streamlined inventory management",

      description:
        "Manage your stock levels effortlessly, ensuring that you have the right products available at the right time.",
    },
    // icon: faBoxOpen
    {
      name: "precise Order Tracking",
      description:
        "Stay updated with real-time order status, ensuring timely deliveries and keeping your customers informed.",
    },
    {
      name: "User-friendly dashboard",
      description:
        "Access comprehensive analytics and insights tailored to your sales strategies, enhancing your profitability.",
    },
    {
      name: "seamless sales integration",
      description:
        "Easily integrate your product listings with sales channels, boosting visibility and attracting ready-to-buy customers.",
    },
    {
      name: "cost-effective pricing plans",
      description:
        "Join us for an unbeatable monthly rate and kickstart your comprehensive ecommerce solution.",
    },
    {
      name: "Expert support & assistance",
      description:
        "Our dedicated team is here to assist you every step of the way, ensuring a smooth and successful experience.",
    },
  ];

  const services = [
    {
      name: "simplify your inventory management",
      description:
        "Gain full control over stock levels and fulfill orders promptly.",
    },
    {
      name: "Empower your selling journey",
      description:
        "Transform your products into sales as they integrate directly into your sales channels.",
    },
    {
      name: "real-time analytics",
      description:
        "Refine your strategies and drive your business growth like never before.",
    },
  ];
  const Nav = () => {
    return (
      <nav>
        <ul>
          {landingNavigation.map(({ name, href }) => (
            <li key={name}>
              <Link className="capitalize" href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  const Card = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    return (
      <div className="shadow-md rounded-lg md:rounded2xl lg:rounded-3xl overflow-hidden">
        {/* <div className="bg-dgrey h-8"></div> */}
        <ImageCard src={"/blue-background.jpg"} alt={"blue-background"} />
        <div className="px-1 sm:py-2 md:py-5 sm:px-2 md:px-3 lg:px-5">
          <h3 className="mt-3 capitalize">{title}</h3>
          <p className="mt-1 mb-4">{description}</p>
        </div>
      </div>
    );
  };
  //   mt-5 container py-5 md:py-7 bg-blue-200 min-h-screen text-center lg:text-left lg:flex justify-center items-center gap-x-5
  return (
    <>
      <nav></nav>
      {/* Header */}
      <section className="relative mt-5 container1 py-5 md:py-20 bg-blue-200 min-h-screen text-center lg:text-left lg:flex justify-center items-center gap-x-5">
        {/* <ImageCard
          styTail="!absolute"
          src={"/blue-background.jpg"}
          alt={"blue-background"}
        /> */}
        <Image
          className="-z-10 object-cover "
          src="/blue-background.jpg"
          alt={"blue background"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Section Content */}
        <div className="space-y-7">
          {/* Headers */}
          <div className="">
            <h1 className="text-low-emphasis capitalize font-semibold">
              Maximize Your Sales Potential
            </h1>
            <h1 className="text-blue-500 capitalize font-semibold">
              Streamline Your Operations
            </h1>
            <h1 className="text-high-emphasis capitalize font-semibold">
              Transform your Inventory Management
            </h1>
          </div>

          <p className="text-dgrey">
            Take control of your ecommerce success with Amahoro. Our
            comprehensive service empowers sellers with seamless inventory
            management, real-time order tracking, and an intuitive dashboard
            designed for effortless monitoring. Watch as your product listings
            come to life on your sales platform, connecting you to eager buyers
            and expanding your reach. With plans starting at just $150/month,
            elevate your business efficiency and watch your sales soar.
          </p>

          {/* Sign Up action */}
          <p className="bg-primary text-bright px-4 py-2 text-center rounded-md">
            Ready to revolutionize your ecommerce experience?
          </p>
        </div>

        {/* Section Image */}
        <div className="hidden lg:block w-[2000px] bg-black h-80 rounded-lg"></div>
      </section>

      {/* Description */}
      <section className="container1 py-5 md:py-20 min-h-screen text-center">
        <h2 className="font-semibold">
          Unlock the Full Potential of Your Online Store with Amahoro
        </h2>

        <p className="mt-6 sm:mt-7 md:mt-6 font-light">
          Transform your ecommerce journey with our exeptional features for just
          $150/month
        </p>

        {/* Features Section*/}
        <div className="mt-7 md:mt-8 lg:flex gap-x-5">
          <div className="rounded-xl hidden lg:block bg-dark w-[30rem]"></div>
          {/* Features */}
          <div className="flex gap-3 sm:gap-4 md:gap-x-5 lg:gap-x-12 xl:gap-x-16 justify-around sm:gap-y-4 md:gap-y-6 w-full flex-wrap">
            {features.map(({ name, description }) => (
              <div className="md:min-w-[8rem] md:max-w-[11rem]">
                <h3 className="capitalize semibold">{name}</h3>
                <p className="mt-3 text-dgrey">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="container1 py-5 md:py-14 lg:py-20 min-h-screen text-center text-bright flex">
        <div className="bg-blue-700 flex flex-col items-center justify-center rounded-3xl">
          <h6 className="capitalize">Maximize your Ecomerce Efficiency</h6>
          <h2 className="mt-3 md:mt-6">
            Custom web solutions for service-driven businesses
          </h2>
          <p className="mt-4">
            Empower Your Selling Journey with Amahoro. Our tailored ecommerce
            solution provides you with a powerful platform to manage your
            inventory and track orders seamlessly.
          </p>
          <button className="mt-5 md:mt-8 px-5 py-2 bg-green-400 rounded-md text-bright capitalize">
            start your project
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container1 min-h-screen px-3 py-4 md:py-7 lg:py-20">
        <h6 className="capitalize">our services</h6>
        <h1 className="mt-3 md:mt-6 capitalize">
          Maximize your ecommerce efficiency
        </h1>
        <p className="mt-10">
          Experience unparalleled ecommerce success with Amahoro, your go-to
          solution for efficient inventory management and seamless order
          tracking.
        </p>

        {/* card */}
        <div className="mt-8 sm:flex gap-x-3 md:gap-x-4 lg:gap-x-6 xl:gap-x-8">
          {services.map(({ name, description }) => (
            <div className="flex-1">
              <Card title={name} description={description} />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section (not yet availiable)*/}

      {/* Conclusion section*/}
      <section className="container1 min-h-screen px-3 py-4 md:py-7 lg:py-20 lg:flex justify-center items-center lg:gap-x-10">
        <div>
          <h1>Elevate Your Ecommerce Game with Amahoro</h1>
          <p className="mt-3 md:mt-4 lg:mt-7 text-dgrey">
            Our innovative platform empowers sellers through streamlined
            inventory management and seamless order tracking, ensuring you can
            oversee every aspect of your business effortlessly.
          </p>
          {/* Advantages */}
          <div className="flex gap-x-4 ms-4 mt-4 lg:mt-8 text-dgrey">
            <span>f</span>
            <p>
              Real-Time Inventory Management - Stay ahead of stock shortages and
              fulfillment timelines with our intuitive dashboard.
            </p>
          </div>
          <div className="flex gap-x-4 ms-4">
            <span>f</span>
            <p>
              Seamless Integration - Effortlessly connect your inventory with
              your sales website, allowing customers to make purchases with
              ease.
            </p>
          </div>
          <div className="flex gap-x-4 ms-4">
            <span>f</span>
            <p className="mt-3 lg:mt-8">
              Advanced Analytics Tools - Gain valuable insights to fine-tune
              your sales strategies and drive measurable growth.
            </p>
          </div>
          <button className="p-3 mt-5 md:mt-7 capitalize bg-primary text-bright rounded-md">
            transform your ecommerce operations today
          </button>
        </div>
        <div className="hidden lg:block bg-dark w-[50rem] h-[20rem] rounded-lg"></div>
      </section>

      <footer>&copy; Amahoro 2025</footer>
    </>
  );
}

export default LandingPage;
