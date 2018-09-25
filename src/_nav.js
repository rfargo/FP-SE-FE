export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Store Analytics',
    },
    {
      name: 'One Day Statistics',
      url: '/store-analytics/one-day',
      icon: 'icon-graph',
    },
    {
      name: 'Date Range Statistics',
      url: '/store-analytics/date-range',
      icon: 'icon-graph',
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-heart',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-heart',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-heart',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-heart',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-heart',
        },
        {
          name: 'Landing Page',
          url: '/landing',
          icon: 'icon-heart',
        },
      ],
    },
  ],
};
