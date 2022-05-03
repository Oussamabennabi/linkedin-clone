
import { useSelector } from 'react-redux';
import './App.css';
import PostModule from './components/modules/PostModule';

// LAYOUT
import Layout from './layouts/Layout'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const isSignedIn = useSelector(s => s.user.isSignedIn)

  return (
    <div className="App">
      {isSignedIn &&
        <Layout>
          <PostModule/>
          <Home />
        </Layout>
      }
      {!isSignedIn &&
        <Login />
      }
    </div>
  );
}

export default App;
