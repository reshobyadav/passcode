import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])
    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const showpasword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes(<lord-icon
            src="https://cdn.lordicon.com/dicvhxpz.json"
            trigger="hover"
            state="hover-cross"
            colors="primary:#c67d53,secondary:#c7166f" >
        </lord-icon>)) {
            ref.current.src = <lord-icon
                src="https://cdn.lordicon.com/dicvhxpz.json"
                trigger="hover"
                colors="primary:#c67d53,secondary:#c7166f">
            </lord-icon>
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = <lord-icon
                src="https://cdn.lordicon.com/dicvhxpz.json"
                trigger="hover"
                state="hover-cross"
                colors="primary:#c67d53,secondary:#c7166f" >
            </lord-icon>
            passwordRef.current.type = "text"
        }
    }
    const savepassword = () => {
        if(form.site.length>3 && form.username.length>3 && form.password.length>3){
        setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
        console.log(...passwordArray, form)
        setform({ site: "", username: "", password: "" })
        // toast('Password saved!', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        // });
        }
        else{
            toast('Error Invalid Information');
        }
    }
    const copytext = (text) => {
        // toast('Copied to clipboard!', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        // });
        navigator.clipboard.writeText(text)
    }
    const edit = (id) => {
        setform(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }
    const bin = (id) => {
        let c = confirm("Do you really want to delete this password?")
        if(c){
        setPasswordArray(passwordArray.filter(item => item.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        // toast('Password Deleted!', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        // });
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            <ToastContainer />
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-2xl text-green-800 text-center font-bold"><span className=''>&lt;PASSCODE/&gt;</span></h1>
                <p className='text-center text-green-900'>Your own Password Manager</p>
                <div className='text-black flex flex-col p-4 gap-1 justify-center items-center'>
                    <input value={form.site} onChange={handlechange} placeholder='Enter website url' className='rounded-full border border-green-700 w-full px-2' type="text" name='site' id='' />
                    <div className="flex gap-1">
                        <input value={form.username} onChange={handlechange} placeholder='Enter Username' className='rounded-full border border-green-700 px-2 w-full' type="text" name='username' id='' />
                        <div className="relative ">
                            <input ref={passwordRef} value={form.password} onChange={handlechange} placeholder='Enter Password' className='rounded-full border border-green-700 px-2 w-full' type="text" name='password' id='password' />
                            <span className='absolute cursor-pointer' onClick={showpasword}>
                                <lord-icon ref={ref}
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="hover"
                                    colors="primary:#c67d53,secondary:#c7166f">
                                </lord-icon>
                            </span>
                        </div>
                    </div>
                    <button onClick={savepassword} className='flex justify-center w-fit items-center text-white hover:'>
                        <lord-icon
                            src="https://cdn.lordicon.com/mfdeeuho.json"
                            trigger="hover" >
                        </lord-icon>
                        Save
                    </button>
                </div>
                <div className="password w-[500px] flex flex-col items-ceter justify-center ">
                    <h2 className='text-white font-bold w-full text-center'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='text-white font-semibold'>No passwords to show</div>}
                    {passwordArray.length != 0 &&
                        <table>
                            <thead className='bg-pink-600 text-white'>
                                <tr className='w-full flex flex-row justify-around items-center'>
                                    <th className='py-2 '>Site</th>
                                    <th className='py-2 '>Username</th>
                                    <th className='py-2 '>Password</th>
                                    <th className='py-2 '>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-pink-400 text-white'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index} className='flex flex-row justify-around items-center'>
                                        <td>
                                            <span>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className='cursor-pointer mx-1' onClick={copytext(item.site)}>
                                                    <img src="/src/assets/copy.svg" alt="copy" />
                                                </div>
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                <a href={item.username} target='_blank'>{item.username}</a>
                                                <div className='cursor-pointer mx-1' onClick={copytext(item.username)}>
                                                    <img src="/src/assets/copy.svg" alt="copy" />
                                                </div>
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                <a href={item.password} target='_blank'>{item.password}</a>
                                                <div className='cursor-pointer mx-1' onClick={copytext(item.password)}>
                                                    <img src="/src/assets/copy.svg" alt="copy" />
                                                </div>
                                            </span>
                                        </td>
                                        <td>
                                            <span className='cursor-pointer' onClick={edit(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/cbtlerlm.json"
                                                    trigger="hover"
                                                    stroke="light"
                                                    state="hover-line"
                                                    style={{ width: "25px", height: "25px" }}>
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer' onClick={bin(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/nhqwlgwt.json"
                                                    trigger="hover"
                                                    stroke="light"
                                                    style={{ width: "25px", height: "25px" }}>
                                                </lord-icon>
                                            </span>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
