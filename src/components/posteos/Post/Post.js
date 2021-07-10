import { useSelector } from "react-redux";

export function Post(){
    const parametros = useSelector((state) => state.parametros);

    return (<div>
        selecciono el id {parametros.postID}
    </div>)
}
