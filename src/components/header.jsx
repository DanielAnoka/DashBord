import { navData } from "../constants";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-4 bg-white shadow-md rounded-[70px] opacity-100 fixed top-[18px] left-[18px] w-[calc(100%-36px)]">
      <img src="/assets/TestLogo.svg" />

      <div className="flex space-x-8">
        {navData.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center space-x-2 text-[#072635] font-medium hover:text-blue-500 transition-colors"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-[22px] h-[20px]"
            />
            <span>{item.title}</span>
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <img
          src="/assets/doctor.png"
          alt="User Profile"
          className="w-[44px] h-[44px] rounded-full border-2 border-blue-500"
        />
        <div className="flex flex-col">
          <span className="text-[#072635] font-medium">Dr. Jose Simmons</span>
          <span className="text-sm text-[#707070]">General Practitioner</span>
        </div>
        <div className="border-l-2 h-8 mx-4 text-[#EDEDED]"></div>{" "}
       
        <div className="flex items-center space-x-2">
          <img
            src="/assets/icons/setting.png"
            alt="Image 1"
            className="w-[19px] h-[20px] rounded-full"
          />
          <img
            src="/assets/icons/more.png"
            alt="Image 2"
            className="w-[4px] h-[18px] rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
