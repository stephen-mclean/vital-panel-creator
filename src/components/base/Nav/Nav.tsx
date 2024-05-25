import { NavItem } from "./NavItem";

export const Nav = () => {
  return (
    <nav className="bg-white border-b md:border-b-0 md:border-r border-gray-100 flex md:flex-col items-center justify-center md:justify-normal w-full md:w-64 h-16 md:h-screen md:p-4 gap-8">
      <i className="fa-regular fa-square text-3xl"></i>
      <div className="w-full hidden md:block">
        <NavItem to="/" icon="fa-solid fa-house" label="Home" />
      </div>
    </nav>
  );
};
