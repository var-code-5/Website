'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { redirect } from 'next/navigation'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cardData = [
  { title: "How to make the Paw-fect Meal For Your Dog", description: '', link:'/blog/dog-diet', image:"/blog-card-1.png" },
  { title: 'Tips for preventing accidents and injuries', description: '', link:'/blog/dog-safety', image:"/blog-card-3.jpg" },
  { title: 'Unlocking the Benefits of Dog Daycare', description: '', link:'/blog/dog-daycare', image:"/blog-card-4.jpg" },
  { title: 'Role of Regular Veterinary Check-Ups', description: '', link:'/blog/dog-vet', image:"/blog-card-2.jpg" },
  // { title: 'Card 5', description: 'Description of Card 2', link:'/blog/dog-diet' },
  // { title: 'Card 6', description: 'Description of Card 3', link:'/blog/dog-diet' },
];

const CardCarousel = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3, // Default to showing 3 slides
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: false,
  centerMode: true,
  beforeChange: (current: number, next: number) => setActiveSlide(next),
  responsive: [
    {
      breakpoint: 768, // Width less than 768px
      settings: {
        slidesToShow: 1, // Show only 1 slide
      },
    },
    // You can add more breakpoints here if needed
  ],
};

  return (
<>
<h1 className='font-nohemi text-6xl  mt-12 ml-10'>Blogs </h1>
<Slider className="p-[3rem] mb-10" {...settings}>
  {cardData.map((card, index) => (
  <div key={index} className={`shadow-md rounded-lg overflow-hidden bg-[#FEEAD8] blog-card ${index === activeSlide ? 'card-focused' : 'card-blurred'}`}>
    <div style={{ display: 'flex', width: '100%' }}>
      <Image src={card.image} width={150} height={150} alt={card.title} className="w-1/2" />
      <div className="p-5 text-center flex flex-col justify-between w-1/2">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 py-2">{card.title}</h2>
        <p className="text-sm md:text-lg text-gray-600">{card.description}</p>
        <button className="bg-orange-500 text-white font-bold md:py-2 md:px-4 py-1 px-2 md:text-lg text-sm mt-6 md:mt-0 rounded hover:bg-orange-600 transition duration-300 ease-in-out" ><a href={card.link} target='_blank'>Read More</a></button>
      </div>
    </div>
  </div>
))}
</Slider>
</>
  );
};

export default CardCarousel;