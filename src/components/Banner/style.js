import { makeStyles } from '@material-ui/styles';
const styles = makeStyles(() => ({
    banner: {
        position:'relative',
        height:'40rem',
        color:'white',
        objectFit: 'contain',
        backgorundColor:'#f1f1f1',
    },
    banner__contents: {
        marginLeft: '2rem',
        paddingTop:'15rem',
        width: '50%'
    },
    banner__buttons: {
        marginRight: '0.5rem',
        marginBottom: '0.5rem'
    },
    banner__fadeBottom: {
        height:'15rem',
        background: 'linear-gradient(180deg, transparent 10%, rgba(37,37,37,0.61) 90%)'
    }
}));

export default styles;