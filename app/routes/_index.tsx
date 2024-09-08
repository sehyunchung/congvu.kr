import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "CONG VU" }, { name: "description", content: "Hello" }];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">CONG VU</h1>
    </div>
  );
}
