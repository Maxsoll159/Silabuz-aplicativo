import { Link } from "react-router-dom"

export const Dashboard = () =>{
    return(
        <div>
            Bienvenido al Admin
            <img src="https://img1.picmix.com/output/pic/normal/6/6/2/4/9464266_488d0.gif" alt="" />
            <div className="flex items-center gap-5">
                <Link state={{logged: true}} to="/dashboard/crearproducto">Crear Producto</Link>
                <Link to="/dashboard/eliminarproducto">Eliminar Producto</Link>
            </div>
        </div>
    )
}