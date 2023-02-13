import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit', { email, password });
    login(email, password); // integração com o meu contexto e api
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div>Logo</div>
      <div>Login</div>
      <p>{String(authenticated)}</p>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Entrar
      </button>
      <button className="btn btn-secondary">
        <Link to="/landing">Landing Page</Link>
      </button>
    </form>
  );
};

export default LoginPage;
