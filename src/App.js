import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { MainLayout } from "./layouts";
import { NotFound } from "./pages";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        const Page = route.component;
        let Layout = MainLayout;
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
