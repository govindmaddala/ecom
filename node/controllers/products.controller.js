const { getAPI } = require('../services/CallAPI');

exports.getAllOrSingleProducts = async (req, res) => {
    try {
        const query = req.query;
        let url = "/products";
        if (Object.keys(query).length) {
            url += "/" + query.prodId;
        }

        const data = await getAPI(url);
        res.json({ data });
    } catch (error) {
        res.json({
            data: [],
            error: error.message || 'An error occurred'
        });
    }
}
