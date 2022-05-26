import { Drawer, Box } from '@mui/material';
import store from '../../shared/context/redux/store';
import { reset } from '../../shared/context/redux/actions';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDrawerClose } from '../context/redux/actionCreators';
export default function RightDrawer(props) {
    const navigate = useNavigate();
    const open = useSelector(state => state.drawerReducer.open);


    const handleCloseDrawer = () => {
        store.dispatch(setDrawerClose());
        navigate(-1);
    };

    return (
        <Drawer
            anchor='right'
            style={ { zIndex: 1300 } }
            open={ open }
            onClose={ () => handleCloseDrawer() }>
            <Box p={ 2 } sx={ { marginTop: "75px" } } width='550px' >
                { props.children }
            </Box>
        </Drawer>
    );
};