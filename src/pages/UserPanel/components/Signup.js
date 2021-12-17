/* eslint-disable no-alert */
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { FormItem, LoginLink, Submit } from '../../styles';
import { Context } from '../../utils/Context';

export const Signup = () => {
  const [userData, setUserData] = useState({ name: null, email: null, password: null });
  const { setModalType } = useContext(Context);

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/users`, userData)
      .then(() => {
        window.alert('Usuário criado com sucesso!');
        setModalType(2);
      }).catch((err) => {
        window.alert(err.response.data.error);
      });
  };

  const handleDataChange = (e, target) => {
    const newValue = e.target.value.trim() === '' ? null : e.target.value.trim();
    setUserData((prev) => ({ ...prev, [target]: newValue }));
  };

  return (
    <>
      <FormItem>
        <span className="material-icons">
          person
        </span>
        <input
          onChange={(e) => handleDataChange(e, 'name')}
          required
          className="form-input"
          name="name"
          type="text"
          placeholder="Nome"
        />
      </FormItem>
      <FormItem>
        <span className="material-icons">
          email
        </span>
        <input
          onChange={(e) => handleDataChange(e, 'email')}
          required
          className="form-input"
          name="email"
          type="email"
          placeholder="Email"
        />
      </FormItem>
      <FormItem>
        <span className="material-icons">
          lock
        </span>
        <input
          onChange={(e) => handleDataChange(e, 'password')}
          required
          className="form-input"
          name="password"
          type="password"
          placeholder="Senha"
        />
      </FormItem>
      <Submit name="action" value={1} onClick={handleSignup}>REGISTRAR-SE</Submit>
      <LoginLink onClick={() => setModalType(2)}>Já possui uma conta?</LoginLink>
    </>
  );
};
