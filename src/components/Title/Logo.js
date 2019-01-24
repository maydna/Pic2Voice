import React from 'react';
import title from './title.png';
import { Divider, Image } from 'semantic-ui-react'
//without any state
const Logo = ({name, entries, isSignedIn }) => {
      return (
        <div>
          <div className='logolayout'>
            <p className='logo f5'>
              {'This website can convert an image into a voice message. Create an account and give it a try!'}
            </p>
            <Image src={title} size='large'/>
          </div>
          <Divider />
        </div>
      );
}

export default Logo;
