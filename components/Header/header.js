'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useHeader from '@/customHooks/Header/useHeader';

const Header = (props) => {

    const {
        handleRegionAndCountries,
        selectedRegion,
        isLinksActive
    } = useHeader();

    console.log("selectedRegion: ",selectedRegion);
    // console.log("isLinksActive: ",isLinksActive);

    return (
        <header>
            <Navbar expand="lg" bg={'#FFFFF'} className='m-5'>
                <Container>
                    <Navbar.Brand href={'/'}>
                        <div className='text-dark fs-4 fw-bold'>Countries</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end align-center'>
                    <ul className="navbar-nav mb-2 mx-lg-0">
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'All' ? 'border-4 border-dark fw-semibold': 'border-bottom-0 border-light text-body-secondary'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('All')}>
                                    All
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'Asia' ? 'border-4 border-dark fw-semibold': 'border-bottom-0 border-light text-body-secondary'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('Asia')}>
                                    Asia
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'Africa' ? 'border-4 border-dark fw-semibold': 'border-bottom-0 border-light text-body-secondary'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('Africa')}>
                                    Africa
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'Europe' ? 'border-4 border-dark fw-semibold': 'border-bottom-0 border-light text-body-secondary'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('Europe')}>
                                    Europe
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'Americas' ? 'border-4 border-dark fw-semibold': 'border-bottom-0 border-light text-body-secondary'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('Americas')}>
                                    Americas
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'Oceania' ? 'border-4 border-dark fw-semibold': 'border-bottom-0 border-light text-body-secondary'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('Oceania')}>
                                    Oceania
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button className={`nav-link ps-0 pe-3 py-2 border border-top-0 border-start-0 border-end-0 ${selectedRegion === 'Polar' ? 'border-4 border-dark fw-semibold': 'border-bottom-0 border-light text-body-secondary'} ${isLinksActive ? 'active border border-bottom-3' : 'disabled'}`} onClick={() => handleRegionAndCountries('Polar')}>
                                    Polar
                                </button>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
