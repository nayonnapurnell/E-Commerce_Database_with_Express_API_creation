const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
    Category.findAll().then((categoryData) => {
      res.json(categoryData);
    }).catch((err)=>{
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne().then((categoryData) => {
    res.json(categoryData);
  });

});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
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

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
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
