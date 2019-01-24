import React from 'react';
import { Menu } from 'semantic-ui-react';

//without any state
const Navigation = ({ onRouteChange, route }) => {
    if (route==='home') {
      return (
        <div>
          <Menu compact style={{display:'flex',justifyContent:'flex-end'}}>
            <Menu.Item  position='left' className='f4'>Picture2Audio</Menu.Item>
            <Menu.Item position='right' onClick={() => window.location.assign('https://thisisadamyang.com')}>Who Built This?</Menu.Item>
            <Menu.Item onClick={()=>onRouteChange('signin')}>Sign Out</Menu.Item>
          </Menu>
        </div>
      )
    } else {
      return (
        <div>
          <Menu compact style={{display:'flex',justifyContent:'flex-end'}}>
           <Menu.Item header position='left' className='f4'>Picture2Audio</Menu.Item>
           <Menu.Item position='right' onClick={() => window.location.assign('https://thisisadamyang.com')}>Who Built This?</Menu.Item>
           <Menu.Item onClick={()=>onRouteChange('signin')}>Sign In</Menu.Item>
          </Menu>
        </div>
      );
    }
}


export default Navigation;
