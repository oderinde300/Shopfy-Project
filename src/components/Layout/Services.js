import classes from './Services.module.css'

const Services = () => {
    return (
        <section className={classes.services}>

            <h1 className={classes['services-title']}>Services</h1>
            <p className={classes['services-message']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias magni, officia ratione suscipit rem consectetur tempora architecto numquam! Soluta repudiandae nisi iste dignissimos
                quisquam facilis reprehenderit corrupti. Velit, laudantium.</p>
            <div className={classes['services-card']}>
                <div >
                    <i className="fa-solid fa-trophy"></i>                    <h1>High Quality</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae, ad itaque nisi pariatur perferendis rem vel, unde autem ducimus nulla corporis
                        accusamus architecto maiores, eaque exercitationem est eveniet expedita!</p>
                </div>
                <div>
                    <i className="fa-solid fa-check"></i>                    <h1>Warranty Protection</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae, ad itaque nisi pariatur perferendis rem vel, unde autem ducimus nulla corporis
                        accusamus architecto maiores, eaque exercitationem est eveniet expedita!</p>
                </div>
                <div>
                    <i className="fa-solid fa-truck-fast"></i>                    <h1>Free Shipping</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae, ad itaque nisi pariatur perferendis rem vel, unde autem ducimus nulla corporis
                        accusamus architecto maiores, eaque exercitationem est eveniet expedita!</p>
                </div>
            </div>
        </section>
    );
};

export default Services;