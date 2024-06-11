import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null); 

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required')
    }),
    onSubmit: values => {
      setMessage(null);
      axios.post('http://yourserver.com/api/login', values)
        .then(response => {
          setMessage('Login successful');
          setMessageType('success');
        
          window.location.href = '/main';
        })
        .catch(error => {
          setMessage('Login failed: ' + (error.response?.data?.message || error.message));
          setMessageType('error');
        });
    }
  });

  return (
    <div>
      {message && (
        <div className={`message ${messageType}`}>
          {message}
        </div>
      )}
      <form onSubmit={formik.handleSubmit} className="login-form">
        <label>Email</label>
        <input type="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

        <label>Password</label>
        <input type="password" {...formik.getFieldProps('password')} />
        {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;