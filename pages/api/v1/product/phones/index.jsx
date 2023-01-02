import SchemaPhone from "../../../modal/productModal/SchemaPhone";
import connectDatabase from "../../../utils/bd";

const CreatePhone = async (req, res) => {
    try {
        await connectDatabase()
        const phone = req.body;
        const phoneInfo = await SchemaPhone(phone)
        if (!phoneInfo) return res.status(404).json({ error: "NeedData not phone" })
        const result = await phoneInfo.save()
        return res.status(200).json({ data: result })
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default CreatePhone;