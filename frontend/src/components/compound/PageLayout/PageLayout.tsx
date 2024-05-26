import { PropsWithChildren } from "react";
import { Nav } from "../../base/Nav/Nav";

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex flex-col md:flex-row bg-white">
      <Nav />
      <div className="p-8 flex flex-1 flex-col gap-6 max-h-screen overflow-y-scroll">
        {children}
      </div>
    </section>
  );
};
