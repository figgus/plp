

export function ModalZoomImagen(){

    return (
        <div id="modal1" class="modal">
        <div class="modal-content">
            <img width="500px" height="500px" id="imgZoom"/>
        </div>
        <div class="modal-footer">
          <center>
            <i onClick={()=>{document.getElementById('modal1').style.display = 'none'}} className="material-icons">close</i>
          </center>
        </div>
      </div>
    )
}
