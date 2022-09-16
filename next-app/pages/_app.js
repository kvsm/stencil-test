import React, { useLayoutEffect } from "react";
import { applyPolyfills, defineCustomElements } from "stencil-library/loader";
import "../styles/globals.css";

// suppress useLayoutEffect (and its warnings) when not running in a browser
if (typeof window === "undefined") React.useLayoutEffect = () => {};

export default function App({ Component, pageProps }) {
  useLayoutEffect(() => {
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  }, []);
  return <Component {...pageProps} />;
}
