import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center gap-5">
    <Link to="/">Using Redux</Link>
    <Link to="/mongez">Using Mongez</Link>
    </div>
  )
}
