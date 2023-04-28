export interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    description: string;
    imageUrl: string;
    longDescription: string;
  }
  
  export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  
  const products: Product[] = [
    {
      id: 1,
      name: "Adidas UCL Pro Istanbul Ball",
      price: 170,
      brand: "adidas",
      description:
        "The Official Match Ball Of The UEFA Champions League Knockout Stages.",
      imageUrl: "/images/ball-1.jpg",
      longDescription:
        "Finally. The stars will align for Istanbul in 2023. Created for the knockout stages of the UEFA Champions League, this adidas match ball flashes an eye-catching graphic that celebrates the city's unique location and commemorates its unforgettable link with soccer's biggest club competition. Behind the graphics, a seamless surface and butyl bladder ensure this FIFA Quality Pro-certified ball shines on the pitch."
    },
    {
      id: 2,
      name: "Adidas MLS Pro Ball",
      price: 170,
      brand: "adidas",
      description:
        "The Seamless Match Ball Used In MLS Games In The 23/24 Season.",
      imageUrl: "/images/ball-2.jpg",
      longDescription:
        "No sporting spectacle can beat soccer fans in full voice. Celebrating the songs and chants that bring MLS stadiums to life, this adidas ball gives off grungy vibes with music poster-inspired graphics. Beneath that dynamic design, the seamless, thermally bonded construction and butyl bladder ensure predictability and longevity. A FIFA Quality Pro stamp guarantees pitch-perfect performances."
    },
    {
      id: 3,
      name: "Adidas Oceaunz Pro Football",
      price: 165,
      brand: "adidas",
      description: "THE OFFICIAL MATCH BALL OF THE FIFA WOMEN'S WORLD CUP™.",
      imageUrl: "/images/ball-3.jpg",
      longDescription:
        "Created for flowing soccer. The official match ball used during the early stages of the FIFA Women's World Cup™, this adidas Oceaunz pro ball stands out with graphics that reflect the importance of Australia and New Zealand's spectacular coastlines and life-sustaining lakes and waterways. Its seamless construction makes for a predictable flight and bounce. That Quality Pro stamp is FIFA's highest rating."
    },
    {
      id: 4,
      name: "Adidas Al Rihla Pro Winter Ball",
      price: 150,
      brand: "adidas",
      description:
        "The Official Match Ball Of The UEFA Champions League Knockout Stages.",
      imageUrl: "/images/ball-4.jpg",
      longDescription:
        "Al Rihla means the Journey, the ball is just the beginning. The rest of your football journey is yet to be written. A high-viz version of the FIFA World Cup Qatar 2022™ match ball, this adidas Al Rihla Pro ball is made with winter conditions in mind. Its dhow-inspired Speedshell panel shape combines with texturing and diamond debossing to enhance swerve and accuracy. The radiant graphics shimmer under a pearlescent finish."
    },
    {
      id: 5,
      name: "Nike Flight",
      price: 162,
      brand: "nike",
      description: "Precision Flight.",
      imageUrl: "/images/ball-5.jpg",
      longDescription:
        "The Nike Flight Soccer Ball lets you play with precision. Molded grooves and a grippy texture reduce unexpected movement through the air to help you put the ball where you want it."
    },
    {
      id: 6,
      name: "Nike Premier League Flight",
      price: 165,
      brand: "nike",
      description: "Play With Precision Flight.",
      imageUrl: "/images/ball-6.jpg",
      longDescription:
        "Honed over 8 years and 1,700 hours of testing, the Nike Flight Soccer Ball is a revolution in consistent flight. Molded grooves and a grippy texture reduce unexpected movement through the air to help you put the ball where you want it."
    },
    {
      id: 7,
      name: "Nike Club Elite",
      price: 170,
      brand: "nike",
      description: "Play With Precision Flight.",
      imageUrl: "/images/ball-7.jpg",
      longDescription:
        "Get ready to score with the Nike Club Elite Soccer Ball. It features a textured casing with stabilizing grooves to provide consistent flight across the field."
    },
    {
      id: 8,
      name: "Nike NFHS Club Elite Team",
      price: 135,
      brand: "nike",
      description: "Engineered For Precision Flight.",
      imageUrl: "/images/ball-8.jpg",
      longDescription:
        "The NFHS Club Elite Team Soccer Ball is ready to fly into the back of the net. A textured casing with stabilizing grooves gives you consistent touch when passing, shooting and dribbling."
    },
    {
      id: 9,
      name: "Puma Orbita 1 La Liga FIFA Quality Pro Soccer Ball 22/23",
      price: 145,
      brand: "puma",
      description: "The Official Ball For The Upcoming La Liga Season.",
      imageUrl: "/images/ball-9.jpg",
      longDescription:
        "Kick it like the legends of La Liga with this magnificent match ball – the official ball used in the Spanish top flight is FIFA Quality Pro certified for top performance guaranteed, featuring lots of clever details designed for robust and aerodynamic play. Classic PUMA design meets the silky tricks and flicks of Spain's superheroes. Look out – this is shaping up to be anEl Clásico all of its own."
    },
    {
      id: 10,
      name: "Puma Orbita 1 Serie A FIFA Quality Pro Soccer Ball 22/23 - Yellow",
      price: 135,
      brand: "puma",
      description: "The Official Ball For The Upcoming Serie A Season.",
      imageUrl: "/images/ball-10.jpg",
      longDescription:
        "The design celebrates the roots of Italian culture, with graphics inspired by the Lega Serie A logo and Italian progressive art. The Italian tricolor is also included. This high-end match ball is made to fly perfectly."
    },
    {
      id: 11,
      name: "PUMA EFL Sky Bet Orbita 1 Official Match Soccer Ball – 2022/23",
      price: 125,
      brand: "puma",
      description: "EFL Sky Bet Orbita 1 Official Match Ball",
      imageUrl: "/images/ball-11.jpg",
      longDescription:
        "This Orbita 1 ball combines the latest PUMA tech with graphics chosen to represent speed and acceleration while playing at the highest level. You'll see the EFL logo on the white ball, while incorporating red, blue, grey and black color variations. Because this ball is FIFA Quality Certified it has passed 7 different tests in reference to its weight, roundness, bounce, circumference, water absorption, loss of pressure and its retention to shape, and overall size. There is POE foam included within this new ball to increase touch sensitivity and help with the bounce."
    },
    {
      id: 12,
      name: "PUMA Carabao Cup Orbita 1 Official Match Soccer Ball – 2022/23",
      price: 155,
      brand: "puma",
      description: "Carabao Cup Orbita 1 Official Match Soccer Ball",
      imageUrl: "/images/ball-12.jpg",
      longDescription:
        "This Orbita 1 ball combines the latest PUMA tech with graphics chosen to represent speed and acceleration while playing at the highest level. Because this ball is FIFA Quality Certified it has passed 7 different tests in reference to its weight, roundness, bounce, circumference, water absorption, loss of pressure and its retention to shape, and overall size. There is POE foam included within this new ball to increase touch sensitivity and help with the bounce."
    }
  ];
  
  export default products;
  