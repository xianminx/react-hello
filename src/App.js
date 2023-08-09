import "./App.css";
import { useState } from "react";
import RxState from "./rxhooks/RxState";
import RxState2 from "./rxhooks/RxState2";
import RxEffect from "./rxhooks/RxEffect";
import RxRef from "./rxhooks/RxRef";

/**
 * create a index page for all the hooks, each hook will be a component and a independent route.
 * use react router to navigate to each hook page.
 * @returns
 */
function App() {
  const [selectedHook, setSelectedHook] = useState("useState");

  const hooks = {
    useState: RxState,
    useState2: RxState2,
    useEffect: RxEffect,
    useRef: RxRef,
  };


  const handleHookClick = (hookId) => {
    setSelectedHook(hookId);
  };

  const renderHookPage = () => {
    const HookComponent = hooks[selectedHook];
    return <HookComponent />;
  };

  return (
    <div className="App">
      <div className="nav">
        {Object.keys(hooks).map((hookId) => (
          <h2 key={hookId} onClick={() => handleHookClick(hookId)}>
            {hookId}
          </h2>
        ))}
      </div>
      <div className="content">{renderHookPage()}</div>
    </div>
  );
}

export default App;
