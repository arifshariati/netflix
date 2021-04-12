import { makeStyles } from '@material-ui/styles';
const styles = makeStyles(() => ({
    loginScreen: {
        position:'relative',
        height:'100%',
        background:'url(/loginBackground.png) center no-repeat',
        backgroundSize:'cover'
    },
    loginScreen__logo: {
        position:'fixed',
        left:'0',
        top:'1.2rem',
        paddingLeft:'1.2rem'
    },
    loginScreen__button:{
        position:'fixed',
        right:'1.2rem',
        top:'1.2rem'
    },
    loginScreen__gradient: {
        width:'100%',
        height:'100vh',
        zIndex:1,
        background:'rgba(0,0,0,0.4)',
        backgroundImage:'linear-gradient(to top, rgba(0,0,0,0.8) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)'
    },
    loginScreen__body:{
        zIndex:1,
        padding:'2rem',
        position:'absolute',
        width:'100%',
        top:'30%',
        marginLeft:'auto',
        marginRight:'auto',
        textAlign:'center'
    },
    loginScreen__bodyTitle: {
        marginBottom:'1.2rem',
        color:'white'
    },
    loginScreen__loginInput: {
        width:'30%',
        marginRight:'1rem',
        '& fieldset.MuiOutlinedInput-notchedOutline':{
            borderColor:'white',
            borderRadius:'25rem',
        }
    }
}));

export default styles;