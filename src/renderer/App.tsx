import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import 'antd/dist/antd.css';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}
