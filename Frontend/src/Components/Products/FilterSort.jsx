import { StarIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterSort = ({ val1, val2, val3, val4 }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let [category, setcategory] = useState(
    searchParams.getAll("titledesp") || []
  );
  let [rating, setrating] = useState(searchParams.getAll("rating") || []);
  let [sort, setsort] = useState(searchParams.getAll("_sort") || []);
  let [order, setorder] = useState(searchParams.getAll("_order") || []);

  let handleFilter = (e) => {
    let option = e.target.value;
    let newcategory = [...category];
    if (newcategory.includes(option)) {
      newcategory.splice(newcategory.indexOf(option), 1);
    } else {
      newcategory.push(option);
    }
    setcategory(newcategory);
  };
  let handlesort = (e) => {
    let option = e.target.value;
    let neworder = [option];
    let newsort = ["price"];
    if (order.includes(option)) {
      setorder([]);
      setsort([]);
    } else {
      setorder(neworder);
      setsort(newsort);
    }
  };
  let handlerating = (e) => {
    let option = e.target.value;
    let newrating = [...rating];
    if (newrating.includes(option)) {
      newrating.splice(newrating.indexOf(option), 1);
    } else {
      newrating.push(option);
    }
    setrating(newrating);
  };
  let handlereset = (e) => {
    console.log("khfk");
  };

  useEffect(() => {
    let params = {};
    category && (params.titledesp = category);
    rating && (params.rating = rating);
    order && (params._sort = sort) && (params._order = order);
    setSearchParams(params);
  }, [rating, order, category, setSearchParams]);

  return (
    <>
      <div className="Product-left-div-header">
        <Text fontSize="2xl">Filters</Text>
        <Text onClick={handlereset} id="filter-reset" as="u" color="blue">
          ClearAll
        </Text>
      </div>
      <br />
      {/* sort by price */}
      <div className="sort-by">
        <label>Sort by Price</label>
        <br />
        <span>
          <input
            type="checkbox"
            value="asc"
            onChange={handlesort}
            defaultChecked={order.includes("asc")}
          />
          &nbsp;&nbsp;
          <label>Low to High</label>
        </span>
        <br />
        <span>
          <input
            type="checkbox"
            value="desc"
            onChange={handlesort}
            defaultChecked={order.includes("desc")}
          />
          &nbsp;&nbsp;
          <label>High to Low</label>
        </span>
      </div>
      <br />
      {/* sort by category */}
      <div className="sort-by">
        <label>Sort by Category</label>
        <br />
        <span>
          <input
            type="checkbox"
            value={val1}
            onChange={handleFilter}
            defaultChecked={category.includes({ val1 })}
          />
          &nbsp;&nbsp;
          <label>{val1}</label>
        </span>
        <br />
        <span>
          <input
            type="checkbox"
            value={val2}
            onChange={handleFilter}
            defaultChecked={category.includes({ val2 })}
          />
          &nbsp;&nbsp;
          <label>{val2}</label>
        </span>
        <br />
        <span>
          <input
            type="checkbox"
            value={val3}
            onChange={handleFilter}
            defaultChecked={category.includes({ val3 })}
          />
          &nbsp;&nbsp;
          <label>{val3}</label>
        </span>
        <br />
        <span>
          <input
            type="checkbox"
            value={val4}
            onChange={handleFilter}
            defaultChecked={category.includes(val4)}
          />
          &nbsp;&nbsp;
          <label>{val4}</label>
        </span>
        <br />
      </div>
      <br />
      {/* sort by rating */}
      <div className="sort-by">
        <label>Sort by Rating</label>
        <br />
        <div>
          <div>
            <input
              type="checkbox"
              value={5}
              onChange={handlerating}
              defaultChecked={rating.includes(5)}
            />
            &nbsp;&nbsp;
          </div>
          <div>
            <label>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 5 ? "teal.500" : "gray.300"} />
                ))}
            </label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="checkbox"
              value={4}
              onChange={handlerating}
              defaultChecked={rating.includes(4)}
            />
            &nbsp;&nbsp;
          </div>
          <div>
            <label>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
                ))}
            </label>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div>
            <input
              type="checkbox"
              value={3}
              onChange={handlerating}
              defaultChecked={rating.includes(3)}
            />
            &nbsp;&nbsp;
          </div>
          <div>
            <label>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 3 ? "teal.500" : "gray.300"} />
                ))}
            </label>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div>
            <input
              type="checkbox"
              value={2}
              onChange={handlerating}
              defaultChecked={rating.includes(2)}
            />
            &nbsp;&nbsp;
          </div>
          <div>
            <label>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 2 ? "teal.500" : "gray.300"} />
                ))}
            </label>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div>
            <input
              type="checkbox"
              value={1}
              onChange={handlerating}
              defaultChecked={rating.includes(1)}
            />
            &nbsp;&nbsp;
          </div>
          <div>
            <label>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 1 ? "teal.500" : "gray.300"} />
                ))}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
