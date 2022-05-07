import React, { useEffect, useRef } from "react";
import storage from "../Firebase";
import { useState } from "react";
import axios from "axios";
import LoadingBar from "react-top-loading-bar";

function Addproduct() {
    const ref = useRef(null);
    const [imagearray, changeimagearray] = useState([]);
    const [image, setImage] = useState('');
    const [title, changetitle] = useState('');
    const [quantity, changequantity] = useState(0);
    const [actual_price, changeactual_price] = useState(0);
    const [discount, changediscount] = useState(0);
    const [category, changecategory] = useState('');
    const [subcategory, changesubcategory] = useState('');
    const [desc, changedesc] = useState('');
    const [price, changeprice] = useState(0);
    const upload = async (e) => {
        e.preventDefault();
        // console.log(image);
        if (image == null)
            return;
        ref.current.continuousStart(0);
        const uploadTask = storage.ref(`/images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapShot) => {
                //takes a snap shot of the process as it is happening
                console.log(snapShot)
            }, (err) => {
                //catches the errors
                console.log(err)
            }, () => {
                // gets the functions from storage refences the image storage in firebase by the children
                // gets the download url then sets the image from firebase as the value for the imgUrl key:
                storage.ref('images').child(image.name).getDownloadURL()
                    .then(fireBaseUrl => {
                        console.log(fireBaseUrl);
                        changeimagearray([...imagearray, fireBaseUrl]);
                    })
                ref.current.complete();
            })


    }
    return (
        <>
            <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
            <div className="w-3/4 mx-auto my-5">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" onChange={(e) => {
                        changetitle(e.target.value);
                    }} value={title} name="title" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:border-gray-300 focus:ring-0 peer" placeholder=" " required="" />
                    <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" onChange={(e) => {
                        changecategory(e.target.value);
                    }} value={category} name="category" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:border-gray-300 focus:ring-0 peer" placeholder=" " required="" />
                    <label for="category" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" onChange={(e) => {
                        changesubcategory(e.target.value);
                    }} value={subcategory} name="subcategory" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:border-gray-300 focus:ring-0 peer" placeholder=" " required="" />
                    <label for="subcategory" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sub Category</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" value={desc} onChange={(e) => {
                        changedesc(e.target.value);
                    }} name="desc" id="desc" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-gray-300 focus:outline-none focus:ring-0  peer" placeholder=" " required="" />
                    <label for="desc" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" value={price} onChange={(e) => {
                        changeprice(e.target.value);
                    }} name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required="" />
                    <label for="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" value={discount} onChange={(e) => {
                        changediscount(e.target.value);
                    }} name="discount" id="discount" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required="" />
                    <label for="discount" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Discount</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" value={actual_price} onChange={(e) => {
                        changeactual_price(e.target.value);
                    }} name="actual_price" id="actual_price" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required="" />
                    <label for="actual_price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">actual_price</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" value={quantity} onChange={(e) => {
                        changequantity(e.target.value);
                    }} name="quantity" id="quantity" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required="" />
                    <label for="quantity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                    <div className="mb-10">
                        <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
                        <button className="bg-pink-900 w-24 rounded border-0 px-4 py-3 my-2 mx-8" disabled={upload_status} onClick={async (e) => {
                            upload(e)
                            // e.preventDefault();
                        }}>Upload</button>
                    </div>
                    <button type="button" className="bg-pink-900 w-24 rounded border-0 px-4 py-3 my-2 mx-8" disabled={submit_status} onClick={async (e) => {
                        e.preventDefault();
                        ref.current.continuousStart(0);
                        await axios.post("http://localhost:1337/products", {
                            "category_name": category.trim(),
                            "subcategory_name": subcategory.trim(),
                            "product_name": title.trim(),
                            "price": price,
                            "discount": discount,
                            "actual_price": actual_price,
                            "quantity": quantity,
                            "desc": desc,
                            "photos": JSON.stringify(imagearray)
                        }, {
                            headers: {
                                Authorization:
                                    `Bearer ${localStorage.getItem('jwt')}`,
                            },
                        }).then((res) => {
                            console.log(res);
                        })
                        ref.current.complete();
                    }}>Submit</button>
                </div>
            </div>
        </>
    );
}


export default Addproduct;