import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Dashboard.css';


function Dashboard() {
  const history = useHistory(); // Use useHistory hook
  const [userMetrics, setUserMetrics] = useState(null);

  useEffect(() => {
    // Fetch user metrics when the component mounts
    const fetchData = async () => {
      try {
        // Retrieve the JWT token from local storage
        const authToken = localStorage.getItem('authToken');

        if (authToken) {
          // Make the API request with the authorization header
          const response = await axios.get('https://finance-tracker-production.up.railway.app/api/user/getMetrics', {
            headers: {
              Authorization: authToken,
            },
          });

          if (response.status === 200) {
            // Set the user metrics in state
            setUserMetrics(response.data);
          }
          else if (response.status === 205) {
            alert("You are not authorized to access this route. Please login");
            history.push('/login');
          }
          else if (response.status === 206) {
            alert("Your token has expired. Please login again.");
            history.push('/login');
          }
          else {
            // Handle the API response status other than 200
            console.error('Failed to fetch user metrics');
          }
        } else {
          // Handle the case where the authToken is not available
          console.error('Auth token not available');
        }
      } catch (error) {
        // Handle any errors that occur during the API request
        console.error('Error fetching user metrics', error);
      }
    };

    fetchData();
  }, [history]); // Empty dependency array ensures this effect runs once when the component mounts

  const headerLinks = [
    { url: '/dashboard', text: 'Dashboard' },
    { url: '/logout', text: 'Log out' },
    { url: '/about', text: 'About' },
    { url: '/contact', text: 'Contact' },
  ];

  return (
    <div className="dashboard-page">
      <Header links={headerLinks} />

      <div className="dashboard-content">

        <div className="left-panel card p-3 mb-4">
          <div className='panel-content'>
            {/* Add your links or navigation components here */}
            <h4 className="mb-3">Main</h4>
            <ul className="list-unstyled panel-list">
              <li>
                <Link to="/dashboard" className="text-decoration-none text-dark">Dashboard</Link>
              </li>
            </ul>

            <hr />

            <h4 className="mb-3">Expense</h4>
            <ul className="list-unstyled panel-list">
              <li>
                <Link to="/setExpense" className="text-decoration-none text-dark">Set Expense</Link>
              </li>
              <li>
                <Link to="/expenseLog" className="text-decoration-none text-dark">Show Expense Log</Link>
              </li>
            </ul>

            <hr />

            <h4 className="mt-4 mb-3">Income</h4>
            <ul className="list-unstyled  panel-list">
              <li>
                <Link to="/setIncome" className="text-decoration-none text-dark">Set Income</Link>
              </li>
              <li>
                <Link to="/incomeLog" className="text-decoration-none text-dark">Show Income Log</Link>
              </li>
            </ul>

            <hr />

            <h4 className="mt-4 mb-3">Budgeting</h4>
            <ul className="list-unstyled  panel-list">
              <li>
                <Link to="/budget" className="text-decoration-none text-dark">Set Financial Goals</Link>
              </li>
            </ul>
          </div>
        </div>


        <div className="right-content">
          {userMetrics ? (
            <div className="row">
              <h2 className="mb-4">Welcome, {userMetrics.username}!</h2>

              {/* Individual cards for different metrics */}
              <div className="col-md-6">
                <DashboardCard title="Income" data={userMetrics.income} />
              </div>
              <div className="col-md-6">
                <DashboardCard title="Expense" data={userMetrics.expense} />
              </div>
              <div className="col-md-6">
                <DashboardCard title="Savings" data={userMetrics.savings} />
              </div>
              <div className="col-md-6">
                <DashboardCard title="Budget" data={userMetrics.budget} />
              </div>
            </div>
          ) : (
            <p>Loading user metrics...</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function DashboardCard({ title, data }) {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>

      {title === 'Income' && (
        <div>
          <p>This Week: {data.this_week}</p>
          <p>This Month: {data.this_month}</p>
          <p>This Year: {data.this_year}</p>
          {/* Add other specific fields as needed */}
        </div>
      )}

      {title === 'Expense' && (
        <div>
          <p>This Week: {data.this_week}</p>
          <p>This Month: {data.this_month}</p>
          <p>This Year: {data.this_year}</p>
          {/* Add other specific fields as needed */}
        </div>
      )}

      {title === 'Savings' && (
        <div>
          <p>This Week: {data.this_week}</p>
          <p>This Month: {data.this_month}</p>
          <p>This Year: {data.this_year}</p>
          {/* Add other specific fields as needed */}
        </div>
      )}

      {title === 'Budget' && (
        <div>
          <p>Budget Type: {data.budget_type}</p>
          <p>Amount: {data.amount}</p>
          <p>Percentage Alert: {data.percentage_alert}</p>
          <p>Description: {data.description}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
