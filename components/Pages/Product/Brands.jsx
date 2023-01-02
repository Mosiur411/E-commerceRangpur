import Link from 'next/link'
import Image from 'next/image'
export default function Brands({ quantity, ExtraQuantity, rating, img, path }) {
    const Images = img
    return (
        <li className="rounded-md overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out bg-white border space-y-2 h-full flex flex-col pb-1">
            <Link href={`/brand/${path}`} className="flex flex-col justify-center items-center py-6" title="All Samsung products from Price in Kenya">
                <Image src={img} width={120} height={120} alt="Image" />

            </Link >
            <div className="flex items-center p-2">
                <div className="flex-auto flex flex-col justify-center text-center">
                    <div className="flex justify-center items-center space-x-0.5">
                        <p className="text-base font-medium text-gray-600">{quantity}</p>
                        {
                            ExtraQuantity && <span className="text-secondary font-medium">+{ExtraQuantity}</span>
                        }

                    </div>
                    <p className="text-gray-500">Items</p>
                </div>
                <p className="flex-auto flex flex-col justify-center text-center"><span className="text-base font-medium text-gray-600">{rating}</span> <span className="text-gray-500">Rating</span></p>
            </div>
        </li>
    )
}
