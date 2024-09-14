// import Footer from "@components/footer/Footer";
import Nav from "@components/navbar/Nav";
import { ReactNode } from "react";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="min-h-screen max-w-[100rem] flex flex-col justify-between">
      <Nav />
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default MainLayout;
