
import './App.css'
import './content.css'
import CanvasScene from "./models/canvasScene.jsx";
import Navbar from "./components/navbar";
import ImageCarousel from "./components/imageCarousel/imageGallery";
import GameInfo from "./components/gameInfo/gameInfo.jsx";

function App() {

    return (
        <div>
            <Navbar/>
            <CanvasScene/>
            <div id={"Top"}>
                {/*<div className={"gradientDown"}/>*/}
                <div id={"title"}>DANIEL [ YUN ] TSAI</div>
                <div className={"gradientUp"}/>
            </div>
            <div className={"content-container"}>
            <div className={"content"}>
                    <div className={"imp"}>
                        <b>Game developer and designer.</b>
                    </div>
                    <div className={"centered"}>
                        <ImageCarousel/>
                    </div>
                    <div className={"imp"}>
                        <b>Current projects</b>
                    </div>
                    <GameInfo/>
                </div>
            </div>
        </div>
    )
}

export default App
