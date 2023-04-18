import CriShouxLogo from './CriShouxLogo';

function TopBar(props) {
    return (
        <div className="h-[70px] flex bg-[rgb(25,25,25)] items-center w-full fixed top-0">
            <CriShouxLogo className="w-[70px] h-[70px]"/>
            <h1 className="text-white font-product-sans font-bold text-3xl">CRISHOUX</h1>
        </div>
    )
}

export default TopBar;