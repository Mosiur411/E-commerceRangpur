import { useCateGorQuery } from "../../../app/features/api/ProductControl";
import ShortBrandNames from "./ShortBrandNames";

export default function CategoriesSearch() {
    const { data: cateGories } = useCateGorQuery()
    console.log(cateGories)
    return (<div className=" w-[300px] h-[600px] overflow-scroll py-2 px-5 bg-white text-black shadow-2xl">
        <div className="flex flex-col gap-2">
            {
                cateGories?.map(data => <ShortBrandNames name={data?.path} />)
            }

        </div>
    </div>
    )
}