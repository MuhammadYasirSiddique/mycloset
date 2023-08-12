import { defaultConfig } from "next/dist/server/config-shared";
import React from "react";

export default function Home({ params }: { params: { id: string } }) {
  return <div>id: {params.id}</div>;
}
