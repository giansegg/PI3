import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>PaltaBot</title>
        <meta name="description" content="PaltaBot landing page" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
