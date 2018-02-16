import React from 'react';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <Header
        title="Minimalistic React Boilerplate"
        subtitle="With bare minimum configuration for Webpack, Babel, and ESLint"
      />
    );
  }
}

export default App;
