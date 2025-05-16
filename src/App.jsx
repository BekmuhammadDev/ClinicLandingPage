import React, { useState, useEffect, useRef } from 'react';
import bgimg from "./assets/bgimg.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiperning asosiy CSS fayli
import 'swiper/css/navigation'; // Navigatsiya uchun CSS
import 'swiper/css/pagination'; // Pagination uchun CSS
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import LogoImg from "./assets/Logo.png"
import Nurses from "./assets/nurses.png"
import People from "./assets/image.png"
import AboutImg from "./assets/aboutus.png"
import AOS from 'aos';
import { FaUser } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FaCheck, FaTimes, FaGlobe, FaClock, FaUtensils, FaCertificate, FaRegClock, FaCalendarAlt, FaInstagram, FaClipboardList, FaTelegramPlane } from "react-icons/fa";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import Xona1 from "./assets/hona 1.png"
import Xona2 from "./assets/hona 2.png"
import Xona3 from "./assets/hona 3.png"
import Xona4 from "./assets/hona 4.png"
import Litsenziya from "./assets/litsenziya.svg"
import BgLitsenziya from "./assets/bgiimglit.png"
import { FiMenu, FiX } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import LogoWhite from "./assets/LogoWhite.png"
import { useTranslation } from 'react-i18next';
import "./i18"


const App = () => {

  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState('uz');
  const { t, i18n } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_zarp7qs',   // service ID
        'template_n9y64se',  // template ID
        form.current,
        '7STayiENTcu0WLfMR'  // public key
      )
      .then(
        (result) => {
          console.log('Email sent!', result.text);
          alert('Xabar yuborildi!');
          form.current.reset(); // Formani tozalash
        },
        (error) => {
          console.log('Error:', error.text);
          alert('Xatolik yuz berdi!');
        }
      );
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: true,     // sahifa qayta ko‘rilganda faqat bir marta ishlaydi
    });
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'uz' ? 'ru' : 'uz';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    setLanguage(i18n.language || 'uz');
  }, [i18n.language]);

  const accordionData = [
    {
      title: "When should I pay for a project?",
      content:
        "After confirming contract need to pay at least 50% of total price, or if you looking optional method, you should contact with experts to make in order.",
    },
    {
      title: "How long is the course?",
      content:
        "The course duration is 3 months, including theory and practice.",
    },
    {
      title: "Do I get a certificate?",
      content:
        "Yes, students will receive a diploma at the end of the course.",
    },
    {
      title: "What are the class timings?",
      content:
        "Classes are held 3 times a week, each session lasting 4 hours.",
    },
    {
      title: "What are the class timings?",
      content:
        "Classes are held 3 times a week, each session lasting 4 hours.",
    },

  ];

  const cards = [
    { icon: <FaClipboardList />, text: "Haftasiga 3 kun" },
    { icon: <FaUtensils />, text: "Bepul tushlik" },
    { icon: <FaRegClock />, text: "2 soat nazariya" },
    { icon: <FaRegClock />, text: "2 soat amaliyot", highlight: true },
    { icon: <FaCertificate />, text: 'Kurs yakunida "Diplom"' },
  ];

  const days = [
    { name: "Du", hasClass: true },
    { name: "SE", hasClass: false },
    { name: "Ch", hasClass: true },
    { name: "Pa", hasClass: false },
    { name: "Ju", hasClass: true },
    { name: "Sh", hasClass: false },
    { name: "Ya", hasClass: false },
  ];

  const daysIg = [
    { name: "Du", hasClass: true },
    { name: "SE", hasClass: true },
    { name: "Ch", hasClass: true },
    { name: "Pa", hasClass: true },
    { name: "Ju", hasClass: true },
    { name: "Sh", hasClass: true },
    { name: "Ya", hasClass: false },
  ];

  const features = [
    {
      title: "O‘qituvchilar",
      description:
        "Bizning o‘qituvchilar ko‘p yillik stajga ega bo‘lgan o‘z ishini ustalari hisoblanadi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      number: "01",
    },
    {
      title: "Sertificate",
      description:
        "Bizning sertifikate kurs yakunida topshiriladi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      number: "02",
      highlight: true,
    },
    {
      title: "Malaka oshirish",
      description:
        "Har yili o‘quv markazdan ortiq mutaxassislar malaka oshirib ishga joylashmoqda. Lorem ipsum dolor sit amet.",
      number: "03",
    },
  ];


  return (
    <>
      <header className="border-b border-green-100 shadow-sm bg-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-10 md:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={LogoImg} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Language Switcher */}
          <div className="hidden lg:flex items-center gap-2">
            <span
              className="text-gray-700 font-medium uppercase cursor-pointer"
              onClick={toggleLanguage}
            >
              {language}
            </span>
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <FaGlobe className="text-xl text-black" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-green-700 focus:outline-none"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* {isOpen && (
          <div className="lg:hidden bg-white px-4 pb-4">
            <nav className="flex flex-col gap-y-4 text-gray-700 font-bold text-base">
              <a href="#" className="hover:text-green-600">Biz haqimizda</a>
              <a href="#" className="hover:text-green-600">Kurslar</a>
              <a href="#" className="hover:text-green-600">Afzalliklar</a>
              <a href="#" className="hover:text-green-600">Xonalar</a>
              <a href="#" className="hover:text-green-600">Bog’lanish</a>
            </nav>

            <div className="mt-4 flex items-center gap-2">
              <span
                className="text-gray-700 font-medium uppercase cursor-pointer"
                onClick={toggleLanguage}
              >
                {language}
              </span>
              <button
                onClick={toggleLanguage}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
              >
                <FaGlobe className="text-xl text-black" />
              </button>
            </div>
          </div>
        )} */}
      </header>

      <main>

        <section className="bg-green-50 py-10 min-h-[520px] relative">
          <div className="container mx-auto px-4">
            <div
              className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-24"
              data-aos="fade-up"
            >
              {/* Chap tomoni */}
              <div
                className="w-full lg:w-1/2 text-center lg:text-left"
                data-aos="fade-right"
              >
                <p className="text-gray-600 text-lg md:text-xl font-semibold mb-2">
                  Samarqand
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-4 leading-tight">
                  {t("course_title")} <br /> {t("course_subtitle")}
                </h1>
                <p className="text-gray-700 mb-6 text-base md:text-lg">
                 {t("course_description")}
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#007360] text-white px-10 py-2 rounded hover:bg-green-700 transition"
                  >
                   {t("contact")}
                  </button>
                </div>
              </div>

              {/* O'ng tomoni - Rasm */}
              <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
                <img
                  src={Nurses}
                  alt="Women Group"
                  className=" md:max-h-[900px] object-contain w-full max-w-[500px]"
                />
              </div>
            </div>

            {/* Modal oyna */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-[#007360] text-white rounded-2xl w-[90%] max-w-3xl relative shadow-lg flex flex-col md:flex-row overflow-hidden items-center md:items-stretch">
                  {/* Yopish tugmasi */}
                  <button
                    className="absolute top-2 right-2 text-4xl text-white hover:text-red-500 z-10"
                    onClick={() => setIsModalOpen(false)}
                  >
                    &times;
                  </button>

                  <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-4 text-center">
                    <img
                      src={LogoWhite}
                      alt="Hostel"
                      className="w-full h-auto max-h-[300px] object-contain rounded-lg"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {t("center_name")}
                    </h3>
                    <p className="text-sm mt-1 text-white/80 px-2">
                     {t("center_description")}
                    </p>
                  </div>

                  {/* Forma bo'limi */}
                  <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                    <h2 className="text-xl font-semibold text-center mb-4">
                      {t("orderTitle")}
                    </h2>

                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className="flex flex-col gap-4"
                    >
                      <input
                        type="text"
                        name="user_name"
                        placeholder={t("namePlaceholder")}
                        className="border rounded px-4 py-2 text-black"
                        required
                        maxLength={15}
                        pattern="^[A-Za-zА-Яа-яЎҚҒҲўқғҳ\s]{1,15}$"
                        title="Faqat harflar kiriting (maksimal 15 ta)"
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^A-Za-zА-Яа-яЎҚҒҲўқғҳ\s]/g,
                            ""
                          );
                        }}
                      />

                      <input
                        type="tel"
                        name="user_phone"
                        placeholder="93 553 33 52"
                        className="border rounded px-4 py-2 text-black"
                        required
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(/\D/g, "").slice(0, 9);
                        }}
                      />

                      <textarea
                        name="message"
                        placeholder={t("writeYourMessage")}
                        className="border rounded px-4 py-2 text-black h-28 resize-none"
                        required
                      />

                      <button
                        type="submit"
                        className="bg-[#007360] text-white border font-semibold py-2 rounded"
                      >
                        {t("submitButton")}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Forma qismi */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex justify-center mt-12 px-2"
            >
              <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 w-full max-w-7xl flex flex-col md:flex-row items-center gap-6">
                {/* Ism */}
                <div className="flex items-start md:items-center border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0 md:pl-5 gap-3 w-full md:w-1/3">
                  <FaUser className="text-[#007360] text-2xl md:text-3xl mt-1" />
                  <div className="w-full">
                    <h1 className="text-lg md:text-xl font-bold">Sizning Ismingiz</h1>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Ismingiz"
                      className="bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none w-full"
                      pattern="[A-Za-z\u0400-\u04FF\s]+"
                      inputMode="text"
                      maxLength={20}
                      required
                    />
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start md:items-center border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0 md:pl-5 gap-3 w-full md:w-1/3">
                  <IoCallSharp className="text-[#007360] text-2xl md:text-3xl mt-1" />
                  <div className="w-full">
                    <h1 className="text-lg md:text-xl font-bold">Telefon raqamingiz</h1>
                    <input
                      type="tel"
                      name="user_phone"
                      placeholder="93 553 33 52"
                      pattern="\d{9}"
                      maxLength={9}
                      inputMode="numeric"
                      required
                      className="bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none w-full"
                    />
                  </div>
                </div>

                {/* Yuborish tugmasi */}
                <div className="w-full md:w-auto ml-0 md:ml-20">
                  <button
                    type="submit"
                    className="bg-[#007360] hover:bg-[#005e4c] text-white font-semibold px-16 py-3 rounded-xl w-full transition-all duration-300"
                  >
                    Yuborish
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section className="overflow-hidden">
          <div className="py-16">
            <div className="relative">
              <img
                className="absolute -top-16 right-0 z-0"
                src={bgimg}
                alt=""
                data-aos="fade-down"
              />
            </div>

            <div
              className="flex flex-col md:flex-row justify-center items-center gap-40 py-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {[1, 2].map((card, idx) => (
                <div
                  key={card}
                  className="w-96 h-[664px] bg-white shadow-lg mt-28 z-20 overflow-hidden border border-gray-200 flex flex-col justify-between"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 300} 
                >
                  <div className="p-4 flex flex-col justify-start gap-3">
                    {/* Header */}
                    <div className="flex justify-between mb-5 items-start">
                      <p className="text-md font-semibold text-gray-600">Kurs</p>
                      <img src={LogoImg} alt="Shifokor logo" className="w-16" />
                    </div>

                    {/* Title & Mode */}
                    <div>
                      <h2 className="text-lg mb-5 font-bold text-[#007360] leading-tight">
                       {t("nursing_title")}
                      </h2>
                      <button className="bg-green-800 text-white text-sm font-semibold px-16 py-2 rounded-md w-fit">
                        {t("nursing_mode")}
                      </button>
                    </div>

                    {/* Teacher */}
                    <p className="text-red-600 font-semibold text-xl leading-tight">
                      {t("nursing_teacher")}
                    </p>

                    {/* Description + Image */}
                    <div className="flex items-center gap-5 mt-5">
                      <div className="flex gap-2 mt-1">
                        <div className="w-1.5 bg-gray-400 rounded-sm"></div>
                        <p className="text-sm font-medium text-gray-700 leading-snug">
                         {t("nursing_cta")}
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <img
                          src={People}
                          alt="Nurse"
                          className="w-[440px] h-[200px] object-contain"
                        />
                      </div>
                    </div>

                    {/* Group info */}
                    <p className="text-base font-medium text-gray-600 mt-3">
                     {t("small_groups")}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col">
                    <button className="w-full py-3 bg-[#007360] text-white font-semibold">
                      {t("teacher_label")}
                    </button>
                    <button className="w-full py-3 bg-[#ECF9EB] text-[#007360] font-semibold">
                      {t("learn_more")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#EEEEEE] py-16 overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
          <div className="container mx-auto px-4 md:px-10 lg:px-28 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-10">
            {/* Matn */}
            <div
              className="w-full md:w-1/2 space-y-5 text-center md:text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <p className="text-sm font-semibold text-[#007360] uppercase tracking-wider">
                {t("aboutUs")}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#007360] leading-snug">
                {t("center_name")}
              </h1>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
               {t("teaching_info")}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {t("certification_info")}
              </p>
            </div>

            {/* Rasm */}
            <div
              className="w-full md:w-1/2 flex justify-center"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg h-[400px] sm:h-[500px] md:h-[566px]">
                <img
                  src={AboutImg}
                  alt="Biz haqimizda"
                  className="w-full h-full object-cover rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-16 overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
          <div className='container mx-auto'>
            <h1 className='text-[38px] text-center font-black text-[#007360] mb-5' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
             {t("nursing_program_title")}
            </h1>
            <div className="md:flex ">
              {/* Accordion */}
              <div
                className="flex-1 space-y-4 bg-[#007360] py-5 px-5"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                {accordionData.map((item, index) => (
                  <div key={index}>
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full text-left p-4 flex justify-between items-center font-semibold text-white"
                    >
                      {item.title}
                      <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
                    </button>
                    {openIndex === index && (
                      <div className="p-4 text-white text-sm">{item.content}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Cards */}
              <div
                className="flex-1 grid grid-cols-2 gap-4 border-2 border-[#007360] py-10 px-10"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center gap-2 p-4 border rounded-lg bg-white text-black hover:bg-[#007360] hover:text-white cursor-pointer transition duration-300"
                  >
                    <div className="text-xl flex justify-center mb-3">
                      {React.cloneElement(card.icon, {
                        className: "text-[#007360] group-hover:text-white transition duration-300",
                      })}
                    </div>
                    <p className="text-sm text-center font-medium">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dars Jadvali */}
            <div
              className="bg-[#007360] text-white p-6"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <h3 className="text-3xl font-bold text-center mb-4">{t("nursing_schedule")}</h3>
              <div className="grid grid-cols-7 text-center text-sm font-semibold">
                {days.map((day, index) => (
                  <div key={index} className="py-2 border border-white">
                    <div className='border-b text-xl font-bold'>{day.name}</div>
                    <div className="text-lg mt-1">
                      {day.hasClass ? <FaCheck className="text-green-300 mx-auto" /> : <FaTimes className="text-red-400 mx-auto" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional info */}
              <div className="flex justify-center gap-20 mt-10 text-sm">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className='text-2xl' /> <span className='text-xl font-semibold'>{t("nursing_days")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className='text-2xl' /> <span className='text-xl font-semibold'>{t("nursing_hours")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">
            {t("why_us")}
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {features.map((item, idx) => (
              <div
                key={idx}
                className={`relative p-6 rounded-xl shadow-md overflow-hidden transition duration-300 transform 
          ${item.highlight
                    ? "bg-[#007360] text-white hover:scale-105 hover:-translate-y-1.5 cursor-pointer"
                    : "bg-white text-gray-800 hover:shadow-lg hover:scale-105 hover:-translate-y-1.5 cursor-pointer"
                  }`}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay={idx * 200}  // Har karta uchun ketma-ket kechikish
              >
                {/* Background Number */}
                <div className="absolute bottom-4 right-6 text-[100px] font-bold opacity-10 leading-none select-none">
                  {item.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="py-16 px-6 md:px-16 overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container mx-auto">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-center font-black text-[#007360] mb-5"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              {t("acupuncture_program_title")}
            </h1>

            <div className="md:flex">
              {/* Accordion */}
              <div
                className="flex-1 space-y-4 bg-[#007360] py-5 px-5"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                {accordionData.map((item, index) => (
                  <div key={index}>
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full text-left p-4 flex justify-between items-center font-semibold text-white"
                    >
                      {item.title}
                      <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
                    </button>
                    {openIndex === index && (
                      <div className="p-4 text-white text-sm">{item.content}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Cards */}
              <div
                className="flex-1 grid grid-cols-2 gap-4 border-2 border-[#007360] py-10 px-10"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center gap-2 p-4 border rounded-lg bg-white text-black hover:bg-[#007360] hover:text-white cursor-pointer transition duration-300"
                  >
                    <div className="text-xl flex justify-center mb-3">
                      {React.cloneElement(card.icon, {
                        className:
                          "text-[#007360] group-hover:text-white transition duration-300",
                      })}
                    </div>
                    <p className="text-sm text-center font-medium">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dars Jadvali */}
            <div
              className="bg-[#007360] text-white p-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <h3 className="text-3xl font-bold text-center mb-4">{t('nursing_schedule')}</h3>
              <div className="grid grid-cols-7 text-center text-sm font-semibold">
                {daysIg.map((day, index) => (
                  <div key={index} className="py-2 border border-white">
                    <div className="border-b text-xl font-bold">{day.name}</div>
                    <div className="text-lg mt-1">
                      {day.hasClass ? (
                        <FaCheck className="text-green-300 mx-auto" />
                      ) : (
                        <FaTimes className="text-red-400 mx-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional info */}
              <div className="flex justify-center gap-20 mt-10 text-sm">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-2xl" />{" "}
                  <span className="text-xl font-semibold">{t("acupuncture_days")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-2xl" />{" "}
                  <span className="text-xl font-semibold">{t('nursing_hours')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section>

          <div className=" flex justify-center">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              className="relative"
            >
              <SwiperSlide>
                <div className="bg-[#EEEEEE] h-[80vh] w-full flex flex-col md:flex-row gap-10 justify-between pt-20 p-10">
                  <div className="md:w-1/2 px-5">
                    <h3 className="text-[#4caf50] mb-5 text-6xl font-bold">O’quv honalar</h3>
                    <p className="text-[#333] text-base leading-7">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus labore est eaque sequi omnis nobis magni optio tempore voluptatem rem, quod pariatur deserunt voluptas saepe consequatur debitis dolores odio atque libero maiores voluptates commodi. Soluta natus aliquid, vitae sunt assumenda, optio autem odio, fugiat molestiae esse fuga saepe repellat.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <img
                      src={Xona1}
                      alt="O’quv xonasi"
                      className="w-[500px] max-w-full h-[350px] object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-[#EEEEEE] h-[80vh] w-full flex flex-col md:flex-row gap-10 justify-between pt-20 p-10">
                  <div className="md:w-1/2 px-5">
                    <h3 className="text-[#4caf50] mb-5 text-6xl font-bold">O’quv honalar</h3>
                    <p className="text-[#333] text-base leading-7">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus labore est eaque sequi omnis nobis magni optio tempore voluptatem rem, quod pariatur deserunt voluptas saepe consequatur debitis dolores odio atque libero maiores voluptates commodi. Soluta natus aliquid, vitae sunt assumenda, optio autem odio, fugiat molestiae esse fuga saepe repellat.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <img
                      src={Xona2}
                      alt="O’quv xonasi"
                      className="w-[500px] max-w-full h-[450px] object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-[#EEEEEE] h-[80vh] w-full flex flex-col md:flex-row gap-10 justify-between pt-20 p-10">
                  <div className="md:w-1/2 px-5">
                    <h3 className="text-[#4caf50] mb-5 text-6xl font-bold">O’quv honalar</h3>
                    <p className="text-[#333] text-base leading-7">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus labore est eaque sequi omnis nobis magni optio tempore voluptatem rem, quod pariatur deserunt voluptas saepe consequatur debitis dolores odio atque libero maiores voluptates commodi. Soluta natus aliquid, vitae sunt assumenda, optio autem odio, fugiat molestiae esse fuga saepe repellat.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <img
                      src={Xona3}
                      alt="O’quv xonasi"
                      className="w-[600px] max-w-full h-[350px] object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-[#EEEEEE] h-[80vh] w-full flex flex-col md:flex-row gap-10 justify-between pt-20 p-10">
                  <div className="md:w-1/2 px-5">
                    <h3 className="text-[#4caf50] mb-5 text-6xl font-bold">O’quv honalar</h3>
                    <p className="text-[#333] text-base leading-7">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus labore est eaque sequi omnis nobis magni optio tempore voluptatem rem, quod pariatur deserunt voluptas saepe consequatur debitis dolores odio atque libero maiores voluptates commodi. Soluta natus aliquid, vitae sunt assumenda, optio autem odio, fugiat molestiae esse fuga saepe repellat.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <img
                      src={Xona4}
                      alt="O’quv xonasi"
                      className="w-[600px] max-w-full h-[350px] object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </section> */}

        <section className="overflow-hidden">
          <h1
            className="text-5xl font-bold text-center mt-10 mb-10 uppercase text-[#007360]"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
          {t("license")}
          </h1>

          <div
            className="relative -top-28"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <img className="absolute right-0 -z-10 top-0" src={BgLitsenziya} alt="" />
          </div>

          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <img src={Litsenziya} alt="Litsenziya rasmi" />
          </div>
        </section>

        <section
          className="bg-[#EEEEEE] py-10 mt-16 overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1
            className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#007360] mb-10 uppercase"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="200"
          >
          {t("video_collection")}
          </h1>

          <div
            className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                0: { slidesPerView: 1 },         // mobile
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },       // tablets
                1024: { slidesPerView: 3 },      // desktop
              }}
              className="relative"
            >
              {[1, 2, 3, 4].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-video w-full flex items-center justify-center">
                    <iframe
                      className="w-full h-full rounded-xl shadow-lg"
                      src={`https://www.youtube.com/embed/${['dQw4w9WgXcQ', 'jfKfPfyJRdk', 'ScMzIvxBSi4', 'jfKfPfyJRdk'][index]
                        }?autoplay=0&mute=1`}
                      title={`AKSIYA Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section
          className="w-full py-16 px-4 sm:px-6 lg:px-10 overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            className="flex flex-col lg:flex-row items-center gap-12 justify-between w-full max-w-7xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {/* Chap tomonda matn */}
            <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <IoLocationSharp className="text-2xl text-[#007360]" />
                  <h2 className="text-2xl font-semibold text-[#007360]">{t("our_address")}</h2>
                </div>
                <p className="text-[#007360] font-semibold mb-5">
                  {t("address_details")}
                </p>

                <div className="flex items-center gap-3 mb-2">
                  <CgMail className="text-2xl text-[#007360]" />
                  <h3 className="text-xl font-medium text-[#007360]">{t("emailPlaceholder")}:</h3>
                </div>
                <p className="text-lg font-semibold text-[#007360] mb-5">example@mail.uz</p>

                <div className="flex items-center gap-3 mb-2">
                  <IoCall className="text-2xl text-[#007360]" />
                  <h3 className="text-xl font-medium text-[#007360]">{t("phone")}:</h3>
                </div>
                <a
                  href="tel:+998935533352"
                  className="text-[#007360] font-bold hover:underline text-lg"
                >
                  +998 93 553 33 52
                </a>
              </div>
            </div>

            {/* O‘ng tomonda Google Maps */}
            <div
              className="w-full lg:w-1/2 h-[350px] sm:h-[400px] md:h-[450px]"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6090.994748927668!2d72.3307203!3d40.8011046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85f1c4d10b11%3A0xb8bdf7a53d26a0c3!2sPasport%20Stol%20%E2%84%962!5e0!3m2!1sru!2s!4v1714036123456!5m2!1sru!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow-md w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

      </main >

      <footer className="bg-[#0A5548] ">

        <div className="flex flex-col md:flex-row text-white container mx-auto py-10 px-10 justify-between gap-8">

          {/* Logo */}
          <div>
            <img src={LogoImg} alt="Logo" className="w-32 mb-4" />
          </div>

          {/* Kontaktlar */}
          <div>
            <h1 className="text-lg font-semibold mb-2">{t('contacts')}</h1>
            <p className="text-sm">Toshkent, Yunusobod</p>
            <p className="text-sm">+998 00 000 00 00</p>
          </div>

          {/* Linklar */}
          <div>
            <h1 className="text-lg font-semibold mb-2">{t("our_links")}</h1>
            <a href="#" className="text-sm block hover:underline">{t("aboutUs")}</a>
            <a href="#" className="text-sm block hover:underline">{t("services")}</a>
          </div>

          {/* Medialar */}
          <div>
            <h1 className="text-lg font-semibold mb-2">Medialar</h1>
            <div className="flex gap-3 text-2xl">
              <FaTelegramPlane className="cursor-pointer hover:text-gray-300" />
              <FaInstagram className="cursor-pointer hover:text-gray-300" />
            </div>
          </div>

        </div>
        <hr />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 mt-2 pb-4 text-white text-center px-4">
          <h1 className="font-normal">© SHIFOKOR O‘QUV MARKAZI 2025</h1>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="font-normal uppercase hover:underline">
            IPro Group Support
          </a>
        </div>

      </footer>



    </>
  );
};

export default App;