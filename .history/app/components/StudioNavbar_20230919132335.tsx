import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#4169E1] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-[#4169E1] " />
          Go To Website
        </Link>
        <div className="hidden md:flex flex-col p-5 rounded-lg justify-center border-2 border-[#4169E1]">
          <h1 className="font-bold text-white">
            Want to learn more about art or buy art? Feel free to add my work
            social media platform.
          </h1>
          <Link
            className="text-[#4169E1] font-bold ml-2"
            href="https://www.linkedin.com/in/hang-gao-96728b292/"
          >
            https://www.linkedin.com/in/hang-gao-96728b292/
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
