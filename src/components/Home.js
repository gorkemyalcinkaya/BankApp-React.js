import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/esm/Container";
import transfer from "../img/transfer.png";
import Image from "react-bootstrap/Image";
import Footer from "./Footer";
const Home = () => {
  const users = useSelector((state) => state.user);
  const loggedUser = useSelector((state) => state.user.loggedUser);
  console.log(loggedUser);
  console.log(users);
  return (
    <Container className="h-100">
      <div
        className="row  align-items-center h-100  m-5 "
        style={{ fontSize: "15vw", marginTop: "20%" }}
      >
        <div className="col-8 ">
          <div className="row text-center">
            <h1>mericBANK ile Paranız </h1>
            <h1>Emin Ellerde</h1>
          </div>
        </div>
        <div className="col-4">
          <div className="row text-center">
            <i className="bi bi-bank text-warning "></i>
            <button className="btn btn-primary">Hemen Kaydol</button>
          </div>
        </div>
      </div>
      <div
        className="row bg-primary text-center text-light"
        style={{ fontSize: "8vw", marginTop: "15%", marginBottom: "20%" }}
      >
        <div className="col-4 ">
          <i className="bi bi-safe2"></i>
          <h1>Üst Seviye Güvenlik</h1>
        </div>
        <div className="col-4">
          <i className="bi bi-arrow-left-right"></i>
          <h1>Hızlı Para Transferi</h1>
        </div>
        <div className="col-4">
          <i className="bi bi-bullseye"></i>
          <h1>Hedefe Yönelik Kolay Kullanım</h1>
        </div>
      </div>
      <div
        className="row text-center "
        style={{ fontSize: "3vw", marginTop: "20%", marginBottom: "20%" }}
      >
        <div className="col-6">
          <p className="text-secondary">
            Paranızı transfer etmek hiç bu kadar kolay olmamıştı
          </p>
        </div>
        <div className="col-6">
          <Image src={transfer} fluid />
        </div>
      </div>
      <Footer />
    </Container>
  );
};
export default Home;
