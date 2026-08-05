import { useState } from "react";
import siteData from "./siteData.generated.json";

const asset = (name) => `/assets/${name}`;

const clean = (value = "") =>
  String(value)
    .replace(/閳ユ獩/g, "'t")
    .replace(/閳ユ獨/g, "'s")
    .replace(/閳ユ獫/g, "'v")
    .replace(/閳ユ獧/g, "'r")
    .replace(/閳ユ獟/g, "'l")
    .replace(/閳ユ獓/g, "'d")
    .replace(/閳?/g, "'")
    .replace(/閳ユ攣/g, " - a")
    .replace(/閳ユ攤/g, " - b")
    .replace(/閳ユ攩/g, " - f")
    .replace(/閳ユ攪/g, " - g")
    .replace(/閳ユ攰/g, " - i")
    .replace(/閳ユ攲/g, " - k")
    .replace(/閳ユ敃/g, " - s")
    .replace(/閳ユ敄/g, " - t")
    .replace(/閳ユ攣/g, " - a")
    .replace(/閳ユ敄/g, " - t")
    .replace(/閳ユ攪/g, " - g")
    .replace(/閳ユ攰/g, " - i")
    .replace(/閳/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&hellip;/g, "...")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const productCategories = [
  "wholesale-gummy-manufacturer",
  "3d-gummy-candy-manufacturer",
  "peelable-gummy-candy-supplier",
  "bulk-sour-gummies",
  "filled-gummy-candies-supplier",
  "wholesale-nonpareils-gummy",
  "bulk-licorice-candy",
  "jelly-bean-wholesale",
  "wholesale-marshmallows",
  "wholesale-chocolate-candy",
];

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/wholesale-candy-supplier/",
    items: productCategories.map((slug) => {
      const cat = siteData.categories.find((item) => item.slug === slug);
      return { label: cat?.name || slug, href: `/product-category/${slug}/` };
    }),
  },
  { label: "Market", href: "/soft-candy-supplier/" },
  { label: "Custom Service", href: "/custom-candy-manufacturer/" },
  {
    label: "About",
    href: "/candy-manufacturing-company/",
    items: [
      { label: "Capability", href: "/candy-manufacturing-capability/" },
    ],
  },
  { label: "Contact", href: "/contact/" },
];

const products = [
  ["Chewy Gummy Candies", "Lechao carefully crafted the wholesale gummy candy series, which is not only delicate and resilient, but also blends a variety of juice flavors to make every bite full of surprises.", "View All Wholesale Gummies", "/product-category/wholesale-gummy-manufacturer/", "cat-gummy.webp"],
  ["Intense Licorice Candies", "Our line of wholesale licorice ribbons adds a fun and flavorful twist to traditional gummies. These vibrant, chewy licorice ribbons deliver the perfect balance of sweet and tart.", "View All Wholesale Licorice Candies", "/product-category/bulk-licorice-candy/", "cat-licorice.webp"],
  ["Fluffy Marshmallows", "LeChao's wholesale marshmallow range comes in a variety of flavors, shapes, sizes and bright colors that are loved by children and adults alike.", "View All Wholesale Marshmallows", "/product-category/wholesale-marshmallows/", "cat-marshmallow.webp"],
  ["Colorful Jelly Beans", "Premium wholesale jelly beans in assorted flavors and colors. Ideal for retail, events, and corporate gifting. Fresh, vibrant, and competitively priced.", "View All Wholesale Jelly Beans", "/product-category/jelly-bean-wholesale/", "cat-jelly.webp"],
  ["Smooth Chocolate Candies", "Lechao's range of wholesale chocolate candies is the perfect treat for all chocolate lovers, with a variety of delicious flavors, shapes, and fillings to suit every preference.", "View All Wholesale Chocolate Candies", "/product-category/wholesale-chocolate-candy/", "cat-chocolate.webp"],
];

const heroPanels = [
  ["Soft Candy Manufacturer Since 1991", "Factory-direct gummy, jelly bean, marshmallow, licorice, and chocolate candy programs.", "home-soft-candy.webp", "/candy-manufacturing-company/"],
  ["Your Trusted Custom Soft Candy Manufacturer", "Custom gelatin, flavor, color, shape, coating, and packaging solutions for your candy brand.", "home-hero-custom.webp", "/custom-candy-manufacturer/"],
  ["Novel 3D / 4D Gummy Candy", "Trend-led shapes, molds, flavors, and packaging for private-label candy brands.", "home-gummy.webp", "/product-category/3d-gummy-candy-manufacturer/"],
  ["Premium Wholesale Licorice Candy", "Colorful chewy licorice candy with flexible bulk and retail packaging options.", "home-licorice.webp", "/product-category/bulk-licorice-candy/"],
  ["Wholesale Marshmallows Manufacturer", "Halal, vegan, organic, and colorful marshmallow programs for retail and bulk candy buyers.", "home-marshmallow.webp", "/product-category/wholesale-marshmallows/"],
];

const certificates = Array.from({ length: 8 }, (_, index) => `cert-${index + 1}.webp`);

const customOptions = [
  ["Gelatin", "custom-gelatin.webp"],
  ["Flavor", "custom-flavor.webp"],
  ["Color", "custom-color.webp"],
  ["Shape", "custom-shape.webp"],
  ["Coating", "custom-coating.webp"],
  ["Package", "custom-package.webp"],
];

const stats = [
  ["74000", "m2", "Factory Area", "factory-area.webp"],
  ["20+", "", "Production Lines", "production-lines.webp"],
  ["100+", "", "Employees", "employees.webp"],
  ["100+", "Tons", "Daily Capacity", "daily-capacity.webp"],
  ["500+", "", "Customers", "customers.webp"],
];

const reasons = [
  ["01", "Market Insight Driven", "Excellent Reputation", "Our wholesale candies have been market-proven and well received by customers.", "home-reason-market.webp"],
  ["02", "Strict Food Safety Control", "Global Certification", "Support HACCP, FDA, ISO, Halal and other certifications, in line with international standards.", "home-reason-safety.webp"],
  ["03", "One-Stop Export Support", "Powerful R&D", "Self-developed molds 500+, we can provide OEM/ODM services and free samples for you.", "home-reason-export.webp"],
  ["", "", "Efficient Manufacturing", "80% automated production, 24-hour continuous operation, to ensure efficient and stable supply."],
  ["", "", "High Cost Performance", "Relying on strong production capacity, we can provide you with very competitive purchase prices."],
  ["", "", "Reliable Supply Chain", "Ensure efficient logistics and timely delivery to meet supermarket, retail, and bulk needs of different markets."],
];

const productGallery = ["flower-1.webp", "flower-2.webp", "flower-3.webp", "flower-4.webp", "flower-5.webp"];

const productSpecs = [
  ["Manufacturer", "LeChao Candy"],
  ["Product Type", "Gummy Flowers"],
  ["Taste", "Sweet & Resilient"],
  ["MOQ", "500CTN"],
  ["Sample", "Available"],
  ["Package", "Customized"],
];

const productHighlights = [
  ["Elegant Floral Design", "Our wholesale flower gummies are vibrantly colored, visually stunning and delightfully whimsical, making them perfect for social media sharing."],
  ["Natural Fruit Flavors", "These bulk flower-shaped gummy candies feature refreshing fruit flavors with a rich, multi-layered taste that is pleasantly sweet without being cloying."],
  ["Perfectly Balanced Texture", "Crafted using a specialized process, the gummies are soft, chewy, and enjoyable for people of all ages."],
  ["Versatile Application", "Ideal for wedding dessert tables, birthday parties, corporate gifting, baking decorations, and retail displays."],
];

const processBlocks = [
  ["Formulation & Advanced Cooking", "Utilizing automated metering and vacuum cooking techniques to keep flavor stability and ideal gummy texture from the source.", "process-cooking.webp"],
  ["Automated Depositing & Curing", "High-precision depositing helps keep piece weight consistent, while controlled curing delivers balanced moisture and elasticity.", "process-curing.webp"],
  ["Surface Finishing & Quality Assurance", "Polishing, coating, metal detection, and sensory checks help each finished piece meet export-quality standards.", "process-quality.webp"],
  ["Smart Packaging & Global Logistics", "From bulk supply to retail-ready packs, LeChao supports custom packaging and reliable global delivery.", "process-logistics.webp"],
];

const categoryProducts = [
  ["Hotdog Shape Wholesale Marshmallows+Gummy Candy Combo", "cat-prod-hotdog-marshmallow.webp", "wholesale-marshmallows-gummy-candy"],
  ["LeChao Marshmallow Twists Wholesale, Custom Marshmallows", "cat-prod-marshmallow-twists.webp", "marshmallow-twists-wholesale"],
  ["Pumpkin Marshmallow Sweets Bulk, Wholesale Halloween Candy", "cat-prod-pumpkin-marshmallow.webp", "marshmallow-sweets-bulk"],
  ["LeChao Marshmallows Bulk Buy, Wholesale Marshmallow Twists", "cat-prod-bulk-marshmallows.webp", "marshmallows-bulk-buy"],
  ["LeChao Wholesale Marshmallow Twists, Colorful Marshmallows", "cat-prod-colorful-marshmallows.webp", "wholesale-marshmallow-twists"],
  ["LeChao Pink Swirl Marshmallow Sweets Wholesale Supply", "cat-prod-pink-swirl.webp", "marshmallow-sweets-wholesale"],
  ["LeChao Rabbit Shape White Marshmallows Bulk & Wholesale", "cat-prod-rabbit-marshmallow.webp", "white-marshmallows-bulk"],
  ["Chalk Shape Bulk Candy Marshmallow, Long Marshmallow Bites", "cat-prod-chalk-marshmallow.webp", "bulk-candy-marshmallow"],
  ["Bulk Marshmallow Smiley Face, Marshmallow Sweets Wholesale", "cat-prod-smiley-marshmallow.webp", "bulk-marshmallow"],
  ["Color Marshmallow Wholesale, LeChao Marshmallow Bulk Order", "cat-prod-color-marshmallow.webp", "color-marshmallow-wholesale"],
  ["Flower Marshmallows In Bulk, LeChao Custom Made Marshmallows", "cat-prod-flower-marshmallow.webp", "marshmallows-in-bulk"],
  ["Hamburger Shape Custom Marshmallows, Bulk Buy Marshmallows", "cat-prod-hamburger-marshmallow.webp", "custom-marshmallows"],
  ["Watermelon Shape Vegan Marshmallows Wholesale In 10g Pack", "cat-prod-watermelon-marshmallow.webp", "vegan-marshmallows-wholesale"],
  ["20g LeChao Watermelon Bulk Marshmallows Bites Wholesale", "cat-prod-watermelon-bites.webp", "bulk-marshmallows"],
  ["LeChao Long Marshmallow Twists Bulk, Marshmallows Wholesale", "cat-prod-long-twists.webp", "marshmallow-twists-bulk"],
  ["Soft Heart Shape Marshmallow In Bulk, Fluffy Candy Wholesale", "cat-prod-heart-marshmallow.webp", "marshmallow-in-bulk"],
];

const gummy3dCategoryProducts = [
  ["LeChao Soft Sweets In Bulk, 3D Gummy Skulls Candy Wholesale", "cat-3d-skulls.webp", "soft-sweets-in-bulk"],
  ["Custom Shaped Gummies Wholesale, 3D Gummy Cupcakes Bulk", "cat-3d-cupcakes.webp", "custom-shaped-gummies"],
  ["Diamond Gummies Wholesale, Chewy 3D Gummy Candy In Bulk", "cat-3d-diamond.webp", "diamond-gummies-wholesale"],
  ["3D Hatch Ducks Gummy Candy Wholesale, 50% Juice Added", "cat-3d-ducks.webp", "ducks-gummy-candy-wholesale"],
  ["3D/4D Gummy Dinosaurs Bulk, 50% Juice Added Jelly Candies", "cat-3d-dinosaurs.webp", "gummy-dinosaurs-bulk"],
  ["LeChao 3D YuanBao Gummy Wholesale, Ingots Gummies Bulk", "cat-3d-yuanbao.webp", "yuanbao-gummy-wholesale"],
  ["LeChao 3D Gummy Bears Wholesale, Fruity Gummy Candies Bulk", "cat-3d-bears.webp", "gummy-bears-wholesale"],
  ["LeChao 3D/4D Gummy Sweets Wholesale, Gummy Cupcakes Bulk", "cat-3d-sweets.webp", "gummy-sweets-wholesale"],
  ["LeChao Wholesale Gummy Sweets, 3D Hamburger Gummy Candy", "cat-3d-hamburger.webp", "wholesale-gummy-sweets"],
  ["LeChao Factory Wholesale Jelly Sweets, Bulk 3D Gummy Bunny", "cat-3d-bunny.webp", "wholesale-jelly-sweets"],
  ["LeChao Gummy Candy Mix Bulk, 3D Duck Gummies Wholesale", "cat-3d-duck-mix.webp", "gummy-candy-mix-bulk"],
  ["LeChao Bulk Bags of Gummy Candy, 4D Gummy Blocks Wholesale", "cat-4d-blocks-bag.webp", "bulk-bags-of-gummy-candy"],
  ["4D Building Blocks Wholesale Gummies, Jelly Candies In Bulk", "cat-4d-blocks.webp", "wholesale-gummies"],
  ["Novelty 4D Cactus Gummies Bulk, Gummy Candy Wholesale", "cat-4d-cactus.webp", "cactus-gummies-bulk"],
  ["Fun 4D Dinosaur Gummy Candy Bulk, Wholesale Chewy Candy", "cat-4d-dinosaur.webp", "dinosaur-gummy-candy-bulk"],
];

const licoriceCategoryProducts = [
  ["LeChao Bulk Licorice Candy, Red & Black Licorice Twists", "cat-licorice-red-black-twists.webp", "bulk-licorice-candy"],
  ["LeChao Wholesale Rainbow Gummies, Bulk Pack Sour Belt Bites", "cat-licorice-rainbow-gummies.webp", "wholesale-rainbow-gummies"],
  ["LeChao Sour Power Belts Bulk, Rainbow Strips Wholesale", "cat-licorice-sour-power-belts.webp", "sour-power-belts-bulk"],
  ["Filled Rainbow Twists Wholesale, Sour Licorice Ropes Bulk", "cat-licorice-rainbow-twists.webp", "rainbow-twists-wholesale"],
  ["Center-Filled Bulk Bite Size Candy, Rainbow Sour Belt Bites", "cat-licorice-bite-size.webp", "bulk-bite-size-candy"],
  ["Center-Filled Licorice Ropes Wholesale, Rainbow Sour Strips", "cat-licorice-ropes-rainbow.webp", "licorice-ropes-wholesale"],
  ["LeChao Filled Sour Belts Candy Bulk With Custom Packaging", "cat-licorice-filled-sour-belts.webp", "sour-belts-candy-bulk"],
  ["LeChao Sour Belts Wholesale, Colorful Sour Gummy Candy Bulk", "cat-licorice-colorful-sour-belts.webp", "sour-belts-wholesale"],
  ["Soft Licorice Candy Bulk, LeChao Rainbow Tubes Twister Candy", "cat-licorice-soft-tubes.webp", "soft-licorice-candy-bulk"],
  ["LeChao Rainbow Licorice Bulk, Soft-Filled Twists Candies", "cat-licorice-soft-filled-twists.webp", "rainbow-licorice-bulk"],
  ["Soft Filled Bulk Licorice Bites, LeChao Sour Gummy Twists", "cat-licorice-soft-filled-bites.webp", "bulk-licorice-bites"],
  ["Colorful Licorice Bites Bulk, Filled Licorice Tube Wholesale", "cat-licorice-colorful-bites.webp", "licorice-bites-bulk"],
  ["LeChao Wholesale Licorice Candy, Rainbow Twist Sour Candy", "cat-licorice-rainbow-twist-sour.webp", "wholesale-licorice-candy"],
  ["Sweet and Sour Licorice Wholesale, Filled Strips Candy Bulk", "cat-licorice-sweet-sour-strips.webp", "sweet-and-sour-licorice-wholesale"],
  ["Rainbow Sour Belts Bulk, Gummy Licorice Belts Wholesale", "cat-licorice-rainbow-sour-belts.webp", "rainbow-sour-belts-bulk"],
  ["LeChao Sour Sticks Bulk, Soft Filled Licorice Bite Wholesale", "cat-licorice-sour-sticks.webp", "sour-sticks-bulk"],
];

const jellyBeanCategoryProducts = [
  ["LeChao Colorful Bulk Candy Jelly Beans, Chewy Candies Wholesale", "cat-jelly-colorful-bulk.webp", "bulk-candy-jelly-beans"],
  ["LeChao Chocolate Covered Jelly Bean Wholesale In Paper Tube", "cat-jelly-chocolate-covered-tube.webp", "jelly-bean-wholesale"],
  ["LeChao Jelly Beans Bulk, Fruity Jelly Filled Candy Wholesale", "cat-jelly-fruity-filled.webp", "jelly-beans-bulk"],
  ["LeChao Wholesale Jelly Beans, Fruity Chewy Candy In Bulk", "cat-jelly-fruity-chewy-bulk.webp", "wholesale-jelly-beans"],
  ["1KG Pack Jelly Beans In Bulk, Custom Color Jelly Beans", "cat-jelly-1kg-custom-color.webp", "jelly-beans-in-bulk"],
  ["Fruity Bulk Jelly Beans, Wholesale Custom Jelly Bean Mix", "cat-jelly-custom-mix.webp", "bulk-jelly-beans"],
];

const filledGummyCategoryProducts = [
  ["LeChao Wholesale Eye Ball Gummies Filled With Fruit Jam", "cat-filled-gummy-eye-ball.webp", "wholesale-eye-ball-gummies"],
  ["LeChao Bulk Jam Filled Candy, Fruity Gummy Candy Wholesale", "cat-filled-gummy-jam-candy.webp", "bulk-jam-filled-candy"],
  ["LeChao Jam Filled Rose Gummies Bulk, Wholesale Soft Candy", "cat-filled-gummy-rose.webp", "rose-gummies-bulk"],
  ["LeChao Lip-shaped Filled Gummy Candy Wholesale Soft Candy", "cat-filled-gummy-lip.webp", "filled-gummy-candy-wholesale"],
  ["Jam Filled Poop Shaped Custom Made Gummies Wholesale", "cat-filled-gummy-poop.webp", "custom-made-gummies"],
  ["Buy Gummies In Bulk, Jam Filled Egg Gummy Candy Wholesale", "cat-filled-gummy-egg.webp", "buy-gummies-in-bulk"],
  ["Soup Dumpling Bulk Gummy Candy Wholesale Filled Gummies", "cat-filled-gummy-dumpling.webp", "bulk-gummy-candy-wholesale"],
  ["Brain Shape Bulk Chewy Candy, Filled Gummy Candy Wholesale", "cat-filled-gummy-brain.webp", "bulk-chewy-candy"],
  ["Grape Jam Filled Gummy Candy In Bulk, Fruit Gummy Wholesale", "cat-filled-gummy-grape.webp", "gummy-candy-in-bulk"],
  ["LeChao Fruit Gummies Bulk, Jam Filled Gummy Strawberries", "cat-filled-gummy-strawberry.webp", "fruit-gummies-bulk"],
  ["Pineapple Gummies In Bulk, Jelly Filled Candies Wholesale", "cat-filled-gummy-pineapple.webp", "gummies-in-bulk"],
  ["Eyeballs Bulk Gummy Candy, Jelly Filled Gummies Wholesale", "cat-filled-gummy-eyeballs.webp", "bulk-gummy-candy"],
];

const peelableGummyCategoryProducts = [
  ["Green Grape Bulk Soft Candy, Peeling Gummy Candies Wholesale", "cat-peelable-gummy-green-grape.webp", "bulk-soft-candy"],
  ["Orange Flavor Peeling Jelly Candy Bulk, Soft Candy Wholesale", "cat-peelable-gummy-orange.webp", "jelly-candy-bulk"],
  ["Grape Peeling Jelly Candy Wholesale, Soft Gummy Candies Bulk", "cat-peelable-gummy-grape.webp", "jelly-candy-wholesale"],
  ["LeChao Peelable Peach Gummies Bulk, Gummy Candy Wholesale", "cat-peelable-gummy-peach.webp", "peach-gummies-bulk"],
  ["Peelable Bulk Gummy Candy Mix, Fruity Gummies Wholesale", "cat-peelable-gummy-mix.webp", "bulk-gummy-candy-mix"],
  ["Peelable Banana Gummies Bulk, Wholesale Fruity Gummy Candy", "cat-peelable-gummy-banana.webp", "gummies-bulk"],
  ["Fruit Gummy Candy Bulk, Wholesale Peelable Mango Candy", "cat-peelable-gummy-mango.webp", "fruit-gummy-candy-bulk"],
];

const categoryProductMap = {
  "wholesale-marshmallows": categoryProducts,
  "3d-gummy-candy-manufacturer": gummy3dCategoryProducts,
  "bulk-licorice-candy": licoriceCategoryProducts,
  "jelly-bean-wholesale": jellyBeanCategoryProducts,
  "filled-gummy-candies-supplier": filledGummyCategoryProducts,
  "peelable-gummy-candy-supplier": peelableGummyCategoryProducts,
};

const allCategoryProductCards = [...categoryProducts, ...gummy3dCategoryProducts, ...licoriceCategoryProducts, ...jellyBeanCategoryProducts, ...filledGummyCategoryProducts, ...peelableGummyCategoryProducts];

const marketCards = [
  ["Supermarkets", "Attractive packaging, long shelf life, and consumer-favorite flavors make our wholesale candy ideal for retail display. We support private label services and custom services tailored to your brand.", "market-supermarkets.webp"],
  ["Convenience Stores", "With eye-catching design and portion-friendly packaging, our wholesale candy lines are optimized for point-of-sale displays and impulse buys.", "market-convenience.webp"],
  ["Bulk Sales & Repackaging", "For distributors and repackers, our wholesale candy is available in large bulk formats with stable quality and consistent supply.", "market-bulk.webp"],
];

const categoryFaqs = [
  ["What types of candies does LeChao offer?", "LeChao supplies gummies, marshmallows, licorice, jelly beans, chocolate candies, sour candy, filled candy, and custom soft candy programs."],
  ["How do you ensure candy quality and food safety?", "We follow strict raw material inspection, production control, metal detection, and export-quality inspection standards."],
  ["Do you support OEM & ODM customization?", "Yes. We support custom formula, flavor, color, shape, coating, packaging, carton specification, and private label solutions."],
  ["How long is the lead time for bulk orders?", "Lead time depends on product type, packaging, and quantity. Our team will confirm the schedule after sample and order details are approved."],
  ["Do you provide samples?", "Samples are available for qualified wholesale and private-label projects."],
  ["Can you ship worldwide?", "Yes. LeChao supports global export logistics and documentation for wholesale candy buyers."],
];

const customServiceAdvantages = [
  ["Delivery Within 30 Days", "Quick response and efficient production ensure that you can meet market demand in a timely manner.", "custom-service-30-days.webp"],
  ["500+ Mold Options", "With more than 500 ready-made molds, LeChao offers a variety of shape options.", "custom-service-molds.webp"],
  ["Expert Design Team", "Whether you need a unique candy formula or packaging design, we can provide the best solution.", "custom-service-design.webp"],
  ["Efficient Production Process", "From initial design to final delivery, we ensure smooth and efficient execution of the entire process.", "custom-service-production.webp"],
];

const customCandyTypes = [
  ["Gummy Candies", "/product-category/wholesale-gummy-manufacturer/", "custom-type-gummy.webp"],
  ["Jelly Beans", "/product-category/jelly-bean-wholesale/", "custom-type-jelly.webp"],
  ["Licorice Candies", "/product-category/bulk-licorice-candy/", "custom-type-licorice.webp"],
  ["Marshmallows", "/product-category/wholesale-marshmallows/", "custom-type-marshmallow.webp"],
  ["Chocolate Candies", "/product-category/wholesale-chocolate-candy/", "custom-type-chocolate.webp"],
];

const customCapabilityBlocks = [
  {
    title: "Wide Gelatin Options for Custom Candy",
    text: "Choose from traditional animal-based gelatin or plant-based and gelatin-free alternatives to meet halal, kosher, vegan, or market-specific requirements.",
    img: "custom-gelatin-source.webp",
    bullets: ["Pork gelatin", "Beef or bovine gelatin", "Fish gelatin", "Plant-based alternatives: pectin, agar, carrageenan, konjac gum"],
  },
  {
    title: "Custom Candy with Unique Flavors & Textures",
    text: "From fruity to sour, herbal to creamy, LeChao develops flavor profiles and textures tailored to your target customers.",
    img: "custom-flavors-textures.webp",
    bullets: ["Classic fruity, tropical, beverage-inspired, creamy, sour, botanical, seasonal flavors", "Chewy, filled center, peelable, crunchy coated, or aerated textures"],
  },
  {
    title: "Custom Candy by Natural or Artificial Colors",
    text: "Choose vibrant standard colors or custom tones aligned with your brand, using natural or artificial color options.",
    img: "custom-colors-source.webp",
    bullets: ["Natural colors for clean-label positioning", "Artificial colors for bright, stable, cost-efficient visual appeal"],
  },
  {
    title: "Fully Customized Shape & Mold for Your Custom Candy",
    text: "More than 500 ready-made molds cover classic, creative, holiday, 3D/4D, filled, peeling, and geometric shapes.",
    img: "custom-shape-mold.webp",
    bullets: ["Animals, fruits, vehicles, holidays, stars, eyes, teeth, cubes, strips, rings", "Exclusive mold development for brand-owned shapes"],
  },
  {
    title: "Custom Candy with Appealing Coating & Finish",
    text: "Sugar, sour powder, crunchy shell, chocolate layers, glossy finishes, and double coatings help shape flavor perception and shelf appeal.",
    img: "custom-coating-finish.webp",
    bullets: ["Sugar coated", "Crunchy shell coated", "Sour powder coated", "Glossy finish", "Chocolate coated"],
  },
  {
    title: "Diversified Packaging for Your Brand",
    text: "From single-serve sachets to bulk packs, jars, gift boxes, stand-up pouches, and sustainable packaging, LeChao supports packaging customization for your channels.",
    img: "custom-packaging-brand.webp",
    bullets: ["Bulk packaging", "Pillow pack", "Single-serve packs", "Assorted packs", "Stand-up pouch", "Jar or bottle packs", "Gift box", "Eco-friendly options"],
  },
];

const customManufacturingSteps = [
  ["Demand Communication", "Communicate your customization needs with our account manager, and our team will provide professional advice.", "custom-process-demand.webp"],
  ["Solution Design", "We provide personalized candy formula and packaging design solutions, then make samples for your confirmation.", "custom-process-solution.webp"],
  ["Mass Production", "After the sample is confirmed, your order enters stable mass production with controlled scheduling.", "custom-process-mass.webp"],
  ["Quality Control and Testing", "During production, multiple quality checks help each batch meet international standards.", "custom-process-quality.webp"],
  ["Packaging and Delivery", "We package according to your requirements to protect products during transportation.", "custom-process-packaging.webp"],
  ["Continuous After-sales and Support", "After delivery, we continue to provide after-sales support to keep your project moving smoothly.", "custom-process-support.webp"],
];

const customCandyFaqs = [
  ["Can LeChao create seasonal or limited-edition custom candies?", "Yes. We can create custom candies for seasonal promotions, limited-edition flavors, holidays, birthday themes, and special events."],
  ["Are your custom candy products safe for dietary restrictions?", "Yes. We can support requirements such as gluten-free, vegan, halal, or kosher when those needs are confirmed at the start of the project."],
  ["How do you ensure the quality of custom candy?", "LeChao follows quality control procedures across sourcing, production, testing, and final packaging, supported by international food safety certifications."],
  ["Do you offer international shipping for custom candy orders?", "Yes. We support global shipping and export documentation for custom candy orders."],
  ["Can LeChao assist with formulations that match market trends?", "Yes. Our team tracks flavor, texture, packaging, and consumer trends to help customers select suitable directions for target markets."],
  ["Can I sample the custom candy before placing a full order?", "Yes. Samples can be arranged before full production so you can confirm flavor, texture, appearance, and packaging direction."],
];

const privateLabelProof = [
  ["For brand owners", "Launch a private label gummy line with custom shape, flavor, color, coating, and retail-ready packaging."],
  ["For importers", "Source stable bulk production from a candy manufacturer with export experience and documentation support."],
  ["For supermarkets", "Develop shelf-ready gummy SKUs for seasonal promotions, kids' candy, sour candy, functional positioning, or gift packs."],
];

const privateLabelCapabilities = [
  ["Formula & Texture", "Gelatin, pectin, vegan, halal-friendly, sour, chewy, filled, peelable, crunchy coated, and 3D/4D gummy textures."],
  ["Shape & Mold", "Use 500+ existing molds or develop exclusive brand-owned shapes for private label gummy candy programs."],
  ["Flavor & Color", "Classic fruit, tropical, sour, beverage-inspired, seasonal, natural color, or bright retail color systems."],
  ["Packaging", "Bulk bags, pillow packs, stand-up pouches, jars, bottles, mixed packs, gift boxes, and carton customization."],
  ["Compliance", "HACCP, FDA, ISO, Halal and export documentation support for international candy buyers."],
  ["Scale & Delivery", "Factory production planning, sample confirmation, quality inspection, and shipping support for repeat orders."],
];

const privateLabelSteps = [
  ["01", "Define the SKU", "Tell us your target market, flavor direction, package size, retail channel, and quantity."],
  ["02", "Build the sample", "We confirm formula, shape, color, coating, packaging direction, and sample details."],
  ["03", "Approve packaging", "Your label, pouch, jar, carton, barcode, and display requirements are prepared for production."],
  ["04", "Manufacture & inspect", "Mass production is scheduled with quality checks for taste, texture, appearance, and packaging."],
  ["05", "Ship & reorder", "Export documents, logistics support, and repeat-order planning help keep your shelves stocked."],
];

const privateLabelFaqs = [
  ["What is the MOQ for private label gummy candy?", "MOQ depends on the formula, packaging type, and customization level. Share your target SKU and packaging format and our team will quote the most practical starting quantity."],
  ["Can you make gummies with my own logo or packaging?", "Yes. We support private label packaging, carton markings, pouch or jar design, and custom label requirements."],
  ["Can I use an existing mold to reduce cost?", "Yes. Using one of our existing molds is often the fastest and most cost-efficient way to launch a new gummy SKU."],
  ["Do you provide samples before mass production?", "Yes. Samples are used to confirm flavor, texture, color, shape, and packaging before bulk production."],
  ["Can you support halal or vegan gummy projects?", "Yes. We can discuss gelatin, pectin, and plant-based alternatives according to your market requirements."],
];

const pageCopy = {
  "wholesale-candy-supplier": {
    title: "Wholesale Candy Supplier",
    kicker: "Factory one-stop supply",
    body: "LeChao supplies gummy candies, licorice candy, jelly beans, marshmallows, chocolate candies, and private-label soft candy programs for global wholesale buyers.",
  },
  "soft-candy-supplier": {
    title: "Soft Candy Supplier For Global Markets",
    kicker: "Market insight driven",
    body: "LeChao develops trend-driven candy products for supermarkets, importers, distributors, retail brands, party channels, and bulk candy businesses.",
  },
  "custom-candy-manufacturer": {
    title: "Custom Candy Manufacturer",
    kicker: "OEM and ODM service",
    body: "Customize flavor, color, gelatin type, shape, coating, formula, packaging, and carton specifications with LeChao's experienced candy production team.",
  },
  "private-label-gummy-candy-manufacturer": {
    title: "Private Label Gummy Candy Manufacturer",
    kicker: "Factory-direct OEM gummy program",
    body: "Build retail-ready gummy candy SKUs with custom formula, shape, flavor, packaging, quality control, and export support from one manufacturer.",
  },
  "candy-manufacturing-company": {
    title: "Candy Manufacturing Company",
    kicker: "Established in 1991",
    body: "LeChao is a modern soft candy manufacturer from China, focused on quality production, flexible customization, strict food safety control, and reliable global delivery.",
  },
  "candy-manufacturing-capability": {
    title: "Candy Manufacturing Capability",
    kicker: "Scale, quality, and speed",
    body: "LeChao supports high-volume manufacturing, mold development, formula adjustment, packaging customization, quality inspection, and export documentation.",
  },
  contact: {
    title: "Contact LeChao",
    kicker: "Reach out to us",
    body: "Send your candy sourcing request, target market, packaging needs, and estimated order quantity. LeChao will help you plan a wholesale or private-label solution.",
  },
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activePath = window.location.pathname;

  return (
    <header className="site-header">
      <div className="header-top social-only">
        <div className="socials" aria-label="social links">
          {["f", "t", "ig", "yt"].map((item) => (
            <a key={item} href="#" aria-label={item}>{item}</a>
          ))}
        </div>
      </div>
      <div className="header-main">
        <a className="logo" href="/"><img src={asset("logo-main.webp")} alt="LeChao" /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <a className={activePath === item.href ? "active" : ""} href={item.href}>{item.label}{item.items ? <span>v</span> : null}</a>
              {item.items && <div className="nav-popover">{item.items.map((sub) => <a href={sub.href} key={sub.label}>{sub.label}</a>)}</div>}
            </div>
          ))}
        </nav>
        <a className="quote-btn" href="/contact/">Request a Quote</a>
        <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu"><span></span><span></span><span></span></button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu">x</button>
          <img src={asset("logo-main.webp")} alt="LeChao" />
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>{item.label}</a>
          ))}
          <a className="quote-btn full" href="/contact/">Request a Quote</a>
        </div>
      )}
    </header>
  );
}

function FloatingActions() {
  return (
    <div className="float-actions">
      <a className="whatsapp" href="https://api.whatsapp.com/send?phone=8613435561592">WA</a>
      <a className="whatsapp" href="tel:867686196663">Tel</a>
      <a className="mail" href="mailto:lechao@Lechaogd.com">Mail</a>
      <button className="top" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Top</button>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="home-hero" aria-label="LeChao candy manufacturer banner">
        <div className="home-hero-copy">
          <span>Factory One-stop Supply</span>
          <h1>Top Soft Candy Manufacturer & Supplier Since 1991</h1>
          <p>Wholesale gummy candy, licorice, jelly beans, marshmallows, chocolate candies, and custom private-label programs for global buyers.</p>
          <div className="hero-actions">
            <a className="solid" href="/wholesale-candy-supplier/">View Products</a>
            <a className="outline" href="/contact/">Request a Quote</a>
          </div>
        </div>
      </section>
      <section className="home-hero-strip" aria-label="Featured candy supplier banners">
        {heroPanels.map(([title, desc, img, href]) => (
          <a className="hero-panel" href={href} key={title}>
            <img src={asset(img)} alt="" />
            <div>
              <strong>{title}</strong>
              <p>{desc}</p>
            </div>
          </a>
        ))}
      </section>
      <section className="intro section" id="products">
        <h1>Hot Selling Wholesale Candy Collection, Factory One-stop Supply</h1>
        <p>LeChao's wholesale candy products have been tested by the worldwide market for over 30 years and are loved by consumers from 100+ countries. As an innovative soft candy manufacturer, we continuously develop trend-driven wholesale candy products.</p>
        <div className="product-grid">
          {products.map(([title, desc, link, href, img]) => (
            <article className="product-card" key={title}>
              <img src={asset(img)} alt="" />
              <h2>{title}</h2>
              <p>{desc}</p>
              <a href={href}>{link}</a>
            </article>
          ))}
        </div>
      </section>
      <CustomSection />
      <AboutSection />
      <CertificationSection />
      <StatsSection />
      <ReasonSection />
      <HomeCtaSection />
    </>
  );
}

function CustomSection() {
  return (
    <section className="section custom" id="custom">
      <h2>Diverse <span>Custom Candy</span> Option For Your Brand</h2>
      <p>As an industry-leading soft candy manufacturer, LeChao is committed to providing professional custom candy services to global customers.</p>
      <div className="custom-grid">
        {customOptions.map(([label, img]) => (
          <a href="/custom-candy-manufacturer/" className="custom-item" key={label}>
            <img src={asset(img)} alt="" />
            <strong>{label}</strong>
          </a>
        ))}
      </div>
      <img className="custom-mark" src={asset("gantanhao.webp")} alt="" />
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about section" id="about">
      <div className="about-art">
        <img src={asset("home-video-cover.webp")} alt="" />
        <span className="play-mark" aria-hidden="true"></span>
      </div>
      <div className="about-copy">
        <h2>LeChao - Premier Soft Candy Manufacturer From China</h2>
        <p>Founded in 1991, LeChao is a leading candy manufacturer, innovating continuously to deliver high-quality, flavorful treats worldwide. We are a modern soft candy manufacturer specializing in gummies, licorice candy, jelly beans, marshmallows, and chocolate candies.</p>
        <p>We have industry-leading custom candy capabilities and stock over 500 candy molds, covering the most popular candy shapes on the market. We provide customized formulas, fast quotes, strict quality control and global logistics services for customer brands.</p>
        <div className="cta-row">
          <a className="solid" href="/candy-manufacturing-company/">About LeChao</a>
          <a className="outline" href="/contact/">Reach Out to Us</a>
        </div>
      </div>
    </section>
  );
}

function CertificationSection() {
  return (
    <section className="cert-band" aria-label="LeChao certifications">
      <div className="cert-track">
        {certificates.map((img) => <img src={asset(img)} alt="" key={img} />)}
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="stats">
      {stats.map(([num, unit, label, img]) => (
        <article key={label}>
          <img src={asset(img)} alt="" />
          <div><strong>{num}</strong>{unit && <span>{unit}</span>}</div>
          <p>{label}</p>
        </article>
      ))}
    </section>
  );
}

function ReasonSection() {
  return (
    <section className="section reasons">
      <div className="reason-visual">
        <div className="reason-visual-inner">
          {reasons.slice(0, 3).map(([num, title]) => (
          <div className="reason-marker" key={title}>
            <b>{num}</b>
            <strong>{title}</strong>
          </div>
        ))}
        </div>
      </div>
      <div className="reason-lower">
        <h2>Why do 500+ Clients Join Hands with LeChao?</h2>
        <div className="reason-grid">
          {reasons.map(([, , title, desc]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeCtaSection() {
  return (
    <section className="home-cta section">
      <div className="home-cta-art">
        <img src={asset("home-cta.webp")} alt="" />
      </div>
      <div className="home-cta-copy">
        <h2>Sweeten Your Success with LeChao</h2>
        <p>Looking for premium wholesale soft candy in bulk or custom candy solutions? Send your inquiry and our team will get back to you shortly to discuss your needs.</p>
        <div className="cta-contact">
          <a href="tel:867686196663">+86-768-6196663</a>
          <a href="mailto:lechao@Lechaogd.com">lechao@Lechaogd.com</a>
        </div>
        <form className="mini-inquiry">
          <input aria-label="Name" placeholder="Name" />
          <input aria-label="Email" placeholder="Email" />
          <textarea aria-label="Message" placeholder="Message" rows="4"></textarea>
          <button type="button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

function PageHero({ title, kicker, body }) {
  return (
    <section className="page-hero">
      <div className="section">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </section>
  );
}

function StandardPage({ slug }) {
  const copy = pageCopy[slug] || pageCopy["wholesale-candy-supplier"];
  const isProducts = slug === "wholesale-candy-supplier";
  const isCustom = slug === "custom-candy-manufacturer";
  const isPrivateLabel = slug === "private-label-gummy-candy-manufacturer";
  const isAbout = ["candy-manufacturing-company", "candy-manufacturing-capability"].includes(slug);
  const isMarket = slug === "soft-candy-supplier";
  const isContact = slug === "contact";

  return (
    <>
      <PageHero {...copy} />
      {isProducts && <ProductsIndex />}
      {isCustom && <CustomCandyPage />}
      {isPrivateLabel && <PrivateLabelGummyPage />}
      {isMarket && <><ReasonSection /><ProductsIndex /></>}
      {isAbout && <><AboutSection /><StatsSection /><ProcessSection /></>}
      {isContact && <ContactPage />}
    </>
  );
}

function ProductsIndex() {
  return (
    <section className="section">
      <h2 className="section-title">Product Category</h2>
      <div className="content-grid">
        {productCategories.map((slug) => {
          const cat = siteData.categories.find((item) => item.slug === slug);
          return <ContentCard key={slug} item={{ title: cat?.name, excerpt: cat?.description }} href={`/product-category/${slug}/`} meta="Category" />;
        })}
      </div>
    </section>
  );
}

function ProductCategoryPage({ slug }) {
  const cat = siteData.categories.find((item) => item.slug === slug) || siteData.categories.find((item) => item.slug === "wholesale-gummy-manufacturer");
  const categoryTitle = slug === "wholesale-marshmallows"
    ? "Wholesale Marshmallows Manufacturer | Filled, Sugar Coated, Halal"
    : cat.name;
  const categoryBody = slug === "wholesale-marshmallows"
    ? "LeChao is a professional marshmallow manufacturer, providing a wide variety of wholesale marshmallows, including classic twists, jam fillings, sugar-coated marshmallows, and custom packaging. We support halal certification and low sugar ratios to meet the needs of different markets and consumer groups."
    : cat.description || "Explore LeChao wholesale candy categories, bulk supply, private-label packaging, and custom candy options for global buyers.";
  return (
    <>
      <section className="category-hero">
        <div className="section">
          <h1>{categoryTitle}</h1>
          <p><a href="/">Home</a> / <a href="/wholesale-candy-supplier/">Products</a> / {cat.name}</p>
          <p>{categoryBody}</p>
        </div>
      </section>
      <section className="section category-shop">
        <aside className="category-sidebar">
          <div className="side-block">
            <h3>Product Categories</h3>
            {siteData.categories.slice(0, 12).map((item) => (
              <a className={item.slug === slug ? "active" : ""} href={`/product-category/${item.slug}/`} key={item.slug}>{item.name}</a>
            ))}
          </div>
        </aside>
        <div className="category-overview-panel">
          <span>Product Category</span>
          <h2>{cat.name}</h2>
          <p>{categoryBody}</p>
          <a className="quote-btn inline" href="/contact/">Request Category Catalog</a>
        </div>
      </section>
      <section className="section category-about">
        <div className="category-video">
          <img src={asset("category-factory.webp")} alt="" />
          <span className="play-mark" aria-hidden="true"></span>
        </div>
        <div>
          <h2>LeChao | Leading Candy Manufacturer & Supplier Since 1991</h2>
          <p>With more than 30 years of professional accumulation, advanced large-scale manufacturing systems, internationally certified quality standards, and full-process services covering from formula development to global delivery, LeChao helps global customers stay ahead in the changing market.</p>
          <div className="cta-row">
            <a className="solid" href="/candy-manufacturing-company/">About LeChao</a>
            <a className="outline" href="/contact/">Reach Out to Us</a>
          </div>
        </div>
      </section>
      <StatsSection />
      <CustomSection />
      <section className="section market-section">
        <h2 className="section-title">Versatile Wholesale Candy for All Markets</h2>
        <p className="center-copy">LeChao provides full wholesale candy solutions designed to meet the needs of all types of markets, from large-scale supermarket chains and convenience stores to bulk repackers.</p>
        <div className="market-grid">
          {marketCards.map(([title, text, img]) => (
            <article key={title}>
              <img src={asset(img)} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section manufacturer-reasons category-reasons">
        <h2 className="section-title">Why Choose LeChao As Your Candy Manufacturer & Supplier?</h2>
        <p className="center-copy">In the competitive global confectionery market, choosing a candy manufacturer that can support long-term growth, product innovation, and global supply chain layout is key to brand success.</p>
        <div className="why-grid">
          {["30+ Years of Excellence", "Global-Standard Certifications", "Strong Customization Capability", "Modern Production Facilities", "Global Logistics Support"].map((item) => (
            <article key={item}><h3>{item}</h3><p>LeChao provides reliable B2B candy manufacturing, customization, quality control, and export support for global customers.</p></article>
          ))}
        </div>
      </section>
      <section className="section faq-section">
        <h2 className="section-title">FAQs About LeChao's Wholesale Candies</h2>
        <p className="center-copy">The following are the most frequently asked questions we answer for global customers.</p>
        <div className="faq-list">
          {categoryFaqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <InquirySection />
    </>
  );
}

function ProductPage({ slug }) {
  return <StandardPage slug="wholesale-candy-supplier" />;
}

function InquirySection() {
  return (
    <section className="inquiry-band">
      <div className="section inquiry-layout">
        <div>
          <h2>Sweeten Your Success<br />with LeChao</h2>
          <p>Looking for premium wholesale soft candy in bulk or custom candy solutions? Fill out the inquiry form and our team will get back to you shortly.</p>
          <p><strong>+86-768-6196663</strong><br />lechao@Lechaogd.com</p>
        </div>
        <form className="source-form">
          <input placeholder="Your name" />
          <input placeholder="Email / WhatsApp" />
          <input placeholder="Product interest" />
          <textarea placeholder="Quantity, market, package, flavor, and timeline"></textarea>
          <button className="quote-btn" type="button">Submit</button>
        </form>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="section contact-layout">
      <div>
        <h2>Contact Us</h2>
        <p><strong>Phone:</strong> +86-768-6196663</p>
        <p><strong>Email:</strong> lechao@Lechaogd.com</p>
        <p><strong>Address:</strong> ChaoAn AnBu ZhuangLong Industrial Zone, GuangDong, China</p>
      </div>
      <form className="quote-form">
        <input placeholder="Your name" />
        <input placeholder="Email or WhatsApp" />
        <input placeholder="Target product" />
        <textarea placeholder="Tell us about quantity, package, flavor, market, and timeline"></textarea>
        <button className="quote-btn" type="button">Submit Request</button>
      </form>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section process">
      <h2 className="section-title">One-stop Candy Customization</h2>
      <div className="content-grid compact">
        {["Demand confirmation", "Formula and sample", "Package design", "Mass production", "Quality inspection", "Export delivery"].map((step, index) => (
          <article className="step-card" key={step}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            <h3>{step}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function CustomCandyPage() {
  return (
    <>
      <section className="section custom-intro-real">
        <img src={asset("custom-one-stop.webp")} alt="" />
        <div>
          <h2>One-Stop Custom Candy Manufacturer & Private Label Partner</h2>
          <p>As a professional custom candy manufacturer, LeChao provides full contract candy manufacturing solutions for global brands, distributors, and retailers. Whether you are launching a new product line or expanding a private label business, our flexible production system is designed to bring your ideas to life.</p>
          <a className="quote-btn inline" href="/contact/">Contact Us</a>
        </div>
      </section>

      <section className="section custom-service-real">
        <h2 className="section-title">Advantages of LeChao Custom Candy Services</h2>
        <div className="custom-service-grid">
          {customServiceAdvantages.map(([title, text, img]) => (
            <article key={title}>
              <img src={asset(img)} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <CertificationSection />

      <section className="section custom-solutions-real">
        <div className="custom-solutions-head">
          <h2>Your Vision, Our Recipe - Custom Candy Solutions for Your Brand</h2>
          <p>LeChao provides end-to-end customization, from flavor development and texture design to color, shape, coating, packaging, and delivery.</p>
        </div>
        <div className="custom-type-grid">
          {customCandyTypes.map(([label, href, img]) => (
            <a href={href} key={label}>
              <img src={asset(img)} alt="" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section custom-capability-real">
        {customCapabilityBlocks.map((block, index) => (
          <article className="custom-capability-row" key={block.title}>
            <img src={asset(block.img)} alt="" />
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{block.title}</h2>
              <p>{block.text}</p>
              <ul>
                {block.bullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a className="quote-btn inline" href="/contact/">Inquiry Now</a>
            </div>
          </article>
        ))}
      </section>

      <section className="custom-signature-cta">
        <div className="section">
          <h2>Craft Your Signature Custom Candy with LeChao</h2>
          <p>Unleash your creativity with tailored flavors, shapes, colors, and packaging. Partner with an expert custom candy manufacturer to bring your brand's sweet vision to life from concept to shelf.</p>
          <a className="quote-btn inline" href="/contact/">Contact Us Now</a>
        </div>
      </section>

      <section className="section custom-process-real">
        <h2 className="section-title">Our Custom Candy Manufacturing Process</h2>
        <p className="center-copy">LeChao provides a simple and efficient customization process to ensure that your custom candy needs are smoothly realized from concept to production.</p>
        <div className="custom-process-grid">
          {customManufacturingSteps.map(([title, text, img], index) => (
            <article key={title}>
              <img src={asset(img)} alt="" />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <h2 className="section-title">FAQs About Custom Candy</h2>
        <p className="center-copy">Find answers to common questions about custom candy services and the customization process.</p>
        <div className="faq-list">
          {customCandyFaqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <InquirySection />
    </>
  );
}

function PrivateLabelGummyPage() {
  return (
    <>
      <section className="section private-label-hero">
        <div className="private-label-copy">
          <span>Private Label Gummy Candy Manufacturer</span>
          <h2>Launch Your Own Gummy Candy Brand with Factory-Direct Manufacturing</h2>
          <p>LeChao helps candy brands, importers, supermarkets, and distributors create private label gummy candy SKUs with custom formula, mold, flavor, color, coating, packaging, and export support.</p>
          <div className="private-label-badges">
            <b>Since 1991</b>
            <b>500+ molds</b>
            <b>100+ tons daily capacity</b>
            <b>OEM / ODM</b>
          </div>
        </div>
        <form className="private-label-form">
          <h3>Get a Private Label Quote</h3>
          <input placeholder="Name" />
          <input placeholder="Email / WhatsApp" />
          <input placeholder="Company" />
          <select defaultValue="">
            <option value="" disabled>Project type</option>
            <option>New private label gummy SKU</option>
            <option>Custom packaging only</option>
            <option>Exclusive mold development</option>
            <option>Bulk gummy supply</option>
          </select>
          <textarea placeholder="Target market, quantity, flavor, packaging, and launch timeline"></textarea>
          <button className="quote-btn" type="button">Request Pricing & Samples</button>
        </form>
      </section>

      <section className="section private-label-personas">
        {privateLabelProof.map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="section private-label-flow">
        <div>
          <h2>Built for B2B Buyers Who Need a Clear Path from Idea to Shelf</h2>
          <p>Most gummy candy projects involve several decision makers: product, sourcing, marketing, quality, and finance. This page is structured to make the decision easier: fast value proposition first, short scannable sections, visible trust signals, and repeated quote actions.</p>
          <a className="quote-btn inline" href="/contact/">Talk to Our Team</a>
        </div>
        <img src={asset("custom-type-gummy.webp")} alt="" />
      </section>

      <CertificationSection />

      <section className="section private-label-capabilities">
        <h2 className="section-title">Private Label Gummy Candy Capabilities</h2>
        <p className="center-copy">Choose the parts of the program you need, then let LeChao coordinate formula, sampling, packaging, production, inspection, and export delivery.</p>
        <div className="private-label-grid">
          {privateLabelCapabilities.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="private-label-cta">
        <div className="section">
          <h2>Ready to Build a Private Label Gummy Line?</h2>
          <p>Send your project details and our team will help you choose a realistic formula, packaging format, MOQ path, and sample plan.</p>
          <a className="quote-btn inline" href="/contact/">Start My Private Label Project</a>
        </div>
      </section>

      <section className="section private-label-steps">
        <h2 className="section-title">From Brief to Repeat Orders</h2>
        <div className="private-label-step-grid">
          {privateLabelSteps.map(([num, title, text]) => (
            <article key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section private-label-related">
        <h2 className="section-title">Useful Pages for Further Research</h2>
        <div className="content-grid compact">
          <ContentCard item={{ title: "Custom Candy Manufacturer", excerpt: "Explore full OEM/ODM candy customization services for formula, shape, coating, and packaging." }} href="/custom-candy-manufacturer/" />
          <ContentCard item={{ title: "Gummy Candy Category", excerpt: "Review the gummy candy category framework for future product publishing and SKU organization." }} href="/product-category/wholesale-gummy-manufacturer/" />
          <ContentCard item={{ title: "Candy Manufacturing Capability", excerpt: "Learn about production capacity, quality control, and manufacturing support." }} href="/candy-manufacturing-capability/" />
        </div>
      </section>

      <section className="section faq-section">
        <h2 className="section-title">Private Label Gummy Candy FAQs</h2>
        <div className="faq-list">
          {privateLabelFaqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section private-label-testing">
        <h2>Built to Test and Improve</h2>
        <p>This landing page is designed so you can test one conversion element at a time: headline, CTA wording, form fields, proof blocks, or the order of capability sections. That keeps future Google Ads optimization clean and measurable.</p>
      </section>

      <InquirySection />
    </>
  );
}

function ContentCard({ item, href, meta }) {
  return (
    <article className="content-card">
      {meta && <span>{meta}</span>}
      <h3>{clean(item.title || item.name)}</h3>
      <p>{clean(item.excerpt || item.description || "")}</p>
      <a href={href}>Read More</a>
    </article>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-inner">
        <div>
          <img className="footer-logo" src={asset("logo-footer.webp")} alt="LeChao" />
          <p>Partner with LeChao, the top soft candy manufacturer that brings your creativity to life, and we'll help your business thrive in the candy market.</p>
        </div>
        <div>
          <h3>Product Category</h3>
          {productCategories.slice(0, 5).map((slug) => {
            const cat = siteData.categories.find((item) => item.slug === slug);
            return <a href={`/product-category/${slug}/`} key={slug}>{cat?.name}</a>;
          })}
        </div>
        <div>
          <h3>Our Company</h3>
          {navItems.map((x) => <a href={x.href} key={x.label}>{x.label}</a>)}
        </div>
        <div>
          <h3>Contact Us</h3>
          <a href="tel:867686196663">+86-768-6196663</a>
          <a href="mailto:lechao@Lechaogd.com">lechao@Lechaogd.com</a>
          <p>ChaoAn AnBu ZhuangLong Industrial Zone, GuangDong, China</p>
        </div>
      </div>
      <small>(c) 2026 GUANGDONG LECHAO FOODSTUFF Co, Ltd. All Rights Reserved</small>
    </footer>
  );
}

function Router() {
  const path = window.location.pathname.replace(/^\/|\/$/g, "");
  if (!path) return <HomePage />;
  if (path.startsWith("product-category/")) return <ProductCategoryPage slug={path.split("/")[1]} />;
  if (path.startsWith("product/")) return <ProductPage slug={path.split("/")[1]} />;
  if (pageCopy[path]) return <StandardPage slug={path} />;
  return <StandardPage slug="wholesale-candy-supplier" />;
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
