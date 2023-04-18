import CriShouxLogo from './CriShouxLogo';

function Header(props) {
    return (
        // mt needs to be same size as TopBar height.
        <div className="mt-[70px] w-full h-72 sm:h-96 bg-zinc-800 flex justify-center flex-wrap shadow-lg">
            <div className="w-[800px] flex flex-col justify-center gap-[20px] p-3">
                <h1 className="text-white font-product-sans font-bold text-6xl sm:text-9xl text-center sm:text-left">CRISHOUX</h1>
                <p className="font-roboto text-neutral-300 text-center sm:text-left">Programmer / Developer</p>
            </div>
            <div className="hidden lg:flex flex-col justify-center">
                <CriShouxLogo className="w-[200px] h-[200px] rounded-full"/>
            </div>
        </div>
    )
}

export default Header;