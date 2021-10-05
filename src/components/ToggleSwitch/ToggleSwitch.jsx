import { useState } from 'react';

const ToggleSwitch = () => {
  const [modeValue, setModeValue] = useState('Dark Mode');

  const HandleMode = () => {
    if (modeValue === 'Light Mode') {
      setModeValue('Dark Mode');
    } else {
      setModeValue('Light Mode');
    }
  }

  return (
    <>
      <p className="mt-4 px-3" style={{ color: 'white', fontSize: '0.75rem' }}>{modeValue}</p>
      <label className="px-3 mt-4 switch">
        <input onChange={HandleMode} type="checkbox" />
        <span className="theslider"></span>
      </label>
    </>
  )
}

export default ToggleSwitch;