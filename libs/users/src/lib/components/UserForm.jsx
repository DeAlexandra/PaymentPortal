import { Form } from 'formik';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserValidationSchema from '../models/UserValidationSchema';
import { userFieldsArray } from './userFormFieldsArray';
import { FormButtons, InputField, DrawerForm, DrawerTitle } from '@myorg/shared/components';
import { DB_URL } from '@my-org/shared/utils';
import { useUpdateCallRedux, useLocationId, useGetCallRedux } from '@myorg/state';
import {
    getUserDetailsAction,
    getUserDetailsSuccess,
    getUserDetailsFailure,
    removeUserDetails,
    updateUserAction,
    updateUserFailure,
    updateUserSuccess,
} from '@myorg/state';

export function UserForm() {
    const dispatch = useDispatch();
    const userId = useLocationId();
    const url = `${DB_URL}/users/${userId}`;
    const { updateEntry } = useUpdateCallRedux(url, "fail_update_user", "success_edit_user", "users", updateUserAction, updateUserSuccess, updateUserFailure);
    const open = useSelector((state) => state.drawerReducer.open);
    const singleUser = useSelector((state) => state.userDetails);
    const { fetchData } = useGetCallRedux(url, "fail_fetch_user", getUserDetailsAction, getUserDetailsSuccess, getUserDetailsFailure);
    const selectedUserDetails = singleUser.user !== undefined && singleUser.user;
    useEffect(() => {
        fetchData();
        return () => {
            dispatch(removeUserDetails());
        };
    }, []);

    const handleUpdateUser = (user) => {
        updateEntry(user);
    };
    return (
        <><DrawerTitle title={ "user_details" } />
            <DrawerForm initialValues={ selectedUserDetails } validationSchema={ UserValidationSchema } updateEntry={ handleUpdateUser }>
                { ({ values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
                    <Form onSubmit={ handleSubmit }>
                        { open === true && userFieldsArray.map(userFieldEntry => {
                            return <InputField key={ userFieldEntry } fieldName={ userFieldEntry } handleChange={ handleChange } handleBlur={ handleBlur } values={ values } touched={ touched } errors={ errors } />;
                        })
                        }
                        <FormButtons isSubmitting={ isSubmitting } />
                    </Form>
                ) }
            </DrawerForm></>
    );
}
export default UserForm;