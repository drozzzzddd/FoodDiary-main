import React from 'react';

import AddFood from './components/Foods/addNewFood';

function App() {
  return (
    
    <div>
      <header>
    <div id="logo_part">
        <a id="logo_url" href="/">
            <div id="logo_img"></div>
            <div id="logo_text">Калькулятор калорий</div>
        </a>
    </div>
    <h1> ИТОГО:</h1>
</header>
      <h2>Употребляемые продукты: </h2>
      {/* form */}
      <div>
        <AddFood />
      </div>
    </div>
  );
}

export default App;
