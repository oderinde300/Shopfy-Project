import { Link } from 'react-router-dom';
import classes from './Home.module.css'
import DUMMY_DATA from '../../data/dataSet';

const rand1 = Math.floor(Math.random() * 37);
const rand2 = Math.floor(Math.random() * 37);
const rand3 = Math.floor(Math.random() * 37);
const rand4 = Math.floor(Math.random() * 37);
const rand5 = Math.floor(Math.random() * 37);


const Home = () => {
    return (
        <section className={classes['Home']}>
            <div >
                <Link to={`./products/allProducts/${DUMMY_DATA[rand1].id}`}>
                    <img src={DUMMY_DATA[rand1].image} />
                </Link>
            </div>
            <div className={classes['aside-imgs1']}>
                <div >
                    <Link to={`./products/allProducts/${DUMMY_DATA[rand2].id}`}>
                        <img src={DUMMY_DATA[rand2].image} />
                    </Link>
                </div>
                <div >
                    <Link to={`./products/allProducts/${DUMMY_DATA[rand3].id}`}>
                        <img src={DUMMY_DATA[rand3].image} />
                    </Link>
                </div>
            </div>

            <div className={classes['aside-imgs2']}>
                <div >
                    <Link to={`./products/allProducts/${DUMMY_DATA[rand4].id}`}>
                        <img src={DUMMY_DATA[rand4].image} />
                    </Link>
                </div>
                <div >
                    <Link to={`./products/allProducts/${DUMMY_DATA[rand5].id}`}>
                        <img src={DUMMY_DATA[rand5].image} />
                    </Link>
                </div>
            </div>

        </section>
    );
}

export default Home;