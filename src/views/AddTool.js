import React, { useState, useContext } from "react";
import { v4 } from "uuid";
import { Context } from "../components/Context";
import placeHolderImage from "../images/no_image_placeholder.png";
import { useEffect } from "react";


export default function AddTool() {
  const { state, setState } = useContext(Context);

  const [newTool, setNewTool] = useState({
    id: v4(),
    name: "",
    image: "",
    price: "",
    description: "",
    available: true,
  });

  useEffect(() => {
    document.querySelector("title").innerText = "Rent a Tool | Add a Tool";
  }, [])

  const onChange = (e) => {
    setNewTool({ ...newTool, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    const { name, price, image, description } = newTool;
    e.preventDefault();
    if (name !== "" && price !== "" && description !== "") {
      setState({ ...state, tools: [...state.tools, newTool] });

      setNewTool({
        id: v4(),
        available: true,
      });

      document.querySelector(".homeBtn").click();
    } else {
      alert(
        `Please include the following: (name, image, price, and description)`
      );
    }
  };

  return (
    <div className="container py-4">
      <h1 className="display-3 text-center pb-3">Add a Tool</h1>
      <div class="card mb-3 bg-dark">
        <div class="row no-gutters">
          <div class="col-md-4 align-items-center d-flex p-3 border-right border-secondary">
            <img
              src={newTool.image ? newTool.image : placeHolderImage}
              class="card-img"
              style={{ objectFit: "contain" }}
              alt={newTool.name}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">Tool Name: {newTool.name}</h4>
              <h6 class="card-text">
                Rent Price:{" "}
                <span className="text-success">
                  ${(newTool.price * 0.2).toFixed(2)}
                </span>
              </h6>
              <hr />
              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <div class="form-group col-md-10">
                    <label htmlFor="name">Name</label>
                    <input
                      value={newTool.name}
                      onChange={onChange}
                      name="name"
                      type="text"
                      class="form-control"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-md-2">
                    <label htmlFor="price">Price</label>
                    <input
                      value={newTool.price}
                      onChange={onChange}
                      name="price"
                      type="number"
                      class="form-control"
                      id="price"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div class="form-group col">
                    <label htmlFor="description">Description</label>
                    <textarea
                      value={newTool.description}
                      onChange={onChange}
                      name="description"
                      class="form-control"
                      id="description"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="image">Image Url</label>
                    <input
                      value={newTool.image}
                      onChange={onChange}
                      name="image"
                      id="image"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <button className="btn btn-primary">Add tool</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
