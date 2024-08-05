react-helmet-async.md
https://www.npmjs.com/package/react-helmet-async

Announcement post on Times Open blog

This package is a fork of React Helmet. <Helmet> usage is synonymous, but server and client now requires <HelmetProvider> to encapsulate state per request.

react-helmet relies on react-side-effect, which is not thread-safe. If you are doing anything asynchronous on the server, you need Helmet to encapsulate data on a per-request basis, this package does just that.

Usage
New is 1.0.0: No more default export! import { Helmet } from 'react-helmet-async'

The main way that this package differs from react-helmet is that it requires using a Provider to encapsulate Helmet state for your React tree. If you use libraries like Redux or Apollo, you are already familiar with this paradigm:

import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const app = (
<HelmetProvider>
<App>
<Helmet>
<title>Hello World</title>
<link rel="canonical" href="https://www.tacobell.com/" />
</Helmet>
<h1>Hello World</h1>
</App>
</HelmetProvider>
);

ReactDOM.hydrate(
app,
document.getElementById(‘app’)
);
