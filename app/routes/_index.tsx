import { type MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "CONG VU" }, { name: "description", content: "Hello" }];
};

const LINKS = [
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/cong_vu",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        height="1em"
      >
        <path d="M639.8 298.6c-1.3 23.1-11.5 44.8-28.4 60.5s-39.2 24.4-62.3 24.1h-218c-4.8 0-9.4-2-12.8-5.4s-5.3-8-5.3-12.8V130.2c-.2-4 .9-8 3.1-11.4s5.3-6.1 9-7.7c0 0 20.1-13.9 62.3-13.9c25.8 0 51.1 6.9 73.3 20.1c17.3 10.2 32.3 23.8 44.1 40.1s20 34.8 24.2 54.4c7.5-2.1 15.3-3.2 23.1-3.2c11.7-.1 23.3 2.2 34.2 6.7S606.8 226.6 615 235s14.6 18.3 18.9 29.3s6.3 22.6 5.9 34.3zm-354-153.5c.1-1 0-2-.3-2.9s-.8-1.8-1.5-2.6s-1.5-1.3-2.4-1.7s-1.9-.6-2.9-.6s-2 .2-2.9 .6s-1.7 1-2.4 1.7s-1.2 1.6-1.5 2.6s-.4 1.9-.3 2.9c-6 78.9-10.6 152.9 0 231.6c.2 1.7 1 3.3 2.3 4.5s3 1.8 4.7 1.8s3.4-.6 4.7-1.8s2.1-2.8 2.3-4.5c11.3-79.4 6.6-152 0-231.6zm-44 27.3c-.2-1.8-1.1-3.5-2.4-4.7s-3.1-1.9-5-1.9s-3.6 .7-5 1.9s-2.2 2.9-2.4 4.7c-7.9 67.9-7.9 136.5 0 204.4c.3 1.8 1.2 3.4 2.5 4.5s3.1 1.8 4.8 1.8s3.5-.6 4.8-1.8s2.2-2.8 2.5-4.5c8.8-67.8 8.8-136.5 .1-204.4zm-44.3-6.9c-.2-1.8-1-3.4-2.3-4.6s-3-1.8-4.8-1.8s-3.5 .7-4.8 1.8s-2.1 2.8-2.3 4.6c-6.7 72-10.2 139.3 0 211.1c0 1.9 .7 3.7 2.1 5s3.1 2.1 5 2.1s3.7-.7 5-2.1s2.1-3.1 2.1-5c10.5-72.8 7.3-138.2 .1-211.1zm-44 20.6c0-1.9-.8-3.8-2.1-5.2s-3.2-2.1-5.2-2.1s-3.8 .8-5.2 2.1s-2.1 3.2-2.1 5.2c-8.1 63.3-8.1 127.5 0 190.8c.2 1.8 1 3.4 2.4 4.6s3.1 1.9 4.8 1.9s3.5-.7 4.8-1.9s2.2-2.8 2.4-4.6c8.8-63.3 8.9-127.5 .3-190.8zM109 233.7c0-1.9-.8-3.8-2.1-5.1s-3.2-2.1-5.1-2.1s-3.8 .8-5.1 2.1s-2.1 3.2-2.1 5.1c-10.5 49.2-5.5 93.9 .4 143.6c.3 1.6 1.1 3.1 2.3 4.2s2.8 1.7 4.5 1.7s3.2-.6 4.5-1.7s2.1-2.5 2.3-4.2c6.6-50.4 11.6-94.1 .4-143.6zm-44.1-7.5c-.2-1.8-1.1-3.5-2.4-4.8s-3.2-1.9-5-1.9s-3.6 .7-5 1.9s-2.2 2.9-2.4 4.8c-9.3 50.2-6.2 94.4 .3 144.5c.7 7.6 13.6 7.5 14.4 0c7.2-50.9 10.5-93.8 .3-144.5zM20.3 250.8c-.2-1.8-1.1-3.5-2.4-4.8s-3.2-1.9-5-1.9s-3.6 .7-5 1.9s-2.3 2.9-2.4 4.8c-8.5 33.7-5.9 61.6 .6 95.4c.2 1.7 1 3.3 2.3 4.4s2.9 1.8 4.7 1.8s3.4-.6 4.7-1.8s2.1-2.7 2.3-4.4c7.5-34.5 11.2-61.8 .4-95.4z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cong_vu",
    icon: (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "bandcamp",
    href: "https://congvu.bandcamp.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="1em"
      >
        <path d="M256 8C119 8 8 119 8 256S119 504 256 504 504 393 504 256 393 8 256 8zm48.2 326.1h-181L207.9 178h181z" />
      </svg>
    ),
  },
  {
    name: "mail",
    href: "mailto:info.congvu@gmail.com",
    icon: (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const WORKS = [
  {
    name: "太平簫(TAEPYEONGSO)TEK VIP",
    href: "https://soundcloud.com/cong_vu/taepyeonsotek-vip?si=dfd4ec8f5c60445385666e0ff01aa205&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    name: "太平簫(TAEPYEONGSO)TEK",
    href: "https://soundcloud.com/cong_vu/cv-taepyongso-69?si=ab942bae161542588e431ab3b2619d70&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    name: "160 YS",
    href: "https://jukeunderground.bandcamp.com/track/160-ys-cong-vu",
  },
  {
    name: "Vin Soni",
    href: "https://jukeunderground.bandcamp.com/track/vin-soni-cong-vu",
  },
  {
    name: "第3TEK",
    href: "https://congvu.bandcamp.com/track/3tek"
  },
  {
    name: "Midnite",
    href: "https://soundcloud.com/cong_vu/cong-vu-cong-vu-cdr-ii-07-midnite?si=0057765f713b482498c448eda278c45b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  // {
  //   name: "SES 999",
  //   href: "https://soundcloud.com/cong_vu/ses-999?si=f8c899340a33415eb178e662da2354cb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  // },
];

const MIXES = [
  {
    name: "BOTTOM BASS 바텀베이스 🍑 🍆 | CLUB, VOGUE, TRANCE(?) | SCR LIVE 2024.10.09",
    href: "https://www.youtube.com/live/u0eX8hh3YcQ?si=HDJmhbYWKgVH0cPo",
  },
];

export default function Index() {
  return (
    <div className="p-4 grid grid-cols-8 lg:grid-cols-24 row-auto col-auto h-dvh font-mono">
      <h1 className="text-4xl col-start-1 mt-12 h-min col-span-full text-center">
        CONG VU
      </h1>
      <section className="col-start-1 h-min grid gap-2 col-span-full grid-cols-subgrid mt-12">
        <h2 className="col-span-full">Latest Mixes</h2>
        {MIXES.map((mix) => (
          <a
            href={mix.href}
            key={mix.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-md text-center col-span-full border-[1px] hover:shadow-md transition-all py-4 border-gray-500 "
          >
            {mix.name}
          </a>
        ))}
      </section>
      <section className="col-start-1 h-min grid gap-2 col-span-full grid-cols-subgrid">
        <h2>Tracks</h2>
        {WORKS.map((work) => (
          <a
            href={work.href}
            key={work.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-md text-center col-span-full border-[1px] hover:shadow-md transition-all py-4 border-gray-500 "
          >
            <button type="button" className="text-center col-span-full">
              {work.name}
            </button>
          </a>
        ))}
      </section>
      <section className="col-start-1 h-min grid gap-2 col-span-full grid-cols-subgrid">
      <ul className="flex justify-center items-center text-2xl py-4 h-min gap-4 col-start-1 col-span-full">
        {LINKS.map((link) => (
          <li
            key={link.name}
            className="hover:scale-105 lowercase transition-all"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="h-5 w-5"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      </section>
    </div>
  );
}
