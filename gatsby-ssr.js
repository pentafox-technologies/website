/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React, { Fragment } from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { createStylesServer, ServerStyles } from '@mantine/ssr';
// import AppProvider from 'store/provider';

const stylesServer = createStylesServer();

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // React Context in SSR/build
  const ConnectedBody = () => <Fragment>{bodyComponent}</Fragment>;
  // const ConnectedBody = bodyComponent;
  replaceBodyHTMLString(renderToString(<ConnectedBody />));

  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet();
  const bodyHTML = renderToString(sheet.collectStyles(<ConnectedBody />));
  const styleElement = sheet.getStyleElement();
  setHeadComponents(styleElement);

  const html = renderToString(bodyComponent);
  setHeadComponents([<ServerStyles html={html} server={stylesServer} />]);
  replaceBodyHTMLString(html);
};

export const onRenderBody = ({ setPreBodyComponents, setBodyAttributes, setHeadComponents, setPostBodyComponents }) => {
  setPreBodyComponents([
    <div id='preloader'>
      {/* <img src="pentafox.png" alt="logo" style={{"width": 180}} /> */}
      {/* <img id="loader-img" src="/arya-pulses-icon.png" alt="logo" style={{"width": 80}} /> */}
      {/* <div className="preloader_animation"></div> */}
    </div>
  ])

  setBodyAttributes({
    className: 'preloader_active'
  })

  setHeadComponents([
    <>
      <link as='script' rel="preload" href="/scripts/preloader.js" />
      <noscript>
        <link rel="stylesheet" href="/scripts/preloader.css" defer />
      </noscript>
    </>
  ])

  setPostBodyComponents([
    <script src="/scripts/preloader.js" />
  ])
}

// export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
//   const html = renderToString(bodyComponent);
//   setHeadComponents([<ServerStyles html={html} server={stylesServer} />]);
//   replaceBodyHTMLString(html);
// };