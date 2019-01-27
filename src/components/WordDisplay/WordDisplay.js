import React from 'react';
import { Header, Segment, Label, Placeholder } from 'semantic-ui-react'

const WordDisplay = ({imageURL, keywords, isLoading }) => {
    if (isLoading) {
        return (
          <div className='box center'>
          <Segment className='word'>
            <Header as='h3'>Loading...</Header>
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder>
          </Segment>
          </div>

        );
    }
    else {
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

}

export default WordDisplay;
