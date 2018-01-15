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
class ImgFigure extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <figure className="img-figure">
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h3 className="img-title">{this.props.data.title}</h3>
        </figcaption>
      </figure>
    );
  }
}


class AppComponent extends React.Component {
  constructor(props){
    super(props);
    this.state.Constant={
      centerPos:{
        left:0,
        reght:0
      },
      hPosRange:{
        leftSecX:[0,0],
        rightSecX:[0,0],
        y:[0,0]
      },
      vPosRange:{
        x:[0,0],
        top:[0,0]
      }
    }
  }
  componentDidMount(){
      let stageDOM = this.refs.stage,
          stageW = stageDOM.scrollWidth,
          stageH = stageDOM.scrollHeight,
          halfStageW = Math.ceil(stageW/2),
          halfStageH = Math.ceil(stageH/2);
      let imgFigureDOM = this.refs.imgFigure0,
          imgW = imgFigureDOM.scrollWidth,
          imgH = imgFigureDOM.scrollHeight,
          halfImgW = Math.ceil(imgW/2),
          halfImgH= Math.ceil(imgH/2);
      this.state.Constant.centerPos={
          left:halfStageW-halfImgW,
          top:halfStageH-halfImgH
      }
  }
  render() {
    let controllerUnits=[],
        imgFigures=[];
        imageDatas.forEach((value,index)=>{
            imgFigures.push(<ImgFigure key={index} data={value} ref={'imgFigure'+index}/>);
        })
    return (
      <div className="index" ref="stage">
        {imgFigures}
        {/* <img src={imageDatas[0].imageURL} alt="Yeoman Generator" /> */}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
