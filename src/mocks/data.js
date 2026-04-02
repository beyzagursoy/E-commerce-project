import slider1 from "../assets/images/slider-1.png";
import men from "../assets/images/men.jpg";
import women from "../assets/images/women.jpg";
import accessories from "../assets/images/accessories.jpg";
import kids from "../assets/images/kids.jpg";
import bestseller1 from "../assets/images/bestseller-1.jpg";
import bestseller2 from "../assets/images/bestseller-2.jpg";
import bestseller3 from "../assets/images/bestseller-3.jpg";
import bestseller4 from "../assets/images/bestseller-4.jpg";
import bestseller5 from "../assets/images/bestseller-5.jpg";
import bestseller6 from "../assets/images/bestseller-6.jpg";
import bestseller7 from "../assets/images/bestseller-7.jpg";
import bestseller8 from "../assets/images/bestseller-8.jpg";
import slider2 from "../assets/images/slider-2.png";
import cart from "../assets/images/cart.png";
import featured1 from "../assets/images/featured-1.jpg";
import featured2 from "../assets/images/featured-2.jpg";
import featured3 from "../assets/images/featured-3.jpg";
import hazirgiyim from "../assets/images/hazir-giyim.jpg";
import shoppage1 from "../assets/shop/shoppage-1.svg";
import shoppage2 from "../assets/shop/shoppage-2.svg";
import shoppage3 from "../assets/shop/shoppage-3.svg";
import shoppage4 from "../assets/shop/shoppage-4.svg";
import shop1 from "../assets/shop/shop-1.jpg";
import shop2 from "../assets/shop/shop-2.jpg";
import shop3 from "../assets/shop/shop-3.jpg";
import shop4 from "../assets/shop/shop-4.jpg";
import shop5 from "../assets/shop/shop-5.jpg";
import shop6 from "../assets/shop/shop-6.jpg";
import shop7 from "../assets/shop/shop-7.jpg";
import shop8 from "../assets/shop/shop-8.jpg";
import shop9 from "../assets/shop/shop-9.jpg";
import hooli from "../assets/brands/hooli.svg";
import lyft from "../assets/brands/lyft.svg";
import piperHat from "../assets/brands/hood.svg";
import stripe from "../assets/brands/stripe.svg";
import aws from "../assets/brands/aws.svg";
import reddit from "../assets/brands/reddit.svg";
import team1 from "../assets/team/gokhanozdemir.jpg";
import team2 from "../assets/team/beyzagursoy.jpg";
import team3 from "../assets/team/team3.png";  
import team4 from "../assets/team/team4.png";
import team5 from "../assets/team/team5.png";
import team6 from "../assets/team/team6.png";
import team7 from "../assets/team/team7.png";
import team8 from "../assets/team/team8.png";
import team9 from "../assets/team/team9.png";

export const homeData = {
    // Hero Slider
    slider: [
        {
            id: 1,
            term: "SUMMER 2020",
            title: "NEW COLLECTION",
            description: "We know how large objects will act, but things on a small scale.",
            buttonText: "SHOP NOW",
            img: slider1
        },
        {
            id: 2,
            term: "SUMMER 2020",
            title: "NEW COLLECTION",
            description: "We know how large objects will act, but things on a small scale.",
            buttonText: "SHOP NOW",
            img: hazirgiyim
        }
    ],
    // Editor's Pick
    categories: [
        { name: "MEN", img: men },
        { name: "WOMEN", img: women },
        { name: "ACCESSORIES", img: accessories },
        { name: "KIDS", img: kids }
    ],
    // Bestseller Products
    products: [
        {
            id: 1,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: bestseller1
        },
        {
            id: 2,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: bestseller2
        },
        {
            id: 3,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: bestseller3
        },
        {
            id: 4,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: bestseller4
        },
        {
            id: 5,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: bestseller5
        },
        {
            id: 6,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: bestseller6
        },
        {
            id: 7,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: bestseller7
        },
        {
            id: 8,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: bestseller8
        }
    ],
    slider2: [
        {
            id: 1,
            term: "SUMMER 2020",
            title: "Vita Classic Product",
            description: "We know how large objects will act, We know how are objects will act, We know",
            price: "$16.48",
            buttonText: "ADD TO CART",
            img: slider2
        },
        {
            id: 2,
            term: "SUMMER 2020",
            title: "Vita Classic Product",
            description: "We know how large objects will act, We know how are objects will act, We know",
            price: "$16.48",
            buttonText: "ADD TO CART",
            img: slider2
        }
    ],
    cart: [
        {
            term: "SUMMER 2020",
            title: "Part of the Neural Universe",
            description: "We know how large objects will act, but things on a small scale.",
            buttonText: "BUY NOW",
            buttonText2: "READ MORE",
            img: cart
        }
    ],
    // Featured Posts (Blog)
    posts: [
        {
            id: 1,
            tag: "NEW",
            title: "Loudest à la Madison #1 (L'integral)",
            desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            date: "22 April 2021",
            comments: "10 comments",
            img: featured1
        },
        {
            id: 2,
            tag: "NEW",
            title: "Loudest à la Madison #1 (L'integral)",
            desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            date: "22 April 2021",
            comments: "10 comments",
            img: featured2
        },
        {
            id: 3,
            tag: "NEW",
            title: "Loudest à la Madison #1 (L'integral)",
            desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            date: "22 April 2021",
            comments: "10 comments",
            img: featured3
        }
    ],
    shop: {
        categories: [
            { name: "CLOTHS", items: "5 Items", img: shoppage1 },
            { name: "CLOTHS", items: "5 Items", img: slider1 },
            { name: "CLOTHS", items: "5 Items", img: shoppage2 },
            { name: "CLOTHS", items: "5 Items", img: shoppage3 },
            { name: "CLOTHS", items: "5 Items", img: shoppage4 }
        ],
        brands: [
            { id: 1, name: "hooli", img: hooli },
            { id: 2, name: "lyft", img: lyft },
            { id: 3, name: "piper hat", img: piperHat },
            { id: 4, name: "stripe", img: stripe },
            { id: 5, name: "aws", img: aws },
            { id: 6, name: "reddit", img: reddit }
        ]
    },
    shopProducts: [
        {
            id: 1,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: men
        },
        {
            id: 2,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: women
        },
        {
            id: 3,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: shop1
        },
        {
            id: 4,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: kids
        },
        {
            id: 5,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: shop2
        },
        {
            id: 6,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: shop3
        },
        {
            id: 7,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: shop4
        },
        {
            id: 8,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: shop5
        },
        {
            id: 9,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: shop6
        },
        {
            id: 10,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: shop7
        },
        {
            id: 11,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: shop8
        },
        {
            id: 12,
            title: "Graphic Design",
            department: "English Department",
            price: "$16.48",
            salePrice: "$6.48",
            colors: ["bg-sky-500", "bg-emerald-600", "bg-orange-500", "bg-slate-800"],
            image: shop9
        },
    ],
    contactOffices:[
        { city: 'Paris', address: '1901 Thorn ridge Cir.', zip: '75000 Paris' },
        { city: 'New York', address: '2715 Ash Dr. San Jose,', zip: '75000 Paris' },
        { city: 'Berlin', address: '4140 Parker Rd.', zip: '75000 Paris' }, 
        { city: 'London', address: '3517 W. Gray St. Utica,', zip: '75000 Paris' }
    ],
    team: {
        title: "Meet Our Team",
        subtitle: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
        members: [
            { id: 1, name: "Gökhan Özdemir", role: "Project Manager", company: "Mitsubishi", tagline: "the quick fox jumps over the lazy dog", image: team1 },
            { id: 2, name: "Beyza Gürsoy", role: "Full Stack Developer", company: "Mitsubishi", tagline: "the quick fox jumps over the lazy dog", image: team2 },
            { id: 3, name: "Eleanor Pena", role: "Founder", company: "Mitsubishi", tagline: "the quick fox jumps over the lazy dog", image: team3 },
            { id: 4, name: "Marvin McKinney", role: "Founder", company: "Mitsubishi", tagline: "the quick fox jumps over the lazy dog", image: team4 },
            { id: 5, name: "Floyd Miles", role: "Founder", company: "Mitsubishi", tagline: "the quick fox jumps over the lazy dog", image: team5 },
            { id: 6, name: "Jenny Wilson", role: "Founder", company: "Mitsubishi", tagline: "the quick fox jumps over the lazy dog", image: team6 },
            { id: 7, name: "Ronald Richards", role: "Founder", company: "Mitsubishi", tagline: "the quick fox jumps over the lazy dog", image: team7 },
            { id: 8, name: "Dianne Russell", role: "Founder", company: "Mitsubishi", tagline: "the quick fox jumps over the lazy dog", image: team8 },
            { id: 9, name: "Devon Lane", role: "Founder", company: "Mitsubishi", tagline: "the quick fox jumps over the lazy dog", image: team9 },
        ]
    },
};