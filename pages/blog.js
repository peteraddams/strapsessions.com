import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import BlogGrid from '../components/blog/BlogGrid';
import { getAllPosts } from "../lib/index";
import dynamic from "next/dynamic";

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { revalidate: 1, props: { posts } };
}



export default function blog({posts}) {
    return (
       
             <React.Fragment>
                <Navbar />
                <Breadcrumb title="Blog" />
                <BlogGrid posts={posts}/>
                <Facility />
                <Footer />
            </React.Fragment>
        
    )
}
