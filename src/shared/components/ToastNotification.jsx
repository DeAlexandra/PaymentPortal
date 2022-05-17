import React from 'react';
import Toast from './Toast';
import { useToastNotification } from '../custom_hooks/index';

export default function ToastNotification() {
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
