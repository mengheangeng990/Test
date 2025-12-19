import burgerImg from '../components/burger.png'
import peachImg from '../components/peach.png'
import kiwiImg from '../components/kiwi.png'
import appleImg from '../components/apple.png'
import snackImg from '../components/snack.png'
import plumImg from '../components/blackplum.png'
import cabbageImg from '../components/cabbage.png'
import headphoneImg from '../components/headphone.png'
import cakeImg from '../components/cake.png'
import orangeImg from '../components/orange.png'
import onionImg from '../components/onion.png'
import yogurtImg from '../components/yogurt.png'
import vegetableImg from '../components/vegetable.png'

import mangoImg from '../components/mango.png'
import cornImg from '../components/corn.png'
import chilliImg from '../components/chilli.png'
import lemonImg from '../components/lemon.png'
import steak1Img from '../components/steak1.png'
import steak2Img from '../components/steak2.png'
import steak3Img from '../components/steak3.png'
import steak4Img from '../components/steak4.png'

export const staticCategories = [
  { id: 1, title: 'Cake & Milk', items: 14, bgColor: '#F2FCE4', image: burgerImg, group: 'Bakery' },
  { id: 2, title: 'Peach', items: 17, bgColor: '#FFFCEB', image: peachImg, group: 'Fruits' },
  { id: 3, title: 'Organic Kiwi', items: 21, bgColor: '#ECFFEC', image: kiwiImg, group: 'Fruits' },
  { id: 4, title: 'Red Apple', items: 68, bgColor: '#FEEFEA', image: appleImg, group: 'Fruits' },
  { id: 5, title: 'Snack', items: 34, bgColor: '#FFF3EB', image: snackImg, group: 'Snacks' },
  { id: 6, title: 'Black plum', items: 25, bgColor: '#FFF3FF', image: plumImg, group: 'Fruits' },
  {
    id: 7,
    title: 'Vegetables',
    items: 65,
    bgColor: '#F2FCE4',
    image: cabbageImg,
    group: 'Vegetables',
  },
  {
    id: 8,
    title: 'Headphone',
    items: 33,
    bgColor: '#FFFCEB',
    image: headphoneImg,
    group: 'Gadgets',
  },
  { id: 9, title: 'Cake & Milk 2', items: 54, bgColor: '#F2FCE4', image: cakeImg, group: 'Bakery' },
  { id: 10, title: 'Orange', items: 63, bgColor: '#FFF3FF', image: orangeImg, group: 'Fruits' },
]

export const staticPromotions = [
  {
    id: 1,
    title: 'Everyday Fresh & Clean with Our Products',
    bgColor: '#F0E8D5',
    image: onionImg,
    buttonColor: '#3BB77E',
  },
  {
    id: 2,
    title: 'Make your Breakfast Healthy and Easy',
    bgColor: '#F3E8E8',
    image: yogurtImg,
    buttonColor: '#3BB77E',
  },
  {
    id: 3,
    title: 'The best Organic Products Online',
    bgColor: '#E7EAF3',
    image: vegetableImg,
    buttonColor: '#FDC040',
  },
]

export const staticProducts = [
  {
    id: 101,
    badge: { text: '-17%', color: '#3BB77E' },
    image: mangoImg,
    group: 'Fruits',
    categoryId: 2,
    category: 'Peach',
    name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    rating: 4.0,
    price: 38,
    oldPrice: 42,
    countSold: 50,
  },
  {
    id: 102,
    badge: { text: 'Hot', color: '#FD6E6E' },
    image: cornImg,
    group: 'Vegetables',
    categoryId: 5,
    category: 'Snack',
    name: 'All Natural Italian-Style Chicken Meatballs',
    rating: 4.0,
    price: 2.51,
    oldPrice: 2.8,
    countSold: 5,
  },
  {
    id: 103,
    badge: { text: 'Sale', color: '#FDC040' },
    image: orangeImg,
    group: 'Fruits',
    categoryId: 10,
    category: 'Orange',
    name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    rating: 4.0,
    price: 2.51,
    oldPrice: 2.8,
    countSold: 20,
  },
  {
    id: 104,
    badge: null,
    image: chilliImg,
    group: 'Spices',
    categoryId: 5,
    category: 'Snack',
    name: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
    rating: 4.0,
    price: 2.51,
    oldPrice: 2.8,
    countSold: 8,
  },
  {
    id: 105,
    badge: null,
    image: lemonImg,
    group: 'Vegetables',
    categoryId: 7,
    category: 'Vegetables',
    name: 'Blue Diamond Almonds Lightly Salted Vegetables',
    rating: 4.0,
    price: 2.51,
    oldPrice: 2.8,
    countSold: 12,
  },
  {
    id: 106,
    badge: null,
    image: steak1Img,
    group: 'Dairy',
    categoryId: 1,
    category: 'Cake & Milk',
    name: 'Chobani Complete Vanilla Greek Yogurt',
    rating: 4.0,
    price: 2.51,
    oldPrice: 2.8,
    countSold: 2,
  },
  {
    id: 107,
    badge: { text: 'Sale', color: '#FDC040' },
    image: steak2Img,
    group: 'Beverages',
    categoryId: 9,
    category: 'Cake & Milk 2',
    name: 'Canada Dry Ginger Ale - 2 L Bottle',
    rating: 4.0,
    price: 2.51,
    oldPrice: 2.8,
    countSold: 3,
  },
  {
    id: 108,
    badge: null,
    image: steak3Img,
    group: 'Seafood',
    categoryId: 3,
    category: 'Organic Kiwi',
    name: 'Encore Seafoods Stuffed Alaskan Salmon',
    rating: 4.0,
    price: 2.51,
    oldPrice: 2.8,
    countSold: 14,
  },
  {
    id: 109,
    badge: null,
    image: steak4Img,
    group: 'Seafood',
    categoryId: 3,
    category: 'Organic Kiwi',
    name: "Gorton's Beer Battered Fish Fillets",
    rating: 4.0,
    price: 2.51,
    oldPrice: 2.8,
    countSold: 6,
  },
  {
    id: 110,
    badge: { text: 'Hot', color: '#FD6E6E' },
    image: plumImg,
    group: 'Fruits',
    categoryId: 6,
    category: 'Black plum',
    name: 'Haagen-Dazs Caramel Cone Ice Cream',
    rating: 4.0,
    price: 2.51,
    oldPrice: 2.8,
    countSold: 11,
  },
]

export default { staticCategories, staticPromotions, staticProducts }
