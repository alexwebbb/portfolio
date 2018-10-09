const {
  SASS,
  NODEJS,
  EXPRESSJS,
  KOAJS,
  REACTJS,
  REDUX,
  BOOTSTRAP,
  MATERIALIZE,
  MONGODB,
  STRIPE,
  D3JS,
  JQUERY,
  PASSPORT,
  CHARTJS
} = require("./techTypes");

module.exports = [
  {
    name: "Earthworm",
    images: [
      "v1538470637/portfolio/earthworm-full.jpg",
      "v1538470636/portfolio/earthworm-detail.jpg"
    ],
    href: "alexwebbb.github.io/thinkful-async-web-apps/api-hack/",
    githubId:"earthworm",
    description: `Earthworm is a visualization of Google's Elevation API utilizing D3. A square is shown on the map. You can move the square around and change it's shape. The view will update, in real time.`,
    techUsed: [D3JS, JQUERY, BOOTSTRAP]
  },
  {
    name: "ItemStore",
    images: [
      "v1538470637/portfolio/itemstore-full.jpg",
      "v1538470634/portfolio/itemstore-detail.jpg"
    ],
    href: "itemstore.info/store/",
    githubId:"cool-web-store",
    description: `Item Store is a mini web store, with basic session tracking. After you create an account, your views are tracked and saved as sessions, which can be viewed later. Complete with shopping cart, payment processing and order history.`,
    techUsed: [NODEJS, EXPRESSJS, MONGODB, BOOTSTRAP, PASSPORT, STRIPE, CHARTJS]
  },
  {
    name: "AstroApp",
    images: [
      "v1538470636/portfolio/astroapp-full.jpg",
      "v1538470634/portfolio/astroapp-detail.jpg"
    ],
    href: "astrology-app.herokuapp.com",
    githubId:"astro-affinity-app",
    description: `Astro App lets you see how you would rate romantically with someone else if you were to break astrological signs down into numbers. Purchase credits to add profiles, and see graphs of the comparison data. utilizing sample info from FamousBirthdays.com. No real money involved, transactions are for simulation purposes only.`,
    techUsed: [
      NODEJS,
      EXPRESSJS,
      MONGODB,
      MATERIALIZE,
      PASSPORT,
      STRIPE,
      REACTJS,
      REDUX,
      D3JS
    ]
  }
];

// {
//   name: "HomePage",
//   images: ["", "", ""],
//   href: "exe.cool",
//   description: `This page, the one you are looking at right now. Just my home page!`,
//   techUsed: [KOAJS, SASS, BOOTSTRAP]
// }
