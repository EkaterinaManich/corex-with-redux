import React from "react";
import { useDispatch } from "react-redux";

import moment from "moment";
import { addProduct } from "../features/cart/cartSlice";
import styles from "./Product.module.scss";


export default function Product({ item, addProductToCart }) {
    const dispatch = useDispatch();
    return (
        <div
            className={styles.product}
            onClick={addProductToCart ? (e) => {
                e.currentTarget.classList.add(styles.active);
                dispatch(addProduct(item))
            }: null}
        >
            <div>{moment(item.release).format("LL")}</div>
            <div>{item.manufacturer}</div>
            <div>{item.model}</div>
            <div>{item.hash}</div>
            <div>{item.algorithm}</div>
            <div>{item.efficiency}</div>
            <div>{item.profit}</div>
            <div>
                ${item["min-price"]} - ${item["max-price"]}
            </div>
        </div>
    );
}
