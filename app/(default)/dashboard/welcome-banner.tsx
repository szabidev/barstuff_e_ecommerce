import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpg";
import { useAppProvider } from "@/app/app-provider";

export default function WelcomeBanner() {
  const { adminUser } = useAppProvider();
  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Background illustration */}
      {/* <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
        <svg width="319" height="198" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
            <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
            <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
              <stop stopColor="#A5B4FC" offset="0%" />
              <stop stopColor="#818CF8" offset="100%" />
            </linearGradient>
            <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
              <stop stopColor="#4338CA" offset="0%" />
              <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="rotate(64 36.592 105.604)">
              <mask id="welcome-d" fill="#fff">
                <use xlinkHref="#welcome-a" />
              </mask>
              <use fill="url(#welcome-b)" xlinkHref="#welcome-a" />
              <path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z" />
            </g>
            <g transform="rotate(-51 91.324 -105.372)">
              <mask id="welcome-f" fill="#fff">
                <use xlinkHref="#welcome-e" />
              </mask>
              <use fill="url(#welcome-b)" xlinkHref="#welcome-e" />
              <path fill="url(#welcome-c)" mask="url(#welcome-f)" d="M40.333-15.147h50v95h-50z" />
            </g>
            <g transform="rotate(44 61.546 392.623)">
              <mask id="welcome-h" fill="#fff">
                <use xlinkHref="#welcome-g" />
              </mask>
              <use fill="url(#welcome-b)" xlinkHref="#welcome-g" />
              <path fill="url(#welcome-c)" mask="url(#welcome-h)" d="M40.333-15.147h50v95h-50z" />
            </g>
          </g>
        </svg>
      </div> */}

      {/* Content */}
      <div className="relative flex justify-between items-start">
        <div>
          <div className="">
            {/* Start */}
            <div className="inline-flex items-center text-xs font-medium text-slate-100 dark:text-slate-300 bg-slate-700 rounded-full text-center px-2 py-0.5">
              <svg
                className="w-3 h-3 shrink-0 fill-current text-amber-500 mr-1"
                viewBox="0 0 12 12"
              >
                <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
              </svg>
              <span>Premium Subscription</span>
            </div>
            {/* End */}
          </div>
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">
            Good afternoon, {adminUser.name}. 👋
          </h1>
          <p className="dark:text-indigo-200">
            Here is what's happening with your projects today:
          </p>
        </div>
        <div>
          <div className="m-1.5">
            <div className="flex justify-end items-center">
              {/* Start */}
              <Image
                className="rounded-full"
                src={Avatar01}
                width={72}
                height={72}
                alt="Avatar"
              />
              {/* End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
