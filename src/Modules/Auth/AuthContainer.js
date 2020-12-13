import React, { useState } from "react";
import AuthPresenter from "./components/AuthPresenter";
import firebase from '../../firebase';

export default function AuthContainer(props) {

    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const { email, password } = inputValues;
        let newErrors = {};
        if (password.length < 5) {
            newErrors.password = 'error';
        } else if (password.length > 5) {
            newErrors.password = null;
        }
        if (email !== '') {
            let pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(email) || email.length < 4) {
                newErrors.email = 'error';
            } else if (pattern.test(email)) {
                newErrors.email = null;
            }
        }
        setErrors(newErrors);
        return !Object.keys(newErrors).length;
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = inputValues;
        validate();

        async function logAccount() {
            if (validate() === false) {
                try {
                    await firebase.login(email, password);
                    props.history.replace('/');
                }
                catch (error) {
                    alert(error);
                }


            }
        };
        logAccount();
    };



    return (
        <div>
            <AuthPresenter errors={errors}
                inputValues={inputValues}
                handleChange={handleChange}
                onSubmit={onSubmit} />
        </div>
    );
}
