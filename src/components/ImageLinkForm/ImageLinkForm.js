import React from 'react';
import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className='lowerBox'>
              <Input
                className='link pad'
                type='text'
                placeholder='Paste your link here'
                onChange={onInputChange}
              />
          <Button primary
            className='f4 link'
            onClick={onSubmit}
            >Convert!</Button>
    </div>
  );
}

export default ImageLinkForm;
