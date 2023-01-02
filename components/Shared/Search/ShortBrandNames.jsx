import React from 'react'

export default function ShortBrandNames({ name, stock }) {
    return (
        <div className="flex justify-between ">
            <p>{name}</p>
            <p className="bg-slate-300 px-2 rounded">{stock}</p>
        </div>
    )
}
