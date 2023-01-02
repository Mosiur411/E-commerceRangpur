import SchemaTvs from "../../modal/productModal/SchemaTvs";
import connectDatabase from "../../utils/bd";
const CreatePhone = async (req, res) => {
    try {
        await connectDatabase()
        const tvs = req.body;
        const tvsInfo = await SchemaTvs(tvs)
        if (!tvsInfo) return res.status(404).json({ error: "NeedData not tvs" })
        const result = await tvsInfo.save()
        return res.status(200).json({ data: result })
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default CreatePhone;