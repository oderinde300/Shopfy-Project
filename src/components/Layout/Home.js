import { Link } from 'react-router-dom';

import classes from './Home.module.css'
import DisplayProducts from '../../data/dataSet';

const rand1 = Math.floor(Math.random() * 37);
const rand2 = Math.floor(Math.random() * 37);
const rand3 = Math.floor(Math.random() * 37);
const rand4 = Math.floor(Math.random() * 37);
const rand5 = Math.floor(Math.random() * 37);


const Home = () => {

    return (
        <section className={classes['Home']}>
            <div >
                <Link to={`./products/allProducts/${DisplayProducts[rand1].id}`}>
                    <img src={DisplayProducts[rand1].image} alt={DisplayProducts[rand1].name} />
                </Link>
            </div>
            <div className={classes['aside-imgs1']}>
                <div >
                    <Link to={`./products/allProducts/${DisplayProducts[rand2].id}`}>
                        <img src={DisplayProducts[rand2].image} alt={DisplayProducts[rand2].name} />
                    </Link>
                </div>
                <div >
                    <Link to={`./products/allProducts/${DisplayProducts[rand3].id}`}>
                        <img src={DisplayProducts[rand3].image} alt={DisplayProducts[rand3].name} />
                    </Link>
                </div>
            </div>
            <div className={classes['aside-imgs2']}>
                <div >
                    <Link to={`./products/allProducts/${DisplayProducts[rand4].id}`}>
                        <img src={DisplayProducts[rand4].image} alt={DisplayProducts[rand4].name} />
                    </Link>
                </div>
                <div >
                    <Link to={`./products/allProducts/${DisplayProducts[rand5].id}`}>
                        <img src={DisplayProducts[rand5].image} alt={DisplayProducts[rand5].name} />
                    </Link>
                </div>
            </div>

        </section>
    );
}

export default Home;