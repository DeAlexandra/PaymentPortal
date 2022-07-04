import { useEffect } from "react";
import { DB_URL } from '@my-org/shared/utils';
import { useGetCallRedux, getUsersAction, getUsersFailure, getUsersSuccess } from '@myorg/state';
import { useParams } from 'react-router';

const useFetchUsersList = () => {
    const params = useParams();
    const url = `${DB_URL}/users`;
    const { fetchData } = useGetCallRedux(url, "fail_fetch_users", getUsersAction, getUsersSuccess, getUsersFailure);
    const hasParams = Object.keys(params).length !== 0;

    useEffect(() => {
        if (!hasParams)
            fetchData();
    }, [hasParams]);
};

export { useFetchUsersList };