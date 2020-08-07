module.exports = {
    getItems: (req, res) => {
        const db = req.app.get ('db')
        db.get_inventory().then(items => {
            res.status(200).send(items)
        })
    },

    addItems: (req, res) => {
        const db = req.app.get('db')
        const { item_image, item_name, price } = req.body
        db.create_product([item_image, item_name, price]).then(items => {
            res.status(200).send(items)
        })
    },



}