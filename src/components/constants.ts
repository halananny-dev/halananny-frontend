export const navbarLinks = [
  { name: "step", href: "#steps" },
  { name: "our_nannies", href: "#nannies" },
  { name: "Plan", href: "#plans" },
  { name: "testimonials", href: "#testimonial" },
  { name: "why_halaNanny", href: "#why" },
];

export const nannies = [
  {
    name: "Maryem Hassan",
    country: "Egypt",
    age: 36,
    location: "Dubai",
    experience: "5 years in childcare CPR certified",
    language: "Arabic, English",
    desired_salary: "3300-4200",
    testimonial: `‘’ A dedicated and reliable housewife, with extensive
experience in raising and caring for children. ‘’`,
    image: "/nanny1.svg",
  },
  {
    name: "Maryem Hassan",
    country: "Egypt",
    age: 36,
    location: "Dubai",
    experience: "5 years in childcare CPR certified",
    language: "Arabic, English",
    desired_salary: "3300-4200",
    testimonial: `‘’ A dedicated and reliable housewife, with extensive
experience in raising and caring for children. ‘’`,
    image: "/nanny2.svg",
  },
  {
    name: "Maryem Hassan",
    country: "Egypt",
    age: 36,
    location: "Dubai",
    experience: "5 years in childcare CPR certified",
    language: "Arabic, English",
    desired_salary: "3300-4200",
    testimonial: `‘’ A dedicated and reliable housewife, with extensive
experience in raising and caring for children. ‘’`,
    image: "/nanny3.svg",
  },
  {
    name: "Maryem Hassan",
    country: "Egypt",
    age: 36,
    location: "Dubai",
    experience: "5 years in childcare CPR certified",
    language: "Arabic, English",
    desired_salary: "3300-4200",
    testimonial: `‘’ A dedicated and reliable housewife, with extensive
experience in raising and caring for children. ‘’`,
    image: "/nanny3.svg",
  },
];

export const plans = [
  {
    name: "Basic Plan",
    price: "AED 180",
    features: ["Access to the nanny directory for a limited time"],
  },
  {
    name: "Premium Plan",
    price: "AED 350",
    discount: "30%",
    popular: true,
    features: [
      "Priority booking, unlimited interviews, advanced filters (language, special needs)",
      "Access to AI-powered “Personalized Recommendations”",
    ],
  },
  {
    name: "Ultimate Plan",
    price: "AED 399",
    description: "(if you offer advanced services)",
    features: [
      "Priority booking, unlimited interviews, advanced filters (language, special needs)",
      "Access to AI-powered “Personalized Recommendations”",
      "Ongoing dedicated support, premium nanny profiles, extra screening options",
    ],
  },
];

export const testimonials = [
  {
    name: "Aisha, Riyadh",
    role: "mother",
    image: "/user1.svg",
    content:
      "“Finding a bilingual nanny for our newborn was a breeze. The in-app chat and background checks gave us total peace of mind.”",
    rating: 5,
  },
  {
    name: "Reem, Dubai",
    role: "nanny",
    image: "/user2.svg",
    content:
      "“I love that I can showcase my certifications and easily connect with families who value my background.”",
    rating: 5,
  },
  {
    name: "Fatima, Riyadh",
    role: "mother",
    image: "/user3.svg",
    content:
      "“Finding a bilingual nanny for our newborn was a breeze. The in-app chat and background checks gave us total peace of mind.”",
    rating: 5,
  },
  {
    name: "Fatima, Riyadh",
    role: "mother",
    image: "/user3.svg",
    content:
      "“Finding a bilingual nanny for our newborn was a breeze. The in-app chat and background checks gave us total peace of mind.”",
    rating: 5,
  },
];

export const footerLinks = [
  [
    { name: "home", href: "/" },
    { name: "Plan", href: "/" },
    { name: "about_us", href: "/" },
    { name: "contact", href: "/" },
  ],
  [
    { name: "privacy_policy", href: "/" },
    { name: "terms_of_service", href: "/" },
    { name: "labor_law", href: "/" },
  ],
  [
    { name: "register", href: "/" },
    { name: "login", href: "/" },
  ],
];

export const screenVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
};

export const COUNTRIES = [
  { code: "+1", flag: "US", nationality: "American" },
  { code: "+44", flag: "GB", nationality: "British" },
  { code: "+33", flag: "FR", nationality: "French" },
  { code: "+49", flag: "DE", nationality: "German" },
  { code: "+91", flag: "IN", nationality: "Indian" },
  { code: "+81", flag: "JP", nationality: "Japanese" },
  { code: "+86", flag: "CN", nationality: "Chinese" },
  { code: "+61", flag: "AU", nationality: "Australian" },
  { code: "+7", flag: "RU", nationality: "Russian" },
  { code: "+55", flag: "BR", nationality: "Brazilian" },
  { code: "+34", flag: "ES", nationality: "Spanish" },
  { code: "+39", flag: "IT", nationality: "Italian" },
  { code: "+27", flag: "ZA", nationality: "South African" },
  { code: "+82", flag: "KR", nationality: "South Korean" },
  { code: "+62", flag: "ID", nationality: "Indonesian" },
  { code: "+31", flag: "NL", nationality: "Dutch" },
  { code: "+46", flag: "SE", nationality: "Swedish" },
  { code: "+41", flag: "CH", nationality: "Swiss" },
  { code: "+52", flag: "MX", nationality: "Mexican" },
  { code: "+90", flag: "TR", nationality: "Turkish" },
  { code: "+20", flag: "EG", nationality: "Egyptian" },
  { code: "+351", flag: "PT", nationality: "Portuguese" },
  { code: "+380", flag: "UA", nationality: "Ukrainian" },
];

export const RELIGION = ["Christianity", "Islam", "Atheism"];
export const MARTIAL_STATUS = ["Single", "Married", "Divorced", "Widowed"];
