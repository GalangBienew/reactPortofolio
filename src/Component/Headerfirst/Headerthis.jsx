import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Headerfirst/Headerthis.scss";
import Gue from "../asset/gue.jpeg";

function Headerthis() {
  return (
    <>
      <div className="HeaderthisAbout ">
        <div className="HeaderImage">
          <h5>About Me</h5>
        </div>
        <div className="div">
          <Card className="text-center">
            <Card.Header>This is me</Card.Header>
            <Card.Body>
              <img src={Gue} alt="" width={"250px"} />
              <Card.Title>Next will be React Developer</Card.Title>
              <Card.Text>
                Introduce my name is Muhammad Galang Miftah Riziq, I am a
                student majoring in Informatics Engineering who is studying at
                Al-Khariyah University Cilegon Banten,this is my personal
                portfolio.. and now I'm learning how to be a web developer both
                engineering and soft sklil. Once part of the Dicoding event at
                the Indosat Ooredoo Hutchison online bootcamp event in July 2022
                became part of React Developer, and is now taking the React
                Developer Currency at Codepolitan
              </Card.Text>
              <Button variant="primary">my sertifikat</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Headerthis;
