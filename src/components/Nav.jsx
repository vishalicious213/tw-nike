import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} width={130} height={29} alt="Logo" />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"></ul>
            </nav>
        </header>
    )
}

export default Nav