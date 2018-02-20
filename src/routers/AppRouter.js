import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import PageNotFound from '../components/PageNotFound';

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Expense Manager</h1>
          <NavLink to="/" activeClassName="is-active" exact>
            Home
          </NavLink>
          <NavLink to="/add" activeClassName="is-active">
            add
          </NavLink>
          <NavLink to="/edit" activeClassName="is-active">
            Edit
          </NavLink>
        </header>
        <Switch>
          <Route path="/" component={ExpenseDashboard} exact />
          <Route path="/add" component={AddExpense} />
          <Route path="/edit" component={EditExpense} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
