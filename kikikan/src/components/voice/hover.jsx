import { useState } from 'react';
import './hover.css';

// contentをホバーしたときに表示させる
const Hover = ({children, content}) => {
  const [show,setShow] = useState(false);
  return (
    <div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      {show && <div className='hover'>{content}</div>}
    </div>
  );
};

export default Hover;