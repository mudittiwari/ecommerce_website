
import { useEffect, useRef, useState } from 'react';
import logo from '../src/assets/logo.png';
import homepagefirstcomp from './assets/homepagefirstcomp.png';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';
function Products() {
    const ref=useRef(null);
    const [filter, changefilter] = useState();
    const [filtered, changefiltered] = useState(false);
    const [key, changekey] = useState([]);
    const [key_brand, changekeybrand] = useState([]);
    const navigate = useNavigate();
    const [products, changeproducts] = useState([]);
    const [filtered_prods, changefiltprods] = useState([]);
    const [categories, changecategories] = useState([]);
    const [temp_cat, changetempcat] = useState([]);
    const [temp_brand, changetempbrand] = useState([]);
    const [temp_price, changetempprice] = useState([]);
    const [brands, changebrands] = useState([]);
    const [price_key, changepricekey] = useState([]);

    function applyfilter() {
        changefiltered(true);
        let temp_products = [];
        if (temp_cat.indexOf(true) != -1) {
            for (let index = 0; index < products.length; index++) {
                const element = products[index];
                const cat = element.category_name;
                const ind = categories.indexOf(cat);
                if (ind != -1) {
                    if (temp_cat[ind])
                        temp_products.push(element);
                }
            }
        }
        else
            temp_products = products;
        if (temp_brand.indexOf(true) != -1) {
            let temp_array = [];
            for (let index = 0; index < temp_products.length; index++) {
                const element = temp_products[index];
                const brand = element.brand;
                const ind = brands.indexOf(brand);
                if (ind != -1) {
                    if (temp_brand[ind])
                        temp_array.push(element);
                }
            }
            temp_products = [];
            temp_products.push(...temp_array);
        }
        if (temp_price.indexOf(true) != -1) {
            let maxprice = 0;
            let ind = temp_price.lastIndexOf(true);
            if (ind == 0)
                maxprice = 500;
            else if (ind == 1)
                maxprice = 1000;
            else if (ind == 2)
                maxprice = 1500;
            else
                maxprice = 100000;
            let temp_array = [];
            for (let index = 0; index < temp_products.length; index++) {

                const element = temp_products[index];
                const price = element.price;
                if (price < maxprice)
                    temp_array.push(element);

            }
            temp_products = [];
            temp_products.push(...temp_array);
        }
        changefiltprods(temp_products);
        if (filter == "lth") {
            let arr = [];
            for (let index = 0; index < temp_products.length; index++) {
                const element = temp_products[index];
                if (arr.length == 0)
                    arr.push(element);
                else {
                    let i;
                    for (i = 0; i < arr.length; i++) {
                        if (arr[i].price >= element.price) {
                            arr.splice(i, 0, element);
                            break;
                        }
                    }
                    if(i==arr.length)
                        arr.splice(i, 0, element);
                }
            }
            changefiltprods(arr);

        }
        else if (filter == "htl") {
            let arr = [];
            for (let index = 0; index < temp_products.length; index++) {
                const element = temp_products[index];
                if (arr.length == 0)

                    arr.push(element);
                else {
                    let i;
                    for (i = 0; i < arr.length; i++) {
                        if (arr[i].price <= element.price) {
                            arr.splice(i, 0, element);
                            break;
                        }
                    }
                    if(i==arr.length)
                        arr.splice(i, 0, element);
                }
                console.log(arr);
            }
            changefiltprods(arr);
        }
        else if (filter == "new") {
            temp_products.reverse();
            changefiltprods(temp_products);
        }
    }

    useEffect(async () => {
        ref.current.continuousStart(0);
        await axios.get(`https://infinite-falls-68793.herokuapp.com/products/`).then((res) => {
            console.log(res);
            changeproducts(res.data);
        }).catch((err) => {
            console.log(err);
        });
        await axios.get(`http://localhost:1337/category`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            console.log(res);
            if (res.data.categories) {
                let temp_arr = [];
                let temp_key = [];
                changecategories(JSON.parse(res.data.categories));
                for (let index = 0; index < JSON.parse(res.data.categories).length; index++) {
                    temp_arr.push(false);
                    temp_key.push(Math.random());
                }
                changetempcat(temp_arr);
                changekey(temp_key);
            }
        }).catch((err) => {
            console.log(err);
        });
        await axios.get(`http://localhost:1337/brand`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        }).then((res) => {
            if (res.data.brands) {
                let temp_arr = [];
                let temp_key = [];
                changebrands(JSON.parse(res.data.brands));
                for (let index = 0; index < JSON.parse(res.data.brands).length; index++) {
                    temp_arr.push(false);
                    temp_key.push(Math.random());
                }
                changetempbrand(temp_arr);
                changekeybrand(temp_key);
            }
        }).catch((err) => {
            console.log(err);
        });
        let temp_arr = [];
        let temp_key = [];
        for (let index = 0; index < 4; index++) {
            temp_arr.push(false);
            temp_key.push(Math.random());
        }
        changetempprice(temp_arr);
        changepricekey(temp_key);
        ref.current.complete();
    }, [])
    return (
        <>
            <div className='w-full flex flex-col my-6'>
            <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
                <div className='flex justify-center'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <div className='flex'>
                    <div className='w-1/4 mt-28'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl text-center border-2 border-white py-2'>Filter</h1>
                            <div onChange={(e) => {
                                changefilter(e.target.value);
                            }} className='border-2 border-t-0 border-white py-5'>

                                <div className='my-1'><input type="radio" className='mx-4 bg-transparent' name="filter" id="" placeholder='' style={{ 'border': '1px solid white' }} value="lth" />Price low to high</div>
                                <div className='my-1'><input type="radio" className='mx-4 bg-transparent' name="filter" id="" placeholder='' style={{ 'border': '1px solid white' }} value="htl" />Price high to low</div>
                                <div className='my-1'><input type="radio" className='mx-4 bg-transparent' name="filter" id="" placeholder='' style={{ 'border': '1px solid white' }} value="new" />Newest</div>
                            </div>
                            <div className='border-2 border-t-0 border-white py-2'>
                                <h1 className='text-xl text-center mb-2'>Categories</h1>
                                {categories.map((element, index) => {
                                    return <div key={index} className='my-1'><input key={key[index]} type="checkbox" checked={temp_cat[index]} onChange={(e) => {
                                        e.preventDefault();
                                        let temp = [];
                                        let temp_key = [];

                                        temp_key.push(...key);
                                        temp.push(...temp_cat);
                                        temp[index] = !temp[index];
                                        temp_key[index] = Math.random();
                                        changetempcat(temp);
                                        changekey(temp_key);

                                    }} className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />{element}</div>
                                })}


                            </div>
                            <div className='border-2 border-t-0 border-white py-2 h-full'>
                                <h1 className='text-xl text-center mb-2'>Brand</h1>
                                {brands.map((element, index) => {
                                    return <div key={index} className='my-1'><input checked={temp_brand[index]} key={key_brand[index]} onChange={(e) => {
                                        e.preventDefault();
                                        let temp = [];
                                        let temp_key = [];
                                        temp_key.push(...key_brand);
                                        temp.push(...temp_brand);
                                        temp[index] = !temp[index];
                                        temp_key[index] = Math.random();
                                        changetempbrand(temp);
                                        changekeybrand(temp_key);
                                        // console.log(temp_cat);
                                    }} type="checkbox" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />{element}</div>
                                })}
                            </div>
                            <div className='border-2 border-t-0 border-white py-2 h-full'>
                                <h1 className='text-xl text-center mb-2'>Price</h1>
                                <div className='my-1'><input checked={temp_price[0]} key={price_key[0]} onChange={(e) => {
                                    let index = 0;
                                    e.preventDefault();
                                    let temp = [];
                                    let temp_key = [];
                                    temp_key.push(...price_key);
                                    temp.push(...temp_price);
                                    temp[index] = !temp[index];
                                    temp_key[index] = Math.random();
                                    changetempprice(temp);
                                    changepricekey(temp_key);
                                }} type="checkbox" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Under Rs. 500</div>
                                <div className='my-1'><input checked={temp_price[1]} key={price_key[1]} onChange={(e) => {
                                    let index = 1;
                                    e.preventDefault();
                                    let temp = [];
                                    let temp_key = [];
                                    temp_key.push(...price_key);
                                    temp.push(...temp_price);
                                    temp[index] = !temp[index];
                                    temp_key[index] = Math.random();
                                    changetempprice(temp);
                                    changepricekey(temp_key);
                                }} type="checkbox" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Under Rs. 1000</div>
                                <div className='my-1'><input checked={temp_price[2]} key={price_key[2]} onChange={(e) => {
                                    e.preventDefault();
                                    let temp = [];
                                    let index = 2;
                                    let temp_key = [];
                                    temp_key.push(...price_key);
                                    temp.push(...temp_price);
                                    temp[index] = !temp[index];
                                    temp_key[index] = Math.random();
                                    changetempprice(temp);
                                    changepricekey(temp_key);
                                }} type="checkbox" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Under Rs. 1500</div>
                                <div className='my-1'><input checked={temp_price[3]} key={price_key[3]} onChange={(e) => {
                                    e.preventDefault();
                                    let temp = [];
                                    let index = 3;
                                    let temp_key = [];
                                    temp_key.push(...price_key);
                                    temp.push(...temp_price);
                                    temp[index] = !temp[index];
                                    temp_key[index] = Math.random();
                                    changetempprice(temp);
                                    changepricekey(temp_key);
                                }} type="checkbox" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Above Rs. 1500</div>
                            </div>
                            <button type="button"
                                className="bg-pink-900 mx-auto mt-5 w-24 rounded border-0 px-4 py-3 block" onClick={(e) => {
                                    e.preventDefault();
                                    applyfilter();
                                }} >Apply</button>
                        </div>
                    </div>
                    <div className='w-3/4 flex flex-col'>
                        <h1 className='font-bold text-2xl mx-24 mt-10' style={{ 'color': '#FF007A' }}>Heading</h1>
                        <div className='flex justify-around px-10 my-10 flex-wrap'>
                            {filtered ? filtered_prods.map((element, index) => {
                                return <div className='w-2/6 h-max my-5 mx-10 cursor-pointer bg-white p-3 rounded-lg flex flex-col' onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/product_page", { state: element });

                                }}>
                                    <img className='mx-auto' style={{ 'height': "250px", "width": "250px" }} src={JSON.parse(element.photos)[0]} alt="" />
                                    <h6 className='font-bold text-black text-center'>{element.product_name}</h6>
                                    <h6 className='text-black text-center'>{element.brand}</h6>
                                    <h6 className='text-black text-center'>Rs {element.price}</h6>
                                </div>
                            }) : products.map((element, index) => {
                                return <div className='w-2/6 h-max my-5 mx-10 cursor-pointer bg-white p-3 rounded-lg flex flex-col' onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/product_page", { state: element });

                                }}>
                                    <img className='mx-auto' style={{ 'height': "250px", "width": "250px" }} src={JSON.parse(element.photos)[0]} alt="" />
                                    <h6 className='font-bold text-black text-center'>{element.product_name}</h6>
                                    <h6 className='text-black text-center'>{element.brand}</h6>
                                    <h6 className='text-black text-center'>Rs {element.price}</h6>
                                </div>
                            })}


                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Products;