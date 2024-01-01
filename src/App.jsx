import React from 'react';
import Contributions from './components/Contributions';
import Copyright from './components/Copyright';
import Header from './components/Header'
import MajorProjects from './components/MajorProjects';
import MinorProjects from './components/MinorProjects';
import TopBar from './components/TopBar'
import MoreInfo from './components/MoreInfo';

function App() {
    const [moreInfo, setMoreInfo] = React.useState();

    return (
        <div className="App">
            <TopBar/>

            <Header/>
            <MajorProjects setMoreInfo={setMoreInfo}/>
            <MinorProjects setMoreInfo={setMoreInfo}/>
            <Contributions setMoreInfo={setMoreInfo}/>
            {moreInfo && <MoreInfo setMoreInfo={setMoreInfo} {...moreInfo}/>}

            <Copyright/>
        </div>
    )
}

export default App;