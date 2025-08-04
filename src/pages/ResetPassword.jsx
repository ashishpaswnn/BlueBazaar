import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { auth } from '../firebase';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get('oobCode');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (oobCode) {
      verifyPasswordResetCode(auth, oobCode)
        .then((email) => {
          setEmail(email);
        })
        .catch(() => {
          setError('Invalid or expired reset link.');
        });
    }
  }, [oobCode]);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setSuccess(true);
    } catch (err) {
      setError('Could not reset password. Try again.');
    }
  };

  if (success) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Password Reset Successful</h2>
        <p>You can now login with your new password.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Reset Your Password</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {email && <p>Resetting password for: <strong>{email}</strong></p>}
      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          required
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', margin: '1rem 0' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
