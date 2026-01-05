import React from "react";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default function Page({ params }: Props) {
  const { slug } = React.use(params);

  return (
    <div>
      <p>You visited: /{slug ? slug.join("/") : ""}</p>
    </div>
  );
}
