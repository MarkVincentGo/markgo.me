import React, { Component } from 'react';
import Layout from './Layout';
import Projects from './Projects';


export default class index extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Projects />
      </Layout>
    );
  }
}
