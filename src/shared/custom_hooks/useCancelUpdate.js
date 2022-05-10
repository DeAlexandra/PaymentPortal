import { useNavigate } from 'react-router-dom';
import store from '../../shared/context/redux/store';
import { reset } from '../../shared/context/redux/actions';

const useCancelUpdate = () => {
    const navigate = useNavigate();
    const cancelUpdate = () => {
        navigate(-1);
        store.dispatch(reset);
    };
    return cancelUpdate();
};

export default useCancelUpdate;
