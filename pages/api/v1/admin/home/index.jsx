import SchemaHome from "../../../modal/productModal/SchemaHome";
import SchemaProduct from "../../../modal/productModal/SchemaProduct";
import connectDatabase from "../../../utils/bd";
const GetHome = async (req, res) => {
    try {

        await connectDatabase()
        // let dataAllHandel = []
        let result;
        const results = await SchemaHome.find({})
        // for (let i = 0; i < results.length; i++) {
        //     const TypeHandle = results[i]?.type
        //     const LimitHandle = results[i]?.number
        //     const IdHandle = results[i]?._id
        //     const TitleHandle = results[i]?.title
        //     const distinctionHandle = results[i]?.distinction
        //     const handleHomeData = await SchemaProduct.find({ type: TypeHandle }).limit(LimitHandle)
        //     dataAllHandel = [...dataAllHandel, ...handleHomeData]
        // }
        if (results) {
            result = await SchemaProduct.find({ type: results[0]?.type }).limit(results[0]?.number)
        }
        // for (let i = 0; i < results.length; i++) {
        //     const TypeHandle = results[i]?.type
        //     const LimitHandle = results[i]?.number
        //     const IdHandle = results[i]?._id
        //     const TitleHandle = results[i]?.title
        //     const distinctionHandle = results[i]?.distinction
        //     const handleHomeData = await SchemaProduct.find({ type: TypeHandle }).limit(LimitHandle)
        //     dataAllHandel = [...dataAllHandel, ...handleHomeData]
        // }
        // if(dataAllHandel){
        //     return res.status(200).json({ result, dataAllHandel })
        // }
        if (result) {
            return res.status(200).json({ result, results })
        }
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
export default GetHome;
