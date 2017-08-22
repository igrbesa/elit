import React from 'react';
import { AppBar, Toolbar } from 'material-ui';
import { withStyles, createStyleSheet } from 'material-ui/styles';
// import transactionReducer from 'modules/transactions';
// import categoryReducer from 'modules/categories';
// import { injectAsyncReducers } from 'store';
// import BudgetGrid from 'components/BudgetGrid';
// import Balance from 'containers/Balance';

// inject reducers that might not have been originally there
// injectAsyncReducers({
//   transactions: transactionReducer,
//   categories: categoryReducer,
// });

const styleSheet = createStyleSheet({
    root: {
        marginTop: 0,
        width: '100%'
    },
    flex: {
        flex: 1,
    },
    positionFixed: {
        marginLeft: 40,
        top: 80
    }
});

const ClientContainer = (props) => {

    const { classes } = props;

    return (

        <div >
            {/* <AppBar position="fixed" color="accent" className={classes.positionFixed}>
                <Toolbar>
                    <span>some text</span>
                </Toolbar>
            </AppBar> */}
            <h1>Here goes Client1</h1>
            <h1>Here goes Client</h1>
            <h1>Here goes Client</h1>
            <h1>Here goes Client</h1>
            <h1>Here goes Client</h1>
            <h1>Here goes Client</h1>
            <h1>Here goes Client</h1>
            <h1>Here goes Client</h1>
            <h1>Here goes Client</h1>
            <h1>Here goes Client</h1>
            <h1>Here goes Client</h1>
            <h1>Here goes Client end</h1>
        </div>
    )
};

export default withStyles(styleSheet)(ClientContainer);
