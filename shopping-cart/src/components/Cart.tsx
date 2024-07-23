import { Col, Row } from "antd";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import Order from "./Order";

export default function Cart() {
  const cartItem = useSelector((state: any) => state.cartReducer.cart);

  return (
    <div>
      <div className="m-3">
        <Row gutter={[6, 10]}>
          {cartItem?.map((product: any) => (
            <Col key={product.id}>
              <CartItems product={product} />
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <Order />
      </div>
    </div>
  );
}
