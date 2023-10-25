import React, { createContext, useState, useEffect, useRef} from "react";
import { fetchData } from "./Component";
import { HomePage } from "./HomePage";

import { useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

let globalState = createContext();

function MainPage() {
  let [mode, setMode] = useState("light");
  let [PageVal, setPageVal] = useState(1);
  let [TotalPages, setTotalPages] = useState(0);
  let [data, setData] = useState([]);
  let [Loading, setLoading] = useState(true)
  let { categ, cn } = useParams();
  let loadBar = useRef(null);

  useEffect(
    () => {
      setLoading(true)
      FetchResult(PageVal)
  
    },
    [categ, cn],
    []
  );

  
  //Fetching Data 

  let FetchResult = async (pageNum) => {
  setPageVal(pageNum);
  try {
    // Fetch data using the fetch function
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${
        !categ ? "general" : categ
      }&country=${
        !cn ? "us" : cn
      }&apiKey=${process.env.REACT_APP_NEWS_KEY}&page=${pageNum}&pageSize=10`
      
      // ${process.env.REACT_APP_NEWS_KEY}
    );
    
    if (response.ok) {
      const res = await response.json();
      setLoading(false);
      setData(res.articles);
      loadBar.current.complete();
      setTotalPages(res.totalResults);
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error(error);
  }
};

  let Tasks = (val, action) => {
    switch (action) {
      //Action Mode
      case "mode":
        if (mode === "light") {
          setMode("dark");
          document.body.style.backgroundColor = "grey";
        } else {
          setMode("light");
          document.body.style.backgroundColor = "white";
        }
        break;
      case "PageIndex":
        if (val === "+") {
          // PageVal > Math.ceil(TotalPages / 10) ?    
          //   FetchResult(PageVal + 1) : 
            FetchResult(PageVal + 1)
          
        } else {
          if (PageVal == 1) {
            PageVal = PageVal;
          } else {
            FetchResult(PageVal - 1)
          }
        }
        break;
      case "TotalPages":
        setTotalPages(val);
        break;
      default:
        alert("Undefined Case");
    }
  };
  
  let globalStateValue = {
    setTasks: Tasks,
    mode: mode,
    setMode: setMode,
    pageVal: PageVal,
    TotalPages: TotalPages,
    setTotalPages: setTotalPages,
    data: data,
    FetchResult: FetchResult,
    Loading : Loading,
    categ: categ,
    country: cn
  };
  
  let layout = (
    <globalState.Provider value={globalStateValue}>
      <>
      <LoadingBar color='#f11946' ref={loadBar} />
        <HomePage />
      </>
    </globalState.Provider>
  );

  return (<>{layout}</>);
}

export { MainPage, globalState };
