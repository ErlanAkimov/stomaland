import React from 'react';
import styles from './WhyWe.module.scss';
import close from '../../../assets/images/close.png'

function WhyWe({ props }) {
  const [current_height,setCurrent_height] = React.useState(Array(props.length).fill('0'));
  const [openStates, setOpenStates] = React.useState(Array(props.length).fill(false));
  const answerRef = React.useRef(props.map(() => React.createRef()));

  const toggleElement = (index) => {
    setOpenStates((prevOpenStates) => {
      const newOpenStates = [...prevOpenStates];
      newOpenStates[index] = !newOpenStates[index];
      return newOpenStates;      
    });

    setCurrent_height((prevCurrent_height) => {
      const currentAnswerRef = answerRef.current[index].current.clientHeight;
      const prev = [...prevCurrent_height];
      prev[index] == '0' ?  prev[index] = currentAnswerRef : prev[index] = '0';
      return prev;
    })
  };

  return (
    <div>
      <h1 className={styles.main_title}>Почему мы?</h1>

      <div className={styles.wrapper}>
        {props.map((item, index) => {
          return (
            <div key={item.id} className={styles.flex_wrapper}>
              <div onClick={() => toggleElement(index)} className={styles.show_side}>
                <h2 className={styles.title}>{item.title}</h2>
				<img src={close} alt="" style={{transform: openStates[index] ? 'translateY(-50%) rotate(0)' : 'translateY(-50%) rotate(45deg)'}} />
              </div>

              <div className={styles.close_side} style={{ maxHeight: openStates[index] ? current_height[index] + 'px' : '0'}}>
                <p ref={answerRef.current[index]} id={index} style={{paddingTop: '10px'}}>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyWe;
