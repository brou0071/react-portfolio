import { useState, useEffect } from 'react';

const WriteText = (props) => {
  let [index, setIndex] = useState(0);
  const [content, setContent] = useState('');
  const [cursor, setCursor] = useState(true);
  const speed = props.speed;
  const text = props.text;

  useEffect(() => {
    let blinker = setInterval(() => {
      setCursor(!cursor)
    }, 500);
    return () => clearInterval(blinker);
  }, [cursor])

  useEffect(() => {
    let writer = setInterval(() => {
      if (index < text.length) {
        setContent(text.slice(0, index + 1))
        setIndex(index++)
      } else if (index === text.length) {
        setContent(text)
      }
    }, speed);
    return () => clearTimeout(writer);
  }, [text, speed, index])

  return (
    <>{content}<strong>{cursor ? '|' : ''}</strong></>
  )
}

export default WriteText;