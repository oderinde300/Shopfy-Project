
import HomeAppliancesProducts from "../components/Products/Products/HomeAppliancesProducts";
import { motion } from "framer-motion";

const HomeAppliancesProductsPage = () => {
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
            <HomeAppliancesProducts />
        </motion.section>
    );
};

export default HomeAppliancesProductsPage;