import { useRef } from 'react';
import classes from './PassordReset.module.css';
import { useSelector } from 'react-redux/es/exports';


const PasswordReset = () => {
    const newPasswordInputRef = useRef();

    const token = useSelector(state => state.auth.token);
    const API_KEY = useSelector(state => state.auth.API_KEY);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredNewPassword = newPasswordInputRef.current.value;

        fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
            {
                method: 'POST',
                body: JSON.stringify({
                    idToken: token,
                    password: enteredNewPassword,
                    returnSecureToken: false,
                }),
                header: {
                    'Content-Type': 'apllication/json',
                },
            }
        ).then((res) => {
            if (res.ok) {
                alert('Password Reset Succesful');
            } else {
                return res.json().then((data) => {
                    alert(data.error.message);
                });
            };
        })

        newPasswordInputRef.current.value = '';
    }

    return (
        <section>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='new-password'>Enter New Password</label>
                    <input type='password' id='new-password'
                        required
                        ref={newPasswordInputRef}
                    />
                </div>
                <div className={classes.action}>
                    <button>change Password</button>
                </div>
            </form>
        </section>
    );
};

export default PasswordReset;