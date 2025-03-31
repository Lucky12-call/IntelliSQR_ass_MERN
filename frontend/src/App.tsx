import UserLoginForm from "./components/UserLoginForm";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <UserLoginForm />
      <Toaster />
    </div>
  );
};

export default App;
