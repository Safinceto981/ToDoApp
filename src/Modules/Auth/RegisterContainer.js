import React, { useState } from "react";
import RegisterPresenter from "./components/RegisterPresenter";
import firebase from '../../firebase';

export default function LoginContainer(props) {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const { name, email, password, confirmPassword } = inputValues;
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    setInputValues({
      ...inputValues,
      name: inputValues,
      email: trimmedEmail,
      password: trimmedPassword,
      confirmPassword: trimmedConfirmPassword,
    });
    let newErrors = {};
    if (trimmedPassword.length < 5) {
      newErrors.password = 'error';
    } else {
      newErrors.password = null;
    }
    if (name.length < 2) {
      newErrors.name = 'error';
    } else {
      newErrors.password = null;
    }
    if (trimmedEmail !== '') {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(trimmedEmail) || trimmedEmail.length < 4) {
        newErrors.email = 'error';
      } else if (pattern.test(trimmedEmail)) {
        newErrors.email = null;
      }
    }
    if (trimmedConfirmPassword !== password) {
      newErrors.confirmPassword = 'error';
    } else if (trimmedConfirmPassword.length < 5) {
      newErrors.confirmPassword = 'error';
    } else {
      newErrors.confirmPassword = null;
    }

    setErrors(newErrors);
    return newErrors.email || newErrors.password || newErrors.confirmPassword;
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // const { name, email, password } = inputValues;
    validate();


    async function createAcc(e) {
      e.preventDefault();
      if (validate() == null) {
        try {
          await firebase.register(inputValues.name, inputValues.email, inputValues.password);


          props.history.push('/login');

        } catch (error) {
          alert(error.message);

        }

      }
    };
    createAcc();
  };

  return (
    <div>
      <RegisterPresenter errors={errors}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputValues={inputValues} />
    </div>
  );
}
