import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuButton from './MenuButton';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AddTransactionButton from './AddTransactionButton';
import Drawer from './Drawer';
import TopWallets from './TopWallets';

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1,
        backgroundColor: theme.palette.appBarBackgroundColor,
    },
    toolbar1: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        minWidth: 340,
    },
    toolbar2: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // minWidth: 500,
        paddingLeft: 8,
        paddingRight: 8,
    },
    tabs1: {
        width: '100%',
        position: 'relative',
        margin: '0 auto',
        maxWidth: 520,
        minWidth: 300,
    },
    tabs2: {
        width: '100%',
        maxWidth: 800,
        position: 'relative',
        margin: '0 auto',
    },
}));

const Header = () => {
    const classes = useStyles();

    // const matches = useMediaQuery('(min-width:600px)');
    const matches = useMediaQuery('(max-width:360px)');

    // const getToolbarClassName = () => {
    //     if (matches) return classes.toolbar2;
    //     else return classes.toolbar1;
    // };

    return (
        <div style={{ position: 'relative', minWidth: 360 }}>
            <AppBar className={classes.appbar}>
                {/* <div className={matches ? classes.tabs1 : classes.tabs2}> */}
                <div className={matches ? classes.tabs1 : classes.tabs2}>
                    {/* <div className={classes.tabs2}> */}
                    <Toolbar
                        className={
                            matches ? classes.toolbar1 : classes.toolbar2
                            // classes.toolbar1
                        }
                    >
                        <MenuButton />
                        <TopWallets />
                        <AddTransactionButton />
                        <Drawer />
                    </Toolbar>
                </div>
            </AppBar>
        </div>
    );
};

export default Header;
