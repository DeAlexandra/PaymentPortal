/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import Toast from '../toast-alert/ToastAlert';
import { useToastNotification } from '@myorg/state';

export function ToastNotification() {
  const { toastState } = useToastNotification();
  const { open } = toastState;
  return (
    <>
      { open &&
        <Toast />
      }
    </>
  );
}
export default ToastNotification;