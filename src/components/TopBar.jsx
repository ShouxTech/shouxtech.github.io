import CriShouxLogo from './CriShouxLogo';
import './TopBar.css'

function TopBar() {
    return (
        <div id="container">
            <CriShouxLogo id="logo" style={{ width: '70px', height: '70px', 'padding-left': '2px' }}/>
            <h1>CRISHOUX</h1>
        </div>
    )
}

export default TopBar;