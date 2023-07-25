import React, { useContext, useState } from 'react'
import { AddCart, RemoveCart } from '../components/Icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Zoom } from 'swiper/modules'
import { useProductsVisited } from '../Hooks/useProductsVisited'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { popUpAddToCart, popUpRemoveToCart } from './Alerts'
import 'animate.css'
import './CardProduct.css'
import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/pagination'
import 'toastify-js/src/toastify.css'

export default function CardProduct ({
  product,
  removeFromCart,
  addToCart,
  isProductInCart,
  isFavoriteProduct
}) {
  const [selected, setSelected] = useState(false)
  const { setFormActive } = useContext(CartContext)

  const {
    handleProductosVisitados,
    AddProductosFavoritos,
    deleteProductosFavoritos,
    productosFavoritos
  } = useProductsVisited()

  const handleSelected = () => {
    setSelected(!selected)
    handleProductosVisitados(product)
  }

  const handleFavoriteProducts = () => {
    const { id } = product
    const productIndex = productosFavoritos.findIndex((item) => item.id === id)

    if (productIndex >= 0) {
      deleteProductosFavoritos(product)
      return
    }

    AddProductosFavoritos(product)
  }

  const handleAddToCart = (product) => {
    popUpAddToCart({ addToCart, product })
  }

  const handleRemoveFromCart = (product) => {
    popUpRemoveToCart({ removeFromCart, product })
  }

  const handleEndBuild = (product) => {
    addToCart(product)
    setTimeout(() => { setFormActive(true) }, 500)
  }

  return (
    <li
      key={product.id}
      className={
        selected
          ? 'Card-selected animate__animated animate__bounceIn animate__faster'
          : 'Card animate__animated animate__fadeIn animate__faster'
      }
    >
      <section className="favorite-section__Card">
        <div
          className={
            selected ? 'favorite-product-selected' : 'favorite-product'
          }
          onClick={handleFavoriteProducts}
        >
          {isFavoriteProduct
            ? (
            <i className="fa-solid fa-heart animate__animated animate__rubberBand animate__fasted"></i>
              )
            : (
            <i className="fa-regular fa-heart"></i>
              )}
        </div>
        <span
          className={
            selected
              ? 'material-symbols-outlined back-arrow__favorite-section-selected'
              : 'material-symbols-outlined back-arrow__favorite-section'
          }
          onClick={handleSelected}
        >
          chevron_left
        </span>
      </section>

      {selected
        ? (
        <>
          <span
            className="background-select"
            onClick={() => handleSelected(product)}
          ></span>
          <Swiper
            pagination={{
              dynamicBullets: true
            }}
            zoom={true}
            modules={[Zoom, Pagination]}
            className="mySwiper img-content__Card-selected"
          >
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img
                  src={product.img.image01}
                  alt={product.nombre}
                  className={selected ? 'img__Card' : 'img__Card-selected'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img
                  src={product.img.image02}
                  alt={product.nombre}
                  className={selected ? 'img__Card' : 'img__Card-selected'}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img
                  src={product.img.image03}
                  alt={product.nombre}
                  className={selected ? 'img__Card' : 'img__Card-selected'}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </>
          )
        : (
        <div
          className={
            selected ? 'img-content__Card-selected' : 'img-content__Card'
          }
        >
          {
            <img
              src={product.img.image01}
              alt={product.nombre}
              className={selected ? 'img__Card' : 'img__Card-selected'}
              loading="lazy"
              onClick={() => handleSelected(product)}
            />
          }
        </div>
          )}

      <div className={selected ? 'text__Card-selected' : 'text__Card'}>
        <strong className={selected ? 'title__Card-selected' : 'title__Card'}>
          {product.nombre}
        </strong>
        <div className="price">
          <p>
            $ <b>{product.precio}</b>
          </p>
          <strike className="price__offer">$ {product.precio + 2500}</strike>
        </div>
        <div
          className={
            selected ? 'data-product__Card-selected' : 'data-product__Card'
          }
        >
          <p className="details details-open">
            {' '}
            Marca: <b>{product.marca}</b>{' '}
          </p>
          <p className="details details-open">
            Talle: <b>{product.talle.talle}</b>
          </p>
          <p>
            Stock:{' '}
            <b>
              <span
                style={{
                  color: product.stock && '#00ce23f5',
                  opacity: !product.stock && '0.5',
                  fontWeight: !product.stock && '200'
                }}
              >
                {product.stock ? 'Disponible' : 'Sin Stock'}
              </span>
            </b>
          </p>
          <p>
            Cantidad:{' '}
            <b>
              {product.stock ? product.cantidadDisponible : '0'}{' '}
              {product.cantidadDisponible > 1 ? 'Unidades' : 'Unidad'}
            </b>
          </p>
        </div>
        <Link
          className={
            selected ? 'data-product__Card-selected' : 'data-product__Card'
          }
          to={'/Guia-de-Talles'}
        >
          Guía de talles
        </Link>
        {product.stock && (
          <div className={selected ? 'buttons-container__Card-selected' : 'buttons-container'}>
            <button
              className={'button__Card'}
              style={{
                backgroundColor: isProductInCart ? 'red' : '#0c151c',
                transition: 'background-color 0.3s'
              }}
              onClick={() => {
                isProductInCart
                  ? handleRemoveFromCart(product)
                  : handleAddToCart(product)
              }}
            >
              {isProductInCart ? <RemoveCart /> : <AddCart />}
            </button>
            <Link to={'/Carrito/#ordenDeCompra'} className='button-end-build__Card' onClick={() => { handleEndBuild(product) }}>Finalizar compra</Link>
          </div>
        )}
      </div>
    </li>
  )
}
