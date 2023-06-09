import Footer from "../../../components/layout/Footer";
import Header from "../../../components/layout/Header";

export const metadata = {
  title: "Profile ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
