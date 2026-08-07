"use client";
import { Link } from "@/i18n/routing";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { useRef, useState } from "react";

const logoextra = [
  {
    title: "Grupo Elettromec",
    img: "/cases/elettromec.jpeg",
  },
  {
    title: "Arezzo & CO",
    img: "/cases/arezo.jpeg",
  },
  {
    title: "New Era",
    img: "/cases/new-era.jpeg",
  },
];

export default function Cases() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations("cases");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2, // 20% da seção visível
    margin: "0px",
  });

  const a = useTranslations("cases-page");

  const itensCorporativo = [
    {
      title: a("itens.item1.company"),
      type: a("itens.item1.type"),
      description: a("itens.item1.description"),
      img: a("itens.item1.img.img"),
      logo: a("itens.item1.logo"),
    },
    {
      title: a("itens.item2.company"),
      type: a("itens.item2.type"),
      description: a("itens.item2.description"),
      img: a("itens.item2.img.img"),
      logo: a("itens.item2.logo"),
    },
    {
      title: a("itens.item3.company"),
      type: a("itens.item3.type"),
      description: a("itens.item3.description"),
      img: a("itens.item3.img.img"),
      logo: a("itens.item3.logo"),
    },
    {
      title: a("itens.item4.company"),
      type: a("itens.item4.type"),
      description: a("itens.item4.description"),
      img: a("itens.item4.img.img"),
      logo: a("itens.item4.logo"),
    },
    {
      title: a("itens.item5.company"),
      type: a("itens.item5.type"),
      description: a("itens.item5.description"),
      img: a("itens.item5.img.img"),
      logo: a("itens.item5.logo"),
    },
    {
      title: a("itens.item6.company"),
      type: a("itens.item6.type"),
      description: a("itens.item6.description"),
      img: a("itens.item6.img.img"),
      logo: a("itens.item6.logo"),
    },
    {
      title: a("itens.item7.company"),
      type: a("itens.item7.type"),
      description: a("itens.item7.description"),
      img: a("itens.item7.img.img"),
      logo: a("itens.item7.logo"),
    },
    {
      title: a("itens.item8.company"),
      type: a("itens.item8.type"),
      description: a("itens.item8.description"),
      img: a("itens.item8.img.img"),
      logo: a("itens.item8.logo"),
    },
    {
      title: a("itens.item9.company"),
      type: a("itens.item9.type"),
      description: a("itens.item9.description"),
      img: a("itens.item9.img.img"),
      logo: a("itens.item9.logo"),
    },
    {
      title: a("itens.item10.company"),
      type: a("itens.item10.type"),
      description: a("itens.item10.description"),
      img: a("itens.item10.img.img"),
      logo: a("itens.item10.logo"),
    },
    {
      title: a("itens.item11.company"),
      type: a("itens.item11.type"),
      description: a("itens.item11.description"),
      img: a("itens.item11.img.img"),
      logo: a("itens.item11.logo"),
    },
    {
      title: a("itens.item12.company"),
      type: a("itens.item12.type"),
      description: a("itens.item12.description"),
      img: a("itens.item12.img.img"),
      logo: a("itens.item12.logo"),
    },
    {
      title: a("itens.item13.company"),
      type: a("itens.item13.type"),
      description: a("itens.item13.description"),
      img: a("itens.item13.img.img"),
      logo: a("itens.item13.logo"),
    },
    {
      title: a("itens.item14.company"),
      type: a("itens.item14.type"),
      description: a("itens.item14.description"),
      img: a("itens.item14.img.img"),
      logo: a("itens.item14.logo"),
    },
    {
      title: a("itens.item15.company"),
      type: a("itens.item15.type"),
      description: a("itens.item15.description"),
      img: a("itens.item15.img.img"),
      logo: a("itens.item15.logo"),
    },
    {
      title: a("itens.item16.company"),
      type: a("itens.item16.type"),
      description: a("itens.item16.description"),
      img: a("itens.item16.img.img"),
      logo: a("itens.item16.logo"),
    },
    {
      title: a("itens.item17.company"),
      type: a("itens.item17.type"),
      description: a("itens.item17.description"),
      img: a("itens.item17.img.img"),
      logo: a("itens.item17.logo"),
    },
    {
      title: a("itens.item18.company"),
      type: a("itens.item18.type"),
      description: a("itens.item18.description"),
      img: a("itens.item18.img.img"),
      logo: a("itens.item18.logo"),
    },
    {
      title: a("itens.item19.company"),
      type: a("itens.item19.type"),
      description: a("itens.item19.description"),
      img: a("itens.item19.img.img"),
      logo: a("itens.item19.logo"),
    },
    {
      title: a("itens.item20.company"),
      type: a("itens.item20.type"),
      description: a("itens.item20.description"),
      img: a("itens.item20.img.img"),
      logo: a("itens.item20.logo"),
    },
    {
      title: a("itens.item21.company"),
      type: a("itens.item21.type"),
      description: a("itens.item21.description"),
      img: a("itens.item21.img.img"),
      logo: a("itens.item21.logo"),
    },
    {
      title: a("itens.item22.company"),
      type: a("itens.item22.type"),
      description: a("itens.item22.description"),
      img: a("itens.item22.img.img"),
      logo: a("itens.item22.logo"),
    },
    {
      title: a("itens.item23.company"),
      type: a("itens.item23.type"),
      description: a("itens.item23.description"),
      img: a("itens.item23.img.img"),
      logo: a("itens.item23.logo"),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % itensCorporativo.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + itensCorporativo.length) % itensCorporativo.length
    );
  };

  return (
    <section ref={ref} className="w-full h-full overflow-hidden px-4  ">
      <div className="w-full h-full max-w-7xl mx-auto flex items-center justify-center relative md:min-h-[700px]  min-h-[600px] mb-10 md:mb-0  ">
        <div className="w-full h-full flex flex-col items-start justify-center gap-6 max-w-[600px] lg:mt-0 mt-10 sm:py-20  absolute top-0 left-0 z-10 ">
          <motion.h1
            className="sm:text-lg text-base font-normal text-gray-500 w-auto text-center rounded-full px-6 py-2 border-1 border-gray-400 "
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {t("title")}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="sm:text-5xl text-3xl font-normal text-gray-500 lg:max-w-[550px] sm:max-w-[450px] xs:max-w-[400px]    max-w-[250px]  "
          >
            {t("subtitle")}{" "}
            <span className="text-gray-800">{t("subtitle2")}</span>
          </motion.h2>
          <motion.p
            className="text-gray-800 md:text-base text-sm text-justify lg:max-w-[550px] sm:max-w-[400px] xs:max-w-[350px] mt-10 xs:mt-20 sm:mt-0 bg-white sm:bg-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {t("description")}
          </motion.p>

          <Link
            href="/cases"
            className="text-black uppercase rounded-full px-4 py-2 border-1  bg-[#FFBE00] hover:bg-[#2C2C2C] hover:text-[#FFBE00]  transition-all duration-300 font-semibold w-full text-center sm:max-w-[440px]"
          >
            {t("cta")}
          </Link>
        </div>
        <div className="w-full  h-full md:max-w-[700px] max-w-[500px] md:min-h-[700px] sm:max-h-[500px] xs:max-h-[450px] max-h-[360px] min-h-[200px] lg:min-w-1/2  absolute top-0 bottom-0  right-0 ">
          <Image
            src="/map-location.svg"
            alt="Map Location"
            fill
            priority
            className="sm:object-cover object-contain scale-210  sm:scale-200  object-bottom -translate-y-[55%]  xs:-translate-y-[35%] md:-translate-y-[20%]   md:scale-150  translate-x-[2%] sm:-translate-x-[15%] md:translate-x-0 "
          />
        </div>
      </div>
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col items-center justify-center bg-[#EFEFEF] shadow-2xl mt-10 lg:mt-0">
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center">
          <motion.div
            key={`image-${currentSlide}`}
            className="w-full h-full lg:max-w-1/2 max-w-full relative lg:min-h-[640px] md:min-h-[450px] sm:min-h-[400px] xs:min-h-[350px] min-h-[300px] "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={itensCorporativo[currentSlide].img}
              alt={itensCorporativo[currentSlide].title}
              fill
              priority
              className="object-cover md:grayscale-100 grayscale-0 rounded-lg lg:rounded-none hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
          <div className="w-full h-full  flex lg:hidden flex-col  items-start justify-start max-w-7xl mx-auto">
            {/* Navegação */}
            <div className="flex items-center justify-between mt-6  w-full ">
              <button
                onClick={() => {
                  prevSlide();
                }}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {/* Indicadores */}
              <div className="sm:flex hidden space-x-2">
                {itensCorporativo.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  nextSlide();
                }}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 font-bold" />
              </button>
            </div>
          </div>
          <div className="w-full h-full min-h-full flex flex-col items-start justify-center py-10 lg:gap-8 gap-4 lg:px-16 px-4 lg:max-w-1/2 max-w-full">
            <h2 className="lg:text-4xl sm:text-3xl text-2xl font-normal text-gray-500 mb-4 lg:max-w-lg max-w-full">
              {t("title2")}
            </h2>

            <h3 className="text-lg font-normal text-gray-500 mb-4 lg:max-w-lg max-w-full">
              {t("sub1")}{" "}
              <span className="font-bold text-black">
                {itensCorporativo[currentSlide].title}
              </span>
              {t("sub2")}
            </h3>
            <motion.p
              key={`description-${currentSlide}`}
              className="text-gray-600 text-justify lg:max-w-lg max-w-full sm:text-base text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              dangerouslySetInnerHTML={{
                __html: itensCorporativo[currentSlide].description.replace(
                  itensCorporativo[currentSlide].title,
                  `<span class="font-bold text-black">${itensCorporativo[currentSlide].title}</span>`
                ),
              }}
            />
            <Link
              href={{
                pathname: "/cases",
                query: {
                  company: itensCorporativo[currentSlide].title
                    .toLowerCase()
                    .replace(/\s+/g, "-"),
                  service: itensCorporativo[currentSlide].type,
                },
              }}
              className="bg-[#2C2C2C] w-full mx-auto text-[#FFBE00] hover:text-[#2C2C2C]  hover:border-[#2C2C2C] hover:bg-[#FFBE00] border border-transparent transition-all duration-300 mt-2 px-4 py-4 rounded-full   uppercase text-center lg:text-base md:text-sm text-xs "
            >
              {t("cta2")}
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full  lg:flex hidden  items-start justify-start max-w-7xl mx-auto">
        {/* Navegação */}
        <div className="flex items-center justify-between mt-6 max-w-1/2 w-full ">
          <button
            onClick={() => {
              prevSlide();
            }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Indicadores */}
          <div className="flex space-x-2">
            {itensCorporativo.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              nextSlide();
            }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 font-bold" />
          </button>
        </div>
      </div>
      <div className="w-full h-full max-w-7xl mx-auto grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 py-10">
        {itensCorporativo
          .filter((item) => item.title !== "Empresa de tecnologia")
          .filter(
            (item, index, self) =>
              index ===
              self.findIndex((i) => i.logo === item.logo && i.logo != "")
          )
          .map((item, index) => (
            <Link
              key={index}
              href={{
                pathname: "/cases",
                query: {
                  company: item.title.toLowerCase().replace(/\s+/g, "-"),
                  service: item.type,
                },
              }}
              className="p-6 border-1 border-gray-400 rounded-lg md:grayscale-100 grayscale-0 hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="max-w-[180px] min-h-[100px] relative">
                <Image
                  src={item.logo}
                  alt={item.title}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        {logoextra.map((item, index) => (
<div
              key={index}
              className="p-6 border-1 border-gray-400 rounded-lg md:grayscale-100 grayscale-0 transition-all duration-300"
                    >
            <div className="max-w-[180px] min-h-[100px] relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
