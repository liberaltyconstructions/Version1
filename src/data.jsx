import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import {TiThMenu} from "react-icons/ti";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Projects",id:'project'},
    {name:"Testimonial",id:'testimonial'},
];


// export const teams = [
//   {
//     name:"Javvaji Reddi Prakash",
//     title:"B.Tech (C.E)",
//     profile:member1
//   },
//   {
//     name:"Vivek D R",
//     title:" M.Tech (Structural Engineering)",
//     profile:member2
//   },
//   {
//     name:"Uday Kumar N ",
//     title:"M.Tech (Structural Engineering)",
//     profile:member3
//   },
//   {
//     name:"Praveen K M S",
//     title:"B.E (C.E)",
//     profile:member4
//   },
//   {
//     name:"Mantesh E S",
//     title:"B.E (C.E)",
//     profile:member4
//   },
//   {
//     name:"Praveen K M S",
//     title:"B.E (C.E)",
//     profile:member4
//   },
//   {
//     name:"Sachidananda K",
//     title:"MBA (Construction Management), B.E (C.E)",
//     profile:member4
//   },
//   {
//     name:"Sushmitha J N",
//     title:"B.E (C.E)",
//     profile:member4
//   },
//   {
//     name:"Swathi B U",
//     title:"B.E (C.E)",
//     profile:member4
//   },
  
// ]


export const testimonial = [
  {
    // image:profile2,
    name:'Vhomes',
    review:` Liberalty Constructions delivered exceptional service for our apartment project. Their team showed professionalism, expertise, and attention to detail from design to completion. They brought our vision to life with precision, communicated excellently, and exceeded expectations. We highly recommend Liberalty Constructions for civil engineering consultancy and look forward to future collaborations.`
  },
  {
    // image:profile3,
    name:'Suresh',
    review:`Liberalty Constructions has been an invaluable partner in our projects. Their skilled team consistently delivers top-notch designs, precise calculations, and timely solutions. They excel in problem-solving and meeting high standards. Their professionalism, reliability, and responsive communication have earned our trust. We confidently recommend Liberalty Constructions for civil engineering consultancy and look forward to continued collaboration on future projects.`
  },
  {
    // image:profile4,
    name:'Venumadhav ',
    review:`We have had the pleasure of working with LIBERALTY CONSTRUCTIONS on several projects, and their expertise in interior design has been invaluable. Their team's attention to detail, creativity, and ability to understand our vision has resulted in truly exceptional spaces. Their collaboration with our team has been seamless, and their contributions have elevated our projects to the next level. We highly recommend LIBERALTY CONSTRUCTIONS for any interior design needs - they are a true partner in the building process`
  },
];


export const contacts = [
  {
    name:"Email",
    value:"liberaltyconstructions@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+91 9885756274 || +91 9071153319 ",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"#60, 5th b cross, Chowdeshawri Nagar, Laggere, Bangalore - 560058",
    icon:<IoLocationOutline/>,
  },
]


export const planData = {
  private: {
    title: "Building Projects",
    features: [
      "Floor plans and Approvals",
      "Elevation Designs",
      "Interior Designs & Execution",
      "Structural Designs",
      "Layout Plans",
      "All kinds of 2D & 3D Drawings",
      "Project Management & Support",
      "Estimation & Costing",
      "Material Contracts",
      "Labour Contracts"
    ]
  },
  government: {
    title: "Irrigation Projects",
    features: [
      "Lift Irrigation Projects",
      "Tank Filling Projects",
      "Water Supply Projects",
      "Bridges and Barrages Projects",
      "And all similar Major and Minor Irrigation Projects",
      "Roads and Highways"

    ]
  }
};
