
import { useEffect, useRef, useState } from 'react';
import logo from '../src/assets/logo.png';
import * as React from 'react';
import { List } from '@material-ui/core';
import homepagefirstcomp from './assets/homepagefirstcomp.png';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';
import { Drawer } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ListItemText, ListItem, Box } from '@material-ui/core';
import Navbar from './Navbar';
// import '../node_modules/@material-ui/core/Drawer'

function Products() {
    const location = useLocation();
    const [state, setState] = useState({
        // top: false,
        left: false,
        // bottom: false,
        // right: false,
    });
    const list = (anchor) => (
        <Box className='bg-black'
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"

        >
            <div className='flex flex-col text-white'>
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
                <Box onClick={toggleDrawer(anchor, false)}>
                    <button
                        className="bg-pink-900 mx-auto mt-5 w-24 rounded border-0 px-4 mb-5 py-3 block" onClick={(e) => {
                            e.preventDefault();
                            applyfilter();

                        }} >Apply</button>
                </Box>
            </div>
        </Box>
    );

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const ref = useRef(null);
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
                    if (i == arr.length)
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
                    if (i == arr.length)
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
            try {
                if (location.state.prodname) {
                    let temp_arr = [];
                    for (let index = 0; index < res.data.length; index++) {
                        const element = res.data[index];
                        if (element.product_name == location.state.prodname) {
                            temp_arr.push(element);
                        }
                    }
                    changeproducts(temp_arr);
                }
            } catch (error) {
                changeproducts(res.data);
            }
            
        }).catch((err) => {
            console.log(err);
        });
        await axios.get(`https://infinite-falls-68793.herokuapp.com/category`, {
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
        await axios.get(`https://infinite-falls-68793.herokuapp.com/brand`, {
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
        <LoadingBar style={{ 'backgroundColor': 'red', 'zIndex': 10 }} ref={ref} />
            <Navbar />
            
            <div className='w-full flex flex-col md:mt-5 sm:mt-5 lg:mt-5 xl:mt-5 2xl:mt-5 mt-0'>
                
                
                {/* <div className='flex justify-center'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div> */}
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        {/* <Button className='text-white mx-5 text-left w-20' onClick={toggleDrawer(anchor, true)}>Filters</Button> */}
                        <button className='text-white md:hidden lg:hidden xl:hidden 2xl:hidden block mx-5 text-left w-20 bg-transparent mt-3' onClick={toggleDrawer(anchor, true)}>Filters</button>
                        <Drawer className='bg-transparent '
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
                <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'>
                    <div className='md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 w-4/5 mt-10 mx-auto md:mt-28 lg:mt-28 xl:mt-28 2xl:mt-28'>
                        <div className='flex-col md:flex lg:flex xl:flex 2xl:flex hidden'>
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
                    <div className='md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 w-full flex flex-col'>
                        <h1 className='font-bold text-2xl mx-24 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-10 mt-0 text-center' style={{ 'color': '#FF007A' }}>Heading</h1>
                        <div className='flex justify-around md:px-10 lg:px-10 xl:px-10 2xl:px-10 px-2 my-10 flex-wrap'>
                            {filtered ? filtered_prods.map((element, index) => {
                                return <div className='md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6 w-2/5 h-max my-5 mx-2 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 cursor-pointer bg-white p-3 rounded-lg flex flex-col' onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/product_page", { state: element });

                                }}>
                                    <img className='mx-auto' style={{ 'height': "250px", "width": "250px" }} src={JSON.parse(element.photos)[0]} alt="" />
                                    <h6 className='font-bold text-black text-center'>{element.product_name}</h6>
                                    <h6 className='text-black text-center'>{element.brand}</h6>
                                    <h6 className='text-black text-center'>Rs {element.price}</h6>
                                </div>
                            }) : products.map((element, index) => {
                                return <div className='md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6 w-2/5 h-max my-5 mx-2 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10 cursor-pointer bg-white p-3 rounded-lg flex flex-col' onClick={(e) => {
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