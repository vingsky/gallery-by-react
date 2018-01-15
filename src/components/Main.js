require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');
// let imageDatas = require('../data/image.json');
let imageDatas = [
  {
      "fileName": "1.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "2.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "3.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "4.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "5.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "6.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "7.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "8.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "9.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "10.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "11.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "12.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "13.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "14.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "15.jpg",
      "title": "girls",
      "desc": "beauty girls"
  },
  {
      "fileName": "16.jpg",
      "title": "girls",
      "desc": "beauty girls"
  }
];

imageDatas=(function genImageUrl(imageDataArr){
  for(let i =0;i<imageDataArr.length;i++){
    let singleImageData = imageDataArr[i];
    singleImageData.imageURL = require('./../images/'+singleImageData.fileName);
    imageDataArr[i]=singleImageData;
  }
  return imageDataArr;
})(imageDatas);

// imageDatas = genImageUrl(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={imageDatas[0].imageURL} alt="Yeoman Generator" />
        <div>hello word</div>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
