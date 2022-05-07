import axios from "axios";
import React, { useRef, useState } from "react";
import LoadingBar from "react-top-loading-bar";

function Products(props) {
    const ref=useRef(null);
    const [elements,changeelements] = useState(props.products);
    // console.log(props.products);
    // const photos=JSON.parse(props.products.photos);
    // console.log(photos);
    return (
        <div>
            <LoadingBar style={{'backgroundColor':'red','zIndex':10}} ref={ref}  />
        <ul>
            {elements.map((value, index) => {
                return <div className=" bg-white h-max px-5 my-5 py-5 mx-auto flex w-3/4">
                    <div className=" flex justify-center align-center flex-col w-3/4">
                        <li className="text-black">
                            <div className="flex">
                                <h1 className="mx-3">Name:</h1>
                                <h1>{value.product_name}</h1>
                            </div>
                            <div className="flex">
                                <h1 className="mx-3">Description:</h1>
                                <h1>{value.desc}</h1>
                            </div>
                            <div className="flex">
                                <h1 className="mx-3">Category:</h1>
                                <h1>{value.category_name}</h1>
                            </div>
                            <div className="flex">
                                <h1 className="mx-3">Sub Category:</h1>
                                <h1>{value.subcategory_name}</h1>
                            </div>
                            <div className="flex">
                                <h1 className="mx-3">Price:</h1>
                                <h1>{value.price}</h1>
                            </div>
                            <div className="flex">
                                <h1 className="mx-3">Discount:</h1>
                                <h1>{value.discount}</h1>
                            </div>
                            <div className="flex">
                                <h1 className="mx-3">Actual Price:</h1>
                                <h1>{value.actual_price}</h1>
                            </div>
                            <div className="flex">
                                <h1 className="mx-3">Quantity:</h1>
                                <h1>{value.quantity}</h1>
                            </div>
                            {JSON.parse(value.photos).map((value_, index) => {
                                return <a className="mx-3" href={value_}>image {index}</a>
                            })}
                        </li>
                    </div>
                    <div className="w-1/4">
                            <button className="text-black" onClick={async(e)=>{
                                ref.current.continuousStart();
                                e.preventDefault();
                               await axios.delete(`http://localhost:1337/products/${value.id}`,{
                                headers: {
                                    Authorization:
                                        `Bearer ${localStorage.getItem('jwt')}`,
                                },
                            }).then(async(res)=>{
                                await axios.get("http://localhost:1337/products").then((res)=>{
                                   changeelements(res.data);
                                });
                            }).catch((err)=>{
                                console.log(err);
                            });
                            ref.current.complete();
                            }}>Delete</button>
                    </div>
                </div>
            })}
        </ul>
        </div>
    );
}

export default Products;