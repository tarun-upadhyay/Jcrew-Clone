import React, { useState, useEffect } from "react";
import { useRef } from "react";
import ReactImageMagnify from "react-image-magnify";
import "./singlePageSlick.css";
import axios from "axios"
// import fetching from "./test";
// import {useParams} from "react-router-dom";
import { BsHeart } from "react-icons/bs"
import { json, useParams } from "react-router-dom";


let images = [
  "https://n.nordstrommedia.com/id/sr3/4664a52d-25f1-443e-9c97-38183c9e0c46.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  "https://n.nordstrommedia.com/id/sr3/210cce63-9329-44a7-b20f-0972124a2bf4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  "https://n.nordstrommedia.com/id/sr3/f9e7daa1-0d69-4d1e-b3bd-13926a2c4172.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  "https://n.nordstrommedia.com/id/sr3/b3a628fd-12e0-456b-8c7b-a51d8ada1d6d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
  "https://n.nordstrommedia.com/id/sr3/efb9e8ab-4789-44e0-8f8b-6f6b16f6e9cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
];


const Singlepage = () => {
  const { id, name } = useParams()

  const [post, setPost] = useState(null);
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState(false)
  const [allSizes, setAllSizes] = useState("");
  const [customersData, setCustomersData] = useState([]);


  const baseURL = `https://real-red-blackbuck-toga.cyclic.app/products/${name}/${id}`;

  const baseURL1 = `https://real-red-blackbuck-toga.cyclic.app/products/${name}`;

  useEffect(() => {
    const getItemsList = async () => {
      try {
    
        const res = await axios.get(baseURL)
        images = res.data[0].img;
      
        setPost(res.data[0].img)
        setMyData(res.data);


      } catch (err) {
        setIsError(true);

      }
    }
    getItemsList()
  }, []);


  let lsarray = localStorage.getItem("cartPage") || [];

  const addingToLocal = (p) => {
    let data = []
  if(lsarray.length>0){

     data = JSON.parse(lsarray)
  }
    let yes = data.filter((el) => el._id == p._id)
    if (yes.length > 0) {
      alert("Already Present")
    } else {
      data.push(p)
      alert("Added To cart succesfully")
    }
    localStorage.setItem('cartPage', JSON.stringify(data))

  }


  useEffect(() => {
    const getCustomersData = async () => {
      try {
        const res = await axios.get(baseURL1)
        setCustomersData(res.data);


      } catch (err) {
        setIsError(true);

      }
    }
    getCustomersData()
  }, []);



  const [img, setImg] = useState(images[0]);

  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active");
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active");
      }
    }
  };

  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const getDivValue = (e) => {
    setAllSizes(e.target.innerText);
  }

  return (

    <>

      <span style={{ marginLeft: "45%", cursor: "pointer" }} >Have a question? We can help.</span>

      <hr style={{ marginTop: "18px" }} />

      <div className="container">

        <div className="left">
          <div className="left_1">
            {images.map((image, i) => (
              <div
                className={i === 0 ? "img_wrap active" : "img_wrap"}
                key={i}
                onMouseOver={() => hoverHandler(image, i)}
                ref={addRefs}
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>

          <div className="left_2">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: img,
                  width: "50%"
                },
                largeImage: {
                  src: img,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: '90%',
                  height: '100%'
                }
              }}
            />
          </div>
        </div>

        <div className="right">

          {isError && <h3>Request failed with status code 404</h3>}

          {myData.map((product) => {

            const { _id, desc, sale_price, title } = product;

            return (
              <div className="right-1" key={_id}>

                <h2 className="productTitle">{title}</h2>
                <span className="productDesc">{desc}</span>

                <div style={{ display: "flex" }}>
                  <img className="productrewiev" src="https://jcrew.ugc.bazaarvoice.com/1706redes-en_us/5_0/5/rating.png" alt="rewiewStart" />
                  <a className="anchorrewiev" href="https://www.jcrew.com/in/p/BN922?color_name=black&N=4&NUM_ITEMS=1&cartId=33bbe48d78aaeb2564ff5f505b&mode=edit&colorProductCode=BN922"> 1 REVIEW</a>
                </div>

                <h3 className="productPrice">INR {sale_price}</h3>

                <span className="productColor">color: Black</span>

                <div className="sizeDiv">
                  <div>
                    <apna className="productColor">Size: {allSizes}</apna>
                    <p className="allsizes">All sizes are US sizes.</p>
                  </div>
                  <div className="allsizesDiv">
                    <div onMouseEnter={getDivValue} className="allsizes-1">00</div>
                    <div onMouseEnter={getDivValue} className="allsizes-1">0</div>
                    <div onMouseEnter={getDivValue} className="allsizes-1">2</div>
                    <div onMouseEnter={getDivValue} className="allsizes-1">4</div>
                    <div onMouseEnter={getDivValue} className="allsizes-1">6</div>
                    <div onMouseEnter={getDivValue} className="allsizes-1">8</div>
                    <div onMouseEnter={getDivValue} className="allsizes-1">10</div>
                  </div>
                </div>

                <div className="selectDiv">
                  <span className="productColor">Quantity: </span>
                  <select >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </div>

                <div className="cartMainDiv">
                  <p>Prices include duties and taxes.</p>

                  <div className="addToCartDiv">
                    <div className="addingtocart">
                      <button className="addButton" onClick={() => addingToLocal(product)}>ADDING TO BAG</button>
                    </div>
                    <div className="heartDiv">
                      <button className="addButtonHeart"> <BsHeart /> </button>
                    </div>
                  </div>

                </div>

                <hr style={{ marginTop: "40px" }} />


                <div>

                  <h3 className="productPrice">Size & fit</h3>
                  <div className="liList">
                    <li>Relaxed fit.</li>
                    <li>Body length: 34 1/4".</li>
                    <li>Sleeve length: 31 1/4".</li>
                    <li>Hits at midthigh.</li>
                  </div>

                </div>

                <hr style={{ marginTop: "30px" }} />

                <div>

                  <h3 className="productPrice">Product Details</h3>
                  <span>Sometimes, all an outfit needs is a little sparkle. This crystal-embellished blazer
                    coat is made with wool cashmere from Italy's Mario Bellucci mill and features jewel snap
                    buttons for an extra touch of sparkle.</span>
                  <div className="detailsLi">
                    <li>70% wool/20% polyamide/10% cashmere.</li>
                    <li>Notch collar with felt undercollar.</li>
                    <li>Snap closure.</li>
                    <li>Flap welt pockets.</li>
                    <li>Lined.</li>
                    <li>Import.</li>
                    <li>Online only.</li>
                    <li>{desc}</li>
                  </div>

                </div>

                <h3 className="productPrice">How warm is this coat?</h3>
                <div style={{ width: "90%", marginTop: "10px" }}>
                  <img style={{ width: "100%" }} src="https://www.jcrew.com/next-static/images/scales/jcrew/styleWarmth/superwarm.png" alt="" />
                </div>

                <hr style={{ marginTop: "40px" }} />

                <div className="shareDiv">
                  <h3 className="productPrice">Share</h3>
                  <a href="www.printers.com" target="_blank"><img className="shareImage" src="https://www.jcrew.com/next-static/images/jcrew/svg/social-pinterest.svg" alt="printerslogo" /></a>
                  <a href="www.facebook.com" target="_blank"><img className="shareImage" src="https://www.jcrew.com/next-static/images/jcrew/svg/social-facebook-1.svg" alt="facebooklogo" /></a>
                  <a href="www.twitter.com" target="_blank"><img className="shareImage" src="https://www.jcrew.com/next-static/images/jcrew/svg/social-twitter.svg" alt="twitterlogo" /></a>
                  <a href="www.tubler.com" target="_blank"><img className="shareImage" src="https://www.jcrew.com/next-static/images/jcrew/svg/social-tumblr.svg" alt="tumblerlogo" /></a>
                </div>

              </div>

            )
          })}

        </div>
      </div>

      {/* --------------------------------- */}
      <hr style={{ width: "1200px", margin: "auto" }} />

      <div className="customerLovediv">
        <h3 className="productPrice">Customers Also Love</h3>
        <div className="customerLoveMainProductDiv">

          {customersData.map((product,index) => {

            const { _id, sale_price, title, img } = product;

            return (
            
              index <= 6 ?   <div className="customerLoveMainProductDiv-1" key={_id}>
              <img style={{ width: "100%", height: "100%" }} src={img} alt={title} />
              <div className="quickShopButtonDiv">
                <button className="quickShopButton">QUICK SHOP</button>
              </div>
              <span style={{ marginTospanp: "0%", color: "1px solid #000000" }}>{title}</span>
              <p style={{ marginTop: "1%", color: "1px solid #000000" }}> INR {sale_price}</p>
            </div> : ''
            
            )
          })}

        </div>


      </div>
      <hr style={{ width: "1200px", margin: "auto" }} />



    </>


  );
}

export default Singlepage
