import SchemaBrand from "../../../modal/productModal/SchemaBrand";
import connectDatabase from "../../../utils/bd";
const postBrand = async (req, res) => {
    try {
        await connectDatabase()
        const data = req.body;
        const BrandInfo = await SchemaBrand(data)
        if (!BrandInfo) return res.status(404).json({ error: "NeedData not phone" })
        const result = await BrandInfo.save()
        return res.status(200).json({ result })

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default postBrand;
