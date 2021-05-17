import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll';
import useStyles from './NavigationStyle';
import { ArrowUpward } from '@material-ui/icons';
import AddShoppingCart from '@material-ui/icons/AddShoppingCartOutlined';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import { useMyContext } from '../../../context';
const scrollNavItems = [
    {
        label: 'About us',
        path: ''
    },
    {
        label: 'Shop',
        path: 'shop'
    },
    {
        label: 'Contact us',
        path: ''
    },
]

const Navigation = () => {

    const {
        root,
        appBar,
        menuButton,
        drawerPaper,
        navbar,
        navItem,
        link,
        navItemDrawer,
        navbarMain,
        backToTop,
        cartCount,
        cartIcon } = useStyles()
    const { cartItemCount, cartItems } = useMyContext();
    console.log(cartItemCount);
    // const cartItems = JSON.parse(localStorage.getItem('cart'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // animated scroll
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const drawer = (
        <div style={{ textAlign: 'center' }}>
            <img src='' onClick={toggleHome} style={{ maxWidth: '90%', margin: '20px auto' }} alt="Logo" />
            <Divider />
            <Link to='/' className={link}>
                <ListItem button
                    className={navItemDrawer}
                >
                    <ListItemText primary={'Home'} />
                </ListItem>
            </Link>
            <Divider />
            {
                scrollNavItems.map(({ label, path }) =>
                    <ScrollLink
                        key={label}
                        className={link}
                        to={path}
                        spy={true}
                        smooth={true}
                        exact='true'
                        offset={0}
                        duration={500}>
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <ListItem
                                button
                                className={navItemDrawer}
                            >
                                <ListItemText primary={label} />
                            </ListItem>
                        </Link>
                        <Divider />
                    </ScrollLink>)
            }
        </div>
    );
    return (
        <div className={root}>
            <Link to="/cart">
                <IconButton
                    className={cartIcon}>
                    {
                        cartItemCount.length > 0 ?
                            <ShoppingCart style={{ color: '#58BC34', fontSize: 40 }} /> :
                            <AddShoppingCart style={{ color: '#58BC34', fontSize: 40 }} />
                    } <span className={cartCount}>{cartItems ? cartItems.length : 0}</span>
                </IconButton>
            </Link>
            {scrollNav &&
                <IconButton onClick={toggleHome} className={backToTop}>
                    <ArrowUpward style={{ color: '#fff' }} />
                </IconButton>}
            <nav className={navbarMain}>
                <AppBar className={appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Container className={navbar} style={{ height: scrollNav ? 60 : 80 }}>
                    <img src='' onClick={toggleHome} style={{ maxWidth: 250, flex: 1, cursor: 'pointer' }} alt="Logo" />
                    <div style={{ flex: 3, textAlign: 'right' }}>
                        <span>
                            <Link className={link} to='/'>
                                <Button onClick={toggleHome}>
                                    <span className={navItem}>Home</span>
                                </Button>
                            </Link>
                            {
                                scrollNavItems.map(({ label, path }) =>
                                    <ScrollLink key={label} className={link} to={path}
                                        spy={true}
                                        smooth={true}
                                        exact='true'
                                        offset={0}
                                        duration={500}>
                                        <Link style={{ textDecoration: 'none' }} to='/'>
                                            <Button>
                                                <span className={navItem}>{label}</span>
                                            </Button>
                                        </Link>
                                    </ScrollLink>)
                            }
                        </span>
                    </div>
                </Container>
            </nav>
        </div>
    );
}


export default Navigation;