import React from 'react';
import transactionReducer from 'modules/transactions';
import categoryReducer from 'modules/categories';
import { injectAsyncReducers } from 'store';
import BudgetGrid from 'components/BudgetGrid';
import Balance from 'containers/Balance';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';


// inject reducers that might not have been originally there
injectAsyncReducers({
    transactions: transactionReducer,
    categories: categoryReducer,
});

const muiTheme = getMuiTheme({
    palette: {
        textColor: pinkA200,
        pickerHeaderColor: pinkA200,
    },
    appBar: {
        height: 150,
        backgroundColor: '#ffd699'
    },
});

const MaterialContainer = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        {/* <AppBar title="My AppBar" style={{
            width: '50%',
            margin: '0 auto',
            border: '2px solid #FF9800',
            backgroundColor: '#ffd699',
        }} /> */}
        <AppBar title="My AppBar" />
    </MuiThemeProvider>
);

export default MaterialContainer;
