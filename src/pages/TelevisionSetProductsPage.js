
import TelevisionSetProducts from "../components/Products/Products/TelevisionSetProducts";
import { motion } from "framer-motion";

const TelevisionSetProductsPage = () => {
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
            <TelevisionSetProducts />
        </motion.section>
    );
};

export default TelevisionSetProductsPage;