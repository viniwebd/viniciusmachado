import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <section className="w-full bg-white">
        <div className="container-page flex min-h-[70vh] flex-col items-start justify-center gap-[16px] py-[64px]">
          <p className="text-[64px] font-medium leading-none tracking-[-0.045em] text-black lg:text-[96px]">
            404
          </p>
          <p className="max-w-[520px] text-[18px] leading-[24px] tracking-[-0.015em] text-[#706b6b] lg:text-[20px] lg:leading-[28px]">
            Esta página não existe. Use os links para encontrar o caminho de volta.
          </p>
        </div>
      </section>
      <Footer fixed={false} />
    </>
  );
}
