import React from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useState } from 'react';
import { useEffect } from 'react';
export default function HtmlDescription({ Description, passData }) {
    const { quill, quillRef } = useQuill();
    const [value, setValue] = useState();

    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                console.log(quillRef.current.firstChild.innerHTML);
                setValue(quillRef.current.firstChild.innerHTML)
            });
        }
    }, [quill]);
    if (value) {
        Description(value)
    }
    return (
        <div className='bg-white'>
            <div ref={quillRef} />
        </div>
    )
}
