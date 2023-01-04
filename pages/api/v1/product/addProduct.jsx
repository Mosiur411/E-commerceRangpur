import SchemaProducts from "../../modal/productModal/SchemaProduct";
import connectDatabase from "../../utils/bd";
const CreateProduct = async (req, res) => {
    try {
        await connectDatabase()
        const data = req.body;
        const ProductInfo = await SchemaProducts(data)
        if (!ProductInfo) return res.status(404).json({ error: "NeedData not phone" })
        const result = await ProductInfo.save()
        console.log(result)
        return res.status(200).json({ result })
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default CreateProduct;