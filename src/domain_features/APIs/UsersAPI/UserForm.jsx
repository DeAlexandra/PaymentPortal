import { Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import UserValidationSchema from '../../models/UserValidationSchema';
import { reset } from '../../../shared/context/redux/actions';
import store from '../../../shared/context/redux/store';
import { useGetFetchCall } from '../../../shared/custom_hooks/useFetchCall';
import { usePatchCall } from '../../../shared/custom_hooks/usePatchCall';
import useLocationId from '../../../shared/custom_hooks/useLocationId';
import userFieldsArray from '../../../shared/components/form/userFormFieldsArray';
import { FormButtons, InputField, DrawerForm, DrawerTitle } from '../../../shared/components/index';
export default function UserForm() {
    const navigate = useNavigate();
    const userId = useLocationId();
    const url = `http://localhost:3004/users/${userId}`;
    const { data: singleUser } = useGetFetchCall(url, "fail_fetch_user");
    const { updateEntry: updateUser } = usePatchCall(url, "fail_patch_user", "users");

    const cancelUpdateUser = () => {
        navigate(-1);
        store.dispatch(reset);
    };
    return (
        <><DrawerTitle title={ "user_details" } />
            <DrawerForm initialValues={ singleUser } validationSchema={ UserValidationSchema } updateEntry={ updateUser }>
                { ({ values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
                    <Form onSubmit={ handleSubmit }>
                        { userFieldsArray.map(userFieldEntry => {
                            return <InputField fieldName={ userFieldEntry } handleChange={ handleChange } handleBlur={ handleBlur } values={ values } touched={ touched } errors={ errors } />;
                        })
                        }
                        <FormButtons isSubmitting={ isSubmitting } cancelUpdate={ cancelUpdateUser } />
                    </Form>
                ) }
            </DrawerForm></>
    );
}