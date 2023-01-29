import Link from 'next/link'
export default function PopularCategories({ img, title, path, quantity, extraQuantity }) {
    return (
        <li className="py-2 overflow-hidden transition-all duration-200 ease-in-out bg-white space-y-2 h-full flex flex-col">
            <Link href={`/${path}`} className="flex flex-col justify-center items-center group space-y-3" title="All Smartphones from Price in Kenya">
                <img src={img} width={60} height={60} alt="Image" />
                <p className="px-3.5 text-center group-hover:text-primary">{title}</p>
            </Link >
            <div className="flex justify-center items-center space-x-0.5">
                <p className="text-base font-medium text-gray-500 text-center">{quantity}</p>
                {extraQuantity && <span className="text-secondary font-medium">+{extraQuantity}</span>}

            </div>
        </li>
    )
}
