import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/commonSection";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <td>Image</td>
                      <td>Title</td>
                      <td>Price</td>
                      <td>Qty</td>
                      <td>Delete</td>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
                <p className="fs-6 mt-2">
                  taxes and shipping will calculate in checkout
                </p>

                <StripeCheckout
                  className="w-100"
                  token={onToken}
                  name="Pay with card"
                  amount={totalAmount * 100}
                  stripeKey="pk_test_51Obh0aImfEH6zzJQMIS67bk6zUkeWvxUQLVB0voIcFlg5PUI1JmZI3bGnK02bIwtxpKawlfagIsVpblmwPOlrvCQ00WoC8WzMM"
                />
                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          class="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
