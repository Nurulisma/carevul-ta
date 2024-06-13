// import { width } from "@mui/system";
import { Outlet } from "react-router";
import { Link, NavLink, useLocation } from "react-router-dom";

const Consult = () => {
    const location = useLocation()
    return (
        <>
        <header id="header" className="mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <NavLink to="/consult/category" className="fw-bold text-decoration-none" ><h4 className={`${location.pathname === '/consult/category' ? 'text-carevul' : 'text-light-gray'}`}> Kategori Dokter</h4></NavLink>
                    <p className="lead text-secondary"><small> Pilih kategori dokter untuk melakukan konsultasi</small></p>
                    </div>
                    <div className="col-md-1">
                        <h3 className="text-carevul">|</h3>
                    </div>
                    <div className="col-md-5">
                        <NavLink to="/consult/chatroom" className="fw-bold text-decoration-none"><h4 className={`${location.pathname === '/consult/chatroom' ? 'text-carevul' : 'text-light-gray'}`}>Ruang Konsultasi</h4></NavLink>
                    <p className="lead text-secondary"><small> Pilih dokter yang sesuai dengan kebutuhan kamu yuk!</small></p>
                </div>
                </div>
            </div>
        </header>
            <div className="container-fluid"> 

            {/* Section for outlet */}
                <Outlet />
            {/* Section for outlet */}

        </div>
        </>
    );
}

export default Consult;