import React from 'react';
import { FormItem, LoginLink, Submit } from '../../styles';

export const Signup = ({ setModalType }) => (
  <>
    <FormItem>
      <span className="material-icons">
        person
      </span>
      <input className="form-input" name="nome" type="text" placeholder="Nome" />
    </FormItem>
    <FormItem>
      <span className="material-icons">
        email
      </span>
      <input className="form-input" name="email" type="email" placeholder="Email" />
    </FormItem>
    <FormItem>
      <span className="material-icons">
        lock
      </span>
      <input className="form-input" name="senha" type="password" placeholder="Senha" />
    </FormItem>
    <Submit type="submit">REGISTRAR-SE</Submit>
    <LoginLink onClick={() => setModalType(2)}>Já possui uma conta?</LoginLink>
  </>
);
