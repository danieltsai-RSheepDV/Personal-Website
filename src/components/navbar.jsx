import './navbar.css'

export default function Navbar(){

    return (
        <header id="navigationBar">
            <a className="link" href=""><b>ABOUT ME</b></a>
            <img src="/SimpleLogo.svg" alt="MUWUN"/>
            <a className="link" href=""><b>PROJECTS</b></a>
        </header>
    );
}