import Link from "next/link";

const Header = (props) => { 

    return (
        <header>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <Link className="navbar-brand" href={'/'}>
                    Countries
                </Link>
                <div>
                    <ul>
                        <li>All</li>
                        <li>Asia</li>
                        <li>Africa</li>
                        <li>Europe</li>
                        <li>Americas</li>
                        <li>Oceania</li>
                        <li>Polar</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
