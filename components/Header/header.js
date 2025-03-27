'use client';

import Link from "next/link";
import useHeader from '@/customHooks/Header/useHeader';

const Header = (props) => {

    const {
        handleRegionAndCountries,
        selectedRegion,
        isLinksActive
    } = useHeader();

    console.log("selectedRegion: ",selectedRegion);
    console.log("isLinksActive: ",isLinksActive);

    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <div className="d-flex justify-content-between">
                    <Link className="h4 navbar-brand" href={'/'}>
                        Countries
                    </Link>
                    <div>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className={`nav-link ${isLinksActive ? '' : 'disabled'}`} onClick={() => handleRegionAndCountries('All')}>
                                    All
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${isLinksActive ? '' : 'disabled'}`} onClick={() => handleRegionAndCountries('Asia')}>
                                    Asia
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${isLinksActive ? '' : 'disabled'}`} onClick={() => handleRegionAndCountries('Africa')}>
                                    Africa
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${isLinksActive ? '' : 'disabled'}`} onClick={() => handleRegionAndCountries('Europe')} href="#">
                                    Europe
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${isLinksActive ? '' : 'disabled'}`} onClick={() => handleRegionAndCountries('Americas')} href="#">
                                    Americas
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${isLinksActive ? '' : 'disabled'}`} onClick={() => handleRegionAndCountries('Oceania')} href="#">
                                    Oceania
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${isLinksActive ? '' : 'disabled'}`} onClick={() => handleRegionAndCountries('Polar')} href="#">
                                    Polar
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
