import React, { useState } from 'react'

const Accordion = () => {
  const data = [
    {
      title: 'Himanshu',
      content: 'I am a software Engineer and currently working in SkillZamp as a MERN Trainee. I am also a Competitive Programmer.'
    },
    {
      title: 'Lucifer',
      content: 'I am very impressed with the character of lucifer and his rules that\'s why I like to pronounce myself as Lucifer.'
    },
    {
      title: 'Jennifer',
      content: 'When I fall in love with someone than I would like to call her Jennifer because it\'s my imagination which I wants to be true.'
    },
    {
      title: 'Devil',
      content: 'I also know myself as Devil because I also have a different personality in my body which can ruined anyone and anything. This is my darkest, brutal and dangerous personality of of body.'
    }
  ];
  const [flag, setFlag] = useState(-1);
  const buttonHandler = (index) => {
    setFlag(flag === index ? -1 : index);
    // if((flag === index))
    //   document.querySelector('.content').style.display = 'block';
    // else
    //   document.querySelector('.content').style.display = 'none';
  }
  return (
    <>
      <h1>Accordion Menu</h1>
      <div className="accordion">
        {data.map((item, index) =>
          <>
          <div className="accordion-title" onClick={() => buttonHandler(index)}>
            <h3 className='name'>{item.title}</h3>
            <span className='plusIcon'>{flag === index ? '-' : '+'}</span>
          </div>
          {flag === index && <div className='content'>{item.content}</div>}
          </> 
        )}
      </div>
    </>
  )
}

export default Accordion;