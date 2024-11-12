"use client";
import Dashboard from "@/components/Dashboard";
import store from "@/store/store";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="tr">
        <body>
          <Dashboard />
          <main>{children}</main>
        </body>
      </html>
    </Provider>
  );
}
