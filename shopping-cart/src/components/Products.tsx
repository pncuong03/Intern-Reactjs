import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Input, Pagination, Row } from "antd";
import ProductCard from "./ProductCard";
import Search from "./Search";
import { AppDispatch } from "~/app/store";
import { fetchProducts, setSearchTerm } from "~/redux/productSlice";
import { getFilteredProducts } from "~/redux/selector";

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(getFilteredProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [item, setItem] = useState({ min: 0, max: 4 });
  const numEachPage = 4;

  const handleChange = (value: number) => {
    setItem({
      min: (value - 1) * numEachPage,
      max: value * numEachPage,
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="m-3 flex flex-col items-center justify-center gap-10">
      <div className="flex flex-row justify-between gap-[300px] h-[50px]">
        <Input
          placeholder="Search products"
          style={{ width: 200 }}
          onChange={handleSearch}
        />
        <Search />
      </div>
      <Row gutter={[10, 16]}>
        {products?.slice(item.min, item.max).map((product: any) => (
          <Col key={product.id} xs={24} sm={24} md={12} lg={8} xl={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <Pagination
        defaultCurrent={1}
        pageSize={numEachPage}
        onChange={handleChange}
        total={products?.length}
      />
    </div>
  );
};

export default Products;
