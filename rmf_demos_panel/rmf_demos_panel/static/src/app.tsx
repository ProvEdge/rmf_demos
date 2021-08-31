import React from "react";
import Divider from "@material-ui/core/Divider";
import Header from "./components/fixed-components/header";
import PanelsContainer from "./components/panels-container";
import Footer from "./components/fixed-components/footer";
import NavTabs from "./components/fixed-components/tabs";
import { LayoutProvider } from "./_metronic/layout/core";
import { MasterLayout } from "./_metronic/layout/MasterLayout";
import { WorldContext, World } from "./components/fixed-components/app-context";
import { BrowserRouter } from "react-router-dom";

import { getDashboardConfig } from "./components/services";
import { createTheme } from "@material-ui/core";

export default function App(): React.ReactElement {
  const font = "'Poppins', sans-serif";
  const theme = createTheme({
    typography: {
      fontFamily: font,
    },
  });
  const currWorld = React.useContext(WorldContext);
  const [currentWorld, setCurrentWorld] = React.useState(currWorld);
  const [worldName, setWorldName] = React.useState("");

  const setDefaultConfig = async () => {
    const defaultConfig = await getDashboardConfig();
    setCurrentWorld({ map: World.Office, config: defaultConfig });
    setWorldName(defaultConfig.world_name);
  };

  React.useEffect(() => {
    setDefaultConfig();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <LayoutProvider>
          <MasterLayout>
            <WorldContext.Provider value={currentWorld}>
              {/* <Header /> */}
              {/* <NavTabs worldName={worldName} /> */}
              {/* <Divider variant="middle" /> */}
              <PanelsContainer />
              {/* <Divider variant="middle" /> */}
              {/* <Footer /> */}
            </WorldContext.Provider>
          </MasterLayout>
        </LayoutProvider>
      </BrowserRouter>
    </div>
  );
}
