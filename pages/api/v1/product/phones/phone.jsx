import SchemaPhone from "../../../modal/productModal/SchemaPhone";
import connectDatabase from "../../../utils/bd";

const GetPhone = async (req, res) => {
    try {
        await connectDatabase()
        const pageOptions = {
            page: parseInt(req.query.page, 10) || 0,
            limit: parseInt(req.query.limit, 10) || 10
        }
        if (!data) {
            await SchemaPhone.find({}).skip(pageOptions.page * pageOptions.limit)
                .limit(pageOptions.limit).exec(function (err, doc) {
                    if (err) { res.status(500).json(err); return; };
                    res.status(200).json(doc);
                });
        }
        if (data) {
            await SchemaPhone.find({ brand: data }).skip(pageOptions.page * pageOptions.limit)
                .limit(pageOptions.limit).exec(function (err, doc) {
                    if (err) { res.status(500).json(err); return; };
                    res.status(200).json(doc);
                });
        }






    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default GetPhone;