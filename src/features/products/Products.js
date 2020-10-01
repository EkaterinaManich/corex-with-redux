import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withNamespaces } from 'react-i18next';

import {
  fetchAsync,
  selectProducts,
  selectIsLoading,
  sortMinPrice,
  sortMaxPrice,
  sortManufacturer,
} from "./productsSlice";
import styles from "./Products.module.scss";
import Product from "../../components/Product"

function Products({t}) {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <div className={styles.products}>
      <div>
        <div className={styles.onSale}>ON SALE</div>
        <div className={styles["products-titles"]}>
          <div>{t('release')}</div>
          <div>{t('manufacturer')}</div>
          <div>{t('model')}</div>
          <div>{t('hash')}</div>
          <div>{t('algorithm')}</div>
          <div>{t('efficiency')}</div>
          <div>{t('profit')}</div>
          <div>{t('price')}</div>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          products.map((item) => {
            return (
              <Product item={item} addProductToCart={true} key={item.id} />
            );
          })
        )}
      </div>
      <div>
        <div className={styles.sortBy}>{t('sort by')}</div>
        <div className={styles.sortButton} onClick={() => dispatch(sortManufacturer())}>{t('by manufacturer')}</div>
        <div className={styles.sortButton} onClick={() => dispatch(sortMinPrice())}>{t('minimum price')}</div>
        <div className={styles.sortButton} onClick={() => dispatch(sortMaxPrice())}>{t('maximum price')}</div>
      </div>
    </div>
  );
}

export default withNamespaces()(Products)