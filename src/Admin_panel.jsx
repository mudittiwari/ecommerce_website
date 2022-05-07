import React, { useEffect } from "react";
import 'flowbite';
import storage from "./Firebase";
import { useState } from "react";
import axios from "axios";
import Addproduct from "./Admin_comps/Addproduct";
import Products from "./Admin_comps/Products";
    
async function fetchproducts() {
    var prods;
    await axios.get("http://localhost:1337/products").then((res)=>{
        prods=res.data;
    });
    return prods;
}
function Admin_panel() {
    const [comp,changecomp]=useState('addproduct');
    const [products,changeproducts]=useState();
    useEffect(()=>{
        fetchproducts().then((res)=>{
            // console.log(res);
            changeproducts(res);
            // changecomp("products");
            // console.log(products);
        });
    },[])
    return (
        <>
            
            <nav className="bg-white" style={{'zIndex':0}}>
                <div>
                    <ul className="flex">
                        <li className="px-4 py-3 cursor-pointer" onClick={()=>{
                            changecomp("addproduct");
                            // console.log(comp);
                        }}> 
                            <h1 className="text-black font-medium">Add Product</h1>
                        </li>
                        <li className="px-4 py-3 cursor-pointer" onClick={async()=>{
                            var prods;
                            fetchproducts().then((res)=>{
                                // console.log(res);
                                changeproducts(res);
                                changecomp("products");
                                // var lst=[];
                                // lst.le=
                                // console.log(products);
                            });
                            
                            // changeproducts(prods);
                            // console.log(products);
                            // console.log(prods);
                        }}> 
                            <h1 className="text-black font-medium">Products</h1>
                        </li>
                    </ul>
                </div>
            </nav>
            {comp=="addproduct"?<Addproduct/>:comp=="products"?<Products products={products} />:<h1>mudit tiwari</h1>}
        </>
    );
}


export default Admin_panel;