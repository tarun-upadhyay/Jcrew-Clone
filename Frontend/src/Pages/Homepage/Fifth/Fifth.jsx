// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

export const Fifth = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box w={"90%"} m="auto">
      <Slider {...settings}>
        <Box cursor={"pointer"}>
          <Image src="https://www.jcrew.com/s7-img-facade/BA400_PK5792?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" />
        </Box>

        <Box cursor={"pointer"}>
          <Image src="https://www.jcrew.com/s7-img-facade/BM277_YD2560?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" />
        </Box>

        <Box cursor={"pointer"}>
          <Image src="https://www.jcrew.com/s7-img-facade/BA400_BL7147?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://www.jcrew.com/s7-img-facade/BM709_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://www.jcrew.com/s7-img-facade/BA400_SR0158?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://www.jcrew.com/s7-img-facade/BN294_EC8333?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://www.jcrew.com/s7-img-facade/BA079_RD6168?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://www.jcrew.com/s7-img-facade/BM179_SR0404?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://www.jcrew.com/s7-img-facade/BM779_NA6434?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://www.jcrew.com/s7-img-facade/BM719_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://www.jcrew.com/s7-img-facade/BM791_SR0587?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" />
        </Box>
        <Box cursor={"pointer"}>
          <Image src="https://www.jcrew.com/s7-img-facade/BM838_RD5371?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" />
        </Box>
      </Slider>
    </Box>
  );
};
