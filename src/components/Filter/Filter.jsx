import React, { Component } from "react";
import styles from "./Filter.module.css";

class Filter extends Component {
  
  render() {
    return (
      <div>
        <input
          type='text'
          name="filter"
          value={this.props.filter}
          onChange={(e) => this.props.onChange(e.target.name, e.target.value)}
          placeholder={`Search`}
        />
      </div>
    );
  }
}

export default Filter