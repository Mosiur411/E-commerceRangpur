import SchemaProducts from "../../modal/productModal/SchemaProduct";
import connectDatabase from "../../utils/bd";


const AdminProductGet = async (req, res) => {
    try {
        await connectDatabase()
        const data = req.query.type;
        let result;
        if (data) {
            result = await SchemaProducts.find({ type: data })
        }
        if (result) {
            return res.status(200).json(result)
        }

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default AdminProductGet;