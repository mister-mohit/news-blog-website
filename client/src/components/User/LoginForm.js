import { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error message when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Add your password validation logic here
    return password.length >= 6; // Example: Password should be at least 6 characters long
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const emailError = validateEmail(email) ? '' : 'Please enter a valid email';
    const passwordError = validatePassword(password) ? '' : 'Password should be at least 6 characters long';

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (emailError || passwordError) {
      // Form has errors, do not submit
      return;
    }

    // Form is valid, submit the data (e.g., send API request for authentication)
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={errors.email ? errors.email : 'Enter your email'}
          style={{ borderColor: errors.email ? 'red' : '' }}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={errors.password ? errors.password : 'Enter your password'}
          style={{ borderColor: errors.password ? 'red' : '' }}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
