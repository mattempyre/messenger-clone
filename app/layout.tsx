import './globals.css';
import type { Metadata } from 'next';
import ToasterContenxt from './context/ToasterContext';

export const metadata: Metadata = {
  title: 'Messenger Clone',
  description: 'Messenger Clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToasterContenxt />
        {children}
      </body>
    </html>
  );
}
