import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
// import SetExpense from './components/SetExpense';
// import ExpenseLog from './components/ExpenseLog';
// import SetIncome from './components/SetIncome';
// import IncomeLog from './components/IncomeLog';
// import Budget from './components/Budget';


function App() {
  return (
    <Router>
      <div className="app-main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />

          {/* Following components need to be created */}
          {/* <Route path="/set/expense" component={SetExpense} />
          <Route path="/expense/log" component={ExpenseLog} />
          <Route path="/set/income" component={SetIncome} />
          <Route path="/income/log" component={IncomeLog} />
          <Route path="/budget" component={Budget} /> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
