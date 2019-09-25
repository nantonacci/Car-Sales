import React, { useReducer } from 'react';
import AddedFeature from './AddedFeature';

// import { reducer, initialState } from '../reducers';

const AddedFeatures = props => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const remove = value => {
  //   return dispatch({ type: "REMOVE_FEATURE", payload: value});
  //   };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature
              key={item.id}
              feature={item}
              //remove={() => {remove(feature)}}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
