import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://i.ibb.co/tcTYJh0/Wechat-IMG6490.png"
            width={300}
            height={300}
            alt="logo"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
