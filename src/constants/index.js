import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

export const footerLinks = [
  {
    title: "About Us",
    links: [
      {
        name: "The Company",
        link: "/about-us",
      },
      {
        name: "Board Of Directors",
        link: "/leadership",
      },
    ],
  },
  {
    title: "Our Services",
    links: [
      {
        name: "Security Trading",
        link: "/security-trading",
      },
      {
        name: "Investment Banking",
        link: "/investment-banking",
      },
      {
        name: "Asset Management",
        link: "/asset-management",
      },
      {
        name: "Trusteeship",
        link: "/trusteeship",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Downloads",
        link: "/downloads",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/belfryinvestmentsecuritiesltd/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/Belfryinvestmentandsecuritiesltd/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://twitter.com/BISL_Brokers/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/belfryinvestment/",
  },
];

export const formState = {
  title: '',
  surname: '',
  firstname: '',
  othername: '',
  dateOfBirth: '',
  maritalStatus: '',
  employmentStatus: '',
  gender: '',
  mothersMaidenName: '',
  phoneNumber: '',
  emailAddress: '',
  nationality: '',
  stateOfOrigin: '',
  countryOfResidence: '',
  stateOfResidence: '',
  cityOfResidence: '',
  addressOfResidence: '',
  kinSurname: '',
  kinFirstname: '',
  kinOthername: '',
  kinDateOfBirth: '',
  kinGender: '',
  kinRelationship: '',
  kinNationality: '',
  kinCity: '',
  kinPhoneNumber: '',
  kinEmailAddress: '',
  kinAddress: '',
  bankName: '',
  accountName: '',
  accountNumber: '',
  bvn: '',
  bankAddress: '',
  sortCode: '',
  passportPhoto: '',
  validId: '',
  signature: '',
  LGA: '',
}
