import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import axios from "axios";
import styled from "styled-components";

const SideBar = styled.div`

@media (min-width: 768px){

 
display: flex;
  flex: 1;

  & .displayFilters {
    flex: 1;
    padding-left: 1.5%;
    padding-right: 1.5%;
    margin-top: 100px;
  }
  & .displayFilters > .productName {
    font-size: 11px;
    margin-top: 5%;
    margin-left: 0%;
    align-items: left;
    width: 100%;
    overflow: auto;
    border-bottom: 1px solid #cccccc;
  }
  & .displayFilters > .productName > label {
    font-size: 11px;
    margin: 2%;
    margin-top: 0%;
    float: left;
  }
  & .displayFilters > .productName > p {
    font-size: 13px;
    text-align: left;
  }
  & .displayFilters > .productName > input {
    height: 18px;
    width: 18px;
    float: left;
  }
  & .displayProduct {
    flex: 5;
    display: flex;
    padding-top: 2%;
    gap: 1%;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 10%;
  }
}
`;

const Titlepro = styled.h1`
  margin: 30px auto;
  font-weight: 800;
  font-size: 40px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 70px;
  }
`;

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-gap: 30px;
  }
`;
const ContentDisplay = styled.div`
  // @media (min-width: 768px)
   {
    flex: 5;
  }
`;


//********************************************/

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();
  const categoryHeading = name[0].toUpperCase() + name.slice(1);

  let [priceState5, setPriceState5] = useState(false);
  let [priceState6, setPriceState6] = useState(false);
  let [priceState7, setPriceState7] = useState(false);
  let [priceState8, setPriceState8] = useState(false);
  let [priceState9, setPriceState9] = useState(false);
  let [priceState10, setPriceState10] = useState(false);

  let [results, setResults] = useState(0);

  const getProducts = async () => {
    setLoading(true);
    const result = await axios.get(
      `https://real-red-blackbuck-toga.cyclic.app/products/${name}`
    );
    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [name]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const pricesort = (x) => {
    if (x === 1) {
      setData((prev) => [...prev.sort((a, b) => b.sale_price - a.sale_price)]);
    } else {
      setData((prev) => [...prev.sort((a, b) => a.sale_price - b.sale_price)]);
    }
  };

  const priceRangeSort = (x) => {
    if (x === 1) {
      setPriceState5(!priceState5);
      setData(data.filter((a) => a.sale_price <= 10000));
      setResults(data.filter((a) => a.sale_price <= 10000).length);
    } else if (x === 2) {
      setPriceState6(!priceState6);
      setData(
        data.filter((a) => a.sale_price > 10000 && a.sale_price <= 20000)
      );
      setResults(
        data.filter((a) => a.sale_price > 10000 && a.sale_price <= 20000).length
      );
    } else if (x === 3) {
      setPriceState7(!priceState7);
      setData(
        data.filter((a) => a.sale_price > 20000 && a.sale_price <= 30000)
      );
      setResults(
        data.filter((a) => a.sale_price > 20000 && a.sale_price <= 30000).length
      );
    } else if (x === 4) {
      setPriceState8(!priceState8);
      setData(
        data.filter((a) => a.sale_price > 30000 && a.sale_price <= 40000)
      );
      setResults(
        data.filter((a) => a.sale_price > 30000 && a.sale_price <= 40000).length
      );
    } else if (x === 5) {
      setPriceState9(!priceState9);
      setData(
        data.filter((a) => a.sale_price > 40000 && a.sale_price <= 50000)
      );
      setResults(
        data.filter((a) => a.sale_price > 40000 && a.sale_price <= 50000).length
      );
    } else {
      setPriceState10(!priceState10);
      setData(data.filter((a) => a.sale_price > 50000));
      setResults(data.filter((a) => a.sale_price > 50000).length);
    }
  };

  return (
    <Container>
      <SideBar>
        <div className="displayFilters">
          <>
            <br />
            <p style={{ fontWeight: "400", fontSize: "22px" }}>Sort by price</p>
            <br />
            <p
              style={{
                display: "block",
                border: "1px solid",
                borderRadius: "5px",
                width: "80%",
                fontSize:"19px",
                fontWeight:"500",
                cursor:"pointer",
                color: "white",
                padding: "15px",
                backgroundColor: "rgb(13,110,253)",
              }}
              onClick={() => {
                pricesort(1);
              }}
            >
              Price : High to Low
            </p>
            <br />
            <br />
            <p
              style={{
                display: "block",
                border: "1px solid",
                borderRadius: "5px",
                width: "80%",
                color: "white",
                fontSize:"19px",
                fontWeight:"500",
                cursor:"pointer",
                color: "white",
                padding: "15px",
                backgroundColor: "rgb(13,110,253)",
              }}
              onClick={() => {
                pricesort(1);
              }}
            >
              Price : Low to High
            </p>
          </>

          <div className="productPrice productName">
            <br />
            <hr />
            <br />
            <p style={{ fontWeight: "400", fontSize: "20px" }}>
              Filter by price
            </p>
            <br />
            <input
              type="checkbox"
              name="productPrice"
              checked={priceState5}
              onChange={() => priceRangeSort(1)}
            />
            <label htmlFor="">Up to ₹10000</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productPrice"
              checked={priceState6}
              onChange={() => priceRangeSort(2)}
            />
            <label htmlFor="">₹10000 ~ ₹20000</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productPrice"
              checked={priceState7}
              onChange={() => priceRangeSort(3)}
            />
            <label htmlFor="">₹20000 ~ ₹30000</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productPrice"
              checked={priceState8}
              onChange={() => priceRangeSort(4)}
            />
            <label htmlFor="">₹30000 ~ ₹40000</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productPrice"
              checked={priceState9}
              onChange={() => priceRangeSort(5)}
            />
            <label htmlFor="">₹40000 ~ ₹50000</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productPrice"
              checked={priceState10}
              onChange={() => priceRangeSort(6)}
            />
            <label htmlFor="">Above ₹50000</label>
            <br />
            <br />
            <p
              style={{
                display: "block",
                border: "1px solid",
                borderRadius: "5px",
                width: "52%",
                color: "white",
                backgroundColor: "rgb(13,110,253)",
              }}
              onClick={() => {
                getProducts();
                setResults(data.length);
                setPriceState5(false);
                setPriceState6(false);
                setPriceState7(false);
                setPriceState8(false);
                setPriceState9(false);
                setPriceState10(false);
              }}
            >
              Reset Filters
            </p>
            <br />
            <br />
          </div>
        </div>
      </SideBar>
      <ContentDisplay>
        <Titlepro>{categoryHeading}'s Clothing</Titlepro>
        <DataContainer>
          {loading ? (
            <Loading />
          ) : (
            <>
              {data.map((product) => {
               
                return (
                  <ProductCard
                    img={product.img}
                    title={product.title}
                    // desc={product.desc}
                    originalPrice={product.original_price}
                    size={product.size}
                    salePrice={product.sale_price}
                    key={product._id}
                    id={product._id}
                    name = {name}
                  />
                );
              })}
            </>
          )}
        </DataContainer>
      </ContentDisplay>
    </Container>
  );
};

export default ProductsPage;
