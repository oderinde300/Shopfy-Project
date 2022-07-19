import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './HeaderForm.module.css'
import DUMMY_DATA from '../../data/dataSet';

const HeaderForm = () => {
    const searchInputRef = useRef();
    const history = useHistory();

    let searchItem;
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredSearch = searchInputRef.current.value;

        const searchList = DUMMY_DATA.find(item => item.name === enteredSearch.toLowerCase());

        if (searchList) {
            searchItem = `/products/allProducts/${searchList.id}`;

        } else {
            searchItem = `/products`
            alert('Product not found!')
        }

        history.replace(searchItem)
        searchInputRef.current.value = '';
    };

    return (
        <div className={classes['form-container']}>
            <form onSubmit={submitHandler}>
                <div className={classes['search-box']}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type='text' placeholder={`Seach Product's Name`}
                        ref={searchInputRef}
                    />
                </div>
                <button>Search</button>
            </form>
        </div>
    );
};

export default HeaderForm;