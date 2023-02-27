import UserProvider from "./context/user";
import RoutesApp from "./routes";
function App() {
  return (
    <UserProvider>
      <RoutesApp />
    </UserProvider>
  );
}

export default App;
