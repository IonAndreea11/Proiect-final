import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Header.module.css";

const images = [
  "https://images.aeonmedia.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/essay-final-gettyimages-685469924.jpg?width=3840&quality=75&format=auto",
  "https://wallpapercat.com/w/full/7/2/1/24250-3840x2160-desktop-4k-cat-background.jpg",
  "https://www.hdwallpapers.in/download/colorful_parrot_bird_on_tree_branch_in_black_background_4k_hd_birds-3840x2160.jpg",
  "https://wallpaper.forfun.com/fetch/4a/4a477f586f7ec7991f4d7e257c9bb84a.jpeg",
  "https://wallpapercat.com/w/full/2/d/f/197281-3840x2160-desktop-4k-cat-wallpaper.jpg",
  "https://wallpapercat.com/w/full/b/0/3/1039322-3840x2160-desktop-4k-hare-wallpaper-photo.jpg",
];

export default function CustomCarousel() {
  return (
    <Carousel
      className="carousel-container"
      indicators={false}
      style={{ "--bs-gutter-x": 0 }}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index} interval={5000}>
          <img
            className="carousel-img"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ height: "800px", width: "100%", objectFit: "cover" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
