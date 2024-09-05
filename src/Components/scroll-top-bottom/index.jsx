import React from 'react'
import useFetch from '../CustomeHooks/Fetch/inex';

export default function ScrollToTopBottom() {
    const url = "https://dummyjson.com/products";
    const { data, error, loading } = useFetch(url,{});
    if(loading){
        return <h3>Loading...</h3>
    }
    if(error){
        return <h3>Error occurred try again</h3>
    }
    function scrollTop(){
        window.scrollTo({top: 0, behavior:'smooth'})
    }
    function scrollBottom(){
        window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'})
    }
  return (
    <div>
        <h1>scroll top and bottom</h1>
        <button onClick={scrollBottom}>scroll to bottom</button>
        {
            data && data.products?
            data?.products.map((product) => <p key={product.id}>{product.title}</p>):(
                ''
            )
        }
        <button onClick={scrollTop}>scroll to top</button>
    </div>
  )
}
