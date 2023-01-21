const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all categories
  // be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', async(req, res) => {
  try {
    const categoryData = await Category.findOne({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', (req, res) => {
  // create a new category
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try{
  const result = await Category.update({},{
    where: {
      id: req.params.id
    }
  });
  res.json(result);
}
catch(err){
  res.status(404).json(err);
}
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});


module.exports = router;
