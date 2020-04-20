import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../components/Context";
import Card from "../components/Card";

export default function Search() {
  const params = useParams();
  const { state } = useContext(Context);

  const filteredTools = () => {
    let searchedItems = [];
    if (params.searchTerm.length < 1) {
      return state.tools;
    } else {
      for (let i = 0; i < state.tools.length; i++) {
        if (
          state.tools[i].name
            .toLowerCase()
            .includes(params.searchTerm.toLowerCase())
        ) {
          searchedItems.push(state.tools[i]);
        }
      }
      return searchedItems;
    }
  };

  useEffect(() => {
    document.querySelector("title").innerText = `Rent a Tool | Search ${params.searchTerm}`;
  }, []);

  return (
    <div className="container py-3">
      <h1 className="display-4 text-center pb-4">
        Tools in with the search term "{params.searchTerm}"
      </h1>

      <div className="gridContainer">
        {filteredTools().map((tool) => (
          <Card key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
