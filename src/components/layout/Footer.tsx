import { contact, landingNavigation } from "../../lib/nav";
import Link from "next/link";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-accent container1 py-4 md:py-6 lg:py-8 dark:bg-grey dark:text-dark"
    >
      <div className="md:flex justify-around gap-x-7 space-y-3 md:space-y-0">
        {/* Company name and goal */}
        <div className="md:max-w-[15rem]">
          <h4 className="mb-3 md:mb-8">Amahoro</h4>
          <p>
            Amahoro Ecommerce service for sellers providing inventory
            management, order tracking, and a comprehensive dashboard
          </p>
        </div>
        {/* Menu navigation */}
        <div>
          <h4 className="mb-2 md:mb-8">Menu</h4>
          <div className="flex flex-col gap-y-2 md:gap-y-3">
            {landingNavigation.map(({ name, href }) => (
              <Link key={name} href={href}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        {/* Contact details */}
        <div>
          <h4 className="mb-2 md:mb-8">Reach Out</h4>
          <div className="flex flex-col gap-y-1 md:gap-y-2">
            {contact.map(({ name, content, href }) => (
              <div key={name} className="flex gap-x-2 gap-y-4">
                <p>{name}</p>
                {href ? <Link href={href}>{content}</Link> : <p>{content}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center mt-5 md:mt-10 lg:mt-12">
        2025 Amahoro. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
