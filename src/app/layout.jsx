"use client";
import DefaultLayout from "@/components/LayoutComponents/DefaultLayout";
import Dashboard from "@/components/LayoutComponents/DefaultLayout";
import ResponsiveDrawer from "@/components/LayoutComponents/DefaultLayout";
import store from "@/store/store";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="tr">
        <body>
          <main>
            {/* <DefaultLayout>{children}</DefaultLayout> */}
            <ResponsiveDrawer>{children}</ResponsiveDrawer>
          </main>
        </body>
      </html>
    </Provider>
  );
}
