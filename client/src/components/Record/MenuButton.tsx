import React from 'react';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(() => ({
    menuButton: {
        position: 'absolute',
        display: 'grid',
        placeContent: 'center',
        width: 30,
        minWidth: 30,
        height: '100%',
        borderRadius: 10,
        padding: 0,
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.1)',
            cursor: 'pointer',
        },
    },
    menuIcon: {
        color: 'white',
        opacity: 0.8,
    },
}));

interface Props {
    handleClick: (e: any) => void;
    id: string;
}

const MenuButton = React.forwardRef<any, Props>((props, ref) => {
    const classes = useStyles();

    return (
        <Button
            id={props.id}
            ref={ref}
            className={classes.menuButton}
            onClick={props.handleClick}
        >
            <MoreVertIcon className={classes.menuIcon} />
        </Button>
    );
});

export default MenuButton;
