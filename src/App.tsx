import { Sidebar } from "./components/Sidebar"
import { CoreSDKFunctions } from "./components/CoreSDKFunctions"
import { ApiFunctions } from "./components/ApiFunctions"
import React, { useState } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { theme, Box, GlobalStyle } from "@looker/components"
import styled, { ThemeProvider } from "styled-components"
import { ExtensionProvider } from "@looker/extension-sdk-react"
import { EmbedDashboard } from "./components/Embed"
import { EmbedExplore } from "./components/Embed/EmbedExplore"
import { EmbedLook } from "./components/Embed/EmbedLook"
// import { MyEditor } from "./MyEditor"
import { CoolApp } from "./CoolApp"


interface AppProps {
}

export enum ROUTES {
  API_ROUTE = "/api",
  CORESDK_ROUTE = "/coresdk",
  EMBED_DASHBOARD = "/embed/dashboard",
  EMBED_EXPLORE = "/embed/explore",
  EMBED_LOOK = "/embed/look"
}

export const App: React.FC<AppProps> = () => {
  const [route, setRoute] = useState("")
  const [routeState, setRouteState] = useState()
  

  const onRouteChange = (route: string, routeState?: any) => {
    setRoute(route)
    setRouteState(routeState)
  }

  return (
    <ExtensionProvider onRouteChange={onRouteChange}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
        
            <Layout p="xlarge">
              {/* <EmbedDashboard></EmbedDashboard> */}
              {/* <MyEditor></MyEditor> */}
              <CoolApp></CoolApp>
              {/* <ping-pong></ping-pong> */}
            </Layout>
        </>
      </ThemeProvider>
    </ExtensionProvider>
  )
}

export const Layout = styled(Box)`
  width: 100vw;
  height: 100vh;
`
