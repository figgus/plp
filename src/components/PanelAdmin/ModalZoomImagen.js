

export function ModalZoomImagen(){

    return (
        <div id="modal1" className="modal">
        <div className="modal-content">
            <img width="500px" height="500px" id="imgZoom"/>
        </div>
        <div className="modal-footer">
          <center>
            <i onClick={()=>{document.getElementById('modal1').style.display = 'none'}} className="material-icons">close</i>
          </center>
        </div>
      </div>
    )
}
