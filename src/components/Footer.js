import logo from "../Assets/Images/logo.png"
import ips from "../Assets/Images/connect ips.png"
import khalti from "../Assets/Images/khalti pay.png"
import esewa from "../Assets/Images/esewa pay.png"
import { NavLink } from "react-router-dom"
import { } from 'boxicons'

const Footer = () => {

  return (
    <>

      <footer
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581985430116-d8fba25256b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }} >
        <div className="grid grid-cols-[1.5fr,0.75fr,0.75fr,1.75fr] px-2 m-auto ">
          <div>
            <img src={logo} className=" w-[150px] h-[40px] mt-2" alt="" />
            <h4 className="font-bold text-lg my-1">Contact</h4>
            <p><strong>Address:</strong> Madhyapur Thimi-08, Bode, Bhaktapur</p>
            <p><strong>Phone:</strong> (+977)-01-1234567 / (+977) 9860349123</p>
            <p><strong>Hours:</strong> 10:00 AM - 6:00 PM, Sun - Fri</p>
            <div className="ml-20">
              <h4 className="font-bold text-lg my-1 ">Follow US On</h4>
              <div>
                <a href=""><i className='bx bxl-facebook text-4xl mt-2 ml-2  p-1 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md' ></i></a>
                <a href=""><i className='bx bxl-instagram-alt p-1 text-4xl mt-2 ml-2 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 hover:shadow-md'></i></a>
                <a href=""><i className='bx bxl-tiktok text-4xl mt-2 p-1 ml-2 rounded-full  hover:bg-black hover:text-white hover:border-black hover:shadow-md' ></i></a>
              </div>
            </div>
          </div>

          <div >
            <h4 className="font-bold text-lg my-1 mt-2">About</h4>
            <div className=" grid grid-cols-1">
              <NavLink to='/about-us'>About Us</NavLink>
              <NavLink>Delivery Information</NavLink>
              <NavLink>Privacy Policy</NavLink>
              <NavLink>Terms and Conditions</NavLink>
              <NavLink to='contact-us'>Contact Us</NavLink>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg my-1 mt-2">My Account</h4>
            <div className=" grid grid-cols-1">
              <NavLink to='/login'>Login</NavLink>
              <NavLink>View Cart</NavLink>
              <NavLink>My Wishlist</NavLink>
              <NavLink>Track My Order</NavLink>
              <NavLink>Help</NavLink>
            </div>
          </div>

          <div>
            <p className="font-bold text-lg my-2  text-center">Secured Payments Gateways</p>
            <div className="flex justify-between text-center">
              <NavLink> <img src={esewa} className=" h-[70px] w-auto" alt="" /></NavLink>
              <NavLink> <img src={ips} alt="" className=" h-[70px] w-auto" /></NavLink>
              <NavLink> <img src={khalti} alt="" className=" h-[70px] w-auto" /></NavLink>
            </div>
          </div>
        </div>

        <p className="text-center p-1">&copy; Fashion Pasal - 2023</p>
      </footer>

    </>
  )
}
export default Footer