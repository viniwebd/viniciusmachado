import { NavBar } from "@/components/NavBar";
import { GradualBlur } from "@/components/GradualBlur";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <GradualBlur />
    </>
  );
}
