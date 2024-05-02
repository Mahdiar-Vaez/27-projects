import React, { useEffect, useState } from "react";
import "./moreproducts.css";
export default function LoadMoreProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  async function fetchProducts() {
    try {
        setLoading(true)
      const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0:count *20}`);
      const data = await res.json();
      if(data){
        setProducts((prev)=>[...prev,...data.products]);
        setLoading(false)
      }
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);
  console.log(products);
  return <div className="container">
    {loading?(<div>loading...  </div>):
    <div className="cards">
        {products? products.map((e)=>(
            <div key={e.id} className="card">
                <img src={e.thumbnail} alt={e.title} />
                <h3>{e.title}</h3>
            </div>
        )):null}
    </div>
    
    }
    <div>
        <button disabled={products.length==100?true:false} onClick={()=>setCount(count+1)} className="btn-load">{products.length!=5? "load more products":"no more products"}</button>
    </div>
  </div>;
}
