# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"

User.destroy_all 

User.create!([{
    username: "Demo User",
    email: "demo@demo.com",
    password: "password"

}])

Product.destroy_all 

product1 = Product.create!(
    item_name: "Demon Slayer: Kimetsu no Yaiba, Vol. 1 (1)",
    item_description: "Tanjiro sets out on the path of the Demon Slayer to save his sister and avenge his family!

    In Taisho-era Japan, kindhearted Tanjiro Kamado makes a living selling charcoal. But his peaceful life is shattered when a demon slaughters his entire family. His little sister Nezuko is the only survivor, but she has been transformed into a demon herself! Tanjiro sets out on a dangerous journey to find a way to return his sister to normal and destroy the demon who ruined his life.
    
    Learning to destroy demons won't be easy, and Tanjiro barely knows where to start. The surprise appearance of another boy named Giyu, who seems to know what's going on, might provide some answers—but only if Tanjiro can stop Giyu from killing his sister first!",

    item_price: 10,
    category: "Book"
)

product1.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/demonslayerPhoto.jpeg"),filename: "demonslayer.jpg")

product2 = Product.create!(
    item_name: "Apple Watch Ultra [GPS + Cellular 49mm] Smart Watch w/Rugged Titanium Case & Orange Alpine Loop Small. Fitness Tracker, Precision GPS, Action Button, Extra-Long Battery Life, Brighter Retina Display",
    item_description: "Rugged and capable, built to meet the demands of endurance athletes, outdoor adventurers, and water sports enthusiasts — with a specialized band for each. Up to 36 hours of battery life, plus all the Apple Watch features that help you stay healthy, safe, and connected.",
    item_price: 790,
    category: "Electronics"
)

product2.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/applewatch.jpg"),filename: "applewatch.jpg")


product3 = Product.create!(
    item_name: "Kindle Oasis - With 7” display and page turn buttons",
    item_description: "Display

    Amazon's 7” Paperwhite display technology with next generation e-paper and built-in light, 300 ppi, optimized font technology, 16-level gray scale.
    
    Size
    
    6.3” x 5.6” x 0.13-.33” (159 x 141 x 3.4-8.4 mm).
    
    Weight
    
    6.6 oz (188g); Actual size and weight may vary by configuration and manufacturing process.
    
    System Requirements
    
    None; fully wireless and doesn't require a computer to download content.
    
    On-Device Storage
    
    8 GB holds thousands of books or over 35 Audible audiobooks; 32 GB holds thousands of books or over 160 Audible audiobooks; Audible audiobook capacity based on average Audible audiobook size.
    
    Cloud Storage
    
    Free cloud storage for all Amazon content.
    
    Battery Life
    
    A single charge lasts up to six (6) weeks, based on a half hour of reading per day with wireless and Bluetooth off and the light setting at 13. Battery life will vary based on light settings, wireless usage. Audible audiobook streaming over Bluetooth will reduce battery life.
    
    Charge Time
    
    Fully charges in approximately 3 hours from a 5W power adapter or computer via USB cable.
    
    Wi-Fi Connectivity
    
    Supports public and private Wi-Fi networks or hotspots that use the 802.11b, g, or n standards with support for WEP, WPA and WPA2 security using password authentication or Wi-Fi Protected Setup (WPS).
    
    Set-up technology
    
    Amazon Wi-Fi simple setup automatically connects to your home Wi-Fi network. Learn more about Wi-Fi setup.",
    item_price: 279,
    category: "Electronics"
)

product3.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/kindle.jpg"),filename: "kindle.jpg")


product4 = Product.create!(
    item_name: "Reebok Unisex-Adult Nano X3 Sneaker",
    item_description: "Responsive and Flexible: Floatride Energy Foam provides lightweight, responsive cushioning while maintaining the stability of these men's and women's training shoes, making running the easiest part of working out",
    item_price: 97,
    category: "Fitness"
)

product4.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/nanox3.jpg"),filename: "nanox3.jpg")

product5 = Product.create!(
    item_name: "Herschel Supply Co. Tech Daypack Mid Raven Crosshatch One Size",
    item_description: "The perfect bag for day trips is here! Get ready in a flash with the crucial Herschel Supply Co. Tech Daypack Mid. Classic lightweight daypack design. Constructed in a durable polyester ripstop. Single front pocket for additional storage. Internal storage pockets with zipper closure. Additional slip-pockets within main compartment for extra stowaway space. Adjustable webbing straps for a custom fit. Exposed plastic zippers. Signature solid-color polyester lining. Spot clean.",
    item_price: 130,
    category: "Apparel"
)

product5.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/backpack.webp"),filename: "backpack.jpg")

product6 = Product.create!(
    item_name: "Unisex UA SlipSpeed™ Training Shoes",
    item_description: "These are the most versatile training shoes we've ever made. They feel great, feel cool, cushion better, fit perfectly, handle your toughest training, AND have a heel that converts easily from recover mode to train mode.(Also, Amin loves them)",
    item_price: 150,
    category: "Apparel"
)

product6.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/UA+sneakers.webp"),filename: "uasneakers.jpg")

product7 = Product.create!(
    item_name: "True Classic Tees Premium Fitted Men's T-Shirts - 4 Pack Crew Neck",
    item_description: "True Classic makes quality clothing for real people. Based in Los Angeles, CA, we bring the best possible apparel to your doorstep — for a fraction of the price. With 75,000+ four-star reviews, we leave no one behind in the quest for the perfect fit. It’s why we donate over 15,000 t-shirts a month to communities in need. We craft our products with feel-good fabrics and a perfect fit formula you can trust, so you can go about your day confident & comfortable.",
    item_price: 80,
    category: "Apparel"
)

product7.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/tshirts.jpg"),filename: "tshirts.jpg")

product8 = Product.create!(
    item_name: "Giant Unicorn Inflatable Bounce House with Slide | 8.5 FT x 9 FT x 11.5 FT | Bouncy House for Kids Outdoor with Trampoline and Slide | Heavy Duty Easy to Set Up | Bounce House with Blower & Carry Bag",
    item_description: "Once inflated, our unicorn bounce house can hold up to 200 lbs for a safe time while kids jump around! Our house has been tested for quality and is durable enough to support multiple kids playing in the bounce house.",
    item_price: 400,
    category: "Fitness"
)

product8.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/bounceyhouse.jpg"),filename: "bouncyhouse.jpg")

product9 = Product.create!(
    item_name: "NBA Street V3 - PlayStation 2 ",
    item_description: "Play on 12 authentic courts around the world, from Rucker Park in NYC to Venice Beach, California -- even courts in Europe
    Go wild with the Gamebreakers - turn combos into a 3-man aerial dunk assault
    The Trick Stick gives you complete control of the rock -- take your dunka nd slams further, and make up your own crazy moves
    Show off your style with over 1,000 different custom options - hairstyles, gear and accessories are yours to play with
    Build and customize your home court from the ground up - Create a home court advantage with new court surface, net, and backboard styles",
    item_price: 50,
    category: "Electronics"
)

product9.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/nbastreet3.webp"),filename: "nbastreet.jpg")

product10 = Product.create!(
    item_name: "Superocean Héritage B20 Automatic 42",
    item_description: "Stylish, reliable, and robust, the Superocean Héritage II is a practical everyday companion. Its stainless-steel case with screwed-in case back has a diameter of 42 millimeters and measures 14.3 millimeters thick, while offering water resistance of up to 20 bar. The rubber strap has a 1950s air about it. Meanwhile, the watch's blue dial is lined with gold hour markers, making it a veritable eye-catcher for everyday wear.",
    item_price: 6500,
    category: "Apparel"
)

product10.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/watch.webp"),filename: "watch.jpg")

product11 = Product.create!(
    item_name: "Metal Gear Solid: Master Collection Vol.1 (PS5)",
    item_description: "METAL GEAR SOLID: MASTER COLLECTION Vol. 1 contains “Metal Gear Solid,” “Metal Gear Solid 2: Sons of Liberty,” “Metal Gear Solid 3: Snake Eater” and much more bonus content. Bonus content includes the first title in the METAL GEAR series, a Screenplay Book containing in-game text of each title and a Master Book detailing the story and characters. Also included in the bonus content of the METAL GEAR SOLID: MASTER COLLECTION Vol. 1 will be two digital graphic novels. The Metal Gear Solid: Digital Graphic Novel is a fully voiced, digital comic depicting the events of Metal Gear Solid through beautifully dynamic animated panels, followed by Metal Gear Solid 2: Digital Graphic Novel that expands on the events of the sequel.",
    item_price: 59,
    category: "Electronics"
)

product11.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/metalgear.jpg"),filename: "metalgear.jpg")

product13 = Product.create!(
    item_name: "Disney Men's Baseball Cap, Mickey Mouse Adjustable Hat for Adult",
    item_description: "The dad hat has become a staple in many hat lovers collections, and for good reason. The soft, unstructured cotton creates an incredibly comfortable fit that will only get better with age. As you wear it more the hat will break in, be careful though you might never want to take it off. This will truly be your favorite hat in no time. For over 50 years, ABG Accessories has been a leader in the headwear industry, providing unsurpassed quality and service with honesty and integrity. We use our deep expertise in headwear to create thousands of unique designs each year for hundreds of Retail and private label Brands. Outdoor Cap headwear is designed in the USA.",
    item_price: 14,
    category: "Apparel"
)

product13.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/mickeyhat.jpg"),filename: "mickeyhat.jpg")

product14 = Product.create!(
    item_name: "SOUR PATCH KIDS Watermelon Soft & Chewy Candy, Family Size, 4 - 1.8 lb Bags",
    item_description: "Enjoy a sour twist on your favorite summer flavor with SOUR PATCH KIDS Watermelon Soft & Chewy Candy. Intense watermelon flavor fills each SOUR THEN SWEET candy for a summery blast to your taste buds, and they're shaped like watermelon slices to add excitement to your candy snacking experience. A fat free food, this pink and green candy is the perfect sweet end to your day. Keep this fruit flavored candy on hand for a quick sour treat or as party favors for Halloween, Valentine's Day or birthdays. SOUR PATCH KIDS watermelon candy also makes a great movie theater candy to snack on during your favorite flick. This bagged candy gives you plenty to share, so everyone can enjoy a SOUR THEN SWEET treat. Each package of green and pink candy is sealed to ensure the sour candies stay soft, chewy and full of watermelon flavor. Stay stocked with bulk candy so you're always ready with a sweet treat at snack time.",
    item_price: 27,
    category: "Fitness"
)

product14.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/sourpatchkids.jpg"),filename: "sourpatch.jpg")

product15 = Product.create!(
    item_name: "Benelli Bike 29'' Carbon Mountain 18 Speed, Brake Disc, Light-Weight Hardtail Frame (Large, Yellow Black) M22 4.0 ADV 29 CARB",
    item_description: "Benelli M22 4.0 ADV 29 Carbon Frame Leading off the Benelli carbon fiber 29er range is the M22 4.0 ADV CARB 29, a purebred XC machine that has everything you need to start racing. The hardtail design with 100mm of front fork travel offers high quality suspension and a lockout mode for breakneck past on flatter terrain.The ultra-lightweight T800 carbon fiber frame— at the heart of each bike in the line-up— is super stiff to transfer all your pedaling power into sheer speed. The dependable Shimano Altus drivechain has three front chainrings and a 9-speed cassette, so you'll always be able to find the perfect gear combination to optimize your cadence. The terrain-loving 29er alloy wheels are cut out for XC competition and roll fast with their grippy CST 2.1” tires.Enjoy weekend circuits and hardcore training rides with this all-time favorite of the Benelli team. Our engineers thought of everything, and tricked out the M22 4.0 ADV CARB 29 to be featherweight and lightning quick out there on the XC race course.Innovative design inspired by pure Italian passion.Strong and lightweight T800 carbon frame with Shimano Altus components. Everything you need to get into XC racing on a top-tier bike with amazing handling.",
    item_price: 1289,
    category: "Fitness"
)

product15.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/bike.jpg"),filename: "bike.jpg")

product16 = Product.create!(
    item_name: "Dragon Ball Z Complete Box Set: Vols. 1-26 with premium",
    item_description: "The Dragon Ball Z Complete Box Set contains all 26 volumes of the manga that propelled the global phenomenon that started with Dragon Ball into one of the world's most recognizable and best-selling manga. Also includes an exclusive double-sided poster and collector's booklet featuring fun Dragon Ball Z trivia and guides as well as an interview with its legendary creator.",
    item_price: 120,
    category: "Book"
)

product16.photo.attach(io: URI.open("https://theozon-dev.s3.amazonaws.com/dragonball.jpeg"),filename: "dragonball.jpg")

