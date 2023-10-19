
const i = 0;
function ModelBox({ ModelVal, open, message, setOpen }) {
  let Model_STYLE = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#FFF",
    padding: "30px",
    zIndex: 1000,
    borderRadius: "10px",
  };
  
  let Overlay_Div = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.7)",
    zIndex: 1000,
  };

  // let animText = {
  //   whiteSpace: "nowrap",
  //   overflow: "hidden",
  //   width: "22ch",
  //   borderRight: "3px solid",
  //   fontFamily: "monospace",
  //   fontSize: "2em",
  //   animation: "typing 2s steps(22), blink .5s step-end infinite alternate"
    
  // };

  // {open, setopen}
  if (!open) return null;
  let layout = (
    <>
      <div className="" style={Overlay_Div}>
        <div className="w-100">
        <div className="card shadow-sm" style={Model_STYLE}>
          <div className="d-flex justify-content-end">
            <button
              className={"btn btn-danger rounded-circle"}
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
          <div className="">
            <h4 className="text-center">
              {message.title
                ? message.title.slice(0, 50)
                : "Title Not Described..."}
              ...
            </h4>
            <div className="img d-flex flex-wrap justify-content-center">
               
              <img className={"w-50"} src={message.img} alt="" style={{height:'180px',overflow:'hidden'}}/>
              <div className="paragraph ps-3" style={{width:'300px', overflowY:'scroll', height:'150px'}}>
                <p className="pt-3">
                  {message.content
                    ? message.content.slice(0, 200)
                    : "Content Not Described..."}
                  ...
                </p>

              </div>
            </div>
            <div class="d-flex justify-content-end m-3">
              <a className="btn btn-dark" target="_blank" href={message.url}>
                Learn More
              </a>
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </>
  );

  return layout;
}

export { ModelBox };
