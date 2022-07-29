import { LinksFunction } from "@remix-run/node";

import { BorderedAnchor } from "~/components/Anchor";
import { SkyBg } from "~/components/Three";

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      as: "image",
      href: "/stars.gif",
    },
  ];
};

export default function Index() {
  return (
    <div className="antialiased h-screen w-screen flex flex-col justify-center items-center font-comic text-lg">
      <div className="absolute z-10">
        <h1 className="relative font-serif text-9xl text-white text-center pointer-events-none">
          Cong Vu
        </h1>
        <div className="h-8" />
        <ul className="flex gap-4 flex-wrap justify-center" aria-label="links">
          <li aria-label="mail link">
            <BorderedAnchor
              className="bg-gradient-to-r from-sky-500/75 to-indigo-500/75"
              target="_blank"
              href="mailto:info.congvu@gmail.com"
              rel="noreferrer"
            >
              mail
            </BorderedAnchor>
          </li>
          <li aria-label="soundcloud link">
            <BorderedAnchor
              className="bg-gradient-to-r from-orange-400/75 to-red-500/75"
              target="_blank"
              href="https://soundcloud.com/cong_vu"
              rel="noreferrer"
            >
              soundcloud
            </BorderedAnchor>
          </li>
          <li aria-label="instagram link">
            <BorderedAnchor
              className="bg-gradient-to-r from-pink-600/75 to-amber-800/75"
              target="_blank"
              href="https://instagram.com/cong_vu"
              rel="noreferrer"
            >
              instagram
            </BorderedAnchor>
          </li>
          <li aria-label="youtube link">
            <BorderedAnchor
              className="bg-gradient-to-r from-red-500/75 to-red-800/75"
              target="_blank"
              href="https://www.youtube.com/channel/UCJE2B7eU86iLhk6p467XcJQ"
              rel="noreferrer"
            >
              youtube
            </BorderedAnchor>
          </li>
        </ul>
      </div>
      <SkyBg />
    </div>
  );
}
