// Dependencies =======================
// require
const express = require('express');
const router  = express.Router();

// models
const Review = require('../models/reviews.js');
const Comment = require('../models/comments.js');


// Routes =============================
// index
router.get('/', async (req, res) => {

  try {
    const allReviews = await Review.find().sort({createdAt: -1}).limit(6);
    res.render('./reviews/index.ejs', {allReviews});
  }
  catch (err) {
    res.send(err.message);
  }
});

// create
router.post('/', async (req, res) => {
  try {
    for (let i = 0; i < req.body.img.length; i++) {
      if (req.body.img[i] === '') {
        req.body.img.splice(i, 1);
        i--;
      }
    }
    const newReview = await Review.create(req.body);
    res.redirect('/reviews/' + newReview.id);
  }
  catch (err) {
    res.send(err.message);
  }
});

// json
router.get('/json', async (req, res) => {
  try {
    const allReviews = await Review.find();
    res.send(allReviews);
  }
  catch (err) {
    res.send(err.message);
  }
});

// seed
router.get('/seed', async (req, res) => {
  const reviews = [
    {
      img:  ['https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?auto=format&fit=crop&w=1267&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://images.unsplash.com/photo-1470930938908-e8d5c5bd05df?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://images.unsplash.com/photo-1444228425018-ff8535a55c93?auto=format&fit=crop&w=1351&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'],
      submitter: 'Paige',
      review: 'Sea lettuce melon cabbage leek bamboo shoot lettuce rutabaga jícama silver beet amaranth pea dandelion scallion pea sprouts yarrow salsify bitterleaf courgette. Azuki bean horseradish potato kale welsh onion fennel green bean azuki bean chickweed aubergine bell pepper sea lettuce rutabaga cucumber grape. Radish grape rutabaga celery beetroot kombu spring onion cauliflower soybean.',
      location: 'Grand Teton National Park',
      site: 'Sleeping Indian',
      rating: 5,
      type: 'Tent'
    },
    {
      img: ['https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?auto=format&fit=crop&w=1349&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'],
      submitter: 'Paige',
      review: 'Sea lettuce melon cabbage leek bamboo shoot lettuce rutabaga jícama silver beet amaranth pea dandelion scallion pea sprouts yarrow salsify bitterleaf courgette. Azuki bean horseradish potato kale welsh onion fennel green bean azuki bean chickweed aubergine bell pepper sea lettuce rutabaga cucumber grape. Radish grape rutabaga celery beetroot kombu spring onion cauliflower soybean.',
      location: 'New River Trail State Park',
      site: 'Spot 5',
      rating: 4,
      type: 'Tent'
    },
    {
      img: ['https://images.unsplash.com/photo-1479244209311-71e35c910f59?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://images.unsplash.com/photo-1511806246128-aaabca3dbe03?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'],
      submitter: 'Paige',
      review: 'Secondary fermentation degrees plato units of bitterness, cask conditioned ale ibu real ale pint glass craft beer. krausen goblet grainy ibu brewhouse lagering finishing hops. Trappist, black malt chocolate malt balthazar gravity dextrin saccharification trappist final gravity. Aau scotch ale, adjunct. hops bung infusion, cask conditioning pitching malt extract.',
      location: 'Big Bend National Park',
      site: 'Robbers Roost',
      rating: 5,
      type: 'Car'
    },
    {
      img:  ['https://images.unsplash.com/photo-1489893117776-b13fed1ad239?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://unsplash.com/photos/LUfmqLfEAoE'],
      submitter: 'Paige',
      review: 'Sea lettuce melon cabbage leek bamboo shoot lettuce rutabaga jícama silver beet amaranth pea dandelion scallion pea sprouts yarrow salsify bitterleaf courgette. Azuki bean horseradish potato kale welsh onion fennel green bean azuki bean chickweed aubergine bell pepper sea lettuce rutabaga cucumber grape. Radish grape rutabaga celery beetroot kombu spring onion cauliflower soybean.',
      location: 'Saguaro National Park',
      site: 'Helens Dome',
      rating: 5,
      type: 'RV'
    },
    {
      img: ['https://images.unsplash.com/photo-1499363536502-87642509e31b?auto=format&fit=crop&w=1534&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://images.unsplash.com/photo-1444012236767-1b471c68781c?auto=format&fit=crop&w=1355&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://images.unsplash.com/photo-1482355347028-ff60443f60fe?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'],
      submitter: 'Joey',
      review: 'Sea lettuce melon cabbage leek bamboo shoot lettuce rutabaga jícama silver beet amaranth pea dandelion scallion pea sprouts yarrow salsify bitterleaf courgette. Azuki bean horseradish potato kale welsh onion fennel green bean azuki bean chickweed aubergine bell pepper sea lettuce rutabaga cucumber grape. Radish grape rutabaga celery beetroot kombu spring onion cauliflower soybean.',
      location: 'Grand Canyon National Park',
      site: 'Hance Rapids',
      rating: 4,
      type: 'Tent'
    },
    {
      img: ['https://images.unsplash.com/photo-1499416019036-fe88610601ce?auto=format&fit=crop&w=1250&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://images.unsplash.com/photo-1465865523598-a834aac5d3fa?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', 'https://images.unsplash.com/photo-1489212855151-30b04f553971?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'],
      submitter: 'Paige',
      review: 'Secondary fermentation degrees plato units of bitterness, cask conditioned ale ibu real ale pint glass craft beer. krausen goblet grainy ibu brewhouse lagering finishing hops. Trappist, black malt chocolate malt balthazar gravity dextrin saccharification trappist final gravity. Aau scotch ale, adjunct. hops bung infusion, cask conditioning pitching malt extract.',
      location: 'Big Sur',
      rating: 5,
      type: 'RV'
    }
  ];

  try {
    const seedReviews = await Review.create(reviews);
    res.send(seedReviews);
  }
  catch (err) {
    res.send(err.message);
  };
});

// rv index
router.get('/rv', async (req, res) => {
  try {
    const allReviews = await Review.find({type: "RV"}).sort({createdAt: -1});
    res.render('./reviews/RVindex.ejs', {allReviews});
  }
  catch (err) {
    res.send(err.message);
  }
});

// car index
router.get('/car', async (req, res) => {
  try {
    const allReviews = await Review.find({type: "Car"}).sort({createdAt: -1});
    res.render('./reviews/carindex.ejs', {allReviews});
  }
  catch (err) {
    res.send(err.message);
  }
});

// tent index
router.get('/tent', async (req, res) => {
  try {
    const allReviews = await Review.find({type: "Tent"}).sort({createdAt: -1});
    res.render('./reviews/tentindex.ejs', {allReviews});
  }
  catch (err) {
    res.send(err.message);
  }
});

// new
router.get('/new', (req, res) => {
  res.render('./reviews/new.ejs');
});

// show
router.get('/:id', async (req, res) => {
  const review = await Review.findById(req.params.id);
  const comments = await Comment.find({review: review._id}).sort({createdAt: -1});
  res.render('./reviews/show.ejs', {review, comments});
});

// edit
router.get('/:id/edit', async (req, res) => {
  const review = await Review.findById(req.params.id);
  res.render('./reviews/edit.ejs', {review});
});

// update
router.put('/:id', async (req, res) => {
  try {
    for (let i = 0; i < req.body.img.length; i++) {
      if (req.body.img[i] === '') {
        req.body.img.splice(i, 1);
        i--;
      }
    }
    const review = await Review.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/reviews/' + review.id);
  }
  catch (err) {
    res.send(err.message);
  }
});

// delete
router.delete('/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndRemove(req.params.id);
    res.redirect('/reviews');
  }
  catch (err) {
    res.send(err.message);
  }
})


module.exports = router;
