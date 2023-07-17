import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <div className="w-[34px] h-[34px] flex flex-col justify-between bg-white rounded-lg p-2 overflow-hidden cursor-pointer">
        <span className="w-full h-[2px]  bg-black"></span>
        <span className="w-full h-[2px]  bg-black"></span>
        <span className="w-full h-[2px]  bg-black"></span>
      </div>
    </nav>
  );
};

export default Navbar;
