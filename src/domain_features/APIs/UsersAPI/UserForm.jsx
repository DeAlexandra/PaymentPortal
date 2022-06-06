import { Form } from 'formik';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserValidationSchema from '../../models/UserValidationSchema';
import { userFieldsArray } from '../../../shared/components/form/userFormFieldsArray';
import { FormButtons, InputField, DrawerForm, DrawerTitle } from '../../../shared/components/index';
import DB_URL from '../../../shared/utils/URLs';
import { useUpdateCallRedux, useLocationId } from '../../../shared/custom_hooks/index';
import {
    selectedUser,
    updateUserAction,
    updateUserFailure,
    updateUserSuccess,
    removeSelectedUser
} from '../../../shared/context/redux/actionCreators/users';

export default function UserForm() {
    const dispatch = useDispatch();
    const userId = useLocationId();
    const url = `${DB_URL}/users/${userId}`;
    const { updateEntry } = useUpdateCallRedux(url, "fail_update_user", "success_edit_user", "users", updateUserAction, updateUserSuccess, updateUserFailure);
    const open = useSelector((state) => state.drawerReducer.open);
    const singleUser = useSelector((state) => state.allUsers.users.find(user => user.id === userId));

    useEffect(() => {
        if (userId && userId !== undefined) dispatch(selectedUser(singleUser));
        return () => {
            dispatch(removeSelectedUser());
        };
    }, []);

    const handleUpdateUser = (user) => {
        updateEntry(user);
    };
    return (
        <><DrawerTitle title={ "user_details" } />
            <DrawerForm initialValues={ singleUser } validationSchema={ UserValidationSchema } updateEntry={ handleUpdateUser }>
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