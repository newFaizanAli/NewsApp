import React, { useState, useContext, lazy } from "react";
import { NewsCard } from "./NewsCards";

import { globalState } from "./MainPage";
import { ModelBox } from "./ModelBox";

function BodyPage({ mode }) {
  let [Value, setvalue] = useState("");
  let [isOpen, setisOpen] = useState(false);
  let [message, setMessage] = useState("");

  //remove data
  let { setTasks, data, pageVal } = useContext(globalState);

  let layout = (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-xl-2 mt-2 justify-content-center">
          {data.map((e) => {
            return (
              <>
                <NewsCard
                  mode={mode}
                  title={e.title}
                  desc={e.desc}
                  img_src={e.urlToImage}
                  date={e.publishedAt}
                  source={e.source.name}
                  author={e.author}
                  setOpen={setisOpen}
                  setMessage={setMessage}
                  url={e.url}
                  content={e.content}
                />
              </>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-between p-3">
        <button
          type="button"
          className={`btn btn-${
            mode == "dark" ? "dark" : "primary"
          } text-white disabled=${{}}`}
          onClick={() => setTasks("-", "PageIndex")}
        >
          &larr; Prev
        </button>
        <div className="d-flex">
          <h3 className={`h3 text-${mode == "light" ? "dark" : "white"}`}>
            {pageVal}
          </h3>
        </div>
        <button
          type="button"
          className={`btn btn-${
            mode == "dark" ? "dark" : "primary"
          } text-white`}
          onClick={() => setTasks("+", "PageIndex")}
        >
          Next &rarr;
        </button>
      </div>

      
     
    </>
  );
  let Main_Div_Style = { position: "relative", zIndex: 1 };

  let Model = (
    <>
      <div style={Main_Div_Style}>
        <ModelBox
          ModelVal={Value}
          setValue={setvalue}
          open={isOpen}
          setOpen={setisOpen}
          message={message}
        />
      </div>
    </>
  );
  return (
    <>
      {layout}, {Model}
    </>
  );
}

export { BodyPage };
