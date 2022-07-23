import { A } from '~/components/A';

export default function Index() {
  return (
    <div className="container p-4">
      <h1 className="text-xl font-bold">CONG VU</h1>
      <div className="h-2" />
      <ul>
        <li>
          <A
            target="_blank"
            href="https://soundcloud.com/cong_vu"
            rel="noreferrer"
          >
            soundcloud
          </A>
        </li>
        <li>
          <A
            target="_blank"
            href="https://instagram.com/cong_vu"
            rel="noreferrer"
          >
            instagram
          </A>
        </li>
        <li>
          <A
            target="_blank"
            href="https://www.youtube.com/channel/UCJE2B7eU86iLhk6p467XcJQ"
            rel="noreferrer"
          >
            youtube
          </A>
        </li>
      </ul>
      <div>
        <img src="" />
      </div>
    </div>
  );
}
