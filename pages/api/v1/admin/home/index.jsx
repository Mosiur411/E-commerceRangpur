import SchemaHome from "../../../modal/productModal/SchemaHome";
import SchemaProduct from "../../../modal/productModal/SchemaProduct";
import connectDatabase from "../../../utils/bd";
const GetHome = async (req, res) => {
    try {
        await connectDatabase()
        let result;
        const results = await SchemaHome.find({})
        if (results) {
            result = await SchemaProduct.find({ type: results[0]?.type }).limit(results[0]?.number)
        }
        if (result) {
            return res.status(200).json({ result, results })
        }
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default GetHome;
