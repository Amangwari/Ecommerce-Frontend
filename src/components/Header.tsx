import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"


const user = { _id: "ggg", role: "admin" }


const Header = () => {
  const [isopen, setIsopen] = useState<boolean>(false)
  const logoutHandler = () => {
    setIsopen(false)
  }
  return (
    <nav className="header">

      <Link to={'/'} onClick={() => setIsopen(false)}>HOME</Link>
      <Link to={'/search'} onClick={() => setIsopen(false)}><FaSearch /></Link>
      <Link to={'/cart'} onClick={() => setIsopen(false)}><FaShoppingBag /></Link>

      {
        user?._id ? (
          <>
            <button onClick={() => setIsopen((prev) => !prev)}>
              <FaUser />
            </button>
            <dialog open={isopen}>
              <div>
                {user?.role === "admin" && <Link to={'/admin/dashboard'} onClick={() => setIsopen(false)}>Dashboard</Link>}

                <Link to={'/orders'} onClick={() => setIsopen(false)}>Orders</Link>
                <button onClick={logoutHandler}>
                  <FaSignOutAlt />
                </button>
              </div>
            </dialog>
          </>
        ) : <Link to={'/login'}><FaSignInAlt /></Link>

      }
    </nav>
  )
}

export default Header;