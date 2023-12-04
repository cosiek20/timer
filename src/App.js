import { useState } from 'react';
import Timer from './components/Timer/Timer';
import { useEffect } from 'react';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
const App = () => {

	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
   };

	}, [timer]);

	const handleStart = () => {
    setTimer(setInterval(() => {
      setTime((time) => time + 1);
    }, 1))
	};

	const handleStop = () => {
		setTimer(null);
	};

	const handleReset = () => {
		setTime(0);
		setTimer(null);
	};

	return (
    <Container>
      <Timer time={time}></Timer>
			<Button onClick={handleStart}>Start</Button>
			<Button onClick={handleStop}>Stop</Button>
			<Button onClick={handleReset}>Reset</Button>
    </Container>
	);
};

export default App;