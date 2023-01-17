import SchemaProducts from "../../modal/productModal/SchemaProduct";
import connectDatabase from "../../utils/bd";
const Search = async (req, res) => {
    try {
        const data = req.query.filter;

        await connectDatabase()
        const result = await SchemaProducts.find({model:{ $regex: data, $options: 'i' }})
        if (result) {
            return res.status(200).json(result)
        }

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default Search;
