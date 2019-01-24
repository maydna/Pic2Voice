import React from 'react';
import title from './title.png';
import { Divider, Image } from 'semantic-ui-react'
//without any state
const Welcome = ({name, entries, isSignedIn }) => {
      return (
        <div>
          <div className='logolayout'>
            <p className='logo f5'>
              <p className='f3'>
                {`Hey ${name}!`}
              </p>
              {`You have converted ${entries} images already!`}
              <p className='f5'>
              Thanks for your support on this website!
              </p>
            </p>
            <Image src={title} size='large'/>
          </div>
          <Divider />
        </div>
      );
}

export default Welcome;
