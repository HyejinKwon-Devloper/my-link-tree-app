import Image from "next/image";
import TravleImg from "@/app/styles/img/travel_profile.jpg";
import blog from "@/app/styles/img/blog.png";
import instagram from "@/app/styles/img/instagram.png";
import youtube from "@/app/styles/img/youtube144x144.png";

export default function Home() {
  return (
    <div className="min-w-screen grid grid-rows-max items-center justify-items-center min-h-screen gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center gap-4">
          <Image
            className={"rounded-full"}
            src={TravleImg}
            alt="@_enjoy.jin's profile"
            width={135}
            height={38}
            priority
          />
          <span>@_enjoy.jin</span>
        </div>

        <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            <a
              className="dark:text-black rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagram}
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              instagram
            </a>
          </li>
          <li className="mb-2">
            <a
              className="dark:text-black rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href={""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={youtube}
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              youtube
            </a>
          </li>
          <li className="mb-2">
            <a
              className="dark:text-black rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href={""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={blog} alt="Vercel logomark" width={20} height={20} />
              blog
            </a>
          </li>
        </ul>
      </main>
      <footer>
        <div className="flex flex-nowrap gap-2 md:text-wrap">
          <div className="flex flex-none">
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
          </div>
          <div className="flex flex-shrink-0">
            <p className="text-nowrap text-xs sm:text-xs md:text-sm lg:text-base ">
              Copyright ©월드와이드찐. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
