import React from 'react'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from 'react';
import auth from '../../firebase.init';

export default function Login() {
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputs) {
            const email = inputs?.email
            const password = inputs?.password
            if (email && password) {
                /* email: admin625@gmail.com */
                /* email: admin625@ */
                signInWithEmailAndPassword(email, password)
            }
        }

    }

    return (
        <div className='w-100 h-[100vh] flex justify-center items-center'>

            <div>
                <form onSubmit={handleSubmit} className='bg-slate-400 p-10 rounded'>
                    <div className='w-full'>
                        <label htmlFor="Email"
                            class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Email
                        </label>
                        <input type="email" placeholder="Login Email"
                            name="email"
                            value={inputs.email || ''}
                            onChange={handleChange}
                            required
                            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="Email"
                            class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                            Password
                        </label>
                        <input type="password" placeholder="Login password"
                            name="password"
                            value={inputs.password}
                            onChange={handleChange}
                            required
                            class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                    </div>
                    <div class="mt-10">
                        <button
                            class="px-4 py-2 font-medium text-gray-100 bg-blue-600 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                            Send
                        </button>
                    </div>
                </form>


            </div>

        </div>
    )
}
