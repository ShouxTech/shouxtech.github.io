import Header from './components/Header'
import MajorProjects from './components/MajorProjects';
import TopBar from './components/TopBar'

function App() {
    return (
        <div className="App">
            <TopBar/>
            <Header/>
            <div className="h-20"></div>
            <MajorProjects/>
        </div>
    )
}

export default App;