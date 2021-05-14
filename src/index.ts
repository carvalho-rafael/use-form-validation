import { MutableRefObject, useEffect, useState } from "react";

import { ObjectSchema } from 'yup';

interface FormFieldsErrors {
    [key: string]: string[]
}

export default function useFormValidation() {
    const [errors, setErrors] = useState<FormFieldsErrors>({});

    let formSchemaState: ObjectSchema<any>;

    useEffect(() => {
        return () => {
            //limpar listeners
        }
    })

    function registry(formSchema: ObjectSchema<any>, refs: MutableRefObject<HTMLInputElement>[]) {
        formSchemaState = formSchema;

        refs.map(ref => {
            ref.current.addEventListener('blur', () => _registryField(ref))
        })

        return false;
    }

    function _registryField(ref: MutableRefObject<HTMLInputElement>) {
        let body = {}

        const refName = ref.current.name
        let refValue = ref.current.value

        const hasMask = ref.current.hasAttribute('mask');

        if (hasMask) {
            refValue = refValue.replace(/[^\d]/g, '');
        }

        body[refName] = refValue

        formSchemaState.validateAt(refName, body).then(() => {
            setErrors(prevState => {
                const copy = { ...prevState }
                copy[refName] = undefined
                return copy
            });
        }).catch(err => {
            const error = {};
            error[err.path] = err.errors
            setErrors(prevState => ({ ...prevState, ...error }));

        })
    }

    return { errors, registry };
}