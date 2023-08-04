// categoriesData.js
import { FaCamera, FaCapsules,  FaFemale,  FaHeadphones, FaJournalWhills, FaMale, FaMandalorian, FaMask } from 'react-icons/fa';
import { CgCap } from 'react-icons/cg';
import { BsBag } from 'react-icons/bs';
import { BiLaptop } from 'react-icons/bi';

export const categoriesData = [
  { category: "Women's Shari", icon:FaFemale },
  { category: "Earphones", icon: FaHeadphones },
  { category: "Bag", icon: BsBag },
  { category: "Jwelary", icon: FaJournalWhills },
  { category: "Cap", icon: CgCap },
  { category: "Laptop", icon: BiLaptop },
  { category: "Men's Boot", icon: FaMale },
  { category: "Men's Pants", icon: FaCapsules },
  { category: "Men's Sneaker", icon: FaMandalorian },
  { category: "Bottle", icon: FaCamera },
  { category: "Mekup", icon: FaMask },
 
];

export default categoriesData;
