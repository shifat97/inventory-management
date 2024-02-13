import { Footer, Navbar, Products } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
