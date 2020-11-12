import React from "react";
import { useSelector } from "react-redux";
import NavbarTwo from "../components/Layout/NavbarTwo";
import BannerSlider from "../components/shop-style-five/BannerSlider";
import Facility from "../components/shop-style-five/Facility";
import CategoryTypes from "../components/shop-style-five/CategoryTypes";
import ProductsOffer from "../components/shop-style-five/ProductsOffer";
import Partner from "../components/Common/Partner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layout/Footer";
import AddsModal from "../components/Modal/AddsModal";
import Products from "../components/shop-style-five/Products";
import { getAllPosts } from "../lib/index";
import dynamic from "next/dynamic";
import Link from "next/link";
import News from "../components/Common/News";
import TestimonialsTwo from "../components/Common/TestimonialsTwo";
export async function getStaticProps() {
  const posts = await getAllPosts();
  return { unstable_revalidate: 1, props: { posts } };
}
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
};

const Index = ({ posts }) => {
  const products = useSelector((state) => state.products);
  const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare);
  return (
    <React.Fragment>
      <NavbarTwo />
      <BannerSlider />
      <Facility />
      <CategoryTypes />
      <Products products={products} CompareProducts={addedItemsToCompare} />
      <ProductsOffer />
      <News posts={posts}/>
      <TestimonialsTwo/>
      <Partner/>
      <Subscribe />

      <Footer />
     
    </React.Fragment>
  );
};

export default Index;
