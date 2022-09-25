import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import group from "../assets/group.png";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <section className="w-full max-w-7xl p-5 flex items-center justify-around gap-5">
        <div className="w-full">
          <h1 className="text-6xl font-bold max-w-xl mb-5">
            Ajoutez votre code rapidement avec{" "}
            <span className="text-blue-500">Mur Magique</span>
          </h1>
          <Button label="Upload code" onClick={() => navigate("/upload")} />
        </div>
        <div className="w-full">
          <img src={group} alt="group" />
        </div>
      </section>
    </Container>
  );
};

export default Home;
