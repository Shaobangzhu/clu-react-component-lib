import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button.tsx'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button> Test </Button>
        <Button disabled> Test Disabled</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
        <Button btnType={ButtonType.Link} href="http://www.extron.com"> Link Test </Button>
        <Button btnType={ButtonType.Link} href="http://www.extron.com" disabled> Disabled Link Test </Button>
      </header>
    </div>
  );
}

export default App;