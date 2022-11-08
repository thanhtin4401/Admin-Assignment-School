import React from "react";
import "animate.css";
import { Link } from "react-router-dom";
function ProductItem({ productsData }) {
  return (
    <Link
      to={`/detail-page/${productsData.id}`}
      className="animate__animated  animate__bounceInRight border text-center flex flex-col items-center py-[1.5rem] px-[1.8rem] bg-white hover:bg-[#978DE7] hover:border-white p-3 transition cursor-pointer rounded-[1rem]"
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
    >
      <img
        src={`${
          productsData.images.url
            ? productsData.images.url
            : "https://newhorizon-department-of-computer-science-engineering.s3.ap-south-1.amazonaws.com/nhengineering/department-of-computer-science-engineering/wp-content/uploads/2020/01/13103907/default_image_01.png"
        }`}
        alt=""
        className=" object-cover object-center w-[128px] h-[128px] rounded-[5rem]  border-black border-[1px]"
        style={{ border: "1px solid black" }}
      />
      <div className="item__content text-black ">
        <h3 className="mb-1 mt-2 text-left font-bold">{productsData.title}</h3>
        <p className="mb-1 text-left">
          <span className="font-bold">Type:</span> {productsData.product_type}
        </p>
        <p className="mb-1 text-left">
          <span className="font-bold">Vendor:</span> {productsData.vendor}
        </p>
      </div>
    </Link>
  );
}

export default ProductItem;
