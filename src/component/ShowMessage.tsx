import * as React from 'react';
import {useState, useEffect} from 'react';
import ReadMessage from '../ReadMessage';

export const ShowMessage = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        ReadMessage((data: any) => {
            setMessage(data.message);
        });
    }, []);

    return <p>{message}</p>
};