import React from 'react'
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const RegisterPresenter = ({
  handleChange,
  inputValues,
  handleSubmit,
  errors,
}) => {
  return (
    <div>
      <Helmet>
        <title>Регистрация | BeActive</title>
      </Helmet>
      <h1>Регистрация</h1>

      <div>
        <form>
          <input
            placeholder="Ime"
            type="text"
            errors={errors.name}
            value={inputValues.name}
            onChange={handleChange}
            name="name"
          />

          <input
            placeholder="Имейл адрес"
            type="email"
            errors={errors.email}
            value={inputValues.email}
            onChange={handleChange}
            name="email"
          />

          <input
            errors={errors.password}
            placeholder="Парола"
            type="password"
            value={inputValues.password}
            onChange={handleChange}
            name="password"
          />

          <input
            errors={errors.confirmPassword}
            placeholder="Парола"
            type="password"
            value={inputValues.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />

          <button onClick={handleSubmit} >Регистрация</button>
        </form>
      </div>
      <Link to="/login">
        Имате вече профил? Може да влезете от ТУК
      </Link>
    </div>
  );
};

export default RegisterPresenter;

RegisterPresenter.propTypes = {
  register: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
};