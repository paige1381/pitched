// Dependencies =======================
// require
const express = require('express');
const router  = express.Router();

// models
const Review = require('../models/reviews.js');
const Comment = require('../models/comments.js');


// Routes =============================
// index
// router.get('/reviews', async (req, res) => {
//   try {
//     const allReviews = await Review.find().sort({createdAt: -1});
//     res.send(allReviews);
//     // res.render('photos/index.ejs', {allPhotos});
//   }
//   catch (err) {
//     res.send(err.message);
//   }
// });

// new


// show


// create


// edit


// update


// delete


// json
// router.get('/reviews/json', (req, res) => {
//   const allReviews = Review.find().sort({createdAt: -1});
//   try {
//     res.send(allReviews);
//   }
//   catch (err) {
//     res.send(err.message);
//   }
// });


// seed
// router.get('/reviews/seed', async (req, res) => {
//   const reviews = [
//     {
//       img: ['https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?auto=format&fit=crop&w=1349&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'],
//       submitter: 'Paige',
//       review: 'Sea lettuce melon cabbage leek bamboo shoot lettuce rutabaga jícama silver beet amaranth pea dandelion scallion pea sprouts yarrow salsify bitterleaf courgette. Azuki bean horseradish potato kale welsh onion fennel green bean azuki bean chickweed aubergine bell pepper sea lettuce rutabaga cucumber grape. Radish grape rutabaga celery beetroot kombu spring onion cauliflower soybean.',
//       location: 'New River Trail State Park',
//       site: 'Spot 5',
//       rating: 4,
//       type: 'Tent'
//     },
//     {
//       img: ['https://images.unsplash.com/photo-1479244209311-71e35c910f59?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://images.unsplash.com/photo-1511806246128-aaabca3dbe03?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'],
//       submitter: 'Paige',
//       review: 'Secondary fermentation degrees plato units of bitterness, cask conditioned ale ibu real ale pint glass craft beer. krausen goblet grainy ibu brewhouse lagering finishing hops. Trappist, black malt chocolate malt balthazar gravity dextrin saccharification trappist final gravity. Aau scotch ale, adjunct. hops bung infusion, cask conditioning pitching malt extract.',
//       location: 'Big Bend National Park',
//       site: 'Robbers Roost',
//       rating: 5,
//       type: 'Car'
//     }
//   ];
//
//   try {
//     const seedReviews = await Review.create(reviews);
//     res.send(seedReviews);
//   }
//   catch (err) {
//     res.send(err.message);
//   };
// });

module.exports = router;