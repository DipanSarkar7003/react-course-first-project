import Skills from "./Skills";

function Intro({name , description}) {
 const skillset = [
    { content: "Html+css 💪", color: "#FF4B3C " },
    { content: "Javascript 🙋‍♂️", color: "grey" },
    { content: "React 💪", color: "skyBlue" },
    { content: "Mongodb 🤞", color: "green" },
    { content: "Web design 🙌", color: "#EF745A" },
    { content: "Development 🤦‍♂️", color: "#6078F3" },
  ];



  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <div
        className="skillset"
        style={{ display: "flex", flexWrap: "wrap", gap: "4%" }}
      >
        {skillset.map((elem) => {
          return <Skills key = {elem.content} skillset={elem.content} color={elem.color} />;
        })}
      </div>
    </>
  );
}

export default Intro;
