export default function Featured({ img, model, quantity, title }) {
    return (
        <li class="relative rounded-md overflow-hidden cursor-pointer hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out bg-white py-3.5">
            <a href="/product/112012-xiaomi-redmi-note-11-pro" class="flex flex-col h-full space-y-3.5" title="Xiaomi Redmi Note 11 Pro 4G 8GB/128GB from Price in Kenya">
                <div class="flex justify-center items-center overflow-x-auto p-4">
                    <img src={img} />

                </div>
                <div class="px-3.5 flex-auto flex flex-col justify-end">
                    <div class="space-y-1">
                        <div class="flex flex-wrap gap-1.5 gap-x-4">
                            <p class="py-0.5 text-xs font-medium rounded-sm text-secondary">Featured!</p>
                            <p class="py-0.5 text-xs font-medium rounded-sm text-secondary">Sale!</p>
                        </div>
                    </div>
                    <p class="text-sm font-medium text-gray-600 mt-1.5">{title}</p>
                    <p class="text-sm font-normal">{model}</p>
                </div>
            </a>
            <button class="absolute top-0 right-2 flex items-center justify-center gap-x-1 text-xs p-2 group rounded-full bg-gray-100 hover:bg-primary-50 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 w-4 h-4">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span class="font-medium text-gray-500">{quantity}</span>
            </button>
        </li>
    )
}
