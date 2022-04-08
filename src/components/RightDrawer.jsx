import { Drawer, Box } from '@mui/material';
import store from '../context/redux/store';
import { reset } from '../context/redux/actions';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function RightDrawer(props) {
    const navigate = useNavigate();
    const open = useSelector(state => state.open);

    const handleCloseDrawer = () => {
        store.dispatch(reset());
        navigate(-1);
    };

    return (
        <>
            <Drawer
                anchor='right'
                style={ { zIndex: 1300 } }
                open={ open }
                onClose={ () => handleCloseDrawer() }>
                <Box p={ 2 } sx={ { marginTop: "75px" } } width='550px' >
                    { props.children }
                </Box>
            </Drawer>
        </>
    );
};