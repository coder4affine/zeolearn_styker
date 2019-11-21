/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import loadable from '@loadable/component';
import AppBar from './components/appBar/AppBar';
import history from './history';

// const AsyncLogin = loadable(() => import('./screen/login/Login'), {
//   fallback: <div>Loading...</div>,
// });

// const AsyncProducts = loadable(() => import('./screen/products/Products'), {
//   fallback: <div>Loading...</div>,
// });
// const AsyncProductDetails = loadable(() => import('./screen/productDetails/ProductDetails'), {
//   fallback: <div>Loading...</div>,
// });

const routes = [
  {
    path: '/',
    name: 'Login',
    exact: true,
    componentPath: './screen/login/Login',
    // component: AsyncLogin,
  },
  {
    path: '/products',
    name: 'Products',
    componentPath: './screen/products/Products',
    // component: AsyncProducts,
  },
  {
    path: '/productDetails',
    name: 'Product Details',
    componentPath: './screen/productDetails/ProductDetails',
    // component: AsyncProductDetails,
  },
];

const app = () => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const newPaths = routes.reduce((previous, current) => {
      const component = loadable(() => import(`${current.componentPath}`), {
        fallback: <div>Loading...</div>,
      });

      return [...previous, { ...current, component }];
    }, []);
    setPaths(newPaths);
  }, []);

  return (
    <Router history={history}>
      <AppBar routes={paths} />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
          <li>
            <Link to="/productDetails">productDetails</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        {paths.map((route, i) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Route key={i} {...route} />
        ))}
        {/* <Route exact path="/">
          <AsyncLogin />
        </Route>
        <Route path="/products">
          <AsyncProducts />
        </Route>
        <Route path="/productDetails">
          <AsyncProductDetails />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default app;
