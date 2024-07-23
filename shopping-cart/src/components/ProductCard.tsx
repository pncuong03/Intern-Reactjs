import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Rate } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "~/redux/cartSlice";
import { IProduct } from "~/types";

const ProductCard = ({ product }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddToCart = (product: IProduct) => {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };

  const redirectToDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="flex hover:shadow-lg  transition-all ease-in duration-150 basis-1/4 flex-1  flex-col border-2 border-slate-500 px-3 py-2 rounded-md">
      <div className="flex flex-col items-center w-[400px] h-[500px]">
        <img
          className="w-[225px] h-[300px] object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="my-5 flex flex-col items-center justify-center ">
          <h3 className="text-center font-bold ">{product?.title}</h3>
          <h3 className="text-center mt-3 mb-3 font-medium">
            ${product?.price}
          </h3>
          <Rate allowHalf defaultValue={product?.rating.rate} />
          <h3 className="text-center mt-3 font-medium">
            Quantity: {product?.rating.count}
          </h3>
        </div>
      </div>

      <div className="flex justify-center gap-8">
        <Button onClick={redirectToDetail}>Detail</Button>
        <Button
          onClick={() => onAddToCart(product)}
          title="Add to Cart"
          className=" px-3 py-3 text-black bg-white rounded-md hover:bg-black hover:text-white transition-all ease-in duration-150"
        >
          <ShoppingCartOutlined style={{ fontSize: 30 }} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
