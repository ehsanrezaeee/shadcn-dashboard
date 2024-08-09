// when a user enter an invalid url, this will fire notFound and then notFound page will return 404 antd page

import { notFound } from "next/navigation";

export default function CatchAllPage() {
  notFound();
}
