import { DB_URL } from '@my-org/shared/utils';
import { useUpdateCallRedux, useLocationId, updateUserAction, updateUserSuccess, updateUserFailure } from "@myorg/state";

const useUpdateUser = () => {
    const userId = useLocationId();
    const url = `${DB_URL}/users/${userId}`;
    const { updateEntry } = useUpdateCallRedux(url, "fail_update_user", "success_edit_user", "users", updateUserAction, updateUserSuccess, updateUserFailure);
    const handleUpdateUser = (user) => {
        updateEntry(user);
    };
    return { handleUpdateUser };
};

export { useUpdateUser };
