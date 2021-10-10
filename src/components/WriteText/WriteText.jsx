import { useState, useEffect } from 'react';

const WriteText = (props) => {
  let [index, setIndex] = useState(0);
  const [content, setContent] = useState('');
  const [cursor, setCursor] = useState(true);
  const speed = props.speed;
  const text = props.text;

  // Flash the cursor
  useEffect(() => {
    let blinker = setInterval(() => {
      setCursor(!cursor)
    }, 500);
    return () => clearInterval(blinker);
  }, [cursor])

  // Write each letter to the content variable
  useEffect(() => {
    let writer = setInterval(() => {
      if (index < text.length) {
        setContent(text.slice(0, index + 1))
        setIndex(index++)
      }
    }, speed);
    return () => clearTimeout(writer);
  }, [text, speed, index])

  // Reset content and index
  useEffect(() => {
    let resetter = setInterval(() => {
      setContent('');
      setIndex(0);
    }, 1000 * 15);
    return () => clearInterval(resetter);
  }, [])

  return (
    <>{content}<strong>{cursor ? '_' : ''}</strong></>
  )
}

export default WriteText;