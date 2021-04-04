import { makeStyles } from '@material-ui/styles';
const styles = makeStyles(() => ({
    container: {
        padding:'1rem'
    },
    posters: {
        display: 'flex',
        overflowX:'scroll',
        overflowY:'hidden',
    },
    poster: {
        maxHeight:'5rem',
        objectFit: 'contain',
        marginRight:'0.7rem',
        width:'100%',
        transition: 'transform 450ms',
        '&:hover': {
            transform: 'scale(1.08)',
            opacity:1,
        }
    },
    posterLarge: {
        maxHeight:'20rem',
        '&:hover': {
            transform: 'scale(1.09)',
            opacity:1,
        }
    }
}));

export default styles;