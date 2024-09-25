import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext/page";
import LayoutManager from "./layoutManager";

export const metadata = {
  title: "Admin Panel",
  description: "Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <LayoutManager>{children}</LayoutManager>
        </ThemeProvider>
      </body>
    </html>
  );
}
