import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
        <ul>
            <li key={1} className="h-24">
              <NavLink
                id="nav_link"
                to={`/`}
                end
                className={({ isActive }) => isActive ? "is-active" : undefined }
              >
                lOGIN
              </NavLink>
            </li>
        </ul>
    </header>
  )
}

export default NavBar