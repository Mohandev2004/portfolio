import React from "react";
import  Projects  from "../components/Projects";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import  Main  from "../components/Main";


export default function Home() {
  return (<>
    <Main/>
    <Projects/>
    <Blogs/>
    <Footer />
    </>
  );
}
