import {  type MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "CONG VU" }, { name: "description", content: "Hello" }];
};

const LINKS = [
  { name: "SoundCloud", href: "https://soundcloud.com/cong_vu" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cong_vu",
  }
];

export default function Index() {
  return (
    <div className="font-sans p-4 grid place-items-center">
      <h1 className="text-3xl">CONG VU</h1>
      <ul>
      {LINKS.map((link) => (
        <li key={link.name}>
          <a href={link.href}>{link.name}</a>
        </li>
      ))}
      </ul>
      
    </div>
  );
}
