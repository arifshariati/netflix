import { makeStyles } from '@material-ui/styles';
const styles = makeStyles(() => ({
    signupScreen: {
        maxWidth: '300px',
        padding:'5rem',
        marginLeft:'auto',
        marginRight:'auto',
        background:'rgba(0,0,0,0.85)',
        borderRadius:'1rem'
    },
    signupScreen__textSpan: {
        color:'primary',
    },
    loginScreen__loginInput: {
        width:'100%',
        marginRight:'1rem',
        '& fieldset.MuiOutlinedInput-notchedOutline':{
            borderColor:'white',
            borderRadius:'25rem',
        }
    }
}));

export default styles;