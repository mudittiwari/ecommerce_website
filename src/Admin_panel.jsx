import React from "react";
import 'flowbite';
import storage from "./Firebase";
import { useState } from "react";
import axios from "axios";
import Addproduct from "./Admin_comps/Addproduct";
    
function Admin_panel() {
    const [comp,changecomp]=useState('addproduct');
    return (
        <>
            
            <nav className="bg-white">
                <div>
                    <ul>
                        <li className="px-4 py-3 cursor-pointer" onClick={()=>{
                            changecomp("addproduct");
                            // console.log(comp);
                        }}> 
                            <h1 className="text-black font-medium">Add Product</h1>
                        </li>
                    </ul>
                </div>
            </nav>
            {comp=="addproduct"?<Addproduct/>:<h1>mudit tiwari</h1>}
        </>
    );
}


export default Admin_panel;