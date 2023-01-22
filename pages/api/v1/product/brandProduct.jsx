import SchemaProducts from "../../modal/productModal/SchemaProduct"
import connectDatabase from "../../utils/bd"

const brandProduct = async (req, res) => {
    try {
        await connectDatabase()
        const data = req.query.type;
        const brand = req.query.brand;
        const pageOptions = {
            page: parseInt(req.query.page),
            limit: parseInt(req.query.limit)
        }
        let result;
        if (data && brand) {
            const filterData = await SchemaProducts.find({ type: data }).skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit).sort({ price: 1 })
            if (filterData) {
                result = filterData.filter(data => data.brand == brand)
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
export default brandProduct