//step-1 Install react-router-dom
//step-2-->part-1-->Create Browser router object
import "./App.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/routing/Home";
import Register from "./components/routing/Register";
import Login from "./components/routing/Login";
import Agridetails from "./components/routing/Agridetails";
import Solutions from "./components/routing/Solutions";

function App() {
  //create BrowserRouter object
  let browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path:'login',
          element:<Login/>,
        }  ,
        {
          path:'agridetails',
          element:<Agridetails/>,
        },
        {
          path:'solution',
          element:<Solutions/>,
        },
        {
          path:'demo',
          element:<demo/>
        }  
        ]
    },
      
  ]);

  return <RouterProvider router={browserRouter} />;
}

export default App;


