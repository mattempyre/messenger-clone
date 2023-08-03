import './globals.css';
import type { Metadata } from 'next';
import ToasterContenxt from './context/ToasterContext';
import AuthContext from './context/AuthContext';
import VaulModal from './components/modals/VaulModal';
import ActiveStatus from './components/ActiveStatus';

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
        <AuthContext>
          <ToasterContenxt />
          <ActiveStatus />
          {children}
        </AuthContext>
        <VaulModal />
      </body>
    </html>
  );
}
