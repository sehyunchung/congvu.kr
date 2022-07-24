import { Anchor } from "~/components/Anchor";

export default function Index() {
  return (
    <div className="container p-4">
      <h1 className="text-xl font-bold">CONG VU</h1>
      <div className="h-2" />
      <ul>
        <li>
          <Anchor
            target="_blank"
            href="https://soundcloud.com/cong_vu"
            rel="noreferrer"
          >
            soundcloud
          </Anchor>
        </li>
        <li>
          <Anchor
            target="_blank"
            href="https://instagram.com/cong_vu"
            rel="noreferrer"
          >
            instagram
          </Anchor>
        </li>
        <li>
          <Anchor
            target="_blank"
            href="https://www.youtube.com/channel/UCJE2B7eU86iLhk6p467XcJQ"
            rel="noreferrer"
          >
            youtube
          </Anchor>
        </li>
      </ul>
      <div>
        <img src="" />
      </div>
    </div>
  );
}
