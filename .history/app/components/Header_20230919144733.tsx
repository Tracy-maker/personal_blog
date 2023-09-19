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
      <div>
        <Link
          className="text-[#4169E1] font-bold ml-2"
          href="https://www.linkedin.com/in/hang-gao-96728b292/"
        >
          https://www.linkedin.com/in/hang-gao-96728b292/
        </Link>
      </div>
    </header>
  );
}

export default Header;
