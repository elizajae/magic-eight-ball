import {useState} from 'react';


const EightBall = (props) => {
    const [color, setColor] = useState('black');
    const [msg, setMsg] = useState('Think of a Question');

    const onNewAnswer = () => {
        // pick a random index with Math.random
        // set the color and msg state with the answer at that index
        const idx = Math.floor(Math.random() * props.data.length);
        setColor(props.data[idx].color);
        setMsg(props.data[idx].msg);
    };
       
  return (
    <div>
      <h1>The Magic Eight Ball</h1>
      <div className='ball' style={{backgroundColor: color}} onClick={onNewAnswer}>
        <h2>{msg}</h2>
      </div>

    </div>
    
  );
}

export default EightBall;