import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DB_URL } from "@my-org/shared/utils";
import {
    useLocationId,
    removeUserDetails,
    useGetCallRedux,
    getUserDetailsAction,
    getUserDetailsSuccess,
    getUserDetailsFailure,
} from "@myorg/state";

const useFetchUser = () => {
    const dispatch = useDispatch();
    const userId = useLocationId();
    const url = `${DB_URL}/users/${userId}`;
    const { fetchData } = useGetCallRedux(
        url,
        "fail_fetch_user",
        getUserDetailsAction,
        getUserDetailsSuccess,
        getUserDetailsFailure
    );
    useEffect(() => {
        fetchData();
        return () => {
            dispatch(removeUserDetails());
        };
    }, []);
};

export { useFetchUser };
