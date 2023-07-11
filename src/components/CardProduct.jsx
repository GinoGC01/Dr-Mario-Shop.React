import React, { useState } from "react";
import { AddCart, RemoveCart } from "../components/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useProductsVisited } from "../Hooks/useProductsVisited";
import "animate.css";
import "./CardProduct.css";
import "swiper/css";
import "swiper/css/pagination";

export default function CardProduct({
  product,
  removeFromCart,
  addToCart,
  isProductInCart,
}) {
  const [selected, setSelected] = useState(false);
  const { handleProductosVisitados } = useProductsVisited();

  const handleSelected = () => {
    setSelected(!selected);
    handleProductosVisitados(product);
  };

  return (
    <li
      key={product.id}
      className={
        selected
          ? "Card-selected animate__animated animate__bounceIn animate__faster"
          : "Card animate__animated animate__fadeIn animate__faster"
      }
    >
      <div
        className={
          selected ? "img-content__Card-selected" : "img-content__Card"
        }
        onClick={() => handleSelected(product)}
      >
        {selected ? (
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={product.img.image01}
                alt={product.nombre}
                className={selected ? "img__Card" : "img__Card-selected"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={product.img.image02}
                alt={product.nombre}
                className={selected ? "img__Card" : "img__Card-selected"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={product.img.image03}
                alt={product.nombre}
                className={selected ? "img__Card" : "img__Card-selected"}
              />
            </SwiperSlide>
          </Swiper>
        ) : (
          <img
            src={product.img.image01}
            alt={product.nombre}
            className={selected ? "img__Card" : "img__Card-selected"}
          />
        )}
      </div>
      <div className={selected ? "text__Card-selected" : "text__Card"}>
        <strong className={selected ? "title__Card-selected" : "title__Card"}>
          {product.nombre}
        </strong>
        <div className="price">
          <p>$ {product.precio}</p>
          <strike className="price__offer">$ {product.precio + 3500}</strike>
        </div>
        <div
          className={
            selected ? "data-product__Card-selected" : "data-product__Card"
          }
        >
          <p className="details details-open">Marca: {product.marca}</p>
          <p className="details details-open">Talle: {product.talle.talle}</p>
        </div>
        <button
          className={selected ? "button__Card-selected" : "button__Card"}
          style={{
            backgroundColor: isProductInCart ? "red" : "#0c151c",
            transition: "background-color 0.3s",
          }}
          onClick={() => {
            isProductInCart ? removeFromCart(product) : addToCart(product);
          }}
        >
          {isProductInCart ? <RemoveCart /> : <AddCart />}
        </button>
      </div>
    </li>
  );
}
