import { Form } from 'formik';
import { useSelector } from 'react-redux';
import { UserValidationSchema } from '../models/UserValidationSchema';
import { userFieldsArray } from '@my-org/shared/utils';
import { FormButtons, InputField, DrawerForm, DrawerTitle } from '@myorg/shared/components';
import { useFetchUser } from '../API/useFetchUser';
import { useUpdateUser } from '../API/useUpdateUser';

export function UserForm() {
  const { handleUpdateUser } = useUpdateUser();
  const singleUser = useSelector((state) => state.userDetails);
  const selectedUserDetails = singleUser.user !== undefined && singleUser.user;
  useFetchUser();
  useUpdateUser();

  return (
    <><DrawerTitle title={ "user_details" } />
      <DrawerForm initialValues={ selectedUserDetails } validationSchema={ UserValidationSchema } updateEntry={ handleUpdateUser }>
        { ({ values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
          <Form onSubmit={ handleSubmit }>
            { userFieldsArray.map(userFieldEntry => {
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