import Link from 'next/link'
import React from 'react'

export default function TypeAndBrand({name,brand}) {

    return (
        <Link href={`/brand/${name}/${brand}`} className="flex justify-between ">
            <p >{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</p>
        </Link>
    )
}
