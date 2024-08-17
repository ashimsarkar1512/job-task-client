import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProviders";






const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }

            const navLinks=<>
             
             <li ><NavLink  className={({ isActive }) => (isActive ? 'text-xl text-orange-500 font-medium' : 'text-xl dark:text-green-600 font-medium')} to='/product'>Products</NavLink></li>

               
              
            </>
            return (
                        <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
           navLinks
      }
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl  font-bold dark:text-primary gap-0">ElectraByte <span>
     
      
     </span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
         navLinks
      }
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
 

  {
          user?.photoURL ?
            <div className="flex gap-3 items-center">
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" ><img className="w-8 rounded-full" src={user?.photoURL} alt="" /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded w-24">
                  <li className=" font-bold text-black"><a>{user?.displayName || "user name not found"}</a></li>

                </ul>
              </div>
              <button onClick={handleSignOut} className="text-sm p-2 rounded-md border bg-white text-black">signOut</button>
            </div>
            :
            <Link to='/login'><button className="text-sm p-2 rounded-md  border bg-white text-black">Login</button></Link>
        }
  </div>
</div>
            );
};

export default Navbar;