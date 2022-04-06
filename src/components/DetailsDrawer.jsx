import { Drawer, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UserDetails from '../pages/users/UserDetails';
import store from '../context/redux/store';
import { reset, setOpen } from '../context/redux/actions';
import { useSelector } from 'react-redux';

export default function DetailsDrawer() {
    const open = useSelector(state => state.open);

    return (
        <>
            <IconButton
                onClick={ () => store.dispatch(setOpen()) }
                size='large'
                edge='start'
                color='inherit'>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='right'
                open={ open }
                onClose={ () => store.dispatch(reset()) }>
                <Box p={ 2 } sx={ { marginTop: "75px" } } width='400px' >
                    <UserDetails />
                </Box>
            </Drawer>
        </>
    );
};