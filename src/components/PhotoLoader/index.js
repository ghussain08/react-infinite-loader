import React, { Component } from "react";
import ScrollLoader from "../ScrollLoader";
import axios from "axios";
import PhotoView from "./PhotoView";
class PhotoLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      page: 1,
      photos: [],
    };
  }

  componentDidMount() {
    this.getphotos();
  }

  getphotos = () => {
    const page = this.state.page;
    this.setState({ isLoading: true });
    axios(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`)
      .then((res) => {
        this.setState({
          isLoading: false,
          photos: [...this.state.photos, ...res.data],
          page: page + 1,
        });
      })
      .catch((err) => {
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    const { isLoading, photos } = this.state;
    // Add a bit bottom padding so that scrollLoder el get's in view at the end of the page
    return (
      <div style={{ paddingBottom: "20px" }}>
        {photos.map((photo) => (
          <PhotoView key={photo.id} photo={photo} />
        ))}
        {isLoading ? <h4>Loading...</h4> : null}
        <ScrollLoader
          isLoading={this.state.isLoading}
          onLoad={this.getphotos}
          hasMoreData={true}
        />
      </div>
    );
  }
}
export default PhotoLoader;
