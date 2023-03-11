import "./globals.css";

import "@fontsource/gothic-a1";

export const metadata = {
  title: "Cong Vu",
  description: "Hi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
