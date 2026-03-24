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
            img: slider1
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
    ]
};