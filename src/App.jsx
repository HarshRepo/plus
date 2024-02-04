import {useState} from "react";
import "./App.css";
import Popup from "./components/popup";

function App() {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState("");
    const [popup, setPopup] = useState(false);

    const handleCountChange = (newCount) => {
        const newHistory = history.slice(0, currentIndex + 1);
        setHistory([...newHistory, newCount]);
        setCurrentIndex(currentIndex + 1);
        setCount(newCount);
    };

    const redoHandler = () => {
        if (currentIndex < history.length - 1) {
            const newCurrentIndex = currentIndex + 1;
            setCurrentIndex(newCurrentIndex);
            setCount(history[newCurrentIndex]);
        }
    };

    const undoHandler = () => {
        if (currentIndex > 0) {
            const newCurrentIndex = currentIndex - 1;
            setCurrentIndex(newCurrentIndex);
            setCount(history[newCurrentIndex]);
        }
    };

    const popupHandler = () => {
        setPopup(!popup);
    };

    const updateFormData = (newFormData) => {
    setFormData(newFormData);
    // You can perform additional actions if needed.
  };
    return (
        <>
            {popup && <Popup setPopup={setPopup} setFormData={updateFormData} formData={formData} />}
            <h1>{count}</h1>
            <div className='card'>
                <div>
                    <button onClick={() => handleCountChange(count + 1)}>
                        plus 1
                    </button>
                    <button onClick={() => handleCountChange(count - 1)}>
                        minus 1
                    </button>
                </div>

                <div>
                    <button onClick={() => handleCountChange(count + 5)}>
                        plus 5
                    </button>
                    <button onClick={() => handleCountChange(count - 5)}>
                        minus 5
                    </button>
                </div>

                <div>
                    <button
                        onClick={undoHandler}
                        disabled={!(currentIndex > 0) && true}
                    >
                        undo
                    </button>
                    <button
                        onClick={redoHandler}
                        disabled={!(currentIndex < history.length - 1) && true}
                    >
                        redo
                    </button>
                    <button onClick={popupHandler}>popup</button>
                </div>

                <p style={{color: "black"}}>data: {formData}</p>
            </div>
            {/* asdklfjalkfja;ljf */}
        </>
    );
}

export default App;
