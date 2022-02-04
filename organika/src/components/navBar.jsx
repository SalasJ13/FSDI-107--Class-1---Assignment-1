//clase 1
//siempre importar los archivos
import "./navBar.css"
function NavBar(){
    return(
        <div className="navBar">
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="services.html">Services</a>
            </li>
        </ul>
        </div>

    );
}

//siempre poner esto para mostrar las funciones
export default NavBar;