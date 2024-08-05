window.md

```ts
declare module "slash2";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
declare module "omit.js";
declare module "numeral";
declare module "react-images-viewer";

// google analytics interface
interface GAFieldsObject {
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  eventValue?: number;
  nonInteraction?: boolean;
}
interface Window {
  REDUX_LOGGER: boolean;
  clipboardData: any;
  CLIENT_ID: string;
  REACT_APP_ENV: "test" | "dev" | "pre" | false;
  // preview.pro.ant.design only do not use in your production ;
  // preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: "site" | undefined;

  ga: (
    command: "send",
    hitType: "event" | "pageview",
    fieldsObject: GAFieldsObject | string
  ) => void;
  reloadAuthorized: () => void;
}
// https://stackoverflow.com/questions/48995303/fullscreen-request-on-angular-2-4/48995593
interface MyDocument extends HTMLDocument {
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
}

declare let ga: Function;

// preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不
// 要在你的项目中使用它。
declare let ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
  | "site"
  | undefined;

declare const REACT_APP_ENV: "test" | "dev" | "pre" | false;

declare const REDUX_LOGGER: boolean;

declare const CLIENT_ID: string;
```
