import React from 'react';

import NavLink from 'components/NavLink';
// import Logo from './Logo';
// import GitHubButton from '../GitHubButton';
// import styles from './style.scss';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Route, Link } from 'react-router-dom';

export default (props) => {

  const onTouchTap = (e) => {
    alert(props);
  }

  return (
    <AppBar title="Designer"
     
      iconElementRight={

          <FlatButton label="Client" onTouchTap={onTouchTap}/>
         
         }
    />
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
