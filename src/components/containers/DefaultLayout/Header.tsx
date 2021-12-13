import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const Navbar = () => {

    const { user, isAuth } = useTypedSelector((store) => store.log);
    const {LogoutUser}=useActions();
    // console.log(user?.email);
    return (<>
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#ccf2ff' }} >
            <div className="container-fluid">
                <a className="navbar-brand " href="/">Home</a>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/list">List products</a>
                        </li>
                    </ul>
                    < form className="d-flex">
                    {isAuth ? (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">
                                   {user?.email}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={LogoutUser}>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    ):(
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">
                                Register
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>


                    )}                      

                </form>
            </div>
        </div>
    </nav></>)
}


export default Navbar;


