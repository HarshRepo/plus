import {useState} from "react";
import styles from "./Popup.module.css";
const Popup = ({setPopup, setFormData}) => {
    const [temp, setTemp] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const form_Data = new FormData(form).get("jackpot");
        setFormData(form_Data);
        setPopup(false);
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Create JackPot</h1>

            <form action='' onSubmit={submitHandler}>
                <label htmlFor='name'>Winner Jackpot</label>
                <br />
                <input
                    type='text'
                    name='jackpot'
                    id='name'
                    onChange={(e) => setTemp(e.target.value)}
                    value={temp}
                />

                <br />
                <br />
                <button type='button' onClick={()=> setPopup(false)}>
                    Cancel
                </button>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Popup;
