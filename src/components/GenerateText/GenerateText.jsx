import { useState, useEffect } from 'react';

const GenerateText = () => {
  const [content, setContent] = useState('');
  const text = 'I Love Programming...';
  const [cursor, setCursor] = useState(true);
  let [i, setIndex] = useState(1);

  useEffect(({ cursor, i }) => {
    if (i < text.length) {
      setContent(content.slice(0, i))
      setIndex(i++)

      setTimeout(writeText, 80)

    } else if (i === text.length) {

      content.insertAdjacentHTML("beforeend", "<span id='cursor'>|</span>");

      setInterval(() => {
        if(cursor){
          document.getElementById('cursor').style.opacity = 0;
          setCursor(false);
        } else {
          document.getElementById('cursor').style.opacity = 1;
          setCursor(true);
        }
      }, 200);
    }
  }, [ cursor, i ])
}

export default GenerateText;