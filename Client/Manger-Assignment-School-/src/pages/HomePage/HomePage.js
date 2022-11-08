import React from "react";
import "./HomePage.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
function HomePage() {
  return (
    <div className="mb:col-start-1  sm:col-start-1 lg:col-start-3 col-end-13 py-[60px] px-[19px]">
      <div
        className="p-4 border rounded-lg"
        style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <div className="text-left">
          <>
            <Swiper
              pagination={{
                clickable: true,
              }}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            ></Swiper>
          </>
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="h-4rem rounded-[1rem]">
                <div className="rounded-[0.4rem] h-full w-full flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <div className="w-full absolute z-40 p-14">
                    <div className="lg:w-2/4 mb:w-full sm:w-full  lg:text-left">
                      <h1 className="font-[600] mb:text-[1.5rem] sm:text-[1.5rem] lg:text-[2.3rem]  text-white">
                        TOAN
                      </h1>
                      <p className="text-white opacity-70 mb:text-[0.5rem] sm:text-[0.5rem] lg:text-[1rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores corrupti labore possimus
                      </p>
                    </div>
                    <div className="w-2/4 "></div>
                  </div>
                  <div
                    className="absolute top-0 r-0 overlay  w-full h-full z-10 opacity-90 "
                    style={{
                      background:
                        "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(89,78,181,1) 80%)",
                    }}
                  ></div>
                  <div className="bg-subject w-full absolute top-0 right-0 z-0">
                    <img
                      src="https://thuviendohoa.vn/2020/upload/images/items/vector-background-nen-bang-cong-thuc-toan-hoc-6899.jpg?t=20190514_074500"
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" h-4rem rounded-[1rem]">
                <div className="rounded-[0.4rem] h-full w-full flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <div className="w-full absolute z-40 p-14">
                    <div className="lg:w-2/4 mb:w-full sm:w-full  lg:text-left">
                      <h1 className="font-[600] mb:text-[1.5rem] sm:text-[1.5rem] lg:text-[2.3rem]  text-white">
                        TOAN
                      </h1>
                      <p className="text-white opacity-70 mb:text-[0.5rem] sm:text-[0.5rem] lg:text-[1rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores corrupti labore possimus
                      </p>
                    </div>
                    <div className="w-2/4 "></div>
                  </div>
                  <div
                    className="absolute top-0 r-0 overlay  w-full h-full z-10 opacity-90 "
                    style={{
                      background:
                        "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(181,78,78,1) 80%)",
                    }}
                  ></div>
                  <div className="bg-subject w-full absolute top-0 right-0 z-0">
                    <img
                      src="https://thuviendohoa.vn/2020/upload/images/items/vector-background-nen-bang-cong-thuc-toan-hoc-6899.jpg?t=20190514_074500"
                      alt=""
                      className="object-cover h-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="h-4rem rounded-[1rem]">
                <div className="rounded-[0.4rem] h-full w-full flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <div className="w-full absolute z-40 p-14">
                    <div className="lg:w-2/4 mb:w-full sm:w-full  lg:text-left">
                      <h1 className="font-[600] mb:text-[1.5rem] sm:text-[1.5rem] lg:text-[2.3rem]  text-white">
                        TOAN
                      </h1>
                      <p className="text-white opacity-70 mb:text-[0.5rem] sm:text-[0.5rem] lg:text-[1rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores corrupti labore possimus
                      </p>
                    </div>
                    <div className="w-2/4 "></div>
                  </div>
                  <div
                    className="absolute top-0 r-0 overlay  w-full h-full z-10 opacity-90 "
                    style={{
                      background:
                        "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(78,148,181,1) 80%)",
                    }}
                  ></div>
                  <div className="bg-subject w-full absolute top-0 right-0 z-0">
                    <img
                      src="https://thuviendohoa.vn/2020/upload/images/items/vector-background-nen-bang-cong-thuc-toan-hoc-6899.jpg?t=20190514_074500"
                      alt=""
                      className="object-cover h-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
          <h1 className="text-[1.5rem] font-[700] mt-4 mb-4 underline">
            KIẾN THỨC BỔ ÍCH
          </h1>
          <div>
            <div className="grid mb:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 gap-4 py-1 ">
              <div className="btn-subject cursor-pointer">
                <div className="rounded-[0.4rem] h-32 flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <h1 className="font-[700] text-[2.5rem] absolute z-40 text-white">
                    TOAN
                  </h1>
                  <div className="absolute top-0 r-0 overlay bg-black w-full h-full z-10 opacity-60 "></div>
                  <div className="bg-subject absolute top-0 right-0 z-0">
                    <img
                      src="https://thuviendohoa.vn/2020/upload/images/items/vector-background-nen-bang-cong-thuc-toan-hoc-6899.jpg?t=20190514_074500"
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="text-[1rem] font-[600]">Tiêu đề gì đó</h1>
                  <p className="text-[0.7rem] font-[400]">
                    Giải thích cái gì đó dể hiểu
                  </p>
                </div>
              </div>
              <div className="btn-subject cursor-pointer">
                <div className="rounded-[0.4rem] btn-subject h-32 flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <h1 className="font-[700] text-[2.5rem] absolute z-40 text-white">
                    LÝ
                  </h1>
                  <div className="absolute top-0 r-0 overlay bg-black w-full h-full z-10 opacity-60 "></div>
                  <div className="bg-subject absolute top-0 right-0 z-0">
                    <img
                      src="https://tailieure.com/wp-content/uploads/2019/04/trac-nghiem-ly-thuyet-vat-li-12.jpg"
                      alt=""
                      className="object-cover h-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="text-[1rem] font-[600]">Tiêu đề gì đó</h1>
                  <p className="text-[0.7rem] font-[400]">
                    Giải thích cái gì đó dể hiểu
                  </p>
                </div>
              </div>

              <div className="btn-subject cursor-pointer">
                <div className="rounded-[0.4rem] btn-subject h-32 flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <h1 className="font-[700] text-[2.5rem] absolute z-40 text-white">
                    SINH
                  </h1>
                  <div className="absolute top-0 r-0 overlay bg-black w-full h-full z-10 opacity-60 "></div>
                  <div className="bg-subject absolute top-0 right-0 z-0">
                    <img
                      src="https://www.kienguru.vn/wp-content/uploads/2022/08/word-image-14530-3.jpeg"
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="text-[1rem] font-[600]">Tiêu đề gì đó</h1>
                  <p className="text-[0.7rem] font-[400]">
                    Giải thích cái gì đó dể hiểu
                  </p>
                </div>
              </div>

              <div className="btn-subject cursor-pointer">
                <div className="rounded-[0.4rem] btn-subject h-32 flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <h1 className="font-[700] text-[2.5rem] absolute z-40 text-white">
                    HOÁ
                  </h1>
                  <div className="absolute top-0 r-0 overlay bg-black w-full h-full z-10 opacity-60 "></div>
                  <div className="bg-subject absolute top-0 right-0 z-0">
                    <img
                      src="https://mega.com.vn/media/news/2707_background-pp-hoc-tap-lam-slide5.jpg"
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="text-[1rem] font-[600]">Tiêu đề gì đó</h1>
                  <p className="text-[0.7rem] font-[400]">
                    Giải thích cái gì đó dể hiểu
                  </p>
                </div>
              </div>

              <div className="btn-subject cursor-pointer">
                <div className="rounded-[0.4rem] btn-subject h-32 flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <h1 className="font-[700] text-[2.5rem] absolute z-40 text-white">
                    ĐỊA
                  </h1>
                  <div className="absolute top-0 r-0 overlay bg-black w-full h-full z-10 opacity-60 "></div>
                  <div className="bg-subject absolute top-0 right-0 z-0">
                    <img
                      src="https://png.pngtree.com/thumb_back/fw800/background/20210115/pngtree-geography-tourism-tourism-background-map-global-travel-image_518638.jpg"
                      alt=""
                      className="object-cover h-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="text-[1rem] font-[600]">Tiêu đề gì đó</h1>
                  <p className="text-[0.7rem] font-[400]">
                    Giải thích cái gì đó dể hiểu
                  </p>
                </div>
              </div>

              <div className="btn-subject cursor-pointer">
                <div className="rounded-[0.4rem] btn-subject h-32 flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <h1 className="font-[700] text-[2.5rem] absolute z-40 text-white">
                    SỬ
                  </h1>
                  <div className="absolute top-0 r-0 overlay bg-black w-full h-full z-10 opacity-60 "></div>
                  <div className="bg-subject absolute top-0 right- z-0">
                    <img
                      src="https://pdp.edu.vn/wp-content/uploads/2021/04/hinh-nen-powerpoint-lich-su-1.jpg"
                      alt=""
                      className="object-cover h-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="text-[1rem] font-[600]">Tiêu đề gì đó</h1>
                  <p className="text-[0.7rem] font-[400]">
                    Giải thích cái gì đó dể hiểu
                  </p>
                </div>
              </div>

              <div className="btn-subject cursor-pointer">
                <div className="rounded-[0.4rem] btn-subject h-32 flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <h1 className="font-[700] text-[2.5rem] absolute z-40 text-white">
                    GDCD
                  </h1>
                  <div className="absolute top-0 r-0 overlay bg-black w-full h-full z-10 opacity-60 "></div>
                  <div className="bg-subject absolute top-0 right-0 z-0">
                    <img
                      src="https://www.quanlynhanuoc.vn/wp-content/uploads/2019/08/1_43957.jpg"
                      alt=""
                      className="object-cover h-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="text-[1rem] font-[600]">Tiêu đề gì đó</h1>
                  <p className="text-[0.7rem] font-[400]">
                    Giải thích cái gì đó dể hiểu
                  </p>
                </div>
              </div>

              <div className="btn-subject cursor-pointer">
                <div className="rounded-[0.4rem] btn-subject h-32 flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <h1 className="font-[700] text-[2.5rem] absolute z-40 text-white">
                    ANH VĂN
                  </h1>
                  <div className="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdegvyPOCRYM4dd_7Z55RfuYtiIjQ6v-krOuYg4SnDf572oy4eSflhMZXez1P0-4u58E&usqp=CAU"></div>
                  <div
                    className="bg-subject absolute top-0 right-0
                "
                    z-0
                  >
                    <img
                      src="https://thuviendohoa.vn/2020/upload/images/items/vector-background-nen-bang-cong-thuc-toan-hoc-6899.jpg?t=20190514_074500"
                      alt=""
                      className="object-cover h-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="text-[1rem] font-[600]">Tiêu đề gì đó</h1>
                  <p className="text-[0.7rem] font-[400]">
                    Giải thích cái gì đó dể hiểu
                  </p>
                </div>
              </div>

              <div className="btn-subject cursor-pointer">
                <div className="rounded-[0.4rem] btn-subject h-32 flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <h1 className="font-[700] text-[2.5rem] absolute z-40 text-white">
                    NGỮ VĂN
                  </h1>
                  <div className="absolute top-0 r-0 overlay bg-black w-full h-full z-10 opacity-60 "></div>
                  <div className="bg-subject absolute top-0 right-0" z-0>
                    <img
                      src="https://img.pikbest.com/backgrounds/20190321/vintage-literary-pattern-invitation-background-image_1808046.jpg!bw700"
                      alt=""
                      className="object-cover h-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="text-[1rem] font-[600]">Tiêu đề gì đó</h1>
                  <p className="text-[0.7rem] font-[400]">
                    Giải thích cái gì đó dể hiểu
                  </p>
                </div>
              </div>

              <div className="btn-subject cursor-pointer">
                <div className="rounded-[0.4rem] btn-subject h-32 flex items-center overflow-hidden  relative  justify-center cursor-pointer">
                  <h1 className="font-[700] text-[2.5rem] absolute z-40 text-white">
                    TIN HỌC
                  </h1>
                  <div className="absolute top-0 r-0 overlay bg-black w-full h-full z-10 opacity-60 "></div>
                  <div className="bg-subject absolute top-0 right-0" z-0>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqe4SQuuIuUVNT9_n85T7EDwOGoUVv8GoLnlSCantu1cz0GjpWR4WDKyjZlDCYG1Mtc4&usqp=CAU"
                      alt=""
                      className="object-cover h-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="text-[1rem] font-[600]">Tiêu đề gì đó</h1>
                  <p className="text-[0.7rem] font-[400]">
                    Giải thích cái gì đó dể hiểu
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
