import React from 'react';
import { Image, Label } from 'semantic-ui-react'
import linkedin from './linkedin.svg'
import github from './github.svg'
//without any state
const Footer = () => {
      return (
        <div className='footer'>
          <p style={{fontSize:'10px'}}>Ver 1.0:
            <div>
            - The voice message can only describe what elements are in the image.
            </div>
            <div>
            - Image uploading is not supported.
            </div>
          </p>
          <div>
            <Label as='a' href='https://www.linkedin.com/in/mingwu-yang/'>
              <Image avatar spaced='right' src={linkedin} />
              My LinkedIn
            </Label>
            <Label as='a' href='https://github.com/maydna/Pic2Voice'>
              <Image avatar spaced='right' src={github} />
              View Repo
            </Label>
          </div>
        </div>
      )
}

export default Footer;
