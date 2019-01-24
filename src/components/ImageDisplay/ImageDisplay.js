import React from 'react';

//without any state
const ImageDisplay = ({imageURL}) => {
    if (imageURL==='') {
      return (
        <div className='box center'>
          <img alt='Semantic UI is unavailable' src='https://react.semantic-ui.com/images/wireframe/image.png' width='auto' height='220px'/>
        </div>
      )
    } else {
      return (
        <div className='box center'>
          <img alt='Unavailable' src={imageURL} width='auto' height='220px'/>
        </div>
      );
    }
}

export default ImageDisplay;
