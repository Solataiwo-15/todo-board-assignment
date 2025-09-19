import { Providers } from "./providers";

export const metadata = {
  title: "Todo App",
  description: "Frontend Developer Task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
