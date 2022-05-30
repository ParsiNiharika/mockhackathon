import logo from './logo.svg';
import './App.css';
import {Route,Routes,Link} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Schedule from './components/Schedule';
import ViewContent from './components/ViewContent';

function App() {
  return (
    <div >
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">LendAHand</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="">Dashboard</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="monday">Monday</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="tuesday">Tuesday</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="wednesday">Wednesday</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="thursday">Thrusday</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="firday">Firday</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="saturday">Saturday</Link>
      </li>
    </ul>
  </div>
</nav>
<Routes>
  <Route path="" element={<Dashboard></Dashboard>}></Route>
  <Route path="monday" element={<Schedule day="Monday"></Schedule>}></Route>
  <Route path="tuesday" element={<Schedule day="Tuesday"></Schedule>}></Route>
  <Route path="wednesday" element={<Schedule day="Wednesday"></Schedule>}></Route>
  <Route path="thursday" element={<Schedule day="Thrusday"></Schedule>}></Route>
  <Route path="firday" element={<Schedule day="Friday"></Schedule>}></Route>
  <Route path="saturday" element={<Schedule day="Saturday"></Schedule>}></Route>
  <Route path="ViewContent" element={<ViewContent></ViewContent>}></Route>
</Routes>
</div>
    
  );
}

export default App;
