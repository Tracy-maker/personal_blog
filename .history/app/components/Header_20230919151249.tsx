import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center ">
        <Link href="/">
          <Image
            src="https://i.ibb.co/tcTYJh0/Wechat-IMG6490.png"
            width={300}
            height={300}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex space-x-4 items-center justify-between">
        <h1 className="sm:hidden">
        To contact me, click here 👉
        </h1>
        <a href="mailto:augustehang@gmail.com" target="_blank">
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-10 h-10 text-blue-500"
          >
            <path d="M4 4a3 3 0 00-3 3v6h6V7a3 3 0 00-3-3zm0-1h8a4 4 0 014 4v6a1 1 0 01-1 1H1a1 1 0 01-1-1V7a4 4 0 014-4zm2.646 1A3.99 3.99 0 018 7v6h7V7a3 3 0 00-3-3H6.646z" />
            <path d="M11.793 8.5H9v-1h5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 012 0z" />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
