import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const OneDayStatistics = Loadable({
  loader: () => import('./views/StoreAnalytics/OneDayStatistics/OneDayStatistics'),
  loading: Loading,
});

const DateRangeStatistics = Loadable({
  loader: () => import('./views/StoreAnalytics/DateRangeStatistics/DateRangeStatistics'),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const LandingPage = Loadable({
  loader: () => import('./views/Pages/LandingPage/LandingPage'),
  loading: Loading,
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: `/dashboard`, name: 'Dashboard', component: Dashboard },
  { path: `/landing`, name:`Landing Page`, component: LandingPage},
  { path: `/store-analytics/one-day`, name: 'One Day Statistics', component: OneDayStatistics },
  { path: `/store-analytics/date-range`, name: 'Date Range Statistics', component: DateRangeStatistics },
];

export default routes;
