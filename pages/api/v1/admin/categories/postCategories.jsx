import SchemaCategories from "../../../modal/productModal/SchemaCategories"
import connectDatabase from '../../../utils/bd'
const Categories = async (req, res) => {
    try {
        await connectDatabase()
        const data = req.body;
        console.log(data)
        const CategoriesInfo = await SchemaCategories(data)
        if (!CategoriesInfo) return res.status(404).json({ error: "NeedData not phone" })
        const result = await CategoriesInfo.save()
        return res.status(200).json({ result })

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default Categories;