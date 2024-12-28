import React, { useState } from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button.tsx'
import Alert from './components/Alert/alert.tsx';

// Test Button
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button onClick={(e) => {e.preventDefault(); alert("This is a test.")}}> Test </Button>
//         <Button disabled> Test Disabled</Button>
//         <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary </Button>
//         <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
//         <Button btnType={ButtonType.Link} href="http://www.extron.com" target="_blank"> Link Test </Button>
//         <Button btnType={ButtonType.Link} href="http://www.extron.com" disabled> Disabled Link Test </Button>
//       </header>
//     </div>
//   );
// }

const App: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
    // Optionally hide the alert automatically after a delay
    setTimeout(() => setShowAlert(false), 3000); // Hides the alert after 3 seconds
  };

  return (
    <div>
      <h1>Test if my alert component works.</h1>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={handleButtonClick}>Show Alert</Button>
      {/* Conditionally render the Alert component */}
      {showAlert && <Alert title = "test" description="This is an alert message!" type="danger" />}
    </div>
  );
};

export default App;