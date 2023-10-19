import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";



function NewsCard(props) {

  let setValues = (title,content,imgurl,url) => {
     props.setMessage({
        title : title,
        content : content,
        img : imgurl,
        url : url,
     })
     props.setOpen(true) 
  }
  let layout = (
    <>
      <div className="row justify-content-center">
        <div className="card shadow mb-2 p-3" style={{ width: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4 mt-5">
               <LazyLoadImage
                src={props.img_src}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 ps-3">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                {/* <p className="card-text">{props.content}</p> */}
                <p className="card-text">
                  <small className="text-muted">{props.date}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted font-weight-bold">
                    {props.author}
                  </small>
                </p>
              </div>
              
              <button
                type="button"
                onClick={() => setValues(props.title, props.content,props.img_src,props.url)}
                className={`btn btn-${
                  props.mode === "dark" ? "dark" : "primary"
                } text-white ms-3 shadow`}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
 

  return <>{layout}</>;
}

export { NewsCard };
