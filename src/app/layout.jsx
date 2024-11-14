import DefaultLayout from "@/components/LayoutComponents/DefaultLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <main>
          <DefaultLayout>{children}</DefaultLayout>
        </main>
      </body>
    </html>
  );
}
