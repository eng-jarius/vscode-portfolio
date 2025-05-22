export interface Project {
  title: string;
  description: string;
  link: string;
  slug: string;
  logo: string;
}

export const projects: Project[] = [
  {
    title: "Allbirds",
    description:
      "E-commerce platform for sustainable footwear and apparel. Built with modern web technologies focusing on sustainability and user experience.",
    logo: "/logos/react_icon.svg",
    link: "https://www.allbirds.com/",
    slug: "allbirds",
  },
  {
    title: "TechCrunch",
    description:
      "Leading technology media platform delivering breaking tech news, analysis, and expert insights to a global audience.",
    logo: "/logos/vscode_icon.svg",
    link: "https://techcrunch.com/",
    slug: "techcrunch",
  },
  {
    title: "Create.xyz",
    description:
      "An innovative AI-powered platform that transforms natural language instructions into fully functional web applications and sites. Built with cutting-edge AI technology to democratize web development.",
    logo: "/logos/js_icon.svg",
    link: "https://www.create.xyz/",
    slug: "create-xyz",
  },
  {
    title: "Kallidus",
    description:
      "Comprehensive Human Resource Management (HRM) system for efficient employee management, training, and organizational development.",
    logo: "/logos/react_icon.svg",
    link: "https://www.kallidus.com/",
    slug: "kallidus",
  },
  {
    title: "Viva La Labia",
    description:
      "Premium jewelry e-commerce platform featuring immersive 3D product visualization powered by Three.js, offering unique and luxury jewelry pieces with interactive 3D browsing experience.",
    logo: "/logos/css_icon.svg",
    link: "https://www.vivalalabia.com/",
    slug: "viva-la-labia",
  },
  {
    title: "Agzaga",
    description:
      "E-commerce platform built with Ruby on Rails using the Solidus framework, providing robust shopping experience with advanced inventory management features.",
    logo: "/logos/html_icon.svg",
    link: "https://www.agzaga.com/",
    slug: "agzaga",
  }
];
