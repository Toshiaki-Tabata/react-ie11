import React from 'react';
import { ShowMessage } from './component/ShowMessage';

export const App = () => {
    return (
        <>
        <h1>へい、ゆー!</h1>
        <p>イカしているかい?</p>
        <p>そいつはよかった、よがったやがったブリザード</p>
        jsonから受け取ったメッセージを表示する:
        <ShowMessage/>
        </>
    );
}
export default App;