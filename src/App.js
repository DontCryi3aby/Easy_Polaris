import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import AppFrame from "./components/AppFrame";
import { NotFound } from "./pages";
import routes from "./routes";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        const Page = route.component;
        let Layout = AppFrame;
        if (route.layout) {
          Layout = route.layout;
        } else if (route.layout === null) {
          Layout = Fragment;
        }

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
