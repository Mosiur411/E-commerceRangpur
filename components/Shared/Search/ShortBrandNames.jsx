import Link from 'next/link'
import React from 'react'

export default function ShortBrandNames({ name, stock }) {
    const brand = 'vivo'
    const path = 'brand'
    return (
        <Link href={`/brand/phone/${brand}`} className="flex justify-between ">
            <p>{name}</p>
            <p className="bg-slate-300 px-2 rounded">{stock}</p>
        </Link>
    )
}
