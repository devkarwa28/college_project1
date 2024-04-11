import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../images/logo.svg';
import img2 from '../images/';
import img3 from '../images/store.svg';
import img4 from '../images/user.svg';
import img5 from '../images/heart.svg';
import img6 from '../images/cart.svg';
import menu from '../images/menu.svg'
import backimg from '../images/arrow-left.svg'
import downarrow from '../images/chevron-down.svg'
import { Offcanvas } from "bootstrap";
function Header() {
// const [none , block] = useState('d-none')
// const d_none = () =>{
//     block('d-block')
// }
    return (
        <>
            <header>
                <div className="container2">
                    <div className="d-flex header-main">
                        <div>
                            <button class="menu-btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                <img src={menu} />
                            </button>
                            <Link to='/'><img src={img1} alt="" className="logo" /></Link>
                        </div>
                        {/* off Canvas Started */}
                        <div class="offcanvas offcanvas-start w-100" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header d-flex justify-content-between">
                                <div>
                                    <button type="button" class="close-btn" data-bs-dismiss="offcanvas" aria-label="">
                                        <img src={backimg} />
                                    </button>
                                    <Link to='/'><img src={img1} alt="" className="logo" /></Link>
                                </div>

                                <div>
                                    <button className="login-sm">
                                    Register / Login
                                    </button>
                                </div>

                            </div>
                            <div class="offcanvas-body">
                                <div class="dropdown sofa">
                                    <button class="dropdown-toggle" type="button"  >
                                    Sofa <div><img src={downarrow}/></div>
                                    </button>
                                    <ul >
                                        <li><a class="" href="#">Tv Units</a></li>
                                        <li><a class="" href="#">Bookshelves</a></li>
                                        <li><a class="" href="#">Cabinets and Sideboard</a></li>
                                        <li><a class="" href="#">Chest Of Drawers</a></li>
                                        <li><a class="" href="#">Shoe Racks</a></li>
                                        <li><a class="" href="#">Display Unit</a></li>
                                        <li><a class="" href="#">Prayer Units</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown living">
                                    <button class="dropdown-toggle " type="button"  >
                                    Living<div><img src={downarrow}/></div>
                                    </button>
                                    <ul>
                                    <li><a class="" href="#">Tv Units</a></li>
                                        <li><a class="" href="#">Bookshelves</a></li>
                                        <li><a class="" href="#">Cabinets and Sideboard</a></li>
                                        <li><a class="" href="#">Chest Of Drawers</a></li>
                                        <li><a class="" href="#">Shoe Racks</a></li>
                                        <li><a class="" href="#">Display Unit</a></li>
                                        <li><a class="" href="#">Prayer Units</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown mirror">
                                    <button class="dropdown-toggle" type="button"  >
                                    Mirrors<div><img src={downarrow}/></div>
                                    </button>
                                    <ul className= "" >
                                    <li><a class="" href="#">Tv Units</a></li>
                                        <li><a class="" href="#">Bookshelves</a></li>
                                        <li><a class="" href="#">Cabinets and Sideboard</a></li>
                                        <li><a class="" href="#">Chest Of Drawers</a></li>
                                        <li><a class="" href="#">Shoe Racks</a></li>
                                        <li><a class="" href="#">Display Unit</a></li>
                                        <li><a class="" href="#">Prayer Units</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown living-st">
                                    <button class="dropdown-toggle " type="button"  >
                                    Living Storage<div><img src={downarrow}/></div>
                                    </button>
                                    <ul>
                                    <li><a class="" href="#">Tv Units</a></li>
                                        <li><a class="" href="#">Bookshelves</a></li>
                                        <li><a class="" href="#">Cabinets and Sideboard</a></li>
                                        <li><a class="" href="#">Chest Of Drawers</a></li>
                                        <li><a class="" href="#">Shoe Racks</a></li>
                                        <li><a class="" href="#">Display Unit</a></li>
                                        <li><a class="" href="#">Prayer Units</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown tables">
                                    <button class="dropdown-toggle" type="button"  >
                                    Tables<div><img src={downarrow}/></div>
                                    </button>
                                    <ul className= "" >
                                    <li><a class="" href="#">Tv Units</a></li>
                                        <li><a class="" href="#">Bookshelves</a></li>
                                        <li><a class="" href="#">Cabinets and Sideboard</a></li>
                                        <li><a class="" href="#">Chest Of Drawers</a></li>
                                        <li><a class="" href="#">Shoe Racks</a></li>
                                        <li><a class="" href="#">Display Unit</a></li>
                                        <li><a class="" href="#">Prayer Units</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown chair">
                                    <button class="dropdown-toggle" type="button"  >
                                    Chairs<div><img src={downarrow}/></div>
                                    </button>
                                    <ul className= "" >
                                    <li><a class="" href="#">Tv Units</a></li>
                                        <li><a class="" href="#">Bookshelves</a></li>
                                        <li><a class="" href="#">Cabinets and Sideboard</a></li>
                                        <li><a class="" href="#">Chest Of Drawers</a></li>
                                        <li><a class="" href="#">Shoe Racks</a></li>
                                        <li><a class="" href="#">Display Unit</a></li>
                                        <li><a class="" href="#">Prayer Units</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown bedroom">
                                    <button class="dropdown-toggle" type="button"  >
                                    Bedroom<div><img src={downarrow}/></div>
                                    </button>
                                    <ul className= "" >
                                    <li><a class="" href="#">Tv Units</a></li>
                                        <li><a class="" href="#">Bookshelves</a></li>
                                        <li><a class="" href="#">Cabinets and Sideboard</a></li>
                                        <li><a class="" href="#">Chest Of Drawers</a></li>
                                        <li><a class="" href="#">Shoe Racks</a></li>
                                        <li><a class="" href="#">Display Unit</a></li>
                                        <li><a class="" href="#">Prayer Units</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown dinning">
                                    <button class="dropdown-toggle" type="button"  >
                                    Dining<div><img src={downarrow}/></div>
                                    </button>
                                    <ul className= "" >
                                    <li><a class="" href="#">Tv Units</a></li>
                                        <li><a class="" href="#">Bookshelves</a></li>
                                        <li><a class="" href="#">Cabinets and Sideboard</a></li>
                                        <li><a class="" href="#">Chest Of Drawers</a></li>
                                        <li><a class="" href="#">Shoe Racks</a></li>
                                        <li><a class="" href="#">Display Unit</a></li>
                                        <li><a class="" href="#">Prayer Units</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown storage">
                                    <button class="dropdown-toggle" type="button"  >
                                    Storage<div><img src={downarrow}/></div>
                                    </button>
                                    <ul className= "" >
                                    <li><a class="" href="#">Tv Units</a></li>
                                        <li><a class="" href="#">Bookshelves</a></li>
                                        <li><a class="" href="#">Cabinets and Sideboard</a></li>
                                        <li><a class="" href="#">Chest Of Drawers</a></li>
                                        <li><a class="" href="#">Shoe Racks</a></li>
                                        <li><a class="" href="#">Display Unit</a></li>
                                        <li><a class="" href="#">Prayer Units</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown study">
                                    <button class="dropdown-toggle" type="button"  >
                                    Study<div><img src={downarrow}/></div>
                                    </button>
                                    <ul className= "" >
                                    <li><a class="" href="#">Tv Units</a></li>
                                        <li><a class="" href="#">Bookshelves</a></li>
                                        <li><a class="" href="#">Cabinets and Sideboard</a></li>
                                        <li><a class="" href="#">Chest Of Drawers</a></li>
                                        <li><a class="" href="#">Shoe Racks</a></li>
                                        <li><a class="" href="#">Display Unit</a></li>
                                        <li><a class="" href="#">Prayer Units</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown sale">
                                    <button class="dropdown-toggle" type="button"  >
                                    SALE <div><img src={downarrow}/></div>
                                    </button>
                                    <ul className= "" >
                                    <li><a class="" href="#">Tv Units</a></li>
                                        <li><a class="" href="#">Bookshelves</a></li>
                                        <li><a class="" href="#">Cabinets and Sideboard</a></li>
                                        <li><a class="" href="#">Chest Of Drawers</a></li>
                                        <li><a class="" href="#">Shoe Racks</a></li>
                                        <li><a class="" href="#">Display Unit</a></li>
                                        <li><a class="" href="#">Prayer Units</a></li>
                                    </ul>
                                </div>
                                <div className="canvas-box">
                                <Link>About Us</Link>
                                <Link>Custom Furniture</Link>
                                <Link>Coupon Partners</Link>
                                <Link>Contact Us</Link>
                                <Link>Furniture Exporters</Link>
                                <Link>Terms Of Use</Link>
                                <button>
                                Log Out
                                </button>
                                </div>
                                
                            </div>
                        </div>
                        {/* off Canvas Ended */}
                        <div className="search sm-none">
                            <input type="text" placeholder="Search Products, Colors & More.." />
                            <button type="submit">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                        <div className="store sm-none d-lg-flex">
                            <img src={img3} />
                            <span className="font-13">Stores</span>
                        </div>
                        <div className="account">
                            <Link><img src={img4} /></Link>
                            <Link><img src={img5} /></Link>
                            <Link to='/billing'><img src={img6} className="me-0" /></Link>
                        </div>

                    </div>
                    <nav className="sm-none md-none">
                        <ul className="ul-reset">
                            <li className='droppable'>
                            <Link to='/sofa'>SOFA</Link>
                            <div className='mega-menu'>
                                    <div className="cf">
                                        <ul className="ul-reset">
                                            <h3>Sofa Sets</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                            <li><a href='#'>Fabric Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>DIWANS</h3>
                                            <li><a href='#'>Wooden Diwan</a></li>
                                            <li><a href='#'>Wooden Diwan without Storage</a></li>
                                        </ul>
                                        
                                        <ul className="ul-reset">
                                            <li><img src={img2} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='droppable'>
                                <a href='#'>LIVING</a>
                                <div className='mega-menu'>
                                    <div className="cf">
                                        <ul className="ul-reset">
                                            <h3>Living Storage</h3>
                                            <li><a href='#'> Tv Units</a></li>
                                            <li><a href='#'>Bookshelves</a></li>
                                            <li><a href='#'>Display Unit</a></li>
                                            <li><a href='#'>Shoe Racks</a></li>
                                            <li><a href='#'>Cabinets and Sideboard</a></li>
                                            <li><a href='#'>Chest Of Drawers</a></li>
                                            <li><a href='#'> Temples</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>Tables</h3>
                                            <li><a href='#'>Coffee Tables</a></li>
                                            <li><a href='#'>Coffee Table Sets</a></li>
                                            <li><a href='#'>Nest Of Tables</a></li>
                                            <li><a href='#'>Side and End Tables</a></li>
                                            <li><a href='#'>Console Table</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>Chairs</h3>
                                            <li><a href='#'>Rocking Chairs</a></li>
                                            <li><a href='#'>Arm Chairs</a></li>
                                            <li><a href='#'>Metal Chairs</a></li>
                                            <li><a href='#'>Stools</a></li>
                                            <li><a href='#'>Benches</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <li><img src={img2} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className='droppable'>
                                <Link to='/bedroom'>BEDROOM</Link>
                                <div className='mega-menu'>
                                    <div className="container cf">
                                        <ul className="ul-reset">
                                            <h3>Beds</h3>
                                            <li><a href='#'>Queen Size Beds</a></li>
                                            <li><a href='#'>King Size Beds</a></li>
                                            <li><a href='#'>Single Beds</a></li>
                                            <li><a href='#'>Upholstered Beds</a></li>
                                            <li><a href='#'>Sofa Cum Beds</a></li>
                                            <li><a href='#'>Poster Beds</a></li>
                                            <li><a href='#'>Diwan Beds</a></li>
                                            <li><a href='#'>Hydraulic Storage Beds</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>Storage & Accessories</h3>
                                            <li><a href='#'>Bedside Tables</a></li>
                                            <li><a href='#'>Chest Of Drawers</a></li>
                                            <li><a href='#'>Wardrobes</a></li>
                                            <li><a href='#'>Dressing Table</a></li>
                                            <li><a href='#'>Trunk and Blanket Boxes</a></li>
                                            <li><a href='#'>Room Dividers</a></li>
                                            <li><a href='#'>Cabinets and Sideboards</a></li>
                                            <li><a href='#'>Trunk and Blanket Boxes</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>Kids Bedroom</h3>
                                            <li><a href='#'>Bunk Beds</a></li>
                                            <li><a href='#'>Kids Beds</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <img src={bed} alt="" />
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="droppable"><a href='#'>DINING</a>
                                <div className='mega-menu'>
                                    <div className="container cf">
                                        <ul className="ul-reset">
                                            <h3>Dining Table and Sets</h3>
                                            <li><a href='#'>6 Seater Dining Sets</a></li>
                                            <li><a href='#'>4 Seater Dining Sets</a></li>
                                            <li><a href='#'>Round Dining Sets</a></li>
                                            <li><a href='#'>Dining Tables</a></li>
                                            <li><a href='#'>8 Seater Dining Sets</a></li>
                                            <li><a href='#'>Dining Storage</a></li>
                                            <li><a href='#'>Extendable Dining Sets</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>Chairs</h3>
                                            <li><a href='#'>Benches</a></li>
                                            <li><a href='#'>Dining Chairs</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>Dining Storage</h3>
                                            <li><a href='#'>Cabinets and Sideboards</a></li>
                                            <li><a href='#'>Crockery Units</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <img src={img2} alt="" />
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="droppable"><a href='#'>STORAGE</a>
                                <div className='mega-menu'>
                                    <div className="container cf">
                                        <ul className="ul-reset">
                                        <h3>Living Storage</h3>
                                            <li><a href='#'> Tv Units</a></li>
                                            <li><a href='#'>Bookshelves</a></li>
                                            <li><a href='#'>Display Unit</a></li>
                                            <li><a href='#'>Shoe Racks</a></li>
                                            <li><a href='#'>Cabinets and Sideboard</a></li>
                                            <li><a href='#'>Chest Of Drawers</a></li>
                                            <li><a href='#'> Temples</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>Bedroom Storage</h3>
                                            <li><a href='#'>Chest Of Drawers</a></li>
                                            <li><a href='#'>Wardrobes</a></li>
                                            <li><a href='#'>Bedside Tables</a></li>
                                            <li><a href='#'>Trunk and Blanket Boxes</a></li>
                                            <li><a href='#'>Dressing Table</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>Bar Furniture</h3>
                                            <li><a href='#'>Bar Trolleys</a></li>
                                            <li><a href='#'>Bar Stools and Chairs</a></li>
                                            <li><a href='#'>Bar Cabinets</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <img src={img2} alt="" />
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="droppable"><a href='#'>STUDY</a>
                                <div className='mega-menu'>
                                    <div className="container cf">
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <img src={img2} alt="" />
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="droppable"><a href='#'>TOP DEALS</a>
                                <div className='mega-menu'>
                                    <div className="container cf">
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <h3>SOFA CUM BED</h3>
                                            <li><a href='#'>Wooden Sofa Sets</a></li>
                                            <li><a href='#'>3 Seater Sofa</a></li>
                                            <li><a href='#'>2 Seater Sofa</a></li>
                                            <li><a href='#'>1 Seater Sofa</a></li>
                                            <li><a href='#'>L Shape Sofa</a></li>
                                        </ul>
                                        <ul className="ul-reset">
                                            <img src={img2} alt="" />
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;