export const dashboardAreaRoutes = {
  lazyRoutes: [{
    path: 'dashboard',
    loadChildren: () => import('./dashboard-area.module').then((m) => m.DashboardAreaModule),
  }],
};
