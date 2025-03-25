"use client";
import { useEffect, useState } from "react";
import ImageCard from "../components/card/ImageCard";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDollarSign,
  faBoxOpen,
  faCartShopping,
  faChartLine,
  faTruck,
  faUserClock,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/layout/footer";
import Link from "next/link";

function LandingPage() {
  const [stickyOpaque, setStickyOpaque] = useState<boolean>(false);
  const landingNavigation = [
    { name: "features", href: "#features" },
    { name: "services", href: "#services" },
    { name: "pricing", href: "#pricing" },
    { name: "contact", href: "#contact" },
  ];

  const features: {
    name: string;
    description: string;
    icon: IconDefinition;
    backgroundColor: string;
    color: string;
  }[] = [
    {
      name: "streamlined inventory management",
      description:
        "Manage your stock levels effortlessly, ensuring that you have the right products available at the right time.",
      icon: faBoxOpen,
      backgroundColor: "bg-blue-200",
      color: "text-blue-500",
    },
    {
      name: "precise Order Tracking",
      description:
        "Stay updated with real-time order status, ensuring timely deliveries and keeping your customers informed.",
      icon: faTruck,
      backgroundColor: "bg-orange-100",
      color: "text-orange-400",
    },
    {
      name: "User-friendly dashboard",
      description:
        "Access comprehensive analytics and insights tailored to your sales strategies, enhancing your profitability.",
      icon: faChartLine,
      backgroundColor: "bg-red-100",
      color: "text-red-400",
    },
    {
      name: "seamless sales integration",
      description:
        "Easily integrate your product listings with sales channels, boosting visibility and attracting ready-to-buy customers.",
      icon: faCartShopping,
      backgroundColor: "bg-teal-100",
      color: "text-teal-400",
    },
    {
      name: "cost-effective pricing plans",
      description:
        "Join us for an unbeatable monthly rate and kickstart your comprehensive ecommerce solution.",
      icon: faDollarSign,
      backgroundColor: "bg-stone-100",
      color: "text-stone-500",
    },
    {
      name: "Expert support & assistance",
      description:
        "Our dedicated team is here to assist you every step of the way, ensuring a smooth and successful experience.",
      icon: faUserClock,
      backgroundColor: "bg-purple-100",
      color: "text-purple-400",
    },
  ];

  const services = [
    {
      name: "simplify your inventory management",
      description:
        "Gain full control over stock levels and fulfill orders promptly.",
      src: "/services/inventory-management.jpeg",
      alt: "",
    },
    {
      name: "Empower your selling journey",
      description:
        "Transform your products into sales as they integrate directly into your sales channels.",
      src: "/services/empowering-sales.jpeg",
      alt: "",
    },
    {
      name: "real-time analytics",
      description:
        "Refine your strategies and drive your business growth like never before.",
      src: "/services/analytics.jpeg",
      alt: "",
    },
  ];
  const Nav = () => {
    const navClassName = `px-3 md:px-16 lg:px-32 sticky flex justify-between items-center  pt-6 pb-4 top-0 z-10 ${
      stickyOpaque ? "opacity-70" : ""
    } ${stickyOpaque && "bg-primary-tint"}`;
    return (
      <nav className={navClassName}>
        <div></div>
        <ul className=" flex gap-x-3 px- justify-center">
          {landingNavigation.map(({ name, href }) => (
            <li key={name} className="font-semibold">
              <Link className="capitalize hover:text-primary" href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="py-2 px-3 bg-high-emphasis text-bright rounded-lg self-end">
          Sign In
        </button>
      </nav>
    );
  };
  const date = new Date();

  const Card = ({
    title,
    description,
    src,
    alt,
  }: {
    title: string;
    description: string;
    src: string;
    alt: string;
  }) => {
    return (
      <>
        <ImageCard
          src={src || "/blue-background.jpg"}
          alt={alt || "blue-background"}
        />
        <div className="px-7 text-left py-8 sm:py-2 md:py-5 sm:px-2 md:px-3 lg:px-5">
          <h4 className="capitalize">{title}</h4>
          <p className="mt-1 text-lg text-light">{description}</p>
        </div>
      </>
    );
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setStickyOpaque(window.pageYOffset > 100);
    });
  }, [setStickyOpaque]);
  //   mt-5 container py-5 md:py-7 bg-blue-200 min-h-screen text-center lg:text-left lg:flex justify-center items-center gap-x-5
  return (
    <>
      <Nav />
      <div className="relative">
        <Image
          className="-z-10 object-cover "
          src="/blue-background.jpg"
          alt={"blue background"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Header */}
        <section className="container1 py-8 min-h-screen text-center sm:text-left sm:flex justify-center items-center gap-x-5">
          {/* Section Content */}
          <div className="space-y-7 md:space-y-20">
            {/* Headers */}
            <div className="md:space-y-3">
              <h2 className="text-low-emphasis capitalize font-semibold">
                Maximize Your Sales Potential
              </h2>
              <h2 className="text-blue-500 capitalize font-semibold">
                Streamline Your Operations
              </h2>
              <h2 className="text-high-emphasis capitalize font-semibold">
                Transform your Inventory Management
              </h2>
            </div>

            <p className="text-dgrey md:text-lg">
              Take control of your ecommerce success with Amahoro. Our
              comprehensive service empowers sellers with seamless inventory
              management, real-time order tracking, and an intuitive dashboard
              designed for effortless monitoring. Watch as your product listings
              come to life on your sales platform, connecting you to eager
              buyers and expanding your reach. With plans starting at just
              $150/month, elevate your business efficiency and watch your sales
              soar.
            </p>

            {/* Sign Up action */}
            <p className="bg-primary text-bright px-4 py-2 md:py-4 text-center rounded-md md:rounded-lg">
              Ready to revolutionize your ecommerce experience?
            </p>
          </div>

          {/* Section Image */}
          <div className="hidden lg:block w-[2000px] bg-black h-80 rounded-lg"></div>
        </section>
      </div>

      {/* Description Section */}
      <section className="container1 py-5 md:py-20 min-h-screen text-center">
        <h2 id="features" className="font-semibold">
          Unlock the Full Potential of Your Online Store with Amahoro
        </h2>

        <p className="mt-6 sm:mt-7 md:mt-6 font-light">
          Transform your ecommerce journey with our exeptional features for just
          $150/month
        </p>

        {/* Features Section*/}
        <div className="mt-7 md:mt-8 lg:flex gap-x-3">
          <div className="rounded-xl hidden lg:block bg-dark w-[30rem]"></div>
          {/* Features */}
          <div className="flex gap-y-12 md:gap-y-16 sm:gap-4 md:gap-x-6 lg:gap-x-7 xl:gap-x-16 justify-around w-full flex-wrap">
            {features.map(
              ({ name, description, icon, color, backgroundColor }, index) => (
                <div
                  className="md:min-w-[8rem] lg:min-w-[8rem] md:max-w-[12.7rem] lg:max-w-[10.4rem] items-center flex flex-col gap-y-4"
                  key={name}
                >
                  <div
                    className={`p-6 md:p-8 ${backgroundColor} ${
                      index < 3 ? "rounded-2xl md:rounded-3xl" : "rounded-full"
                    }`}
                  >
                    <FontAwesomeIcon
                      className={`text-4xl md:text-5xl ${color}`}
                      icon={icon}
                    />
                  </div>
                  <h4 className="capitalize semibold">{name}</h4>
                  <p className="text-dgrey">{description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="container1 py-10 md:py-14 lg:py-20 min-h-screen text-center text-bright flex">
        <div className="bg-slate-800 bg-[url(/blue-background.jpg)] bg-blend-overlay px-6 flex flex-col items-center justify-center rounded-3xl">
          <h6 className="capitalize">Maximize your Ecomerce Efficiency</h6>
          <h2 className="mt-4 md:mt-8">
            Custom web solutions for service-driven businesses
          </h2>
          <p className="mt-10 text-lg">
            Empower Your Selling Journey with Amahoro. Our tailored ecommerce
            solution provides you with a powerful platform to manage your
            inventory and track orders seamlessly.
          </p>
          <button className="mt-12 md:mt-20 px-5 py-2 bg-green-400 rounded-md text-bright capitalize">
            start your project
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[url(/blue-background.jpg)] container1 overflow-hidden flex flex-col justify-center text-center min-h-screen px-3 py-24 lg:py-20">
        <h6 className="capitalize">our services</h6>
        <h2 id="services" className="mt-3 md:mt-6 capitalize px-4">
          Maximize your ecommerce efficiency
        </h2>
        <p className="mt-9">
          Experience unparalleled ecommerce success with Amahoro, your go-to
          solution for efficient inventory management and seamless order
          tracking.
        </p>

        {/* card */}
        <div className="mt-8 md:mt-10 space-y-12 sm:space-y-0 md:flex md:flex-wrap md:justify-around gap-y-3 md:gap-y-5 md:gap-x-5 lg:gap-x-6 xl:gap-x-8">
          {services.map(({ name, description, src, alt }) => (
            <div
              className="md:flex-1 md:min-w-[18rem] md:max-w-[20rem] bg-bright over shadow-md rounded-2xl md:rounded-3xl overflow-hidden"
              key={name}
            >
              <Card
                title={name}
                description={description}
                src={src}
                alt={alt}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section (not yet availiable)*/}

      {/* Conclusion section*/}
      <section className="container1 py-10 text-center min-h-screen px-3 md:py-7 lg:py-20 md:flex md:flex-col lg:flex-row justify-center items-center lg:gap-x-10">
        <div>
          <h2>Elevate Your Ecommerce Game with Amahoro</h2>
          <p className="mt-5 md:mt-4 lg:mt-7 text-dgrey">
            Our innovative platform empowers sellers through streamlined
            inventory management and seamless order tracking, ensuring you can
            oversee every aspect of your business effortlessly.
          </p>
          {/* Advantages */}
          <div className="mt-4 lg:mt-8 text-dgrey space-y-3">
            <div className="flex gap-x-4 ms-4 ">
              <FontAwesomeIcon className="text-green-500" icon={faCheck} />
              <p>
                Real-Time Inventory Management - Stay ahead of stock shortages
                and fulfillment timelines with our intuitive dashboard.
              </p>
            </div>
            <div className="flex gap-x-4 ms-4">
              <FontAwesomeIcon className="text-green-400" icon={faCheck} />
              <p>
                Seamless Integration - Effortlessly connect your inventory with
                your sales website, allowing customers to make purchases with
                ease.
              </p>
            </div>
            <div className="flex gap-x-4 ms-4">
              <FontAwesomeIcon className="text-green-500" icon={faCheck} />
              <p className="mt-3 lg:mt-8">
                Advanced Analytics Tools - Gain valuable insights to fine-tune
                your sales strategies and drive measurable growth.
              </p>
            </div>
          </div>

          <p className="mt-4 text-dgrey">
            Our comprehensive plans start at just $10/month, unlocking the full
            potential of your online store while providing outstanding value
          </p>
          <button className="p-2 mt-5 md:mt-7 capitalize bg-primary text-bright rounded-md">
            transform your ecommerce operations today
          </button>
        </div>
        <div className="hidden lg:block bg-dark w-[50rem] h-[20rem] rounded-lg"></div>
      </section>

      <Footer />
    </>
  );
}

export default LandingPage;
