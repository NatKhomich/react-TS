import React, {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Toolbar} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

type PropsType = {
    toggleDrawer: () => void
}

export const Header: FC<PropsType> = (props) => {
    const {toggleDrawer} = props

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color={'default'}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => toggleDrawer()}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
        </Box>
    );
};
