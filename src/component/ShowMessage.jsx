import React, {useState, useEffect} from 'react';
import ReadMessage from '../ReadMessage';

export const ShowMessage = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        ReadMessage(data => {
            setMessage(data.message);
        });
    }, []);

    return <p>{message}</p>
};