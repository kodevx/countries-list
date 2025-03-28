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
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-sm">
                    <a className="navbar-brand text-dark fs-4 fw-bold" href={'/'}>
                        Countries
                    </a>
                    <button 
                        type='button'
                        className="navbar-toggler" 
                        data-bs-toggler="collapse" 
                        data-bs-target="#regionsList" 
                        aria-controls="regionsList"
                        aria-expanded="false"
                        aria-label='Toggle Navigation'
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-center" id="regionsList">
                        <ul className="navbar-nav mb-2 mx-lg-0">
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'All' ? 'border-4 border-dark': 'border-bottom-0 border-light'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('All')}>
                                    All
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'Asia' ? 'border-4 border-dark': 'border-bottom-0 border-light'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('Asia')}>
                                    Asia
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'Africa' ? 'border-4 border-dark': 'border-bottom-0 border-light'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('Africa')}>
                                    Africa
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'Europe' ? 'border-4 border-dark': 'border-bottom-0 border-light'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('Europe')}>
                                    Europe
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'Americas' ? 'border-4 border-dark': 'border-bottom-0 border-light'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('Americas')}>
                                    Americas
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'Oceania' ? 'border-4 border-dark': 'border-bottom-0 border-light'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('Oceania')}>
                                    Oceania
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'Polar' ? 'border-4 border-dark': 'border-bottom-0 border-light'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('Polar')}>
                                    Polar
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
