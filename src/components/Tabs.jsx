import { useState} from 'react';
import {react } from 'react';
import { work } from '../data';


const Tabs = ({ work, defaultIndex }) => {

const [active, setActive] = useState (defaultIndex ?? 0);
const handleClick = (index) => setActive(index);


  return (
    <>
      <div>
      <div className="c-tabs__column1 ">
        {work.map((work, index) => (

            <button className="c-tabs__button"
              key={`work-${index}`}
              onClick={() => handleClick(index)}
              role="tab"
              disabled={active === index}
              aria-controls={`panel-id-${index}`}
              aria-selected={setActive === index}
              id={`tab-id-${index}`}>
              <h3>{work.title}</h3>
            </button>
        ))}
      </div>
      <div className="c-tabs__column1--mobile">
        {work.map((work, index) => (

            <button className="c-tabs__button"
              key={`work-${index}`}
              onClick={() => handleClick(index)}
              role="tab"
              disabled={active === index}
              aria-controls={`panel-id-${index}`}
              aria-selected={setActive === index}
              id={`tab-id-${index}`}>
              <h3>{work.id}</h3>
            </button>
        ))}
      </div>

      </div>
      <div className="c-tabs__column2">
        {work.map((work, index) => (
          <div>
            <div
              key={`work-${index}`}
              hidden={active !== index}
              role="tabpanel"
              aria-labelledby={`tab-id${index}`}
              id={`panel-id-${index}`}
            >
              <div className="vh2-block">
                <p>{work.description}</p>
              </div>
              <div className="vh-block">
                <h4>Stack:</h4>
              </div>
              <div className="vh-block">
                <p>{work.stack}</p>
              </div>
              <a href={work.url} className="c-button" target="_blank">Visit Site</a>
            </div>
          </div>
        ))}
      </div>
      <div className="c-tabs__column2--mobile">
        {work.map((work, index) => (
          <div className="c-tabs__image">
            <div
              key={`work-${index}`}
              hidden={active !== index}
              role="tabpanel"
              aria-labelledby={`tab-id${index}`}
              id={`panel-id-${index}`}
            >
                <img src={work.image} />
            </div>
          </div>
        ))}
      </div>
      <div className="c-tabs__column3">
      {work.map((work, index) => (
          <div className="c-tabs__image">
            <div
              key={`work-${index}`}
              hidden={active !== index}
              role="tabpanel"
              aria-labelledby={`tab-id${index}`}
              id={`panel-id-${index}`}
            >
                <img src={work.image} />
            </div>
          </div>
        ))}

      </div>
      <div className="c-tabs__column3--mobile">
        {work.map((work, index) => (
          <div>
            <div
              key={`work-${index}`}
              hidden={active !== index}
              role="tabpanel"
              aria-labelledby={`tab-id${index}`}
              id={`panel-id-${index}`}
            >
              <h3>{work.title}</h3>
              <h4>Stack:</h4>
              <p>{work.stack}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


export default Tabs;
