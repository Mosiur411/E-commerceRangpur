import SchemaHome from "../../../modal/productModal/SchemaHome";
import connectDatabase from "../../../utils/bd";
const postHome = async (req, res) => {
    try {
        await connectDatabase()
        const data = req.body;
        const HomeInfo = await SchemaHome(data)
        if (!HomeInfo) return res.status(404).json({ error: "NeedData not phone" })
        const result = await HomeInfo.save()
        return res.status(200).json({ result })

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default postHome;
