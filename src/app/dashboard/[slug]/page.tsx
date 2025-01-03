import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>POST SLUG : {params.slug}</h1>
    </div>
  );
};

export default page;
