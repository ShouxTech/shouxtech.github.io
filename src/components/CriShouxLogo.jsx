import Logo from '../assets/Logo.png'

function CriShouxLogo(props) {
    return (
        <img src={Logo} className={props.className} style={props.style} alt="Logo"/>
    )
}

export default CriShouxLogo;