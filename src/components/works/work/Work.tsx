import "./Work.less";

function Work({ workDetails }: { workDetails: any }) {
  const { workName, aboutWork, skills } = workDetails;
  return (
    <div className="work-container">
      <div></div>
      <div>
        <div className="work-name">{workName}</div>
        <p className="desc-text">{aboutWork}</p>
        <ul>
          {skills.map((skill: string) => {
            return (
              <li key={skill} className="desc-text">
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Work;
