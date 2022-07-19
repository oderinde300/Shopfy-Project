import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './AuthForm.module.css'
import { authActions } from '../../store/auth-slice';
import { uiActions } from '../../store/ui-slice';
import useInput from '../../hooks/use-input';

const validEmail = value => value.trim() !== '' && value.includes('@');
const validPassword = value => value.trim().length >= 6;

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [authError, setAuthError] = useState(null);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailIsInvalid,
        valueInputChange: emailInputChange,
        inputBlurHandler: emailInputBlurHandler,
        reset: emailInputReset,
    } = useInput(validEmail);

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: enteredPasswordIsInvalid,
        valueInputChange: passwordInputChange,
        inputBlurHandler: passwordInputBlurHandler,
        reset: passwordInputReset,
    } = useInput(validPassword);

    let formIsValid = false;

    if (enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    const API_KEY = useSelector(state => state.auth.API_KEY);

    const dispatch = useDispatch();

    const switchAuthModeHandler = () => {
        setIsLogin(prevState => !prevState);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (formIsValid) {
            if (isLogin) {
                fetch(
                    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            email: enteredEmail,
                            password: enteredPassword,
                            returnSecureToken: true,
                        }),
                        header: {
                            'Content-Type': 'apllication/json',
                        },
                    }
                ).then((res) => {
                    if (res.ok) {
                        res.json().then((data) => {
                            const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
                            dispatch(authActions.loginHandler({
                                token: data.idToken,
                                expirationTime: expirationTime.toISOString(),
                            }))
                            setTimeout(() => {
                                dispatch(uiActions.showNotification({
                                    status: '',
                                    title: '',
                                    message: '',
                                }));
                            }, 5000);
                            dispatch(uiActions.showNotification({
                                status: 'success',
                                title: 'Successful',
                                message: 'Login Successful',
                            }));
                        })

                    } else {
                        return res.json().then((data) => {
                            setTimeout(() => {
                                setAuthError(null)
                            }, 3000);
                            setAuthError(data.error.message);
                        });
                    };
                })
            } else {
                fetch(
                    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            email: enteredEmail,
                            password: enteredPassword,
                            returnSecureToken: true,
                        }),
                        header: {
                            'Content-Type': 'apllication/json',
                        },
                    }
                ).then((res) => {
                    if (res.ok) {
                        setTimeout(() => {
                            dispatch(uiActions.showNotification({
                                status: '',
                                title: '',
                                message: '',
                            }));
                        }, 5000);
                        dispatch(uiActions.showNotification({
                            status: 'success',
                            title: 'Successful',
                            message: 'Sign Up Successful',
                        }));
                    } else {
                        return res.json().then((data) => {
                            setTimeout(() => {
                                setAuthError(null)
                            }, 3000);
                            setAuthError(data.error.message);
                        });
                    };
                })

            }
        }
        console.log(enteredEmail, enteredPassword);
        emailInputReset();
        passwordInputReset();
    };

    const emailControlClasses =
        `${classes.control} ${!enteredEmailIsInvalid ? '' : classes.invalid}`
    const passwordControlClasses =
        `${classes.control} ${!enteredPasswordIsInvalid ? '' : classes.invalid}`

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={emailControlClasses}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required
                        value={enteredEmail}
                        onChange={emailInputChange}
                        onBlur={emailInputBlurHandler}
                    />
                    {enteredEmailIsInvalid && <p>Please enter a valid email</p>}
                </div>
                <div className={passwordControlClasses}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required
                        value={enteredPassword}
                        onChange={passwordInputChange}
                        onBlur={passwordInputBlurHandler}
                    />
                    {enteredPasswordIsInvalid && <p>
                        Please enter a valid passord (chars greater than 5)
                    </p>}
                </div>
                {authError && <p className={classes['auth-error']}>{authError}</p>}
                <div className={classes.actions}>
                    <button >{isLogin ? 'Login' : 'Sign Up'}</button>
                    <div className={classes['togglt-btn']}>
                        <button type='button' className={classes.toggle}
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin ? 'Create new account' : 'Login with existing account?'}
                        </button>
                        {isLogin && <Link to='/auth-password-reset'>
                        </Link>}
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AuthForm; 