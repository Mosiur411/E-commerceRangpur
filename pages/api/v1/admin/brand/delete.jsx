import SchemaBrand from "../../../modal/productModal/SchemaBrand";
import connectDatabase from "../../../utils/bd";
const Delete = async (req, res) => {
    try {
        await connectDatabase()
        const id = req.body;
        let result;
        if (id) {
            result = await SchemaBrand.deleteOne({ _id: id })

        }
        if (result) {
            return res.status(200).json(result)
        }

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default Delete;
