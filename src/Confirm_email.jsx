import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
function Confirm_email() {
    const location=useLocation();
    return (
        <>
            <div className=' flex flex-col items-center justify-center h-screen'><h1 className='mx-auto mt-20 mb-10 w-max'>A email has been sent for email verification</h1><button className="px-6 py-1" style={{ 'backgroundColor': 'rgba(255, 0, 122, 1)' }} onClick={async (e) => {

                e.preventDefault();
                // ref.current.continuousStart(0);

                await axios.post("https://infinite-falls-68793.herokuapp.com/auth/send-email-confirmation", {
                    "email": location.state.email
                }).then((res) => {
                    // ref.current.complete();
                    // localStorage.setItem('user', JSON.stringify(res.data.user));
                    // localStorage.setItem('jwt', res.data.jwt);
                    // // console.log(res.data.user);
                    // navigate("/login");
                    console.log(res);

                }).catch((err) => {
                    // ref.current.complete(0);
                    console.log(err);
                });
            }}>Resend Email</button>  </div>
        </>
    );
}

export default Confirm_email;