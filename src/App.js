import './App.css';
import React, {useState, useEffect} from 'react';
import Profiles from './components/profiles';
import WithProfileLoading from './components/withProfileLoading'

function App() {

  const ProfileLoading = WithProfileLoading(Profiles);
  
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  })

  useEffect(() => {
    setAppState({loading: true});
    fetch('db.json')
      .then((res) => res.json())
      .then((data) => {
        setAppState({loading: false, repos: data})
      });
  }, [setAppState]);

  console.log('data', appState.repos)

  return (
    <div className="App">
      <div className='repo-container'>
        <ProfileLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
    </div>
  );
}

export default App;
