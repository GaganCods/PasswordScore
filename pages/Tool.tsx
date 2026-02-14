import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PasswordStrengthTool } from '../components/PasswordStrengthTool';

export const Tool: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Password Strength Checker | PasswordScore</title>
        <meta name="description" content="Instantly analyze your password strength, entropy, and crack time. Secure, client-side, and private." />
        <meta property="og:title" content="Password Strength Checker | PasswordScore" />
        <meta property="og:description" content="Check how secure your password is against modern attacks." />
      </Helmet>
      
      <PasswordStrengthTool />
    </>
  );
};