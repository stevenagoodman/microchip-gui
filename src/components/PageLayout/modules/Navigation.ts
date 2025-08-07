interface NavbarEntry {
  name: string;
  href: string;
  navbarAlignment: "left" | "right";
}

const navigation: NavbarEntry[] = [
  { name: "Microchip", href: "/", navbarAlignment: "left" },
  { name: "Components", href: "/components", navbarAlignment: "left" },
  { name: "About", href: "/about", navbarAlignment: "right" },
  { name: "Settings", href: "/settings", navbarAlignment: "right" },
];

export default navigation;
