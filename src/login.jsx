import React from "react";
import { Link } from "react-router-dom";
function login(){
    return(
        <div className="flex bg-[url(./background.png)] h-screen">
            <div className="flex  px-4 py-4 gap-6 mx-auto  self-center border rounded-xl h-3/4 w-3/4 bg-white">
                <div className="w-6/12">
                    <img className="max-h-full" src="./logo.jpeg" />
                </div>
                <div className="w-6/12 flex flex-col gap-16">
                    <div className="self-center flex flex-col">
                        <h1 className="self-center bold text-3xl">Get Started</h1>
                        <p className="text-gray-400">Already have account? <Link className="text-green-500">Sign in</Link></p>
                    </div>
                    <form className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input id="name" className="mt-2" type="text" placeholder="Enter your name"/>
                        <hr/>
                        <label className="mt-8" htmlFor="email">Email</label>
                        <input id="email" className="mt-2" type="email" placeholder="Enter your name"/>
                        <hr/>
                        <label className="mt-8" htmlFor="password">Password</label>
                        <input id="password" className="mt-2" type="password" placeholder="Enter your name"/>
                        <hr/>
                        <button className="px-32 bg-green-600 text-white  py-2 self-center mt-12 border rounded-md"><Link>Sign Up</Link></button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default login