import SchemaCategories from "../../modal/productModal/SchemaCategories";
import connectDatabase from "../../utils/bd";
const Categories = async (req, res) => {
    try {
        await connectDatabase()
        const result = await SchemaCategories.find({})
        if (result) {
            return res.status(200).json(result)
        }

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default Categories;