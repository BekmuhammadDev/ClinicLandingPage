import { useState } from 'react';
import Img1 from "./assets/img1.png"
import bgimg from "./assets/bgimg.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiperning asosiy CSS fayli
import 'swiper/css/navigation'; // Navigatsiya uchun CSS
import 'swiper/css/pagination'; // Pagination uchun CSS
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const App = () => {

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const sections = [
    {
      title: "BIRINCHI YORDAM KO'RSATISH",
      content: [
        "Pulsni hisoblash, qon bosimini o'lchash, gipertonik inqiroz, hushidan ketish",
        "Bronxial astma hujumi, nafas olish tizimiga begona jismlarning kirishi",
        "Birlamchi kardiopulmoner reanimatsiya",
        "Hayot va o'lim belgilari",
        "Oziq-ovqat zaharlanishi, spirtli ichimliklar bilan zaharlanish, uglerod oksidi bilan zaharlanish",
        "Issiqlik va quyosh urishi, elektr shikastlanishi. Quyosh urishining oldini olish",
        "Epilepsiya hujumlari",
        "Kaltsiy xloridni qabul qilish",
        "Gipertermiya. Litik aralashmaning diagrammasi",
        "Anafilaktik shok",
        "Kuyish va muzlash",
        "Allergiya, allergiya testlari. Quincke shishi uchun birinchi yordam.",
        "Qon ketish, ko'karishlar, dislokatsiyalar va sinishlar",
      ],
    },
    {
      title: "INJEKSIYA TEXNIKALARINI AMAL QILING",
      content: [
        "Biz in'ektsiya texnikasi va mahoratiga alohida e'tibor beramiz!",
        "Mushak ichiga in'ektsiya",
        "Teri osti in'ektsiyalari",
        "Intradermal in'ektsiya",
        "Tomir ichiga yuborish",
      ],
    },
    {
      title: "DESMURGIYA ASOSLARINI O'RGANISH",
      content: [
        "Har xil turdagi bintlarni o'rganamiz",
        "Biz ko'nikmalarni mashq qilamiz",
      ],
    },
    {
      title: "YANGI TUG‘ILGANLARGA G‘AMXO‘RLIK QILISH",
      content: [
        "Yangi tug‘ilgan chaqaloqlarning rivojlanish xususiyatlari",
        "Kindik ichakni davolash texnikasi",
        "Yangi tug‘ilgan chaqaloqlarni cho‘milish va ovqatlantirish",
      ],
    },
    {
      title: "KEKSALAR VA KASALLARGA G‘AMXO‘RLIK",
      content: [
        "Qariyalar va kasallarga g'amxo'rlik qilish",
        "Yotoq yaralarining oldini olish",
      ],
    },
  ];

  return (
    <>
      <header className="border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-sm font-bold text-white">
              ValMari
            </div>
            <div className="text-xs text-gray-700 leading-tight">
              <p>Учебный центр</p>
              <p>эстетической косметологии</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-700 space-x-1">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 5h2l.4 2M7 10h10l1 2h2m-4-8h2a2 2 0 012 2v12a2 2 0 01-2 2h-2M7 20h10"></path>
              </svg>
              <span className="text-sm">0 (800) 508-622</span>
            </div>
            <a href="#" className="text-green-600 hover:text-green-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 4.93 3.58 9.01 8.25 9.88v-6.99H7.9v-2.89h2.35v-2.2c0-2.33 1.38-3.63 3.49-3.63.7 0 1.44.12 1.44.12v1.6h-.81c-.8 0-1.05.5-1.05 1.01v1.2h2.04l-.33 2.89h-1.71V22c4.67-.87 8.25-4.95 8.25-9.88z" />
              </svg>
            </a>
            <a href="#" className="text-green-600 hover:text-green-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-.75a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </a>
            <div>
              <select id="">
                <option value="">Uz</option>
                <option value="">Ru</option>
              </select>
            </div>
          </div>
        </div>

        <hr />

        <nav className='py-5'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex gap-x-20 justify-center text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-green-600">Курсы обучения</a>
            <a href="#" className="hover:text-green-600">Вебинары</a>
            <a href="#" className="hover:text-green-600">Блог</a>
            <a href="#" className="hover:text-green-600">О нас</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-green-50 py-24">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-gray-600 text-sm mb-2">Бесплатный вебинар</p>
              <h1 className="text-4xl font-bold text-green-700 mb-4 leading-tight">ПРОФЕССИЯ<br />КОСМЕТОЛОГ</h1>
              <p className="text-gray-700 mb-6">
                Приглашаем на бесплатный вебинар для профессиональных косметологов и интересующихся этой профессией
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                  Зарегистрироваться
                </button>
                <button className="border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-100 transition">
                  Узнать подробнее
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <img src={Img1} alt="Women Group" className="max-h-[400px] object-contain" />
            </div>
          </div>

          <div className='flex justify-center relative -top-5'>
            <div className="bg-white absolute shadow-md mt-16 rounded-lg py-6 px-4 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
              <div>
                <p className="text-green-700 text-2xl font-bold">4000+</p>
                <p className="text-gray-600 text-sm mt-1">Сертификатов мы выдали</p>
              </div>
              <div>
                <p className="text-green-700 text-2xl font-bold">3500+</p>
                <p className="text-gray-600 text-sm mt-1">Моделей в нашей базе</p>
              </div>
              <div>
                <p className="text-green-700 text-2xl font-bold">1500+</p>
                <p className="text-gray-600 text-sm mt-1">Специалистов мы обучили</p>
              </div>
              <div>
                <p class="text-green-700 text-2xl font-bold">5500+</p>
                <p class="text-gray-600 text-sm mt-1">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='py-28'>
            <h1 className='text-center font-bold text-3xl mb-5'>O'QITISHDAN KEYIN SERTIFIKAT BERAMIZ!</h1>
            <p className='text-center font-bold text-2xl mb-5'>HAMSHIRA KURSINI TUTISH UCHUN BAYOSA TIBBIY TA'LIM SHART EMAS!</p>
            <p className='text-center font-bold text-2xl'>Har bir o'quvchiga o'quv qo'llanmasi beriladi!</p>

            <div className='relative'>
              <img className='absolute right-0 -z-10' src={bgimg} alt="" />
            </div>

            <div className=' z-10 relative top-24 flex justify-center'>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
                <div class="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                  <h2 class="text-xl font-bold text-blue-600 mb-4">HAMSHIRALARNI O‘QITISH DASTURI</h2>
                  <p class="font-medium text-gray-800 mb-2">
                    + INSON ANATOMIYASI VA TUZILISHINI O‘RGANISH
                  </p>
                  <ul class="list-disc list-inside text-gray-700 space-y-1">
                    <li>Inson anatomiyasi</li>
                    <li>Tayanch-harakat apparatining tuzilishi</li>
                    <li>Yurak-qon tomir va nafas olish tizimlarining ishlashi</li>
                    <li>Ovqat hazm qilish tizimining ishi</li>
                  </ul>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                  <h2 class="text-xl font-bold text-blue-600 mb-4">IGNA REFLEKSOTERAPİYASI O'QITISH DASTURI</h2>
                  <p class="font-medium text-gray-800 mb-2">
                    + INSON ANATOMIYASI VA TUZILISHINI O‘RGANISH
                  </p>
                  <ul class="list-disc list-inside text-gray-700 space-y-1">
                    <li>Inson anatomiyasi</li>
                    <li>Tayanch-harakat apparatining tuzilishi</li>
                    <li>Yurak-qon tomir va nafas olish tizimlarining ishlashi</li>
                    <li>Ovqat hazm qilish tizimining ishi</li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="flex justify-center items-start gap-20 mt-40 px-4">
              <div className="w-[500px] bg-white p-6 rounded-2xl shadow-xl space-y-4">
                <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
                  HAMSHIRALARNI O‘QITISH DASTURI
                </h2>

                {sections.map((section, index) => (
                  <div key={index} className="border-b pb-2">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full text-left font-semibold text-blue-600 text-lg"
                    >
                      {openIndex === index ? "−" : "+"} {section.title}
                    </button>
                    {openIndex === index && (
                      <ul className="list-disc list-inside pl-4 text-sm text-gray-700 mt-2 space-y-1">
                        {section.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="w-[500px] bg-white p-6 rounded-2xl shadow-xl space-y-4">
                <div className="flex gap-4 flex-wrap justify-center">
                  <h2 className="text-xl font-bold text-blue-700">HAMSHIRALIK,</h2>
                  <h2 className="text-xl font-bold text-blue-700">IGNA REFLEKSOTERAPIYA</h2>
                </div>
                <p className="text-gray-700 font-semibold">PROFESSIONAL KURS</p>
                <p className="text-gray-600">Hamshiralar va aka hamshiralar uchun</p>

                <div className="mt-4">
                  <p className="font-semibold text-blue-600 mb-2">BU KURS:</p>
                  <ul className="list-none space-y-1 text-gray-700 text-sm">
                    <li>√ Tibbiyot bitiruvchilari uchun (ta’lim muassasalari)</li>
                    <li>√ G'amxo‘rlik xodimlari</li>
                    <li>√ Tish shifokori yordamchilari</li>
                    <li>√ Malakani takomillashtirish uchun</li>
                    <li>√ Kutilgan onalar uchun</li>
                    <li>√ Hozirgi hamshiralar uchun</li>
                    <li>√ Qo‘shimcha mahorat o‘tish uchun</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section>
          <div className="flex flex-wrap justify-center gap-6 px-4 mt-20">
            {/* Dars jadvali */}
            <div className="w-full sm:w-[300px] bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">
                DARS JADVALI
              </h3>
              <ul className="text-gray-700 list-disc list-inside items-center text-sm text-center space-y-1">
                <li>Dushanba</li>
                <li>Seshanba</li>
                <li>Chorshanba</li>
                <li>Payshanba</li>
                <li>Juma</li>
                <li>Shanba</li>
              </ul>

              <p className="text-gray-800 font-semibold text-center">
                09:00 dan 13:00 gacha
              </p>
            </div>

            {/* Kurs afzalliklari */}
            <div className="w-full sm:w-[300px] bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
                KURS MA'LUMOTLARI
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                <li>
                  <span className="font-semibold text-green-600">Tushlik bepul!</span>
                </li>
                <li>Kurs davomiyligi: <strong>1 oy</strong></li>
                <li>Har kuni <strong>4 soat</strong></li>
                <li><strong>5 kishigacha</strong> bo‘lgan kichik guruhlar</li>
                <li>Har bir o‘quvchiga <strong>o‘quv qo‘llanmasi</strong> beriladi</li>
              </ul>
            </div>

            {/* O‘qituvchi haqida */}
            <div className="w-full sm:w-[300px] bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
                O‘QITUVCHI
              </h3>
              <p className="text-gray-700 text-sm text-center">
                <strong>35 yillik tajriba</strong>ga ega professional o‘qituvchi
              </p>
              <p className="text-gray-800 font-semibold text-center mt-2">
                Xodjaqulova Nasiba Sharofiddinovna
              </p>
              <p className="text-blue-600 text-sm text-center mt-1">Kurs o‘qituvchisi</p>
            </div>
          </div>
        </section>

        <section className="w-full py-40">
          <h1 className='text-center font-bold text-5xl mb-5'>Nima Uchun Biz</h1>
          <div className="flex flex-wrap justify-around max-w-6xl mx-auto">
            <div className="bg-[#e6f4ea] border-2 border-[#d1c4e9] rounded-lg w-[30%] m-2.5 p-5 text-center shadow-lg">
              <h3 className="text-[#4caf50] mb-4 text-2xl font-bold">AKSIYA !</h3>
              <p className="text-[#333] text-base leading-6">
                Наши предварительные итоговые результаты включают предварительные данные за такой класс и других.
              </p>
            </div>
            <div className="bg-[#e6f4ea] border-2 border-[#d1c4e9] rounded-lg w-[30%] m-2.5 p-5 text-center shadow-lg">
              <h3 className="text-[#4caf50] mb-4 text-2xl font-bold">Сертификаты</h3>
              <p className="text-[#333] text-base leading-6">
                Успешное обучение, сертификат на это окно-ученик у разработчиков при этом.
              </p>
            </div>
            <div className="bg-[#e6f4ea] border-2 border-[#d1c4e9] rounded-lg w-[30%] m-2.5 p-5 text-center shadow-lg">
              <h3 className="text-[#4caf50] mb-4 text-2xl font-bold">Популярные ключевые</h3>
              <p className="text-[#333] text-base leading-6">
                Екатеринбург, более 2000 кандидатов-благотворителей проводились.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full">

          <h1 className='text-center font-bold text-5xl mb-5'>AKSIYA !</h1>
          <div className="max-w-6xl mx-auto py-10">
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
                <div className="bg-[#e6f4ea] border-2 border-[#d1c4e9] rounded-lg p-5 text-center shadow-lg">
                  <h3 className="text-[#4caf50] mb-4 text-2xl font-bold">AKSIYA !</h3>
                  <p className="text-[#333] text-base leading-6">
                    Успешное обучение, сертификат на это окно-ученик у разработчиков при этом.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[#e6f4ea] border-2 border-[#d1c4e9] rounded-lg p-5 text-center shadow-lg">
                  <h3 className="text-[#4caf50] mb-4 text-2xl font-bold">AKSIYA !</h3>
                  <p className="text-[#333] text-base leading-6">
                    Успешное обучение, сертификат на это окно-ученик у разработчиков при этом.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[#e6f4ea] border-2 border-[#d1c4e9] rounded-lg p-5 text-center shadow-lg">
                  <h3 className="text-[#4caf50] mb-4 text-2xl font-bold">AKSIYA !</h3>
                  <p className="text-[#333] text-base leading-6">
                    Екатеринбург, более 2000 кандидатов-благотворителей проводились.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[#e6f4ea] border-2 border-[#d1c4e9] rounded-lg p-5 text-center shadow-lg">
                  <h3 className="text-[#4caf50] mb-4 text-2xl font-bold">AKSIYA !</h3>
                  <p className="text-[#333] text-base leading-6">
                    Наши предварительные итоговые результаты включают предварительные
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[#e6f4ea] border-2 border-[#d1c4e9] rounded-lg p-5 text-center shadow-lg">
                  <h3 className="text-[#4caf50] mb-4 text-2xl font-bold">AKSIYA !</h3>
                  <p className="text-[#333] text-base leading-6">
                    Успешное обучение, сертификат на это окно-ученик у разработчиков при этом.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section>
          <div
            className="w-full px-5 bg-white rounded-2xl shadow-lg flex items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="800"
          >
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
        </section>

      </main >

      <footer className="w-full bg-[#e6f4ea] border-t-2 border-[#d1c4e9] py-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-[#4caf50] text-2xl font-bold mb-4">"SHIFOKOR OQUV MARKAZI" o'quv markazi</h3>
          <p className="text-[#333] mb-2">
            Samarqand, Termizskaya ko'chasi 67A, O'zbekiston
          </p>
          <p className="text-[#333] mb-2">
            Telefon: <a href="tel:+998976110604" className="text-[#4caf50] hover:underline">+998 97 611 06 04</a>
          </p>
          <p className="text-[#333] mb-2">
            Dushanba - Shanba 9:00 - 17:00 | Yakshanba: dam olish kuni
          </p>
          <p className="text-[#333] text-sm mt-4">
            © SHIFOKOR OQUV MARKAZI 2025
          </p>
        </div>
      </footer>


    </>
  );
};

export default App;