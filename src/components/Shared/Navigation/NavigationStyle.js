import { makeStyles } from "@material-ui/core";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: 'rgba(0,0,0,.8)',
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
    },
    navLogoText: {
        color: theme.palette.primary.main,
        textAlign: 'center',
        margin: '1rem .3rem'
    },
    logoImg: {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
            display: 'none'
        },
    },
    navbar: {
        display: 'flex',
        alignItems: 'center',
        // height: 80,
        [theme.breakpoints.down('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            display: 'none'
        },
    },
    navbarMain: {
        position: 'fixed',
        top: 0,
        width: '100%',
        justifyContent: 'space-between',
        zIndex: 999,
        background: 'rgba(0,0,0,.9)',
    },
    appBar: {
        background: 'rgba(0,0,0,.8)',
        [theme.breakpoints.up('md')]: {
            width: '100%',
            display: 'none',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    navItem: {
        borderBottom: '2px solid transparent',
        color: '#a8a8a9',
        transition: '.3s',
        '&:hover': {
            borderColor: '#fff',
            color: '#fff',
        }
    },
    navItemActive: {
        borderColor: '#fff',
        color: '#fff',
    },
    navItemDrawer: {
        display: 'flex',
        alignItems: 'center',
        transition: '.3s linear',
        color: '#202C45',
        borderRight: '4px solid transparent',
        '&:hover': {
            borderColor: '#F2184F',
            color: '#F2184F',
        },
    },
    backToTop: {
        position: 'fixed',
        right: 30,
        bottom: 30,
        zIndex: 5,
        background: 'rgba(5, 144, 51,.7)',
        transition: '.3s linear',
        '&:hover': {
            background: '#059033'
        }
    },
    cartCountLarge: {
        position: 'absolute',
        left: 47,
        top: 5,
        color: '#fff',
        background: '#ff0000',
        borderRadius: '50%',
        fontSize: 16,
        height: 20,
        width: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700,
    },
    cartCountSmall: {
        position: 'absolute',
        left: 30,
        top: 5,
        color: '#fff',
        background: '#ff0000',
        borderRadius: '50%',
        fontSize: 16,
        height: 20,
        width: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700
    },
    cartIconLarge: {
        position: 'fixed',
        top: '50vh',
        right: '5px',
        zIndex: 10,
        '@media(max-width:960px)': {
            display: 'none'
        }
    },
    cartIconSmall: {
        color: '#a8a8a9',
        transition: '.3s',
        '&:hover': {
            color: '#fff'
        }
    }
}));

export default useStyles;