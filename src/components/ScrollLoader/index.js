import React, { Component } from "react";

class ScrollLoader extends Component {
  constructor(props) {
    super(props);
    this.loaderEl = React.createRef();
    this.prevRatio = 0;
  }

  componentDidMount() {
    this.createObserver();
  }

  createObserver = () => {
    let observer;
    const options = {
      root: this.props.containerEl || null, // null means document viewport
      rootMargin: "0px",
      threshold: 1,
    };

    observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(this.loaderEl.current);
  };

  handleIntersect = (entries) => {
    // if no more data is available or api call is in progress then
    // no need to perform any operation
    if (this.props.isLoading || !this.props.hasMoreData) {
      return;
    }
    entries.forEach((entry) => {
      if (entry.intersectionRatio > this.prevRatio) {
        // loaderEl is in view, perform load more data
        this.props.onLoad();
      }
      this.prevRatio = entry.intersectionRatio;
    });
  };

  render() {
    return <div ref={this.loaderEl}></div>;
  }
}

export default ScrollLoader;
