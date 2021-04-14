import "./App.css"
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MainPage() {
  return (
    <div className="App">
        <div className="App-header">
    <ListGroup className="position-absolute bottom-0 start-0">
      <ListGroup.Item action href="/">
        Home Page
      </ListGroup.Item>
      <ListGroup.Item action href="/settings">
        Settings
      </ListGroup.Item>
    </ListGroup>
    <p>This Is The Main Page</p>
        </div>
  </div>
  );
}
