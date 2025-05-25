// sections/HeroSection.tsx
'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import heroImg from '../../../public/hero-bg-1.png'

const HeroSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const categories = [
    {
      name: "Women's Fashion",
      subcategories: ['Cosmetics', 'Bags', 'Dress'],
      hasDropdown: true
    },
    {
      name: "Men's Fashion",
      subcategories: ['Shirt', 'Pant', 'Sunglass'],
      hasDropdown: true
    },
    { name: "Electronics", hasDropdown: false },
    { name: "Home & Lifestyle", hasDropdown: false },
    { name: "Medicines", hasDropdown: false },
    { name: "Sports & Outdoor", hasDropdown: false },
    { name: "Baby's & Toys", hasDropdown: false },
    { name: "Groceries & Pets", hasDropdown: false },
    { name: "Health & Beauty", hasDropdown: false }
  ];

  const slides = [
    {
      title: "Summer Collection",
      subtitle: "New Arrivals On Sale",
      image: heroImg,
      buttonText: "Shop Now"
    },
    {
      title: "Winter Collection",
      subtitle: "Get 30% Off",
      image: "/hero-bg-1.png",
      buttonText: "Shop Now"
    }
  ];

  const toggleCategory = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null);
      setActiveSubmenu(null);
    } else {
      setActiveCategory(categoryName);
      setActiveSubmenu(categoryName);
    }
  };

  return (
    <section className="relative bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Categories Section */}
          <div className="w-full lg:w-1/4 border-r border-gray-300 h-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <ul>
                {categories.map((category) => (
                  <li key={category.name} className="relative">
                    <button
                      onClick={() => category.hasDropdown ? toggleCategory(category.name) : null}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex justify-between items-center ${activeCategory === category.name ? 'bg-gray-100' : ''}`}
                    >
                      <span>{category.name}</span>
                      {category.hasDropdown && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 transform transition-transform ${activeCategory === category.name ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    
                    {activeSubmenu === category.name && category.subcategories && (
                      <ul className="bg-white pl-8">
                        {category.subcategories.map((subcategory) => (
                          <li key={subcategory}>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                              onClick={(e) => e.preventDefault()}
                            >
                              {subcategory}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Border */}
          {/* <div className="hidden lg:block border-r border-gray-300 h-auto"></div> */}

          {/* Slider Section */}
          <div className="w-full lg:w-3/4 rounded-lg overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              className="h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="relative h-80 md:h-96 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="relative h-full flex items-center pl-8 md:pl-16">
                      <div className="text-white max-w-md">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                        <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                        <a
                          href="#"
                          className="inline-flex items-center text-white hover:text-gray-200 transition-colors underline"
                          onClick={(e) => e.preventDefault()}
                        >
                          {slide.buttonText}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;