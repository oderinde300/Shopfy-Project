import ReactDOM from 'react-dom';
import { useDispatch, } from 'react-redux';
import { checkoutActions } from '../../store/checkout-slice';
import { cartActions } from '../../store/cart-slice';
import classes from './Modal.module.css';

const Backdrop = () => {
    const dispatch = useDispatch();
    const onHideCheckout = () => {
        dispatch(cartActions.clearCart())
        dispatch(checkoutActions.hideCheckoutHandler());
    };
    return <div className={classes.backdrop} onClick={onHideCheckout}></div>
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
};

const portalElement = document.getElementById('overlays');

const Modal = props => {


    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
                portalElement)}
        </>
    )
};

export default Modal;