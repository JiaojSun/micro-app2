import LocalButton from './Button';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import React from 'react';

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <div>
      <h1>Basic Host-Remote</h1>
      <h2>App 2</h2>
      <LocalButton />
    </div>
  </DndProvider>
);

export default App;
