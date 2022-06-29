import { Drawer, Box } from '@mui/material';
import { store, setDrawerClose } from '@myorg/state';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function RightDrawer(props) {
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
export { RightDrawer };