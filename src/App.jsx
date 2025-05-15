import React, { useState } from 'react';
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
import { FaCheck, FaTimes, FaClock, FaUtensils, FaCertificate, FaRegClock, FaCalendarAlt, FaInstagram, FaClipboardList, FaTelegramPlane } from "react-icons/fa";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import Xona1 from "./assets/hona 1.png"
import Xona2 from "./assets/hona 2.png"
import Xona3 from "./assets/hona 3.png"
import Xona4 from "./assets/hona 4.png"
import Litsenziya from "./assets/litsenziya.svg"
import BgLitsenziya from "./assets/bgiimglit.png"

const App = () => {

  const [openIndex, setOpenIndex] = useState(null);

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

  // const toggle = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };
  // const sections = [
  //   {
  //     title: "BIRINCHI YORDAM KO'RSATISH",
  //     content: [
  //       "Pulsni hisoblash, qon bosimini o'lchash, gipertonik inqiroz, hushidan ketish",
  //       "Bronxial astma hujumi, nafas olish tizimiga begona jismlarning kirishi",
  //       "Birlamchi kardiopulmoner reanimatsiya",
  //       "Hayot va o'lim belgilari",
  //       "Oziq-ovqat zaharlanishi, spirtli ichimliklar bilan zaharlanish, uglerod oksidi bilan zaharlanish",
  //       "Issiqlik va quyosh urishi, elektr shikastlanishi. Quyosh urishining oldini olish",
  //       "Epilepsiya hujumlari",
  //       "Kaltsiy xloridni qabul qilish",
  //       "Gipertermiya. Litik aralashmaning diagrammasi",
  //       "Anafilaktik shok",
  //       "Kuyish va muzlash",
  //       "Allergiya, allergiya testlari. Quincke shishi uchun birinchi yordam.",
  //       "Qon ketish, ko'karishlar, dislokatsiyalar va sinishlar",
  //     ],
  //   },
  //   {
  //     title: "INJEKSIYA TEXNIKALARINI AMAL QILING",
  //     content: [
  //       "Biz in'ektsiya texnikasi va mahoratiga alohida e'tibor beramiz!",
  //       "Mushak ichiga in'ektsiya",
  //       "Teri osti in'ektsiyalari",
  //       "Intradermal in'ektsiya",
  //       "Tomir ichiga yuborish",
  //     ],
  //   },
  //   {
  //     title: "DESMURGIYA ASOSLARINI O'RGANISH",
  //     content: [
  //       "Har xil turdagi bintlarni o'rganamiz",
  //       "Biz ko'nikmalarni mashq qilamiz",
  //     ],
  //   },
  //   {
  //     title: "YANGI TUG‘ILGANLARGA G‘AMXO‘RLIK QILISH",
  //     content: [
  //       "Yangi tug‘ilgan chaqaloqlarning rivojlanish xususiyatlari",
  //       "Kindik ichakni davolash texnikasi",
  //       "Yangi tug‘ilgan chaqaloqlarni cho‘milish va ovqatlantirish",
  //     ],
  //   },
  //   {
  //     title: "KEKSALAR VA KASALLARGA G‘AMXO‘RLIK",
  //     content: [
  //       "Qariyalar va kasallarga g'amxo'rlik qilish",
  //       "Yotoq yaralarining oldini olish",
  //     ],
  //   },
  // ];

  return (
    <>
      <header className=" border-green-100 shadow-sm">
        <div className='flex items-center container mx-auto gap-80 py-5'>

          <div>
            <img src={LogoImg} alt="" />
          </div>

          <nav className='py-5'>
            <div className=" py-2 flex gap-x-20  text-sm font-medium text-gray-700">
              <a href="#" className="hover:text-green-600 text-base font-bold">Biz haqimizda</a>
              <a href="#" className="hover:text-green-600 text-base font-bold">Kurslar</a>
              <a href="#" className="hover:text-green-600 text-base font-bold">Afzalliklar</a>
              <a href="#" className="hover:text-green-600 text-base font-bold">Xonalar</a>
              <a href="#" className="hover:text-green-600 text-base font-bold">Bog’lanish</a>
            </div>
          </nav>

        </div>
      </header>

      <main>
        <section className="bg-green-50 py-16 ">
          <div className='container mx-auto'>
            <div className=" gap-48 px-20 flex  items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <p className="text-gray-600 text-xl font-semibold mb-2">Samarqand</p>

                <h1 className="text-5xl font-bold text-green-700 mb-4 leading-tight">MALAKA OSHIRISH <br /> KURSLARI</h1>
                <p className="text-gray-700 mb-6">
                  Malaka oshirish kurslarini 35 yillik <br /> tajribaga ega Hodjaqulova Nasiba <br /> Sharofiddinovna tomonidan o’tiladi.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-green-600 text-white px-20 py-2 rounded hover:bg-green-700 transition">
                    Bog’lanish
                  </button>
                  <button className="border border-green-600 text-green-600 px-20 py-2 rounded hover:bg-green-100 transition">
                    Batafsil
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2 flex justify-center">
                <img src={Nurses} alt="Women Group" className="max-h-[400px] object-contain" />
              </div>
            </div>

            <div className="flex justify-center ">
              <div className="bg-white absolute shadow-xl rounded-2xl p-10 w-full max-w-[1400px] flex flex-col md:flex-row items-center gap-6">

                {/* Ism Input */}
                <div className="flex items-center border-r border-gray-300 pb-2 pl-5 gap-5 w-full md:w-[30%]">
                  <FaUser className="text-[#007360] text-3xl mr-2" />
                  <div>
                    <h1 className='text-xl font-bold'>Sizning Ismingiz</h1>
                    <input
                      type="text"
                      placeholder="Ismingiz"
                      className="bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none w-full"
                      pattern="[A-Za-z\u0400-\u04FF\s]+"
                      inputMode="text"
                      onChange={(e) =>
                        setName(e.target.value.replace(/[^A-Za-z\u0400-\u04FF\s]/g, ""))
                      }
                      maxLength={20}
                    />
                  </div>
                </div>

                {/* Telefon Input */}
                <div className="flex items-center border-r border-gray-300 pb-2 pl-5 gap-5 w-full md:w-[30%]">
                  <IoCallSharp className="text-[#007360] text-3xl mr-2" />
                  <div className="w-full">
                    <h1 className="text-xl font-bold">Telefon raqamingiz</h1>
                    <input
                      type="number"
                      placeholder="99 999 99 99"
                      className="bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none w-full"
                    />
                  </div>
                </div>


                {/* Button */}
                <div className="w-full md:w-auto pl-20">
                  <button className="bg-[#007360] hover:bg-[#005e4c] cursor-pointer text-white font-semibold px-20  py-2 rounded-xl w-full md:w-auto transition-all duration-300">
                    Yuborish
                  </button>
                </div>

              </div>
            </div>
          </div>

        </section>

        <section>

          <div className='py-16'>
            <div className='relative'>
              <img className='absolute -top-16 right-0 z-0' src={bgimg} alt="" />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-40 py-10">
              {[1, 2].map((card) => (
                <div
                  key={card}
                  className="w-96 h-[664px] bg-white shadow-lg mt-28 z-20 overflow-hidden border border-gray-200 flex flex-col justify-between"
                >
                  <div className="p-4 flex flex-col justify-start gap-3">
                    {/* Header */}
                    <div className="flex justify-between mb-5 items-start">
                      <p className="text-md font-semibold text-gray-600">Kurs</p>
                      <img
                        src={LogoImg}
                        alt="Shifokor logo"
                        className="w-16"
                      />
                    </div>

                    {/* Title & Mode */}
                    <div>
                      <h2 className="text-lg mb-5 font-bold text-[#007360] leading-tight">
                        HAMSHIRALARNI <br /> O‘QITISH
                      </h2>
                      <button className="bg-green-800 text-white text-sm font-semibold px-16 py-2 rounded-md w-fit">
                        Oflayn
                      </button>
                    </div>

                    {/* Teacher */}
                    <p className="text-red-600 font-semibold text-xl leading-tight">
                      Hodjaqulova <br /> Nasiba <br /> Sharofiddinovna
                    </p>

                    {/* Description + Image */}
                    <div className='flex items-center gap-5 mt-5'>
                      <div className="flex gap-2 mt-1">
                        <div className="w-1.5 bg-gray-400 rounded-sm"></div>
                        <p className="text-sm font-medium text-gray-700 leading-snug">
                          Malaka oshirish kurslariga yoziling va bilim ko‘nikmalaringizni yanada oshiring
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
                      5 kishilik kichik guruhlar
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col">
                    <button className="w-full py-3 bg-[#007360] text-white font-semibold">
                      O’qituvchi
                    </button>
                    <button className="w-full py-3 bg-[#ECF9EB] text-[#007360] font-semibold">
                      Batafsil
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </section>

        <section className="bg-[#EEEEEE] py-16">
          <div className="flex flex-col container mx-auto md:flex-row items-center justify-between px-28 gap-10">

            {/* Left Image */}
            <div>
              <div className="w-full md:w-[490px] h-[566px]">
                <img
                  src={AboutImg}
                  alt="Biz haqimizda"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>

            {/* Right Text */}
            <div>
              <div className="w-full md:flex-1 space-y-5">
                <p className="text-sm font-semibold text-[#007360] uppercase tracking-wider">
                  Biz haqimizda
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-[#007360] leading-snug">
                  SHIFOKOR
                  TIBBIY <br /> O‘QUV
                  MARKAZI
                </h1>
                <p className="text-gray-700 text-xl font-medium leading-relaxed">
                  Bizning Shifokor tibbiy o‘quv markazimizda sizga <br /> ko‘p yillik  tajribaga
                  ega o‘qituvchilar <br />  tomonidan darslar o‘tiladi.
                </p>
                <p className="text-gray-700 text-xl font-medium leading-relaxed">
                  Kurs yakunida bitiruvchilarga <br /> sertifikatlar beriladi. Bizning
                  o‘qituvchilarimiz orasida 35 yil va <br />  undan ortiq tajribaga ega
                  mutaxassislar mavjud.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-16  ">
          <div className='container mx-auto'>
            <h1 className='text-[38px] text-center font-black text-[#007360] mb-5'>HAMSHIRALARNI O'QITISH DASTURI</h1>
            <div className="md:flex ">
              {/* Accordion */}
              <div className="flex-1 space-y-4 bg-[#007360] py-5 px-5">
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
              <div className="flex-1 grid grid-cols-2 gap-4 border-2 border-[#007360] py-10 px-10">
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
            <div className="bg-[#007360] text-white p-6">
              <h3 className="text-3xl font-bold text-center mb-4">DARS JADVALI</h3>
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
                  <FaCalendarAlt className='text-2xl' /> <span className='text-xl font-semibold'>Haftada 3 kun</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className='text-2xl' /> <span className='text-xl font-semibold'>4 soat</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12">Nega aynan biz?</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {features.map((item, idx) => (
              <div
                key={idx}
                className={`relative p-6 rounded-xl shadow-md overflow-hidden transition duration-300 transform 
      ${item.highlight
                    ? "bg-[#007360] text-white hover:hover:scale-105 hover:-translate-y-1.5 cursor-pointer"
                    : "bg-white text-gray-800 hover:shadow-lg hover:scale-105 hover:-translate-y-1.5 cursor-pointer"
                  }`}
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

        <section className="py-16 px-6 md:px-16  ">
          <div className='container mx-auto'>
            <h1 className='text-[38px] text-center font-black text-[#007360] mb-5'>IGNA REFLEKSOTERAPİYASI O'QITISH DASTURI</h1>
            <div className="md:flex ">
              {/* Accordion */}
              <div className="flex-1 space-y-4 bg-[#007360] py-5 px-5">
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
              <div className="flex-1 grid grid-cols-2 gap-4 border-2 border-[#007360] py-10 px-10">
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
            <div className="bg-[#007360] text-white p-6">
              <h3 className="text-3xl font-bold text-center mb-4">DARS JADVALI</h3>
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
                  <FaCalendarAlt className='text-2xl' /> <span className='text-xl font-semibold'>Haftada 3 kun</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className='text-2xl' /> <span className='text-xl font-semibold'>4 soat</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>

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
        </section>

        <section>
          <h1 className='text-5xl font-bold text-center mt-10 mb-10 uppercase text-[#007360]'>Litsenziya</h1>
          <div className='relative -top-28'>
            <img className='absolute right-0 -z-10 top-0' src={BgLitsenziya} alt="" />
          </div>
          <div className='flex justify-center'>
            <img src={Litsenziya} alt="" />
          </div>

        </section>


        <section className='bg-[#EEEEEE] py-10 mt-16'>

          <h1 className='text-center font-bold text-5xl text-[#007360] mb-5 mt-20 uppercase'>VIDEO JAMLANMA</h1>
          <div className="max-w-6xl mx-auto ">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
              }}
              className="relative"
            >
              <SwiperSlide>
                <div className="h-[70vh] w-full flex items-center justify-center">
                  <iframe
                    className="w-full max-w-4xl h-[60vh] rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                    title="AKSIYA Video 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="h-[70vh] w-full flex items-center justify-center">
                  <iframe
                    className="w-full max-w-4xl h-[60vh] rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1"
                    title="AKSIYA Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="h-[70vh] w-full flex items-center justify-center">
                  <iframe
                    className="w-full max-w-4xl h-[60vh] rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1"
                    title="AKSIYA Video 3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="h-[70vh] w-full flex items-center justify-center">
                  <iframe
                    className="w-full max-w-4xl h-[60vh] rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1"
                    title="AKSIYA Video 4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </section>

        <section className="w-full">
          <div className="w-full items-center gap-8 flex justify-between">

            {/* Chap tomonda matn */}
            <div className="flex justify-center px-10">
              <div>
                <div className='flex items-center gap-3 mb-2'>
                  <IoLocationSharp className='text-2xl text-[#007360]' />
                  <h2 className="text-2xl font-semibold text-[#007360] ">Bizning manzil</h2>
                </div>
                <p className="text-[#007360] font-semibold mb-5">
                  Amir Temur shox ko'chasi, 107 B-uy, Toshkent, O'zbekiston
                </p>
                <p className="text-gray-600">
                  <div className='flex items-center gap-3 mb-2'>
                    <CgMail className='text-2xl text-[#007360]' />
                    <h1 className='text-2xl font-medium text-[#007360]'>Elektron pochta:</h1>
                  </div>
                  <p className='text-xl font-semibold text-[#007360] mb-5'>example@mail.uz</p>
                </p>

                <div>
                  <div className='flex items-center gap-3 mb-2'>
                    <IoCall className='text-2xl text-[#007360]' />
                    <h1 className='text-xl font-medium text-[#007360]'>Telefon</h1>
                  </div>
                  <a href="tel:+998935533352" className="text-[#007360] font-bold hover:underline">+998 93 553 33 52</a>
                </div>

              </div>
            </div>

            {/* O‘ng tomonda Google Maps */}
            <div className="w-full lg:w-1/2 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6090.994748927668!2d72.3307203!3d40.8011046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85f1c4d10b11%3A0xb8bdf7a53d26a0c3!2sPasport%20Stol%20%E2%84%962!5e0!3m2!1sru!2s!4v1714036123456!5m2!1sru!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
            <h1 className="text-lg font-semibold mb-2">Kontaktlar</h1>
            <p className="text-sm">Toshkent, Yunusobod</p>
            <p className="text-sm">+998 00 000 00 00</p>
          </div>

          {/* Linklar */}
          <div>
            <h1 className="text-lg font-semibold mb-2">Linklar</h1>
            <a href="#" className="text-sm block hover:underline">Biz haqimizda</a>
            <a href="#" className="text-sm block hover:underline">Hizmatlar</a>
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
        <div className='flex justify-center text-white '>
          <h1 className='mr-2 font-normal'>© SHIFOKOR OQUV MARKAZI 2025 </h1>
          <span> | </span>
          <a href="" className='ml-2 font-normal'> IPro Group Support</a>
        </div>
      </footer>



    </>
  );
};

export default App;