import Description from "../../Components/Description"
import { categoryData } from './CategoryData';
import { featuredData } from './FeaturedData';
import Slider from "react-slick";
import { slideInfo } from "./SlideInfo";
import './style.scss';
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>

      <div className="slider-section">
        <div className="slider-content">
          <Slider {...settings}>
            {
              slideInfo.map((el, index) => {
                return (
                  <div key={index} className='slider-item'>

                    <div className='slider-info'>
                      <p className='slider-title'>{el.title}</p>
                      <p className="slider-name">{el.name}</p>
                      <p className="slider-text">{el.content}</p>
                    </div>
                    <div className="slider-image" style={{ backgroundImage: `url('${el.image}')` }}></div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>

      <div className="G-container">
        <div className="category-description">
          <Description title="Categories of The Month"
            description="Excepteur sint occaecat cupidatat non proident,
                                       sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>


        <div className="category-block">
          {categoryData.map((el, index) => {
            return (
              <div key={index} className='category-item'>
                <div className="catrgory-image" style={{ backgroundImage: `url('${el.image}')` }}></div>
                <p className="category-title">{el.category}</p>
                <button className="go-shop">Go Shop</button>
              </div>
            )
          })}
        </div>
      </div>


      <div className="featured-block">
        <div className="featured-descrpition">
          <Description title="Featured Product"
            description="Reprehenderit in voluptate velit esse cillum dolore
                                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          />
        </div>

        <div className="G-container ">
          <div className="featured-items-block">
            {featuredData.map((el, index) => {
              return <div key={index} className='featured-item'>
                <div className="item-image" style={{ backgroundImage: `url('${el.image}')` }}></div>
                <p className="item-price">{el.price}</p>
                <p className="item-title">{el.title}</p>
                <p className="item-content">{el.content}</p>
                <p className="item-price item-review">{el.review}</p>
              </div>
            })}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;