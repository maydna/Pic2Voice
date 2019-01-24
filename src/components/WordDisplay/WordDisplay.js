import React from 'react';
import { Header, Segment, Label } from 'semantic-ui-react'
//without any state
const WordDisplay = ({imageURL, keywords}) => {
    return (
      <div className='box center'>
      <Segment className='word'>
        <Header as='h3'>Keywords in this image</Header>
        {keywords.map(item => (
            <Label className='pad2' color='blue' as='a' key={item}>{item}</Label>
        ))}
      </Segment>
      </div>

    );
}

export default WordDisplay;
