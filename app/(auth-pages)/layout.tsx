import "../globals.css"; 

export const metadata = {
  title: "Sign-Language-App | Register",
  description: "Authentication pages for the Next.js app",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {children}
        </div>
      </body>
    </html>
  );
}

