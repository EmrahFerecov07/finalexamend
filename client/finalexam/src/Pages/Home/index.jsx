import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../Context/WishlistContext";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./index.scss"
import LifeStyle from "../../Components/LifeStyle";
import Splendid from "../../Components/Splendid";
import ForYou from "../../Components/SeeFor";
import OurCustommers from "../../Components/OurCustommers";

const HomePage = () => {
  const [product, setproduct] = useState();
  const { addToWishlist } = useContext(WishlistContext);

  async function getproducts() {
    const res = await axios.get(`http://localhost:3000/products`);
    setproduct(res.data);
  }

  const handleDelete = async (productId) => {
    await axios.delete(`http://localhost:3000/products/${productId}`);
    getproducts();
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <>
    <LifeStyle/>
    <Splendid/>
    <ForYou/>
    <div className="home">
        {product &&
          product.map((item) => (
            <div key={item._id}>
              <ul>
                 <img src={item.image} alt="" />
                <li>{item.title}</li>
                <li>{item.price}</li>
                <li>{item.info}</li>
              </ul>
              <button onClick={() => addToWishlist(item)}>
                Wishliste elave et
              </button>
              <Link to={`/detail/${item._id}`}>See details</Link>
            </div>
          ))}
          <button>See More</button>
      </div>
    <OurCustommers/>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
     
    </>
  );
};


export default HomePage;
