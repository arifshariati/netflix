import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import validate from "validate.js";
import {
    TextField,
    Button,
    Typography,
    Grid
} from '@material-ui/core';
import styles from './style';
import ValidationSchema from './schema';
const SignupScreen = () => {
    const classes = styles();
    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    useEffect(() => {

        const errors = validate(formState.values, ValidationSchema);
    
        setFormState((formState) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    
    }, [formState.values]);
    const handleChange = (event) => {
        event.persist();
    
        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]: event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));
    };
    const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

    const register = (event) => {
        event.preventDefault();
        
        auth.createUserWithEmailAndPassword(
            formState.values.email,
            formState.values.password
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    }
    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(
            formState.values.email,
            formState.values.password
        ).then(authUser => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        })
    }
    return (
        <div className={classes.signupScreen}>
            <Grid container spacing={1} alignItems={'center'}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant='h1' color='primary'>Sign In</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField 
                        type='email' 
                        name='email' 
                        error={hasError("email")}
                        helperText={
                            hasError("email") ? formState.errors.email[0] : null
                        }
                        value={formState.values.email || ""}
                        onChange={handleChange}
                        variant='outlined' 
                        id="outlined-basic" 
                        label="email" 
                        color='primary'
                        size='small'
                        className={classes.loginScreen__loginInput}
                    />
                </Grid>
            
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField 
                        type='password' 
                        error={hasError("password")}
                        helperText={
                            hasError("password") ? formState.errors.password[0] : null
                        }
                        value={formState.values.password || ""}
                        onChange={handleChange}
                        name='password' 
                        variant='outlined' 
                        id="outlined-basic" 
                        label="password" 
                        color='primary'
                        size='small'
                        className={classes.loginScreen__loginInput}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button 
                        variant='contained' 
                        color='primary'
                        onClick={signIn}
                    >
                        Sign In
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography display={'inline'}>
                        new to Moview?  
                        
                    </Typography>
                    {` `}
                    <Typography display={'inline'} variant='h5' color='primary' style={{cursor:'pointer'}} onClick={register}> 
                        Sign Up Now.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignupScreen;
