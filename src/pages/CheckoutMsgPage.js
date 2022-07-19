
import CheckoutMsg from "../components/Checkout/CheckoutMsg";
import { motion } from "framer-motion";

const CheckoutMsgPage = () => {
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
            <CheckoutMsg />
        </motion.section>
    );
};

export default CheckoutMsgPage;