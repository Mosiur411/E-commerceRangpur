import SchemaTvs from "../../../modal/productModal/SchemaTvs";
import connectDatabase from "../../../utils/bd";

const GetTvs = async (req, res) => {
    try {
        await connectDatabase()
        const result = await SchemaTvs.find({})
        res.status(200).json({ result });
        // let fastPrice;
        // let secondPrice;
        // /* price section  */
        // if (req.body) {
        //     const priceInfo = req?.body?.price;
        //     const dataPrice = priceInfo?.split(',')
        //     fastPrice = parseInt(dataPrice[0])
        //     secondPrice = parseInt(dataPrice[1])
        // }

        // /* brand section */
        // const brandName = req.query.brand
        // /* pageOptions */
        // const pageOptions = {
        //     page: parseInt(req.query.page, 10) || 0,
        //     limit: parseInt(req.query.limit, 10) || 10,
        // }

        // let result;
        // result = await SchemaTvs.find()

        // if (!fastPrice && !secondPrice && !brandName) {
        //     result = await SchemaTvs.find({}).skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit).sort({ price: 1 })

        // }
        // if ((fastPrice && secondPrice) || brandName) {
        //     result = await SchemaTvs.find({ $or: [{ brand: { $eq: brandName } }, { price: { $gte: fastPrice } }, { price: { $lte: secondPrice } }] }).skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit).sort({ price: 1 })
        // }
        // if (result) {
        //     res.status(200).json({ result });
        // }



    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default GetTvs;