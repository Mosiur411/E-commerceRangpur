export default function PopularCategories({ img, title, quantity, extraQuantity }) {
    return (
        <li class="py-2 overflow-hidden transition-all duration-200 ease-in-out bg-white space-y-2 h-full flex flex-col">
            <a href="/phones" class="flex flex-col justify-center items-center group space-y-3" title="All Smartphones from Price in Kenya">
                <img src={img} className='w-[60px]' />
                <p class="px-3.5 text-center group-hover:text-primary">{title}</p>
            </a>
            <div class="flex justify-center items-center space-x-0.5">
                <p class="text-base font-medium text-gray-500 text-center">{quantity}</p>
                {extraQuantity && <span class="text-secondary font-medium">+{extraQuantity}</span>}

            </div>
        </li>
    )
}
