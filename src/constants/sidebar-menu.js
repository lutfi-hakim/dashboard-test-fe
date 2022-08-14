import DashboardIcon from "../assets/icons/dashboard.svg";
import ShippingIcon from "../assets/icons/shipping.svg";
import ProductIcon from "../assets/icons/product.svg";
import UserIcon from "../assets/icons/user.svg";
import bagIcon from "../assets/icons/bag.svg";
import ArrowRight from "../assets/icons/arrowRight.svg";

const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    icons: "",
    path: "/",
    title: "Dashboard",
  },
  {
    id: 2,
    icon: bagIcon,
    icons: ArrowRight,
    path: "/management",
    title: "Master Data Management",
    subMenu: [
      { id: 0, label: "Standard Mark-Up" },
      { id: 1, label: "Standard Service Fee" },
      { id: 2, label: "Fee Type" },
      { id: 3, label: "Frequent Traveler Program" },
      { id: 4, label: "Standard Ancillary Fee" },
      { id: 5, label: "Rating Type" },
      { id: 6, label: "Setup Flight Commision" },
      { id: 7, label: "Special Dates" },
      { id: 8, label: "Corporate Rating" },
    ],
  },
];

export default sidebar_menu;
