import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"

const Nav = () => {
    return (
        <header>
            <nav>
                <a href="/">
                    <img src={headerLogo} width={130} height={29} alt="Logo" />
                </a>
            </nav>
        </header>
    )
}

export default Nav