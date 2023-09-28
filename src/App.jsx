
import './App.css'
import './content.css'
import CanvasScene from "./models/canvasScene.jsx";
import Navbar from "./components/navbar";
import ImageCarousel from "./components/imageCarousel/imageGallery";

function App() {

    return (
        <div>
            <Navbar/>
            <CanvasScene/>
            <div id={"title"} title="DANIEL [YUN] TSAI"/>
            <div className={"content-container"}>
                <div className={"content"}>
                    <div className={"imp"}>
                        <b>Full-stack game developer/designer.</b>
                    </div>
                    <div className={"centered"}>
                        <ImageCarousel/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
