import React, { useEffect, useState } from "react";
import "./slider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Slide } from "react-toastify";
export default function Slider({ limit = 5, url, page }) {
  const [images, setImages] = useState();
  const [currentSLide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState();
  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();
      if (data) setImages(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  }
  function handlePrevious(){
        setCurrentSlide(currentSLide===0?images?.length-1:currentSLide-1)
  }
  function handleNext(){
    setCurrentSlide(currentSLide===images?.length-1?0:currentSLide+1)

  }
  useEffect(() => {
    if (url !== "") fetchImage(url);
  }, [url]);
  console.log(images);

  return (
    <div>
      {loading ? (
        <div> waiting .... </div>
      ) : (
        <div className="container">
          <BsArrowLeftCircleFill onClick={handlePrevious} className="left-arrow" />
          <div  className="img-holder">  {images &&
            images.map((e, index) => (
            
              
                <img
                  className= {currentSLide===index? "current-image":"hidden"}
                  src={e.download_url}
                  alt="image"
                  key={index}
                />
           
            ))}   </div>
          <BsArrowRightCircleFill onClick={handleNext} className="right-arrow" />
          <span className="circle-indicators">
            {images &&
              images.map((_, index) => (
                <button onClick={()=>setCurrentSlide(index)}  key={index} className={currentSLide===index?"current-indicator update":"current-indicator "}></button>
              ))}
          </span>
        </div>
      )}
    </div>
  );
}
