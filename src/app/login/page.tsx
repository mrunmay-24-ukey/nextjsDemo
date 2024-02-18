"use client";
import Link from "next/link";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";


export default function Login(){
    const [user, setUser] = useState({
        email:"",
        password:"",
        
    })

    const onLogin = async ()=>{

    }


    return (
        <div>
            <h1>Login page</h1>
            <br />

           


            <br />

            <label htmlFor="email">email</label>
            <input type="text" id='email' value={user.email} 
                onChange={(e)=>setUser({...user , email:e.target.value})}
                placeholder="email"
            />

            <br />
            <br />

            <label htmlFor="password">password</label>
            <input type="password" id='password' value={user.password} 
                onChange={(e)=>setUser({...user , password:e.target.value})}
                placeholder="password"
            />

            <br />
            <br />

            <button onClick={onLogin} className='bg-blue-400 text-white rounded-md p-3'>Login Here</button>
            
            <br />
            <br />
             
            <Link href='/signup' className='text-white'>Visit Sigup page</Link> 
        </div>
    );
}