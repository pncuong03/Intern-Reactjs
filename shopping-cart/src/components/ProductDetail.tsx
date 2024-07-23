import { Rate } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetail from "~/hooks/productDetail";

const ProductDetail = () => {
  const { productId } = useParams();
  const { getProductDetail, productDetail } = useProductDetail();

  useEffect(() => {
    getProductDetail(productId);
  }, [productId]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-white shadow-md rounded-md">
      <div className=" flex justify-center items-center p-4">
        <img
          className="w-[500px] h-[400px] max-w-md object-contain"
          src={productDetail?.image}
          alt={productDetail?.title}
        />
      </div>
      <div className=" flex flex-col justify-center p-4 max-w-[500px]">
        <h3 className="text-left text-2xl font-bold">{productDetail?.title}</h3>
        <h3 className="text-left mt-3 text-xl text-gray-700">
          ${productDetail?.price}
        </h3>
        <Rate
          allowHalf
          defaultValue={productDetail?.rating.rate}
          className="mt-3"
        />
        <h3 className="text-left mt-3 text-gray-600">
          Quantity: {productDetail?.rating.count}
        </h3>
        <p className="text-left mt-4 text-gray-500">
          Description: {productDetail?.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
