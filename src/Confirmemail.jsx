import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";

function Confirmuser() {
    const { code } = useParams();
    const navigate=useNavigate();
    console.log(code);
    useEffect(async() => {
        await axios.get("https://infinite-falls-68793.herokuapp.com/auth/email-confirmation", { params: { "confirmation": code } }).then((res) => {
            console.log(res);
            navigate("/login");
        }).catch((err) => {
            console.log(err);
            navigate("/login");
        })
        
    })
    return (
        <>
            <div className=' flex flex-col items-center justify-center h-screen'><h1 className='mx-auto mt-20 mb-10 w-max'>Waiting for confirmation</h1>  </div>
        </>
    );
}

export default Confirmuser;



