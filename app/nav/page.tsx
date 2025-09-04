import Image from "next/image";
import { Search, Home } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Navlink() {
  return (
    <div className="h-[10vh] w-full flex items-center px-6 ">
      <div className="flex items-center space-x-3">
        <Image
          src="/logo.png"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[6vh] w-[6vh] rounded-full object-cover " 
        />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-full bg-[#262626] cursor-pointer hover:bg-[#333] transition">
             
          <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Home size={23} className="text-white text-lg cursor-pointer hover:text-[#121212]-500 transition" />
        </a>
          </div>

          <div className="flex items-center bg-[#121212] text-white px-4 rounded-[32px] h-[6vh] w-[50vh]">
            <Search size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className="bg-transparent outline-none w-full text-sm placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      

      <div className="ml-auto flex items-center  space-x-6 text-white">
        <a
          href="https://github.com/Mohandev2004"
          target="Github"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} className="cursor-pointer hover:text-green-500 transition" />
        </a>
      </div>
    </div>
  );
}
