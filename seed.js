const mongoose = require('mongoose');
const Product = require('./models/product');


const products = [
    {
        name: "Iphone 12",
        img: "https://images.unsplash.com/photo-1605637064671-c03a5fae76cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: "Macbook Pro",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 900000,
        desc:"It’s razor thin, feather light, and even faster and more powerful than before. It has the brightest, most colorful Mac notebook display ever. And it features the Touch Bar—a Multi-Touch enabled strip of glass built into the keyboard for instant access to the tools you want, right when you want them. MacBook Pro is built on groundbreaking ideas. And it’s ready for yours."
    },
    {
        name: "Titan Watch",
        img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 20000,
        desc:"Exuding modern day styling, this analog watch from Titan is specially made to exhibit masculine charm. Protected by mineral glass, the white round dial features plain three hands to facilitate reading ease. Crafted from premium quality genuine leather, the strap showcases a shade of brown that lends it a rich look. Besides, the buckle clasp ensures your wrist a proper fit. Team it with an elegant outfit to make a style statement."
    },
    {
        name: "HP Laptop",
        img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"THP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage.Graphics are powered by Intel HD Graphics 620. Connectivity options include Wi-Fi 802.11 ac and it comes with 3 USB ports (1 x USB 2.0), HDMI Port, Multi Card Slot, Headphone and Mic Combo Jack, RJ45 (LAN) ports."
    },
    {
        name: "Rolex",
        img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 12499,
        desc:"Wearing a Rolex watch enables entry into a world of unlimited possibilities. Rolex's story began when founder Hans Wilsdorf created the first waterproof wristwatch – the Oyster – and developed into a range of timepieces that have become icons of watchmaking."
    },
    {
        name: "BoAt Headphones",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"Let's put an end to your worries about wires hanging and getting tangled with BoAt Rockerz 400 and connect with any Bluetooth device, connect and play. Dead batteries can kill your vibe. boAt Rockerz bluetooth headphones are designed to play Up to 8 hours. It has a High Definition Sound. Don't just be loud, be loud and clear. We guarantee you have not heard such powerful bass and vocal clarity from a wireless headphone. The boAt Super Bass Rockerz 400 wireless headphones will make your listening experience personal and for real. Plug it in and Plug into Nirvana."
    },
    {
        name: "Drone",
        img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 10000,
        desc:"all-in-one camera drone designed for creators on the move. It offers a 1-inch CMOS sensor, 5.4K video recording, an innovative MasterShots feature, 12km 1080p video transmission, four-directional obstacle sensing, and more. This is the perfect way to turn any adventure into a stunning visual creation."
    },

]

const seedDB = async ()=>{
    
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports = seedDB;

