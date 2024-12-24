import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import DonationsPage from "./pages/DonationsPage";
import EventsPage from "./pages/EventsPage";
import BloodBankPage from "./pages/BloodBankPage";
import DonorsPage from "./pages/DonorsPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },

        {
          path: "/donations",
          element: <DonationsPage />,
        },
        {
          path: "/events",
          element: <EventsPage />,
        },
        {
          path: "/bloodBank",
          element: <BloodBankPage />,
        },
        {
          path: "/donors",
          element: <DonorsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
