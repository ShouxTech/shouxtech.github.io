import CriShouxLogo from './CriShouxLogo';

function Header(props) {
    return (
        <div className="h-96 bg-zinc-800 flex justify-center">
            <div className="w-[800px] flex flex-col justify-center gap-[20px]">
                <h1 className="text-white font-product-sans font-bold text-9xl">CRISHOUX</h1>
                <p className="font-roboto text-neutral-300">Programmer / Developer</p>
            </div>
            <div className="flex flex-col justify-center">
                <CriShouxLogo className="w-[200px] h-[200px] rounded-full"/>
            </div>
        </div>
    )
}

export default Header;