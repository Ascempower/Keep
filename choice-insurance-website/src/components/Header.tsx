
"use client";

import Link from "next/link";
import Image from "next/image"; // Import Image component
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Corrected import path
import { Menu } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils"; // Added import for cn utility

const services = [
  {
    title: "Medicare Supplement",
    href: "/services/medicare-supplement",
    description: "Explore options for Medicare Supplement (Medigap) plans.",
  },
  {
    title: "Life Insurance",
    href: "/services/life-insurance",
    description: "Secure your family’s future with various life insurance policies.",
  },
  {
    title: "Health Insurance",
    href: "/services/health-insurance",
    description: "Find individual and group health insurance plans.",
  },
  {
    title: "Hospital Indemnity",
    href: "/services/hospital-indemnity",
    description: "Get coverage for hospital stays and related expenses.",
  },
  {
    title: "Cancer & Illness Plans",
    href: "/services/cancer-illness",
    description: "Specialized plans for critical illnesses like cancer.",
  },
  {
    title: "Annuities",
    href: "/services/annuities",
    description: "Plan for retirement with our annuity options.",
  },
  {
    title: "Final Expense",
    href: "/services/final-expense",
    description: "Cover end-of-life expenses and protect your loved ones.",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-brand-dark-green text-brand-white">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Replace text with Image component */}
          <Image src="/assets/images/full-logo.png" alt="Choice Insurance Agency Logo" width={180} height={40} />
          {/* <span className="font-bold sm:inline-block font-adonis text-2xl">Choice Insurance Agency</span> */}
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-brand-dark-green hover:bg-brand-medium-green hover:text-brand-black"}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-brand-dark-green hover:bg-brand-medium-green hover:text-brand-black"}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-brand-dark-green hover:bg-brand-medium-green hover:text-brand-black">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-brand-white text-brand-black">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-medium-green to-brand-dark-green p-6 text-brand-white no-underline outline-none focus:shadow-md"
                        href="/services"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium font-poppins">
                          All Services
                        </div>
                        <p className="text-sm leading-tight text-brand-light-green">
                          Explore our comprehensive range of insurance solutions.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {services.slice(0, 3).map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      className="hover:bg-brand-light-green"
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/testimonials" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-brand-dark-green hover:bg-brand-medium-green hover:text-brand-black"}>
                  Testimonials
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-brand-dark-green hover:bg-brand-medium-green hover:text-brand-black"}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-brand-dark-green hover:bg-brand-medium-green hover:text-brand-black"}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-brand-dark-green hover:bg-brand-medium-green hover:text-brand-black"}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-x-2">
          <Button asChild className="hidden lg:flex bg-brand-tan hover:bg-opacity-80 text-brand-black mr-2">
            <Link href="/contact#quote">Quote Now</Link>
          </Button>
          <Button asChild className="hidden lg:flex bg-brand-tan hover:bg-opacity-80 text-brand-black">
            <Link href="/contact#book-a-call">Book a Free Consultation</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="shrink-0 bg-brand-dark-green hover:bg-brand-medium-green text-brand-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col bg-brand-dark-green text-brand-white">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold mb-4"
                >
                  <Image src="/assets/images/full-logo.png" alt="Choice Insurance Agency Logo" width={150} height={33} />
                  {/* <span className="font-adonis text-xl">Choice Insurance</span> */}
                </Link>
                <Link
                  href="/"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-light-green hover:text-brand-white hover:bg-brand-medium-green"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-light-green hover:text-brand-white hover:bg-brand-medium-green"
                >
                  About Us
                </Link>
                {/* Mobile Services - Consider a simpler dropdown or list */}
                <Link
                  href="/services"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-light-green hover:text-brand-white hover:bg-brand-medium-green"
                >
                  Services
                </Link>
                <Link
                  href="/testimonials"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-light-green hover:text-brand-white hover:bg-brand-medium-green"
                >
                  Testimonials
                </Link>
                <Link
                  href="/blog"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-light-green hover:text-brand-white hover:bg-brand-medium-green"
                >
                  Blog
                </Link>
                <Link
                  href="/faq"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-light-green hover:text-brand-white hover:bg-brand-medium-green"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-brand-light-green hover:text-brand-white hover:bg-brand-medium-green"
                >
                  Contact Us
                </Link>
              </nav>
              <div className="mt-auto">
                <Button size="sm" className="w-full bg-brand-tan hover:bg-opacity-80 text-brand-black mb-2" asChild>
                  <Link href="/contact#quote">Quote Now</Link>
                </Button>
                <Button size="sm" className="w-full bg-brand-tan hover:bg-opacity-80 text-brand-black" asChild>
                  <Link href="/contact#book-a-call">Book a Free Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none font-poppins">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

