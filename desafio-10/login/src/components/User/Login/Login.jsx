import React from 'react';
import UIButton from 'components/UI/Button/Button';

import './Login.css';

const UserLogin = () => {
  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form autoComplete="nope">
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" autoComplete="off" />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" />
        </div>
        <div className="user-login__forget-password">
          <a href="/forget-password">Esqueci minha senha</a>
        </div>
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>

        <p className="user-login__create-account">
          Ainda não possui uma conta? <a href>Crie uma agora</a>
        </p>
      </form>
    </div>
  );
};

export default UserLogin;
