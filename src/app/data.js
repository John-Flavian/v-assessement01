import {
  FiBarChart2,
  FiLayers,
  FiCheckSquare,
  FiFlag,
  FiUsers,
} from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { iconStyle } from "./styles";
import mastercard from "./images/mastercard.png";
import visa from "./images/visa.png";

const tableData = [
  {
    id: 1,
    plan: "Basic",
    day: "2",
    month: "Dec",
    year: "2005",
    amount: "20.00",
    users: [
      "/images/man-1.jpg",
      "/images/man-2.jpg",
      "/images/man-3.jpg",
      "/images/man-4.jpg",
      "/images/man-5.jpg",
      "/images/woman-1.jpg",
      "/images/woman-2.jpg",
      "/images/woman-3.jpg",
      "/images/woman-4.jpg",
      "/images/woman-5.jpg",
      "/images/woman-6.jpg",
      "/images/woman-7.jpg",
    ],
  },
  {
    id: 2,
    plan: "Premium",
    day: "15",
    month: "Aug",
    year: "2022",
    amount: "45.00",
    users: [
      "/images/man-1.jpg",
      "/images/woman-7.jpg",
      "/images/man-2.jpg",
      "/images/woman-5.jpg",
      "/images/man-5.jpg",
      "/images/woman-1.jpg",
      "/images/woman-3.jpg",
      "/images/woman-2.jpg",
      "/images/woman-6.jpg",
      "/images/woman-4.jpg",
    ],
  },
  {
    id: 3,
    plan: "Standard",
    day: "7",
    month: "May",
    year: "2019",
    amount: "30.50",
    users: [
      "/images/man-1.jpg",
      "/images/woman-6.jpg",
      "/images/man-5.jpg",
      "/images/woman-2.jpg",
      "/images/woman-3.jpg",
    ],
  },
  {
    id: 4,
    plan: "Pro",
    day: "23",
    month: "Jan",
    year: "2023",
    amount: "65.75",
    users: ["/images/man-1.jpg", "/images/woman-4.jpg", "/images/man-2.jpg"],
  },
  {
    id: 5,
    plan: "Basic",
    day: "9",
    month: "Nov",
    year: "2018",
    amount: "22.00",
    users: [
      "/images/man-1.jpg",
      "/images/woman-3.jpg",
      "/images/man-2.jpg",
      "/images/woman-5.jpg",
      "/images/man-3.jpg",
      "/images/woman-2.jpg",
      "/images/man-4.jpg",
      "/images/man-5.jpg",
    ],
  },
  {
    id: 6,
    plan: "Premium",
    day: "18",
    month: "Apr",
    year: "2021",
    amount: "55.00",
    users: [
      "/images/man-1.jpg",
      "/images/man-2.jpg",
      "/images/man-3.jpg",
      "/images/man-4.jpg",
    ],
  },
  {
    id: 7,
    plan: "Standard",
    day: "3",
    month: "Jun",
    year: "2020",
    amount: "29.75",
    users: [
      "/images/man-1.jpg",
      "/images/man-5.jpg",
      "/images/woman-1.jpg",
      "/images/woman-2.jpg",
      "/images/woman-6.jpg",
      "/images/woman-7.jpg",
    ],
  },
];

const navLinks = [
  {
    title: "Home",
    icon: <FaHome className={iconStyle} />,
    badge: null,
  },
  {
    title: "Dashboard",
    icon: <FiBarChart2 className={iconStyle} />,
    badge: 10,
  },
  {
    title: "Projects",
    icon: <FiLayers className={iconStyle} />,
    badge: null,
  },
  {
    title: "Tasks",
    icon: <FiCheckSquare className={iconStyle} />,
    badge: null,
  },
  {
    title: "Reporting",
    icon: <FiFlag className={iconStyle} />,
    badge: null,
  },
  {
    title: "Users",
    icon: <FiUsers className={iconStyle} />,
    badge: null,
  },
];

const dashboardLinks = [
  {
    id: "my-details",
    title: "My details",
  },
  {
    id: "profile",
    title: "Profile",
  },
  {
    id: "password",
    title: "Password",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "plan",
    title: "Plan",
  },
  {
    id: "billing",
    title: "Billing",
  },
  {
    id: "notifications",
    title: "Notifications",
  },
  {
    id: "integration",
    title: "Integration",
  },
  {
    id: "api",
    title: "Api",
  },
];

const paymentCards = [
  {
    id: 1,
    type: "Visa",
    cardNo: "4352",
    logo: visa,
    expiry: "06/24",
  },
  {
    id: 2,
    type: "Mastercard",
    cardNo: "1652",
    logo: mastercard,
    expiry: "07/25",
  },
];

export { tableData, navLinks, dashboardLinks, paymentCards };
