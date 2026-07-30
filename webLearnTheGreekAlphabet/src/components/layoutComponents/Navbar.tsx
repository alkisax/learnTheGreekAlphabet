import { NavLink } from "react-router"
import heroImage from "../../assets/heroImage.png"

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "font-bold text-blue-600"
      : "text-black hover:text-blue-600"

  return (
    <header>
      <img
        src={heroImage}
        alt="Learn the Greek Alphabet"
        title="Learn the Greek Alphabet"
        className="w-full h-60 object-cover"
        width={1717}
        height={916}
        loading="eager"
      />

      <nav className="bg-white pb-10">
        <div className="flex h-16 justify-start items-center text-black gap-8 bg-white px-6">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/greek-alphabet" className={linkClass}>
            The Greek Alphabet
          </NavLink>

          <NavLink to="/learn" className={linkClass}>
            Learn
          </NavLink>
        </div>
      </nav>

    </header>
  )
}

export default Navbar
