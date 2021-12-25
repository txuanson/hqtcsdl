import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import 'antd/dist/antd.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}
