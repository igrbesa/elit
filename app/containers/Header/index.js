import React, { Component } from 'react';
import SideMenu from 'components/SideMenu';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';

import Typography from 'material-ui/Typography';
import { Route, Link } from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';

const styleSheet = createStyleSheet({
    root: {
        marginTop: 30,
        width: '100%'
    },
    centerCategories: {
        width: "70%",
        margin: "auto",
        textAlign: "center"
    },
    highlightItem: {
        '&:hover': {
            borderBottom: '4px solid currentColor'
        }
    }
});

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione'
];

class Header extends Component {

    state = {
        isOpenedDrawer: false
    }

    handleDrawOpening = () => {
        this.setState({ isOpenedDrawer: true });
    }

    handleDrawerClosing = () => {
        this.setState({ isOpenedDrawer: false });
    }

    render() {

        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <AppBar position="fixed" color="accent">
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu">
                            <MenuIcon onClick={this.handleDrawOpening} />

                            <SideMenu open={this.state.isOpenedDrawer}
                                onClose={this.handleDrawerClosing}
                                onClick={this.handleDrawerClosing}
                            />
                        </IconButton>

                        <Typography type="title" color="inherit">
                            Title
                        </Typography>

                        <Hidden smDown>
                            <div className={classes.centerCategories}>
                                <Button color="contrast" className={classes.highlightItem}>Login</Button>
                                <Button color="contrast" className={classes.highlightItem}>Login</Button>
                                <Button color="contrast" className={classes.highlightItem}>Login</Button>
                                <Button color="contrast" className={classes.highlightItem}>Login</Button>
                            </div>
                        </Hidden>
                        
                        <Button color="contrast">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {

};

export default withStyles(styleSheet)(Header);
