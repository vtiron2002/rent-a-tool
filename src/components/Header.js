import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";

export default function Header() {
  const { searchTerm, setSearchTerm } = useContext(Context);

  const onSearch = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      document.querySelector(".searchBtn").click();
    } else {
      document.querySelector(".homeBtn").click();
    }
  };

  return (
    <nav className='navbar navbar-dark bg-dark py-3 sticky-top'>
      <div className='container'>
        <Link
          className='h1 font-weight-light text-white m-0 homeBtn text-decoration-none'
          to='/rent-a-tool/'
        >
          Rent a Tool
        </Link>
        <div className='d-flex'>
          <Link to='/rent-a-tool/addTool' className='btn btn-warning mx-2'>
            Add Tool
          </Link>
          <form onSubmit={onSearch} className='form-inline'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link
              to={`/rent-a-tool/search/${searchTerm}`}
              className='btn btn-secondary my-2 my-sm-0 searchBtn'
            >
              Search
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
