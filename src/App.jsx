import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },

        {
          path: "/donations",
          element: <HomePage />,
        },
        {
          path: "/events",
          element: <HomePage />,
        },
        {
          path: "/bloodBank",
          element: <HomePage />,
        },
        {
          path: "/donors",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
