import React from "react";
import {Link} from "react-router-dom";
function Home(){
    return (
        <div className="flex h-screen justify-center">
            <button className="self-center border px-8 text-white rounded-md bg-blue-500 py-1"><Link to="/login">Login</Link></button>
        </div>
    )
}
export default Home;