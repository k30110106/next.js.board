import React from "react";
import variables from "../scss/variables.module.scss";
import { datasAPI } from "../api/actions";
import { BoardType } from "../type/boardType";

const datas = (): Promise<BoardType[]> => {
  const data = datasAPI();
  return data;
};

const page = async () => {
  const data = await datas();

  return (
    <div>
      <h1 style={{ color: variables.primaryColor }}>DASHBOARD</h1>
      {data.map((item, index) => {
        return (
          <h5 key={index}>
            {item.id} - {item.content}
          </h5>
        );
      })}
    </div>
  );
};

export default page;
