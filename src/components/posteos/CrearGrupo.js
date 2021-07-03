

export function CrearGrupo(){

    return (
            <div id="modalCrearGrupo" className="modal">
                <div className="modal-content">
                  <h4>Crea un grupo</h4>
                  <hr/>
                  <p>Nombre</p>
                  <label>Este no podra cambiarse luego</label>
                  <input placeholder="Nombre" id="nombreGrupo" type="text" class="validate"/>
                  <br/>
                  <p>Tipo de grupo</p>
                  <form action="#">
                        <p>
                          <label>
                            <input name="group1" type="radio" checked />
                            <span>Publico</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <input name="group1" type="radio" />
                            <span>Restringido</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <input name="group1" type="radio"  />
                            <span>Privado</span>
                          </label>
                        </p>
                    </form>
                    <br/>
                    <p>
                        <label>
                          <input type="checkbox" class="filled-in" />
                          <span>Solo mayores de 18 años</span>
                        </label>
                    </p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancelar</a>
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat">Crear Grupo</a>
                </div>
            </div>
    )
}

