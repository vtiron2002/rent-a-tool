import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../components/Context';

import placeHolderImage from '../images/no_image_placeholder.png';

export default function Tool() {
  const params = useParams();
  const { state, setState } = useContext(Context);
  const tool = state.tools.filter((tool) => tool.name === params.name)[0];

  const rent = () => {
    const tools = state.tools.map((tool) =>
      tool.name === params.name ? { ...tool, available: false } : { ...tool }
    );
    setState({ ...state, tools });
  };

  useEffect(() => {
    document.querySelector('title').innerText = `Rent a Tool | ${tool.name}`;
  }, []);

  return (
    <div className='container py-5'>
      {!!tool ? (
        <div className='toolGrid'>
          <div className='card bg-dark flex-grow-1'>
            <div className='card-body d-flex justify-content-center'>
              <img
                src={tool.image !== '' ? tool.image : placeHolderImage}
                alt={tool.name}
                className='img-thumbnail'
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className='card bg-dark flex-grow-1'>
            <div className='card-body d-flex justify-content-between flex-column'>
              <div className='h-50'>
                <h4 className='card-title'>{tool.name}</h4>
                <p
                  className='card-text overflow-auto'
                  style={{ maxHeight: '50%' }}
                >
                  {tool.description}
                </p>
              </div>
              <div className='d-flex justify-content-between'>
                <h5 className={`text-${tool.available ? 'success' : 'danger'}`}>
                  ${(tool.price * 0.2).toFixed(2)}
                </h5>
                <h5 className={`text-${tool.available ? 'success' : 'danger'}`}>
                  {tool.available ? 'Available' : 'Unavailable'}
                </h5>
              </div>
            </div>

            <div className='card-footer'>
              {tool.available ? (
                <button className='btn btn-success' onClick={rent}>
                  Rent Now
                </button>
              ) : (
                <button className='btn btn-success' disabled>
                  Not Available
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className='jumbotron bg-dark jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-4'>Item not Found</h1>
            <small>id: {params.id}</small>
            <p className='lead'>
              Press <Link to='/rent-a-tool'>here</Link> to return to home
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
