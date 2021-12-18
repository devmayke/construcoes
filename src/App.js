import './App.css';
import Routes from './pages/routes'
import Provider from './state/provider.js';

function App() {
  

    return (
        <Provider>
            <div className="App" >
                <Routes />
            </div>
        </Provider>
    );
}

export default App;