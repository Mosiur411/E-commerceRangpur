import SchemaBrand from "../../../modal/productModal/SchemaBrand";
import connectDatabase from "../../../utils/bd";
const Brand = async (req, res) => {
    try {
        await connectDatabase()
        const result = await SchemaBrand.find({})
        if (result) {
            return res.status(200).json(result)
        }

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default Brand;
