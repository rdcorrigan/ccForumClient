import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/">Login</Link>
                  <Link to="/register">Register</Link>
                  <Link to="/dashboard">Home</Link>
                  <Link to="/:id/replies">Replies</Link>
            </div>
      )
}
export default Navbar;