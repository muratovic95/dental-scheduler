import './globals.css';
import { Inter } from 'next/font/google';
import { AuthProvider } from '../components/AuthProvider';
import Navbar from '../components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dental Scheduler',
  description: 'AI-powered scheduling for modern dental practices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
} 