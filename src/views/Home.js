import React, { useEffect } from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { Context } from "../components/Context";

export default function Home() {
  const { state, setState } = useContext(Context);

  useEffect(() => {
    document.querySelector("title").innerText = "Rent a Tool | Tools to Rent";
  }, []);

  return (
    <div className="container py-4">
      <h1 className="display-3 text-center pb-2">Tools to Rent</h1>

      <div className="gridContainer mt-4">
        {state.tools.map((tool) => (
          <Card key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
