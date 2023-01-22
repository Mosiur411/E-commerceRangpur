import Link from 'next/link'
import Image from 'next/image'
export default function Brands({ quantity, ExtraQuantity, rating, img, path }) {
    const Images = img
    return (
        <li className="rounded-md overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out bg-white border space-y-2 h-full flex flex-col pb-1">
            <Link href={`/brand/${path}`} className="flex flex-col justify-center items-center py-6" title="All Samsung products from Price in Kenya">
                <Image src={img} width={120} height={120} alt="Image" />

            </Link >
        </li>
    )
}
