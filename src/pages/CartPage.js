
import Cart from '../components/Cart/Cart'
import { motion } from "framer-motion";

const CartPage = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 }
        },
        exit: {
            x: '-100vh',
            transition: { ease: 'easeInOut' }
        }
    };
    return (
        <motion.section
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Cart />
        </motion.section>
    );
};

export default CartPage;