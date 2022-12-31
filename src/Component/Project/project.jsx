import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../Project/Project.scss";

function Project() {
  return (
    <div className="project">
      <h5>this my github</h5>
      <div className="project-first">
        <Card>
          <Card.Body>
            <Link>https://github.com/GalangBienew?tab=repositories</Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Project;
