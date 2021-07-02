import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}</script>
          </body>
        </html>
      `);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  // const srcDoc = ;

  return (
    <>
      <div className="pane top-pane">
        <Editor displayName="HTML" language="xml" value={html} onChange={setHtml} />
        <Editor displayName="CSS" language="css" value={css} onChange={setCss} />
        <Editor displayName="JS" language="javascript" value={js} onChange={setJs} />
      </div>
      <div className="pane">
        <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
      </div>
    </>
  );
}

export default App;
