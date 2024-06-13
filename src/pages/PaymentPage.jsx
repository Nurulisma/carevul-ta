import { Col, Container, Row } from "react-bootstrap"
import Calendar from "react-calendar"
// import 'react-calendar/dist/Calendar.css'
import './../styles/Calendar.css'

import gopayLogo from "./../assets/gopay.svg"
import shopeepayLogo from "./../assets/shopeepay.svg"
import ovoLogo from "./../assets/ovo.svg"
import danaLogo from "./../assets/dana.svg"
import { useContext, useEffect, useState } from "react"
import { PaymentContext } from "../context/paymentContext"
import { Outlet, useNavigate, useParams } from "react-router"

const PaymentPage = () => {
    
    const [radioVal, setRadioVal] = useState(false);
    const [doctor, setDoctor] = useState({})

    const navigate = useNavigate();
    const param = useParams();

    // localStorage.setItem("idUser", result[0].id)
    const loginUser = JSON.parse(localStorage.getItem("idUser"));

    useEffect(() => {
        fetch(`https://66684db2f53957909ff76db5.mockapi.io/doctor/${param.id}`)
        .then((response) => response.json())
        .then((data) => setDoctor(data));
    }, []);

    // from Context
    const { payment, setPayment } = useContext(PaymentContext);

    const handleRadioChange = (event) => {
        setRadioVal(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setPayment({
            idDoctor: param.id,
            // bookingId: idBooking,
            price: 20000,
            paymentMethod: radioVal,
        }); 
        navigate("/bookingpage");
    };
    
    useEffect(() => {
    }, [payment]);

    return (
        <>
            {/* <h1>Payment Page</h1> */}
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md="5">
                        {/* <h1 className="text-carevul mb-4">Calendar</h1> */}
                        <Calendar />
                    </Col>
                        
                    <Col >

                    <Container > 
                        <Row>
                            <Col md="12">
                                {/* Card Doctor's Info */}
                                <Container fluid className="shadow py-3 px-5 rounded">
                                    <Row >
                                        <Col sm={5} className="d-flex justify-content-center align-items-center">
                                        <div className="rounded-circle overflow-hidden" style={{width:'100px', height:'100px'}}>
                                        <img src={doctor.image} alt="doctor" style={{width:'100%', height:'100%'}} className="object-fit-cover"/>
                                        </div>
                                        </Col>
                                        <Col className="text-start mb-3" sm={7} >
                                        <h4 className="text-carevul fw-bold ms-0 mt-2 doctor-name mt-1">{doctor.name} </h4>
                                        <p className=" doctor-name mb-1 d-block">Dokter {doctor.kategori}</p>
                                        {doctor.instansi}
                                        {/* <h5 className=" doctor-name">  <span className="text-carevul ">1 Pasien</span>   telah buat janji dengan dokter ini</h5> */}
                                        <h5 className=" doctor-name mt-2">  <span className="text-carevul ">Rp. 20000</span></h5>
                                        </Col>
                                        <Col className="d-flex justify-content-center align-items-center">
                                        {/* <Link to={"/list-doctor/id"} className="btn text-white fw-bold color-carevul-gradient px-5 py-2 shadow-sm">Pilih Dokter</Link> */}
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-5">
                                <h4 className="text-carevul fw-bold">Pilih Metode Pembayaran</h4>
                                    <form onSubmit={handleSubmit}>
                                        {/* Gopay */}
                                            <div className="form-check ms-0 py-2 px-5 border rounded mt-1 shadow-sm  border-2 border-primary border-carevul">
                                                {/* Section Input */}
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-1 d-flex justify-content-center align-items-center">
                                                                <input className="form-check-input circle-radio-btn" type="radio" name="book-date" id="gopay" value={"gopay"} onClick={(e) => handleRadioChange(e)} />
                                                            </div>
                                                            <div className="col">
                                                                <label className="form-check-label" htmlFor="gopay">
                                                                    <p className="lead mt-3"><img src={gopayLogo} width={100} /></p>
                                                                    {/* <h5 className="text-carevul">Rp. 20000</h5> */}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                {/* End Section Input */}
                                            </div>
                                        {/* End Gopay */}
                                        {/* shopeepay */}
                                            <div className="form-check ms-0 py-2 px-5 border rounded mt-1 shadow-sm  border-2 border-primary">
                                                {/* Section Input */}
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-1 d-flex justify-content-center align-items-center">
                                                                <input className="form-check-input circle-radio-btn" type="radio" name="book-date" id="shopeepay" value={"shopeepay"} onClick={(e) => handleRadioChange(e)} />
                                                            </div>
                                                            <div className="col">
                                                                <label className="form-check-label" htmlFor="shopeepay">
                                                                    <p className="lead mt-3"><img src={shopeepayLogo} width={100} /></p>
                                                                    {/* <h5 className="text-carevul">Rp. 20000</h5> */}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                {/* End Section Input */}
                                            </div>
                                        {/* End shopeepay */}
                                        {/* dana */}
                                            <div className="form-check ms-0 py-2 px-5 border rounded mt-1 shadow-sm  border-2 border-primary">
                                                {/* Section Input */}
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-1 d-flex justify-content-center align-items-center">
                                                                <input className="form-check-input circle-radio-btn" type="radio" name="book-date" id="dana" value={"dana"} onClick={(e) => handleRadioChange(e)} />
                                                            </div>
                                                            <div className="col">
                                                                <label className="form-check-label" htmlFor="dana">
                                                                    <p className="lead mt-3"><img src={danaLogo} width={100} /></p>
                                                                    {/* <h5 className="text-carevul">Rp. 20000</h5> */}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                {/* End Section Input */}
                                            </div>
                                        {/* End dana */}
                                        {/* ovo */}
                                            <div className="form-check ms-0 py-2 px-5 border rounded mt-1 shadow-sm  border-2 border-primary">
                                                {/* Section Input */}
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-1 d-flex justify-content-center align-items-center">
                                                                <input className="form-check-input circle-radio-btn" type="radio" name="book-date" id="ovo" value={"ovo"} onClick={(e) => handleRadioChange(e)} />
                                                            </div>
                                                            <div className="col">
                                                                <label className="form-check-label" htmlFor="ovo">
                                                                    <p className="lead mt-3"><img src={ovoLogo} width={100} /></p>
                                                                    {/* <h5 className="text-carevul">Rp. 20000</h5> */}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                {/* End Section Input */}
                                            </div>
                                        {/* End ovo */}
                                        <div className="col-md-12 d-flex">
                                            <button type="submit" className="btn color-carevul-gradient text-white mt-4 px-5 py-2 flex-fill" id="book-btn">Buat Janji</button>
                                        </div>
                                    </form>
                            </Col>
                        </Row>
                    </Container>
                        
                    </Col>
                </Row>
            </Container>
            <Outlet />
        </>
    )
}

export default PaymentPage