import SchemaProducts from "../../modal/productModal/SchemaProduct";
import connectDatabase from "../../utils/bd";


const AdminProductDelete = async (req, res) => {
    try {
        await connectDatabase()
        const id = req.query.type;
        let result;
        if (id) {
            result = await SchemaProducts.deleteOne({ _id: id })

        }
        if (result) {
            return res.status(200).json(result)
        }

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default AdminProductDelete;