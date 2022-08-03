import React from "react";
import "./styles.css";

function TooltipButton({ id, content, children }) {
  React.useEffect(() => {
    tippy(`#${id}`, { content });
  }, [id, content]);

  return <button id={id}>{children}</button>;
}

function App() {
  return (
    <TooltipButton id="myButton" content="Hello world!">
      Hover me
    </TooltipButton>
  );
}
export default App;
