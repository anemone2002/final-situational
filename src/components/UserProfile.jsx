import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null); // 'success' or 'error'

  useEffect(() => {
    // Fetch user data from server when component mounts
    axios.get('http://yourserver.com/api/user-profile')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        setMessage('Failed to load user data: ' + (error.response?.data?.message || error.message));
        setMessageType('error');
      });
  }, []);

  const formik = useFormik({
    enableReinitialize: true, // Enable reinitializing form values when user data is fetched
    initialValues: {
      name: user?.name || '',
      email: user?.email || '',
      registrationDate: user?.registrationDate || ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required')
    }),
    onSubmit: values => {
      setMessage(null); // Reset message
      axios.put('http://yourserver.com/api/user-profile', values)
        .then(response => {
          setMessage('Profile updated successfully');
          setMessageType('success');
        })
        .catch(error => {
          setMessage('Failed to update profile: ' + (error.response?.data?.message || error.message));
          setMessageType('error');
        });
    }
  });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {message && (
        <div className={`message ${messageType}`}>
          {message}
        </div>
      )}
      <form onSubmit={formik.handleSubmit} className="user-profile-form">
        <label>Name</label>
        <input type="text" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}

        <label>Email</label>
        <input type="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

        <label>Registration Date</label>
        <input type="text" value={formik.values.registrationDate} readOnly />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UserProfile;