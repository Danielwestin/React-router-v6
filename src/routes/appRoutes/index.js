import Page from "../../pages/page";
import NewUsers from "../../pages/newUsers";
import UserDetails from "../../components/userDetails";
import NotificationPage from "../../pages/notificationPage";
import Dashboard from "../../pages/dashboard";
import Notify from "../../pages/notificationPage/notify";
import NotifyDetails from "../../components/notifyDetails";
import ProjectsPage from "../../pages/projectsPage";
import AnimationPage from "../../pages/animationPage";
import Counter from "../../components/Counter";
import MapPage from "../../pages/mapPage";
import MapBox from "../../components/mapbox";
import { places } from "../../library/places";
import GridPage from "../../pages/gridpage";
import GSAPScrollTrigger from "../../components/animationSections/GSAP";
import ReactSpringImageGallery from "../../components/animationSections/react-spring";
import ParallaxScrolling from "../../components/animationSections/parallax";

export const appRoutes = [
  {
    path: "/",
    element: <Dashboard title="Dashboard" />,
    children: [
      { path: "/", element: <p>Overview</p> },
      {
        path: "/new-users",
        element: <NewUsers />,
        children: [{ path: "/:id", element: <UserDetails /> }],
      },
      { path: "/grid", element: <GridPage /> },
    ],
  },
  {
    path: "/animation",
    element: <AnimationPage title="Animations" />,
    children: [
      { path: "/", element: <GSAPScrollTrigger /> },
      { path: "/react-spring", element: <ReactSpringImageGallery /> },
      { path: "/parallax-scrolling", element: <ParallaxScrolling /> },
    ],
  },
  {
    path: "/notification",
    element: <NotificationPage title="Notification" />,
    children: [
      { path: "/", element: <h1>Landing Page!</h1> },
      { path: "/no-notification", element: <p>No notification here!</p> },
      {
        path: "/see-notification",
        element: <Notify />,
        children: [{ path: "/:id", element: <NotifyDetails /> }],
      },
    ],
  },
  {
    path: "/projects",
    element: <ProjectsPage title="Projects" />,
    children: [
      { path: "/", element: <h1>Landing Page!</h1> },
      { path: "/simple-reducer", element: <Counter /> },
      {
        path: "/map",
        element: <MapPage title="Places" />,
        children: places.map((place) => ({
          path: place.path,
          element: (
            <MapBox
              title={place.city}
              latitude={place.latitude}
              longitude={place.longitude}
              systembolag={place.systembolag}
            />
          ),
        })),
      },
    ],
  },
  { path: "/calendar", element: <Page title="Calendar" /> },
];
