"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { client } from "@/lib/SanityClient";
import { urlForImage } from "../../sanity/lib/image";
import { Product } from "@/app/types/Product";

const getFeaturedProduct = async () => {
  const res = await client.fetch(
    `*[_type == 'product'   && status->status == $status]{
      id,
      title,
      description,
      details,
      color,
      'size': size[]->size,
      price,
      image,
      'category' : category->category,
      'status' : status->status,
    }`,
    {
      status: "Featured",
    }
  );
  return res;
};

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "black" }}
      onClick={onClick}
    />
  );
}

export default class AdaptiveHeight extends Component {
  state = {
    data: [] as unknown as Product,
  };

  async componentDidMount() {
    const featuredProducts = await getFeaturedProduct();
    this.setState({ data: featuredProducts });
  }

  render() {
    const { data } = this.state;
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };

    return (
      <div className="bg-slate-100 ">
        <div className=" m-10 ">
          <h1 className="text-center text-3xl font-bold text-blue-950 pt-10">
            Our Featured Product
          </h1>

          <Slider {...settings}>
            {data.map((item: Product) => (
              <div
                key={item.id}
                className="p-10 product-card hover:scale-110 object-cover transition-transform duration-300 "
              >
                <Image
                  src={urlForImage(item.image).url()}
                  height={380}
                  width={380}
                  alt={item.description}
                />
                <h1 className="text-3xl">{item.title}</h1>
                <p>{item.price} </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
