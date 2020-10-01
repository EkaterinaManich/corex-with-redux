import React from "react";
import { useSelector } from "react-redux";

import { selectCartAmount } from "./cartSlice";
import CartModal from "./CartModal";
import styles from "./Cart.module.scss";

export default function Cart() {
  const cartAmount = useSelector(selectCartAmount);
  return <div className={styles.cart}> <CartModal /> {cartAmount}</div>
}
