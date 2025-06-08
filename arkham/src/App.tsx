import "./App.css";
import Attributes, { AttributesProps } from "./attributes/Attributes";
import Die from "./misc/Die";
import { Tab, Tabs } from "@mui/material";

function App() {

  const initialAttributes: AttributesProps = {
    willpower: 3,
    intellect: 3,
    combat: 3,
    health: 3,
    sanity: 3,
    resources: 3,
    clues: 0,
    doom: 0,
  };

  return (
    <>
      <Tabs>
        <Tab title="The Darkness Over Arkham" />
        <Tab title="The Tides of Innsmouth" />
      </Tabs>
        <div>
          <Die />
          <Attributes {...initialAttributes} />
        </div>
    </>
  );
}

export default App;
