import React from "react";
import "./megamenu.css";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";
const Megha = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <>
      <nav className="menu">
     
        <div className="wrapper">
          {/* <div className="logo">
            <input type="radio" name="slide" id="menu-btn" />
            <input type="radio" name="slide" id="cancel-btn" />
          </div> */}
          <ul className="nav-links" id={hover ? "navs__links" : ""}>
            <Link to={'/'}>
            <li >
             <h3 id="Navlog" style={{fontWeight:"bolder", fontSize:"18px",marginRight:"60px" }}>
             Urban Crew
             </h3>
              </li>
              </Link>
            <label className="btn cancel-btn" htmlFor="cancel-btn">
              <i className="fa fa-times"></i>
            </label>
            <li>
             
            <label htmlFor="showMega" className="mobile-item">
           <Link to="/sigin">
            Sign In
           
           </Link>    
              </label>
              <li>
                <Link
                  to="/"
                  className="desktop-item"
                  onClick={() => setHover((prev) => !prev)}
                >
                  Gifts
                </Link>
                {/* <input type="checkbox" id="showMega" /> */}
                <label htmlFor="showMega" className="mobile-item">
                  Gifts
                </label>

                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      <header>Gifts</header>
                      <ul className="mega-links">
                        <li>
                          <Link id="bold" to="/products/women" >For Women</Link>
                        </li>
                        <li>
                          <Link to="/products/men" id="bold">
                            For Mens
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/women" id="bold">
                            For Girls
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/men" id="bold">
                            For Boys
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/kid" id="bold">
                            For the Home
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li></li>
            </li>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                New
              </Link>
              {/* <input type="checkbox" id="showMega" /> */}
              <label htmlFor="showMega" className="mobile-item">
                New
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Shop New Arrivals</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">For Women</Link>
                      </li>
                      <li>
                        <Link to="/products/men">For Men</Link>
                      </li>
                      <li>
                        <Link to="/products/women">For Girls</Link>
                      </li>
                      <li>
                        <Link to="/products/kid">For Boys</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>What to Shop Now</header>
                    <header style={{ color: "gray" }}>Women</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/men">The Gift Guide</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Olympia’s Picks</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Marie Marot X J.Crew</Link>
                      </li>
                      <li>
                        <Link to="/products/women">The Sun Shop</Link>
                      </li>
                      <li>
                        <Link to="/products/men">The Ski Shop</Link>
                      </li>
                      <li>
                        <Link to="/products/men">The Holiday Party Shop</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Statement Coats</Link>
                      </li>
                      <li>
                        <Link to="/products/men" >Tartan Everything</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <br />
                    <header style={{ color: "gray" }}>Men</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">Peak Sweater Season</Link>
                      </li>
                      <li>
                        <Link to="/products/women">The Holiday Party Shop</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Heavyweight Chamois Workshirts
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women" id="bold">
                          New Parkas & Topcoats
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/kid" >Source Materials</Link>
                      </li>
                      <li>
                        <Link to="/products/women"  id="bold">
                          Heritage 14 Oz. Fleece
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Women
              </Link>
              {/* <input type="checkbox" id="showMega" /> */}
              <label htmlFor="showMega" className="mobile-item">
                Women
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header style={{ color: "gray" }}>Women</header>
                    <header>New Arrival</header>

                    <ul className="mega-links">
                      <li>
                        <Link to="/products/men"  id="bold">
                          Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women"  id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/women"  id="bold">
                          Top Rated
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/men"  id="bold">
                          Brands We Love
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/kid"  id="bold">
                          The Re-Imagined Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/men"  id="bold">
                          Shop All
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/men"  id="bold">
                          Sale
                        </Link>
                      </li>
                      <br />
                      <header>What to Shop Now</header>
                      <li>
                        <Link to="/gift" id="bold">
                          The Gift Guide
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Olympia’s Picks
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Marie Marot X J.Crew
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          The Sun Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          The Ski Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          The Holiday Party Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Statement Coats
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Tartan Everything
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/men">All Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Sweaters</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Shirts & Tops</Link>
                      </li>
                      <li>
                        <Link to="/products/men">T-Shirts & Tank Tops</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Dresses & Jumpsuits</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Blazers</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Pants</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Denim</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Skirts</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Swimwear</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Sweatshirts & Sweatpants</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Active</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Matching Sets</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Pajamas & Intimates</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Suiting</Link>
                      </li>

                      <li>
                        <Link to="/products/men">Maternity</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shoes & Boots</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/women">All Shoes & Boots</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Winter Boots</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Boots</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Birkenstocks</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Flats</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Heels</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Sneakers</Link>
                      </li>
                      <br />
                      <header>Accessories</header>
                      <li>
                        <Link to="/products/women">All Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/women">Bags</Link>
                      </li>
                      <li>
                        <Link to="/products/women">
                          Hats, Scarves, & Gloves
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/men" >Accessories & More</Link>
                      </li>
                      <li>
                        <Link to="/products/women" >
                          Candles, Beauty, & Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Hair</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Socks & Tights</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Belts</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Men
              </Link>
              {/* <input type="checkbox" id="showMega" /> */}
              <label htmlFor="showMega" className="mobile-item">
              Men
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header style={{ color: "gray" }}>Men</header>
                    <header>New Arrival</header>

                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Top Rated
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Brands We Love
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          The Re-Imagined Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/#" id="bold">
                          Shop All
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sale
                        </Link>
                      </li>
                      <br />
                      <header>What to Shop Now</header>
                      <li>
                        <Link to="/gift" id="bold">
                          Peak Sweater Season
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          The Holiday Party Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Heavyweight Chamois Workshirts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Parkas & Topcoats
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Source Materials
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Heritage 14 Oz. Fleece
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Clothing</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">All Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sweaters</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Casual Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Dress Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Pants & Chinos</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Denim</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Suits & Tuxedos</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Blazers</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Sweatshirts & Sweatpants</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Polos & Rugby</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">T-Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Pajamas & Loungewear</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Swim</Link>
                      </li>
                      <li>
                        <Link to="/products/Men">Underwear & Boxers</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Shoes & Sneakers</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/men">All Shoes & Sneakers</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Boots</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Slippers</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Dress Shoes</Link>
                      </li>
                      <br />
                      <header>Accessories</header>
                      <li>
                        <Link to="/products/men">All Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Scarves, Hats & Gloves</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Socks</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Belts</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Watches & Jewelry</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Bags & Wallets</Link>
                      </li>
                      <li>
                        <Link to="/products/men">Sunglasses & Eyewear</Link>
                      </li>
                      <li>
                        <Link to="/products/men">
                          Candles, Grooming & Home
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Kids
              </Link>
              {/* <input type="checkbox" id="showMega" /> */}
              <label htmlFor="showMega" className="mobile-item">
              Kids
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Kids</header>

                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Girls' New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Girls' Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Girls' Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Girls' Top Rated
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Girls' Brands We Love
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Girls' Re-Imagined Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Shop All Girls
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Girls' Sale
                        </Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/gift" id="bold">
                          Boys' New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Boys' Gifts
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Boys' Best Sellers
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Boys' Top Rated
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Boys' Brands We Love
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Boys' Re-Imagined Shop
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Shop All Boys
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Boys' Sale
                        </Link>
                      </li>
                      <br />
                      <header>What to Shop Now</header>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Mini-Me Moments
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Our Tween Edit
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Pj’s For The Whole Family
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          Holiday Card Classics
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes" id="bold">
                          The Coat Collection
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Girls</header>
                    <ul className="mega-links" id="line-height-new">
                      <li>
                        <Link to="/products/Shoes">All Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Dresses & Jumpsuits</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Tops & Tees</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Graphics Shop</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Pajamas</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sweaters</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Sweatshirts & Sweatpants
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Leggings & Pants</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Skirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Active</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Denim</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Swim & Rash Guards</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/products/Shoes">All Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Fun Finds</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Back To School</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">All Shoes & Sneakers</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Boys</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/products/Shoes">All Clothing</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Shirts</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">T-Shirts & Polos</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Graphics Shop</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Coats & Jackets</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Sweaters</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">
                          Sweatshirts & Sweatpants
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Chinos & Pants</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Denim</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Suiting</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Shorts</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Swim & Rash Guards</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Active</Link>
                      </li>
                      <li>
                        <Link to="/products/Shoes">Baby</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/products/Shoes">All Accessories</Link>
                      </li>
                      <br />
                      <li>
                        <Link to="/products/Shoes">All Shoes & Sneakers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Cashmere
              </Link>
              {/* <input type="checkbox" id="showMega" /> */}
              <label htmlFor="showMega" className="mobile-item">
              Cashmere
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Shop Cashmere</header>

                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          For Women
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          For Men
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          For Girls
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          For Boys
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          For Baby
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Home
              </Link>
              {/* <input type="checkbox" id="showMega" /> */}
              <label htmlFor="showMega" className="mobile-item">
              Home
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Home</header>

                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Shop All
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          New Arrivals
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Brands We Love
                        </Link>
                      </li>
                      <li>
                        <Link to="/gift" id="bold">
                          Sale
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Shop Home</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/gift">Dining & Entertainment</Link>
                      </li>
                      <li>
                        <Link to="/gift">Bedding & Bath</Link>
                      </li>
                      <li>
                        <Link to="/gift">Candles & Fragrance</Link>
                      </li>
                      <li>
                        <Link to="/gift">Decor & Gifts</Link>
                      </li>
                      <li>
                        <Link to="/gift">Beauty & Wellness</Link>
                      </li>

                      <li>
                        <Link to="/" id="bold">
                          Home Office & Tech
                        </Link>
                      </li>
                      <li>
                        <Link to="/">Pets</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Stories
              </Link>
              {/* <input type="checkbox" id="showMega" /> */}
              <label htmlFor="showMega" className="mobile-item">
              Stories
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Meet the J.Crew Collective</header>
                  </div>
                  <div className="row">
                    <header>Women’s Stories</header>
                    <br />
                    <ul className="mega-links">
                      <header  style={{fontSize:"14px", marginLeft:"35px", color:"gray"}}>
                        THE J.CREW COLLECTIVE
                      </header>
                     
                      <li>
                        <Link to="/products/Home">
                          A Cashmere Remix with Lucy Williams
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Layer love with Marjon Carlos
                        </Link>
                      </li>
                      <br />
                      <br />
                      <header style={{fontSize:"14px", marginLeft:"35px", color:"gray"}}>COMMUNITY</header>
                      <li>
                        <Link to="/products/Home" id="bold">
                          A Very J.Crew Holiday
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Marie Marot X J.Crew</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Paula Mendoza Jewelry X J.Crew
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Men’s Stories</header>
                    <br />
                    <ul className="mega-links">
                      <header style={{fontSize:"14px", marginLeft:"35px", color:"gray"}}>STYLE</header>
                      <li>
                        <Link to="/products/Home">
                          Mount Snow X J.Crew with NYC band Rebounder
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Dress code: downtown with Nick Poe
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Suiting up with Saji Abude
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          BEAMS PLUS X J.Crew with Mike Mills
                        </Link>
                      </li>
                      <br />
                      <header style={{fontSize:"14px", marginLeft:"35px", color:"gray"}}>COMMUNITY</header>
                      <li>
                        <Link to="/products/Home">
                          Sporting life: the North Fork Polar Bears Club
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/Home">Tracksmith® X J.Crew</Link>
                      </li>
                      <li>
                        <Link to="/products/Home">
                          Sporting life with Row New York
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                to=""
                className="desktop-item"
                onClick={() => setHover((prev) => !prev)}
              >
                Sale
              </Link>
              {/* <input type="checkbox" id="showMega" /> */}
              <label htmlFor="showMega" className="mobile-item">
              Sale
              </label>

              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Sale</header>

                    <ul className="mega-links">
                      <li>
                        <Link to="/gift" id="bold">
                          Shop Women's Sale
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Shop Men's Sale
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Shop Girls' Sale
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Shop Boys' Sale
                        </Link>
                      </li>
                      <li>
                        <Link to="gift" id="bold">
                          Shop Home Sale
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <header>Women</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Shop All</Link>
                      </li>
                      <li>
                        <Link to="gift">New To Sale</Link>
                      </li>
                      <li>
                        <Link to="gift">Over 60% Off</Link>
                      </li>
                    </ul>
                    <br />
                    <header>Girls</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Shop All</Link>
                      </li>
                      <li>
                        <Link to="gift">New To Sale</Link>
                      </li>
                      <li>
                        <Link to="gift">Over 60% Off</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Men</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Shop All</Link>
                      </li>
                      <li>
                        <Link to="gift">New To Sale</Link>
                      </li>
                      <li>
                        <Link to="gift">Over 60% Off</Link>
                      </li>
                    </ul>
                    <br />
                    <header>Boys</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="gift">Shop All</Link>
                      </li>
                      <li>
                        <Link to="gift">New To Sale</Link>
                      </li>
                      <li>
                        <Link to="gift">Over 60% Off</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Megha;
