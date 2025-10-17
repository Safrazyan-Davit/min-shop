export const slider = [
    {
        id: 1,
        title: 'Trending item',
        description: "Women's latest fashion sale",
        price: '20.00',
        image: 'https://i.postimg.cc/nLZD7dvM/banner-1.jpg'
    }, {
        id: 2,
        title: 'Trending accessories',
        description: "Modern sunglasses",
        price: '15',
        image: 'https://i.postimg.cc/HLx7BrhD/banner-2.jpg'
    }, {
        id: 3,
        title: 'Sale Offer',
        description: "New fashion summer sale",
        price: '29.00',
        image: 'https://i.postimg.cc/pV85Gbqd/banner-3.jpg'
    }
]

export const categoriesList = [
    {
        id: 1,
        status: 'both',
        title: 'Dress & frock',
        thumbName: 'Clothes',
        thumbImage: "https://i.postimg.cc/QMn41Ngx/dress.png",
        count: 10
    }, {
        id: 2,
        status: 'slide',
        title: 'Winter wear',
        thumbName: '',
        thumbImage: "https://i.postimg.cc/XJjjG8gk/coat.png",
        count: 10
    }, {
        id: 3,
        status: 'both',
        title: 'Glasses & lens',
        thumbName: 'Glasses',
        thumbImage: "https://i.postimg.cc/GpQrCD15/glasses.png",
        count: 10
    }, {
        id: 4,
        status: 'slide',
        title: 'Shorts & jeans',
        thumbName: '',
        thumbImage: "https://i.postimg.cc/kDrL8MmK/shorts.png",
        count: 10
    }, {
        id: 5,
        status: 'menu',
        title: 'Bags',
        thumbName: 'Bags',
        thumbImage: "https://i.postimg.cc/KjXRKLRR/bag.png",
        count: 10
    },
]

export const subcategoriesList = [
    // 1️⃣ Dress & frock
    {id: 1, status: 'active', thumbName: 'Evening Dresses', category_id: 1},
    {id: 2, status: 'active', thumbName: 'Casual Dresses', category_id: 1},
    {id: 3, status: 'inactive', thumbName: 'Party Frocks', category_id: 1},
    {id: 4, status: 'active', thumbName: 'Maxi Dress', category_id: 1},
    {id: 5, status: 'active', thumbName: 'Mini Dress', category_id: 1},
    {id: 6, status: 'inactive', thumbName: 'Lace Dress', category_id: 1},
    {id: 7, status: 'active', thumbName: 'Floral Frock', category_id: 1},

    // 2️⃣ Winter wear
    {id: 8, status: 'active', thumbName: 'Jackets', category_id: 2},
    {id: 9, status: 'inactive', thumbName: 'Coats', category_id: 2},
    {id: 10, status: 'active', thumbName: 'Sweaters', category_id: 2},
    {id: 11, status: 'active', thumbName: 'Woolen Caps', category_id: 2},
    {id: 12, status: 'inactive', thumbName: 'Mufflers', category_id: 2},
    {id: 13, status: 'active', thumbName: 'Thermal Wear', category_id: 2},
    {id: 14, status: 'active', thumbName: 'Cardigans', category_id: 2},

    // 3️⃣ Glasses & lens
    {id: 15, status: 'active', thumbName: 'Sunglasses', category_id: 3},
    {id: 16, status: 'inactive', thumbName: 'Reading Glasses', category_id: 3},
    {id: 17, status: 'active', thumbName: 'Contact Lens', category_id: 3},
    {id: 18, status: 'active', thumbName: 'Aviator Glasses', category_id: 3},
    {id: 19, status: 'active', thumbName: 'Sports Glasses', category_id: 3},
    {id: 20, status: 'inactive', thumbName: 'Anti-blue Lens', category_id: 3},
    {id: 21, status: 'active', thumbName: 'Round Frame', category_id: 3},

    // 4️⃣ Shorts & jeans
    {id: 22, status: 'active', thumbName: 'Denim Shorts', category_id: 4},
    {id: 23, status: 'inactive', thumbName: 'Cotton Shorts', category_id: 4},
    {id: 24, status: 'active', thumbName: 'Skinny Jeans', category_id: 4},
    {id: 25, status: 'active', thumbName: 'Ripped Jeans', category_id: 4},
    {id: 26, status: 'inactive', thumbName: 'Cargo Shorts', category_id: 4},
    {id: 27, status: 'active', thumbName: 'High Waist Jeans', category_id: 4},
    {id: 28, status: 'active', thumbName: 'Classic Fit', category_id: 4},

    // 5️⃣ Bags
    {id: 29, status: 'active', thumbName: 'Handbags', category_id: 5},
    {id: 30, status: 'inactive', thumbName: 'Shoulder Bags', category_id: 5},
    {id: 31, status: 'active', thumbName: 'Backpacks', category_id: 5},
    {id: 32, status: 'active', thumbName: 'Tote Bags', category_id: 5},
    {id: 33, status: 'inactive', thumbName: 'Laptop Bags', category_id: 5},
    {id: 34, status: 'active', thumbName: 'Travel Bags', category_id: 5},
    {id: 35, status: 'active', thumbName: 'Wallets', category_id: 5}
]


export const products = [
    {
        "id": "P-469",
        "name": "Smart Watch Vital Plus #469",
        "category_id": 5,
        "subcategory_id": 29,
        "price": 158.04,
        "old_price": 226.54,
        "currency": "USD",
        "rating": 4.0,
        "reviews": 121,
        "status": "active",
        "tags": [
            "Top Rated",
            "New Arrivals"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-470",
        "name": "Woman Party Wear Shoes #470",
        "category_id": 3,
        "subcategory_id": 18,
        "price": 197.78,
        "old_price": 232.07,
        "currency": "USD",
        "rating": 3.7,
        "reviews": 184,
        "status": "active",
        "tags": [
            "New Arrivals"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-471",
        "name": "Trekking & Running Shoes - Black #471",
        "category_id": 5,
        "subcategory_id": 35,
        "price": 45.78,
        "old_price": 229.79,
        "currency": "USD",
        "rating": 3.6,
        "reviews": 31,
        "status": "inactive",
        "tags": [
            "New Arrivals",
            "New Products"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-472",
        "name": "Mens Leather Formal Wear Shoes #472",
        "category_id": 3,
        "subcategory_id": 15,
        "price": 118.45,
        "old_price": 267.73,
        "currency": "USD",
        "rating": 3.8,
        "reviews": 51,
        "status": "active",
        "tags": [
            "New Products",
            "Best Sellers"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-473",
        "name": "Seam Relaxa French Terry Sweatshorts #473",
        "category_id": 3,
        "subcategory_id": 15,
        "price": 163.02,
        "old_price": 205.81,
        "currency": "USD",
        "rating": 3.5,
        "reviews": 28,
        "status": "active",
        "tags": [
            "Best Sellers",
            "Top Rated"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-474",
        "name": "Mens Winter Leathers Jackets #474",
        "category_id": 1,
        "subcategory_id": 2,
        "price": 191.23,
        "old_price": 277.94,
        "currency": "USD",
        "rating": 4.9,
        "reviews": 160,
        "status": "inactive",
        "tags": [
            "Top Rated"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-475",
        "name": "Pure Garment Dyed Cotton Shirt #475",
        "category_id": 3,
        "subcategory_id": 18,
        "price": 32.1,
        "old_price": 214.63,
        "currency": "USD",
        "rating": 4.3,
        "reviews": 116,
        "status": "active",
        "tags": [
            "New Arrivals"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-476",
        "name": "MEN Yarn Fleece Full-Zip Jacket #476",
        "category_id": 1,
        "subcategory_id": 4,
        "price": 140.19,
        "old_price": 287.21,
        "currency": "USD",
        "rating": 4.7,
        "reviews": 44,
        "status": "active",
        "tags": [
            "Trending",
            "New Products"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-477",
        "name": "Black Floral Wrap Midi Skirt #477",
        "category_id": 3,
        "subcategory_id": 18,
        "price": 97.66,
        "old_price": 286.7,
        "currency": "USD",
        "rating": 4.0,
        "reviews": 104,
        "status": "inactive",
        "tags": [
            "New Arrivals",
            "Trending"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-478",
        "name": "Casual Men's Brown Shoes #478",
        "category_id": 1,
        "subcategory_id": 1,
        "price": 96.14,
        "old_price": 268.96,
        "currency": "USD",
        "rating": 4.0,
        "reviews": 112,
        "status": "active",
        "tags": [
            "Best Sellers"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-479",
        "name": "Pocket Watch Leather Pouch #479",
        "category_id": 3,
        "subcategory_id": 15,
        "price": 188.2,
        "old_price": 211.68,
        "currency": "USD",
        "rating": 4.8,
        "reviews": 17,
        "status": "active",
        "tags": [
            "New Arrivals",
            "New Products"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-480",
        "name": "Smart Watch Vital Plus #480",
        "category_id": 4,
        "subcategory_id": 27,
        "price": 97.1,
        "old_price": 215.14,
        "currency": "USD",
        "rating": 4.4,
        "reviews": 89,
        "status": "inactive",
        "tags": [
            "Top Rated"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-481",
        "name": "Woman Party Wear Shoes #481",
        "category_id": 3,
        "subcategory_id": 18,
        "price": 152.88,
        "old_price": 273.15,
        "currency": "USD",
        "rating": 3.7,
        "reviews": 182,
        "status": "active",
        "tags": [
            "New Products"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-482",
        "name": "Trekking & Running Shoes - Black #482",
        "category_id": 3,
        "subcategory_id": 16,
        "price": 66.72,
        "old_price": 243.22,
        "currency": "USD",
        "rating": 4.8,
        "reviews": 192,
        "status": "active",
        "tags": [
            "Top Rated"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-483",
        "name": "Mens Leather Formal Wear Shoes #483",
        "category_id": 3,
        "subcategory_id": 15,
        "price": 112.16,
        "old_price": 263.79,
        "currency": "USD",
        "rating": 4.8,
        "reviews": 173,
        "status": "active",
        "tags": [
            "New Products",
            "Trending"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-484",
        "name": "Seam Relaxa French Terry Sweatshorts #484",
        "category_id": 3,
        "subcategory_id": 16,
        "price": 123.8,
        "old_price": 286.28,
        "currency": "USD",
        "rating": 4.7,
        "reviews": 64,
        "status": "active",
        "tags": [
            "New Arrivals",
            "Trending",
            "New Products"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-485",
        "name": "Mens Winter Leathers Jackets #485",
        "category_id": 4,
        "subcategory_id": 27,
        "price": 194.95,
        "old_price": 207.73,
        "currency": "USD",
        "rating": 4.4,
        "reviews": 39,
        "status": "inactive",
        "tags": [
            "New Arrivals",
            "Best Sellers"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-486",
        "name": "Pure Garment Dyed Cotton Shirt #486",
        "category_id": 5,
        "subcategory_id": 35,
        "price": 181.99,
        "old_price": 248.38,
        "currency": "USD",
        "rating": 4.6,
        "reviews": 45,
        "status": "inactive",
        "tags": [
            "New Arrivals",
            "Trending",
            "New Products"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-487",
        "name": "MEN Yarn Fleece Full-Zip Jacket #487",
        "category_id": 5,
        "subcategory_id": 32,
        "price": 103.65,
        "old_price": 218.69,
        "currency": "USD",
        "rating": 3.6,
        "reviews": 147,
        "status": "active",
        "tags": [
            "Top Rated"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-488",
        "name": "Black Floral Wrap Midi Skirt #488",
        "category_id": 1,
        "subcategory_id": 1,
        "price": 102.48,
        "old_price": 232.63,
        "currency": "USD",
        "rating": 3.6,
        "reviews": 120,
        "status": "active",
        "tags": [
            "New Products",
            "Best Sellers",
            "New Arrivals"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
    {
        "id": "P-489",
        "name": "Casual Men's Brown Shoes #489",
        "category_id": 5,
        "subcategory_id": 30,
        "price": 147.31,
        "old_price": 258.84,
        "currency": "USD",
        "rating": 3.7,
        "reviews": 24,
        "status": "inactive",
        "tags": [
            "Best Sellers",
            "Trending",
            "Top Rated"
        ],
        "image_url": "https://i.postimg.cc/GhdtXBBC/blog-4.jpg"
    },
]


export const TestimonialInfo = {
    section1: {
        title: "Testimonial",
        name: "Alan Doe",
        position: `CEO &amp; Founder Invision`,
        text: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.\n',
        image: 'https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760704570279-mhcuobcon-1760704568122_6z89q8_testimonial-1.jpg'
    },
    section2: {
        title: 'Summer collection',
        percent: "20% Discount",
        text:'Starting @ $10',
        image:'https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760704694960-enp6aimfqxj-1760704694489_fsrigo_cta-banner.jpg'
    },
    section3:[
        {
            id: 1,
            title: "Worldwide Delivery",
            desc: "For Order Over $100",
            icon: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760704621734-9twywah6lek-1760704621416_ztpu3t_quotes.svg"
        },
        {
            id:2,
            title: "Next Day delivery",
            desc: "UK Orders Only",
            icon: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760704621734-9twywah6lek-1760704621416_ztpu3t_quotes.svg"
        },
        {
            id:3,
            title: "Best Online Support",
            desc: "Hours: 8AM - 11PM",
            icon: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760704621734-9twywah6lek-1760704621416_ztpu3t_quotes.svg"
        },
        {
            id:4,
            title: "Return Policy",
            desc: "Easy & Free Return",
            icon: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760704621734-9twywah6lek-1760704621416_ztpu3t_quotes.svg"
        },
        {
            id: 5,
            title: "30% money back",
            desc: "For Order Over $100",
            icon: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760704621734-9twywah6lek-1760704621416_ztpu3t_quotes.svg"
        }
    ]

}

export const blogs = [
    {
        id: 1,
        category: "Fashion",
        title: "Clothes Retail KPIs 2021 Guide for Clothes Executives.",
        author: "Mr Admin",
        date: "Apr 06, 2022",
        image: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760706416165-s9k1p712pv8-1760706415671_xyetvy_blog-2.jpg",
        alt: "Clothes Retail KPIs 2021 Guide for Clothes Executives"
    },
    {
        id: 2,
        category: "Clothes",
        title: "Curbside fashion Trends: How to Win the Pickup Battle.",
        author: "Mr Robin",
        date: "Jan 18, 2022",
        image: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760706383298-3ec0ohszz6h-1760706381130_1e99t2_blog-1.jpg",
        alt: "Curbside fashion Trends: How to Win the Pickup Battle"
    },
    {
        id: 3,
        category: "Shoes",
        title: "EBT vendors: Claim Your Share of SNAP Online Revenue.",
        author: "Mr Selsa",
        date: "Feb 10, 2022",
        image: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760706484972-d6sdkbr1q3a-1760706484704_yfwpj5_blog-4.jpg",
        alt: "EBT vendors: Claim Your Share of SNAP Online Revenue"
    },
    {
        id: 4,
        category: "Electronics",
        title: "Curbside fashion Trends: How to Win the Pickup Battle.",
        author: "Mr Pawar",
        date: "Mar 15, 2022",
        image: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760706456655-bf7kdnb0h9g-1760706456130_e949cw_blog-3.jpg",
        alt: "Curbside fashion Trends: How to Win the Pickup Battle"
    }
];


export const showcases = [
    {
        id: 1,
        title: "Shampoo, Conditioner & Facewash Packs",
        desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
        price: 150.0,
        oldPrice: 200.0,
        sold: 20,
        available: 40,
        rating: 3,
        image: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760707090826-hmc8yk17stc-1760707088718_oczwov_shampoo.jpg",
        alt: "shampoo, conditioner & facewash packs",
        countdown: {
            days: 360,
            hours: 24,
            minutes: 59,
            seconds: 0
        }
    },
    {
        id: 2,
        title: "Rose Gold Diamonds Earring",
        desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
        price: 1990.0,
        oldPrice: 2000.0,
        sold: 15,
        available: 40,
        rating: 3,
        image: "https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760707129706-v782z7vdp3n-1760707129275_3undwj_jewellery-1.jpg",
        alt: "Rose Gold diamonds Earring",
        countdown: {
            days: 360,
            hours: 24,
            minutes: 59,
            seconds: 0
        }
    }
];
