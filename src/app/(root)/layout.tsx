
import Header from "@/components/header";
import { useMenu } from "@/lib/context/menu-context";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
