import React from "react";
import {Link} from "react-router-dom";
function Home(){
    return (
        <div className="flex h-screen justify-center">
            <button className="self-center border px-4 rounded-md"><Link to="/login">Login</Link></button>
        </div>
    )
}
export default Home;