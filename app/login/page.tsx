"use client"
import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('@/components/Login'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

export default function LoginPage() {
  return <LoginForm />;
}