{work.map((work)=> (
  <ul>

    <li>
    <div className="c-tabs">

      <div className="c-tabs__column1">
        {/* <div className="c-tabs__title"> */}
          <div key={work.title} />
          <h3>{work.title}</h3>
        {/* </div> */}
      </div>
      <div className="c-tabs__column2">
        <p>{work.description}</p>
        <h4>Stack</h4>
        <p>{work.stack}</p>
      </div>
      <div className="c-tabs__column3">
        <img src={work.image}></img>
      </div>
    </div>

  </li>
</ul>
))}
