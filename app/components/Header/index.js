import React from 'react';

import NavLink from 'components/NavLink';
// import Logo from './Logo';
// import GitHubButton from '../GitHubButton';
// import styles from './style.scss';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar'
import { Route, Link } from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet({
  root: {
    marginTop: 30,
    width: '100%',
  },
});

function header(props) {

  const onTouchTap = (e) => {
    alert(props);
  }

  const classes = props.classes;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="accent">
        <Toolbar>
          <p>ovo je u toolbaru</p>
        </Toolbar>
      </AppBar>
    </div>
    /*         
             <FlatButton label="Client" onTouchTap={onTouchTap}>
               </FlatButton> */
    // <div className={styles.header}>
    //   <NavLink to="/budget" label="Budget" styles={styles} />
    //   <NavLink to="/reports" label="Reports" styles={styles} />
    //   <NavLink to="/material" label="Material test" styles={styles} />
    //   <GitHubButton className={styles.gitHubButton} type="Star" />
    //   <GitHubButton className={styles.gitHubButton} type="Fork" />
    //   <Logo />
    // </div>
  )
};

export default withStyles(styleSheet)(header);
