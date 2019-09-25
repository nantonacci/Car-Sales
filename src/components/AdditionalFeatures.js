import React, { useReducer } from 'react';
import AdditionalFeature from './AdditionalFeature';

// import { reducer, initialState } from '../reducers';

const AdditionalFeatures = props => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const add = value => {
  //   return dispatch({ type: "ADD_FEATURE", payload: value});
  //   };

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              //add={() => {add(feature)}}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
