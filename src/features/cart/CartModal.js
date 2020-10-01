import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector } from "react-redux";
import { withNamespaces } from 'react-i18next';

import { selectSelectedProducts } from './cartSlice';
import Product from '../../components/Product'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function CartModal({t}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const selectedProducts = useSelector(selectSelectedProducts);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isCartFull = selectedProducts.length;

  return (
    <div>
      <button style={{marginRight: "5px", padding: "2px", borderRadius: "3px", cursor: "pointer"}} type="button" onClick={handleOpen}>
        {t('cart')}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {isCartFull ?
              selectedProducts.map((item)=> <Product item={item}  addProductToCart={false} key={item.id} />) :
              <div>{t('choose some products')}</div> }
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default withNamespaces()(CartModal)