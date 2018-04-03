import React, { Component, Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  render() {
    return (
      <Fragment>
          <p>Test paragraph</p>
        <form className="store-selector">
          <h2>Please Enter a Store</h2>
          <input
            type="type"
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store -></button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
