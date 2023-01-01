export default function Brands({quantity,ExtraQuantity,rating,img}) {
    return (
        <li class="rounded-md overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out bg-white border space-y-2 h-full flex flex-col pb-1">
            <a href="/brand/samsung" class="flex flex-col justify-center items-center py-6" title="All Samsung products from Price in Kenya">
                <img src={img} className='w-32' />
            </a>
            <div class="flex items-center p-2">
                <div class="flex-auto flex flex-col justify-center text-center">
                    <div class="flex justify-center items-center space-x-0.5">
                        <p class="text-base font-medium text-gray-600">{quantity}</p>
                        {
                            ExtraQuantity && <span class="text-secondary font-medium">+{ExtraQuantity}</span>
                        }

                    </div>
                    <p class="text-gray-500">Items</p>
                </div>
                <p class="flex-auto flex flex-col justify-center text-center"><span class="text-base font-medium text-gray-600">{rating}</span> <span class="text-gray-500">Rating</span></p>
            </div>
        </li>
    )
}
