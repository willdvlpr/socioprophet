import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ReactTerminal from 'react-terminal-component';
import { ReactThemes } from 'react-terminal-component';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    bottom: false
  });

  const toggleDrawer = (side, open) => event => {
    setState({ state, [side]: open });
  };

  const fullList = () => (
    <div >
      <div className="drawer-close">
        <Button onClick={toggleDrawer('bottom', false)}>Close Drawer</Button>
      </div>
      <div>
        <ReactTerminal />
      </div>
    </div>
  );

  return (
    <div className="drawer-open">
      <Button onClick={toggleDrawer('bottom', true)}>Open Drawer</Button>
      <Drawer anchor="bottom" open={state.bottom}>
        {fullList()}
      </Drawer>
    </div>
  );
}
