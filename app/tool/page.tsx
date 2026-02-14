import { Metadata } from 'next';
import { PasswordStrengthTool } from '@/components/PasswordStrengthTool';

export const metadata: Metadata = {
  title: 'Password Strength Checker | Test Password Security',
  description: 'Instantly check how secure your password is. Our tool analyzes entropy, estimates crack time, and provides improvement suggestions privately in your browser.',
};

export default function ToolPage() {
  return <PasswordStrengthTool />;
}