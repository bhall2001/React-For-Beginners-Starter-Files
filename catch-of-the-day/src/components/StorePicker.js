import React, { Component, Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  myInput = React.createRef();

  goToStore = (event) => {

    // 1. Stop Form from submitting
    event.preventDefault();

    // 2. get the text from the input
    console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;

    //3. Change the page to /store/what-ever-was-entered
    this.props.history.push(`/store/${storeName}`);

  }

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input
            type="type"
            ref={this.myInput}
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
