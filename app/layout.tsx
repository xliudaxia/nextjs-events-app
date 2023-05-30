import Layout from "@/components/layout/layout";
import { Metadata } from 'next';
import "./globals.css";


export const metadata: Metadata = {
  title: 'Next Events',
  description:
    'Welcome visit Next Events, explore what you want ...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
