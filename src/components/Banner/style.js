import { makeStyles } from '@material-ui/styles';
const styles = makeStyles(() => ({
    banner: {
        position:'relative',
        height:'40rem',
        objectFit: 'contain',
        top:'-4rem'
    },
    banner__contentsContainer: {
        height:'25rem',
    },
    banner__contents: {
        marginLeft: '2rem',
        width: '50%',
        paddingTop:'25rem',
    },
    banner__buttons: {
        marginRight: '0.5rem',
        marginBottom: '0.5rem'
    },
    banner__fadeBottom: {
        height:'15rem',
        background: 'linear-gradient(180deg, transparent 10%, rgba(37,37,37,0.70) 90%)'
    }
}));

export default styles;