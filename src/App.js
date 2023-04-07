import { Fragment } from 'react';

import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
//  from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary/>
    </Fragment>
  );
}

export default App;
