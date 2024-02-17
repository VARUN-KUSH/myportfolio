"use client"

import Image from "next/image";
import Header from '../components/Header'

const arr = ['home', 'about', 'work', 'skills', 'contact']

export default function Home() {
  return (
    <>
    <Header arr={arr}/>
    
    </>
  );
}
