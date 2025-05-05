import Logo from "@/components/logo";
import { footerConfig } from "./config";
import { FooterSection } from "./footer-section";

const Footer = () => {
  const { description, sections } = footerConfig;
  const mainSections = sections.slice(0, 3);
  const moreSections = sections.slice(3);

  return (
    <footer className="w-full bg-white dark:bg-black">
      <div className="container mx-auto flex justify-center px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {/* Brand Section */}
            <div className="flex flex-col gap-2 md:gap-4 col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-2">
              <Logo withText />
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-sm text-muted-foreground lg:max-w-[380px]">
                  {description.primary}
                </p>
                <p className="text-sm text-muted-foreground lg:max-w-[380px]">
                  {description.secondary}
                </p>
              </div>
            </div>

            {/* Main Sections */}
            {mainSections.map((section) => (
              <FooterSection key={section.title} section={section} />
            ))}

            {/* More Sections - Hidden on small screens */}
            {moreSections.map((section) => (
              <FooterSection
                key={section.title}
                section={section}
                className="flex-col gap-2 md:gap-4 flex sm:hidden md:flex"
              />
            ))}
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-8 pt-8 border-t flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex gap-4">
              <p>
                © {new Date().getFullYear()}{" "}
                <a href="#" className="hover:text-foreground transition-colors">
                  Starter
                </a>
                . All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
