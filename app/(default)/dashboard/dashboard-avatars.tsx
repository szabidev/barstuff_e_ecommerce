import Image from "next/image";
import Link from "next/link";
import User01 from "@/public/images/user-36-01.jpg";
import User02 from "@/public/images/user-36-02.jpg";
import User03 from "@/public/images/user-36-03.jpg";
import User04 from "@/public/images/user-36-04.jpg";
import { useAppProvider } from "@/app/app-provider";

export default function DashboardAvatars() {
  const { barStaff } = useAppProvider();
  return (
    <ul className="flex flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px">
      {barStaff.map((staff) => (
        <li key={staff.id}>
          <Link className="block" href="#0">
            <Image
              className="w-9 h-9 rounded-full"
              src={User01}
              width={36}
              height={36}
              alt={staff.name}
            />
          </Link>
        </li>
      ))}
      <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500 shadow-sm transition duration-150 ml-2">
        <span className="sr-only">Add new user</span>
        <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
          <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
        </svg>
      </button>
    </ul>
  );
}
