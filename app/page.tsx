import React from "react";
import  Projects  from "../components/HomePage/Projects";
import Blogs from "../components/HomePage/Blogs";
import  Main  from "../components/HomePage/About";


export default function Home() {
  return (<>
    <Main/>
    <Projects/>
    <Blogs/>
    </>
  );
}
