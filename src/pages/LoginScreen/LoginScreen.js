import React, { Fragment, useState } from 'react';
// Mui
import { Typography, Button, TextField } from '@material-ui/core';
import styles from './style';
import { SignupScreen } from '../../pages';
const LoginScreen = () => {
    const classes = styles();
    const [signIn, setSignin] = useState(false);
    return (
        <div className={classes.loginScreen}>
            <div className={classes.loginScreen__background}>
                <Typography className={classes.loginScreen__logo} variant='h1' color='primary'>Movies</Typography>
                <Button 
                    className={classes.loginScreen__button} 
                    variant='contained' 
                    color='primary' 
                    onClick={()=> setSignin(true)}
                >
                    Signin
                </Button>
                <div className={classes.loginScreen__gradient} />
            </div>

            <div className={classes.loginScreen__body}>
                {signIn ? (
                    <SignupScreen />
                ) : (
                    <Fragment>
                        <Typography className={classes.loginScreen__bodyTitle} variant='h1'>Unlimited Films. TV Programs and more.</Typography>
                        <Typography className={classes.loginScreen__bodyTitle} variant='h3' color='primary'>Watch anywhere. Cancel any time</Typography>
                        <Typography className={classes.loginScreen__bodyTitle} variant='h5' color='primary'>Ready to watch? Enter your email address or restart your membership</Typography>
                        <div className={classes.loginScreen__input}>
                            <form>
                                <TextField 
                                    type='email' 
                                    name='email' 
                                    variant='outlined' 
                                    id="outlined-basic" 
                                    label="email" 
                                    color='primary'
                                    size='small'
                                    className={classes.loginScreen__loginInput}
                                />
                                <Button 
                                    variant='contained' 
                                    color='primary'
                                    onClick={()=> setSignin(true)}
                                >
                                    Get Started
                                </Button>
                            </form>
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    )
}

export default LoginScreen;
