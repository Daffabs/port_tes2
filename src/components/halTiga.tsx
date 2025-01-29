"use client";
import React from "react";
import Image from "next/image";

const HalTiga = () => {
  return (
    <section className="lg:py-16 pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-12 bg-dark-2 h-auto items-center p-6">
        {/* Gambar Profil */}
        <div className="rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[250px] lg:h-[250px] relative overflow-hidden shadow-custom col-span-4 place-self-center mb-6 sm:mb-0">
          <Image
            src="/images/pdaffa.jpg"
            alt="hero image"
            className="absolute inset-0 w-full h-full object-cover"
            width={300}
            height={300}
          />
        </div>

        {/* Deskripsi tentang Daffa */}
        <div className="col-span-1 sm:col-span-8 text-white text-center sm:text-left">
          <p className="text-lg mb-2 text-hijauNew-2">- About Me</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Who Is <span className="text-kuningNew-1 italic">Daffa Bagus?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-justify">
            A fresh graduate with a Bachelor's degree in Information Technology from Universitas Komputer Indonesia (UNIKOM), possessing skills in developing, designing, and maintaining the interface of a website as a Front-end Developer. Highly creative, responsible, and equipped with excellent leadership abilities. Enthusiastic and eager to learn new things, especially in the field of Front-end Development. Ready to contribute the best for the company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HalTiga;
