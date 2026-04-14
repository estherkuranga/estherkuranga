"use client";
import { AiOutlineBulb } from "react-icons/ai";
import {
  MdFolderOpen,
  MdMailOutline,
  MdOutlineStarOutline,
} from "react-icons/md";

export const navData = [
  { name: "Home", to: "home", icon: AiOutlineBulb },
  { name: "About", to: "about", icon: AiOutlineBulb },
  {
    name: "Services",
    to: "services",
    icon: AiOutlineBulb,
  },
  {
    name: "Projects",
    to: "projects",
    icon: MdFolderOpen,
  },
  {
    name: "Testimonials",
    to: "testimonials",
    icon: MdOutlineStarOutline,
  },
  { name: "Contact", to: "contact", icon: MdMailOutline },
  { name: "Download CV", to: "downloadcv" },
];

export const socialIcons = [
  {
    href: "https://www.facebook.com/profile.php?id=10000857599518",
    name: "Facebook",
    src: "/icons/hero/Facebook.svg",
  },
  {
    href: "https://www.x.com/moontess64?t=x-1Sgub-wyakuw101OUmyg&s=09/",
    name: "Twitter",
    src: "/icons/hero/Twitter.svg",
  },
  {
    href: "https://www.linkedin.com/in/estherkuranga/",
    name: "LinkedIn",
    src: "/icons/hero/LinkedIn.svg",
  },
  {
    href: "https://www.instagram.com/moontess1?igsh=a3FxMTc1czNjYWV6/",
    name: "Instagram",
    src: "/icons/hero/Instagram.svg",
  },
];

export const services = [
  {
    icon: "/icons/services/uiux.svg",
    title: "UI/UX",
    description:
      "Crafting intuitive, user-centered interfaces that prioritize usability and aesthetics to create delightful digital experiences.",
  },
  {
    icon: "/icons/services/app.svg",
    title: "App Design",
    description:
      "Designing beautiful and functional mobile applications that engage users and deliver exceptional user experiences.",
  },
  {
    icon: "/icons/services/web.svg",
    title: "Website Design",
    description:
      "Building responsive and modern websites that engage visitors and effectively communicate your brand's message.",
  },
];

export const projectData = [
  {
    title: "MealMate",
    src: "/images/projects/mealmateui.png",
    desc: "A mobile meal-planning and cooking assistant designed to help busy individuals decide what to eat, plan when to cook, and manage groceries efficiently, without decision fatigue.",
    fullDesc:
      "MealMate is a mobile meal-planning and cooking assistant designed to help busy individuals decide what to eat, plan when to cook, and manage groceries efficiently. The app offers personalized meal recommendations based on dietary preferences, nutritional needs, and available ingredients. With an intuitive interface, users can easily browse recipes, create shopping lists, and set reminders for meal preparation. MealMate aims to simplify the cooking process and reduce decision fatigue by providing tailored meal options and streamlining grocery management.",
    link: "https://www.figma.com/design/DHwyQxHlVT4t1ptc4XEQHm/MealMate-UI?node-id=356-2976&t=bO1zDfmlbXJ3v7qp-0",
  },
  {
    title: "Coffee Shop",
    src: "/images/projects/coffee shop.png",
    desc: "A modern coffee shop interface designed to enhance the customer experience with an intuitive ordering system and engaging visual design.",
    fullDesc:
      "The Coffee Shop interface is designed to enhance the customer experience with an intuitive ordering system and engaging visual design. Users can easily browse the menu, customize their orders, and track their progress in real-time. The clean and modern aesthetic creates a welcoming atmosphere that encourages repeat visits. ",
    link: "https://www.figma.com/design/OINPLHgca3oN3SKLcdLx5w/Coffee-Shop?m=auto&t=j6RSzZzS1tkAVO21-6",
  },
  {
    title: "Spotify Clone",
    src: "/images/projects/spotify clone.png",
    desc: "A web-based music streaming app inspired by Spotify, featuring a sleek interface and comprehensive music library.",
    fullDesc:
      "The Spotify Clone is a web-based music streaming app inspired by Spotify, featuring a sleek interface and comprehensive music library. Users can discover new music, create playlists, and listen to their favorite tracks on-demand. The design focuses on providing an engaging and intuitive user experience, with easy navigation and visually appealing elements that enhance the overall enjoyment of music streaming.",
    link: "https://www.figma.com/design/QTVRRp9vNlkNF78kDAkP5x/Spotify-Web-Music-App?m=auto&t=j6RSzZzS1tkAVO21-6",
  },
  {
    title: "Event Management App",
    src: "/images/projects/event.png",
    desc: "A mobile app for managing and organizing events, featuring a user-friendly interface and comprehensive event planning tools.",
    fullDesc:
      "The Event Management App is a mobile application designed to help users manage and organize events efficiently. With a user-friendly interface and comprehensive event planning tools, users can easily create, schedule, and manage their events.",
    link: "https://www.figma.com/design/C8qhPjaSTd13YKApmpbC5r/Event-Management-Mobile-App?m=auto&t=j6RSzZzS1tkAVO21-6",
  },
  {
    title: "ChowGo App",
    src: "/images/projects/chowgo.png",
    desc: "A food delivery app designed to connect customers with local restaurants, featuring a seamless ordering experience and real-time tracking.",
    fullDesc:
      "The ChowGo App is a food delivery app designed to connect customers with local restaurants, featuring a seamless ordering experience and real-time tracking. Users can browse menus, place orders, and track their deliveries with ease.",
    link: "https://www.figma.com/design/s4buHQ4cmPxxqkLLlsNYdd/Food-Delivery-Mobile-App?m=auto&t=j6RSzZzS1tkAVO21-6",
  },
];

export const testimonialData = [
  {
    name: "John Doe",
    title: "CEO,  EL Kratos Embassy",
    feedback:
      "Esther is an exceptional designer who consistently delivers high-quality work. Her attention to detail and creativity are unmatched. She is a pleasure to work with and always goes above and beyond to ensure client satisfaction.",
    avatar: "/images/testimonials/testifier1.svg",
  },
  {
    name: "Jane Smith",
    title: "Product Manager, EL Kratos Embassy",
    feedback:
      "Esther's design skills are top-notch. She has a keen eye for detail and always delivers creative solutions that exceed expectations. Her professionalism and dedication to her work make her an invaluable asset to any project.",
    avatar: "/images/testimonials/testifier2.svg",
  },
  {
    name: "Michael Johnson",
    title: "CTO, PHEBTs",
    feedback:
      "Esther's work has significantly improved our user experience. Her innovative approach and technical expertise are invaluable. She is a true professional who consistently delivers outstanding results. I highly recommend her for any design project.",
    avatar: "/images/testimonials/testifier3.svg",
  },
  {
    name: "Emily Davis",
    title: "Marketing Director, PHEBTs",
    feedback:
      "Esther's design work has been instrumental in enhancing our brand image. Her creativity and attention to detail are exceptional. She is a pleasure to work with and always delivers high-quality results on time.",
    avatar: "/images/testimonials/testifier4.svg",
  },
  {
    name: "David Wilson",
    title: "Founder, EL Kratos Embassy",
    feedback:
      "Esther is a talented designer who consistently produces outstanding work. Her creativity and dedication to her craft are evident in every project she undertakes. She is a valuable asset to any team and I highly recommend her.",
    avatar: "/images/testimonials/testifier3.svg",
  },
];

export const categories = ["All", "UI/UX Design", "App Design", "Web Design"];
