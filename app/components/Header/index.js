import React, { Component } from 'react';

import NavLink from 'components/NavLink';
// import Logo from './Logo';
// import GitHubButton from '../GitHubButton';
// import styles from './style.scss';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Drawer } from 'material-ui';
import Typography from 'material-ui/Typography';
import { Route, Link } from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet({
  root: {
    marginTop: 30,
    width: '100%'
  },
  flex: {
    flex: 1,
  }
});

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione'
];

class Header extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleDrawOpening = this.handleDrawOpening.bind(this);
    this.handleDrawerClosing = this.handleDrawerClosing.bind(this);
    this.state = {
      openedDrawer: false
    }
  }

  handleDrawOpening() {
    this.setState({ openedDrawer: true });
  }

  handleDrawerClosing() {
    this.setState({ openedDrawer: false });
  }

  render() {

    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="accent">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon onClick={this.handleDrawOpening} />
              <Drawer
                open={this.state.openedDrawer}
                onRequestClose={this.handleDrawerClosing}
                onClick={this.handleDrawerClosing}
              >
                fdsf

              N</Drawer>
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Title
          </Typography>
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

//*************************** */


// function header(props) {

//   const onTouchTap = (e) => {
//     alert(props);
//   }

//   const classes = props.classes;

//   const handleLeftOpen = () => toggleDrawer('left', true);

//   const toggleDrawer = (side, open) => {
//     const drawerState = {};
//     drawerState[side] = open;
//     this.setState({ open: drawerState });
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="fixed" color="accent">
//         <Toolbar>
//           <IconButton color="contrast" aria-label="Menu">
//             <MenuIcon onClick={handleLeftOpen} />
//           </IconButton>
//           <Typography type="title" color="inherit" className={classes.flex}>
//             Title
//           </Typography>
//           <Button color="contrast">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//     /*         
//              <FlatButton label="Client" onTouchTap={onTouchTap}>
//                </FlatButton> */
//     // <div className={styles.header}>
//     //   <NavLink to="/budget" label="Budget" styles={styles} />
//     //   <NavLink to="/reports" label="Reports" styles={styles} />
//     //   <NavLink to="/material" label="Material test" styles={styles} />
//     //   <GitHubButton className={styles.gitHubButton} type="Star" />
//     //   <GitHubButton className={styles.gitHubButton} type="Fork" />
//     //   <Logo />
//     // </div>
//   )
// };

// export default withStyles(styleSheet)(header);
