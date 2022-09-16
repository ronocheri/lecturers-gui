
import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Members from './components/Members';

import Layout from './components/Layout';

function App() {
  return (

    <Layout>
    <Switch>
      <Route path='/' exact>
        <HomePage/>
      </Route>
      <Route path='/members'>
        <Members/>
      </Route> 
    </Switch>
    <Footer/>
    </Layout>
 
  );
}

export default App;
