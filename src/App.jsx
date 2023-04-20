import Contributions from './components/Contributions';
import Copyright from './components/Copyright';
import Header from './components/Header'
import MajorProjects from './components/MajorProjects';
import MinorProjects from './components/MinorProjects';
import TopBar from './components/TopBar'

function App() {
    return (
        <div className="App">
            <TopBar/>

            <Header/>
            <MajorProjects/>
            <MinorProjects/>
            <Contributions/>

            <Copyright/>
        </div>
    )
}

export default App;