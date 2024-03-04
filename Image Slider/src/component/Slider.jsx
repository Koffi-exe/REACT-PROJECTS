import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import "./style.css";

export default function Slider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  async function fetchImages(getUrl) {
    try {
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleRight() {
    currentIndex === images.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  }

  function handleLeft() {
    currentIndex === 0
      ? setCurrentIndex(images.length - 1)
      : setCurrentIndex(currentIndex - 1);
  }

  useEffect(() => {
    fetchImages(url);
  }, [url]);

  if (loading) return <div>Loading...</div>;
  if (images.length === 0) return <div>ERROR</div>;
  return (
    <div className="container">
      <FaArrowLeft className="leftArrow arrow" onClick={handleLeft} />

      {images && images.length
        ? images.map((item, index) => (
            <img
              className="imageContainer"
              key={item.id}
              src={item.download_url}
              width={250}
              style={{ display: index === currentIndex ? "block" : "none" }}
            />
          ))
        : null}

      <FaArrowRight 
        className="rightArrow arrow" 
        onClick={handleRight} />
      <div className="dots">
        {[...images].map((item, index) => {
          return (
            <>
              <GoDotFill
                key={Date.now()}
                className="dot"
                onClick={() => {
                    setCurrentIndex(index)
                }}
                size={30}
                color={index === currentIndex ? "black" : "white"}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
