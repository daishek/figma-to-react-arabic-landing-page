import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <ul className="hidden md:flex gap-x-[44px] ">
        <li className="cursor-pointer text-[20px] text-white font-[700]">
          الرحلات
        </li>
        <li className="cursor-pointer text-[20px] text-white font-[700]">
          الخدمات
        </li>
        <li className="cursor-pointer text-[20px] text-white font-[700]">
          الأسعار
        </li>
        <li className="cursor-pointer text-[20px] text-white font-[700]">
          آراء العملاء
        </li>
        <li className="cursor-pointer text-[20px] text-white font-[700]">
          اتصل بنا
        </li>
      </ul>
      <div className="hidden cursor-pointer md:flex items-center gap-x-[12px] text-[20px] font-[700]">
        يوتيوب
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="30"
          viewBox="0 0 42 30"
          fill="none"
        >
          <rect width="42" height="30" rx="15" fill="white" />
          <path
            d="M27 15.5L17.25 21.1292L17.25 9.87083L27 15.5Z"
            fill="#191919"
          />
        </svg>
      </div>
      <div className="w-[34px] h-[34px] flex flex-col justify-between bg-white rounded-lg p-2 overflow-hidden cursor-pointer md:hidden">
        <span className="w-full h-[2px]  bg-black"></span>
        <span className="w-full h-[2px]  bg-black"></span>
        <span className="w-full h-[2px]  bg-black"></span>
      </div>
    </nav>
  );
};

export default Navbar;
