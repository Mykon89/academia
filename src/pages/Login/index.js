import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form action="" className="login-form">
            <span className="login-form-title">
              <img src="#" alt="logo" />
            </span>

            <span className="login-form-title">Login</span>

            <div className="wrap-input">
              <input
                className={email !== '' ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email" />
            </div>

            <div className="wrap-input">
              <input
                className={password !== '' ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password" />
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a href="#href" id="ahref" className="txt2">
                Criar conta.
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
