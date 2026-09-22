// ⚛️ Mini React Engine Implementation
const ReactEngine = (function () {
  let hooks = [];
  let currentHookIndex = 0;

  function useState(initialValue) {
    if (hooks[currentHookIndex] === undefined) {
      hooks[currentHookIndex] = initialValue;
    }
    const state = hooks[currentHookIndex];
    const hookIndex = currentHookIndex;

    const setState = newValue => {
      if (typeof newValue === 'function') {
        hooks[hookIndex] = newValue(hooks[hookIndex]);
      } else {
        hooks[hookIndex] = newValue;
      }
      renderApp(); // Trigger re-render on state change
    };

    currentHookIndex++;
    return [state, setState];
  }

  function resetIndex() {
    currentHookIndex = 0;
  }

  return { useState, resetIndex };
})();

// 🧩 User Component (React Component)
function UserProfileComponent() {
  const [name, setName] = ReactEngine.useState('Antigravity');
  const [age, setAge] = ReactEngine.useState(25);

  console.log(`[RENDERED COMPONENT] Name: ${name}, Age: ${age}`);

  return {
    clickBirthday: () => setAge(prev => prev + 1),
    changeName: newName => setName(newName),
  };
}

// 🔄 React Render Cycle Simulation
let componentInstance;

function renderApp() {
  ReactEngine.resetIndex(); // Reset index before each render
  componentInstance = UserProfileComponent();
}

// 🎬 Simulation Starts:
console.log('--- Initial Render ---');
renderApp();

console.log('\n--- Triggering Birthday Event (setAge) ---');
componentInstance.clickBirthday();

console.log('\n--- Triggering Name Change Event (setName) ---');
componentInstance.changeName('Pro Developer');
