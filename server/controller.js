module.exports = {
    getInventory: (req, res, next) => {
        const db = req.app.get('db');
        db.get_inventory().then(products => {
            res.status(200).send(products)
        }).catch(err => console.log(err))
    },
    createProduct: (req, res, next) => {
        const db = req.app.get('db');
        const { name, price, img } = req.body;
        db.create_product([name, price, img]).then(products => {
            res.status(200).json(products)
        }).catch(err => console.log(err))
    },
    // deleteProduct: (req, res, next) => {
    //     const { id } = req.params;
    //     res.status(200).json("it worked!")
    // },
    editProduct: (req, res, next) => {

    }
}

// res.status(200).json("it worked!")


//   {
//     name: 'Sweater',
//     price: 25,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM68D3WTh3CWqpA5ehn50ynQjvgyxfkFuRAfcm9eq0bjoJLJ4W3g'
//   },
//   {
//     name: 'Boots',
//     price: 250,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbMFSI5MuUl_eeyJgnFUkbESXdj8rUFV8iHMtjhI1aWzYpMeIjA'
//   }