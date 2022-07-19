import { motion } from "framer-motion";
import PhoneProducts from '../components/Products/Products/PhoneProducts'
const PhoneProductsPage = () => {
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
            <PhoneProducts />
        </motion.section>
    );
};

export default PhoneProductsPage;