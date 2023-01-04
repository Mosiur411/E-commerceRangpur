import SchemaProducts from "../../modal/productModal/SchemaProduct";
import connectDatabase from "../../utils/bd";

const ProductGet = async (req, res) => {
    try {
        // console.log(req.query.type)
        await connectDatabase()
        const data = req.query.type;
        const brand = req.body.brand;

        const pageOptions = {
            page: parseInt(req.query.page),
            limit: parseInt(req.query.limit)
        }
        let result;
        if (data) {
            /*  $or: [{ brand: { $eq: brand } }] */

            const filterData = await SchemaProducts.find({ type: data }).skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit).sort({ price: 1 })
            if (brand) {
                result = filterData.filter(data => data.brand == brand)
            } else {
                result = filterData
            }
        }
        if (result) {
            return res.status(200).json(result)
        }

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default ProductGet;