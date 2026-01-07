import { Button } from "@/components/ui/button";

function App() {
  const portNumber = import.meta.env.VITE_APP_PORT_NUMBER;

  console.log(portNumber);

  return (
    <div className="App">
      <h1 className="text-yellow-800 text-bold text-4xl">Hello World</h1>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
