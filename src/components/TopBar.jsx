import CriShouxLogo from './CriShouxLogo';

function TopBar(props) {
    return (
        <div className="flex bg-[rgb(25,25,25)] items-center w-full">
            <CriShouxLogo className="w-[70px] h-[70px]"/>
            <h1 className="text-white font-product-sans font-bold text-3xl">CRISHOUX</h1>
        </div>
    )
}

export default TopBar;