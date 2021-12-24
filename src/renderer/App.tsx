import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import 'antd/dist/antd.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Shopping from './pages/Shopping';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/shopping" component={Shopping} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}
