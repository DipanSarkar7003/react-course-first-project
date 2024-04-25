
import Avatar from "./Avatar"
import Intro from "./Intro";



function App() {
    const description =  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
    
      return (
        <div className="card" style={{margin:" 5% auto" , backgroundColor:"#DAF7A6 "}}>
          <Avatar />
          <div className="data">
            <Intro name="Dipan sarkar" description={description} />
            {/* Should contain one Skill component
            for each web dev skill that you have,
            customized with props */}
            {/* <SkillList /> */}
          </div>
        </div>
      );
    }

    export default App ;