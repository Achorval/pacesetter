import Dashboard from './Dashboard/Home';
import Buttons from './Auth/Buttons';
import Alerts from './Auth/Alerts';
import Grid from './Auth/Grid';
import Typography from './Auth/Typography';
import Cards from './Auth/Cards';
import Tabs from './Auth/Tabs';
import Tables from './Auth/Tables';
import Breadcrumbs from './Auth/Breadcrumbs';
import Forms from './Auth/Forms';
import Loaders from './Auth/Loaders';
import Avatars from './Auth/Avatars';
import Invoice from './Dashboard/Invoice';
import Analytics from './Dashboard/Analytics';
import CmsPage from './Dashboard/Cms';
import Widgets from './Dashboard/Widgets';
import BlankPage from './Dashboard/BlankPage';
import SubNav from './Dashboard/SubNav';
import Feed from './Dashboard/Feed';
import Modals from './Auth/Modals';
import ProgressBars from './Auth/ProgressBars';
import PaginationPage from './Auth/Pagination';
import ErrorPage from './Dashboard/404';

// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
const pageList = [
  {
    name: 'Dashboard',
    path: '/home',
    component: Dashboard,
  },
  {
    name: 'Buttons',
    path: '/elements/buttons',
    component: Buttons,
  },
  {
    name: 'Alerts',
    path: '/elements/alerts',
    component: Alerts,
  },
  {
    name: 'Grid',
    path: '/elements/grid',
    component: Grid,
  },
  {
    name: 'Typography',
    path: '/elements/typography',
    component: Typography,
  },
  {
    name: 'Cards',
    path: '/elements/cards',
    component: Cards,
  },
  {
    name: 'Tabs',
    path: '/elements/tabs',
    component: Tabs,
  },
  {
    name: 'Tables',
    path: '/elements/tables',
    component: Tables,
  },
  {
    name: 'Progress Bars',
    path: '/elements/progressbars',
    component: ProgressBars,
  },
  {
    name: 'Pagination',
    path: '/elements/pagination',
    component: PaginationPage,
  },
  {
    name: 'Modals',
    path: '/elements/modals',
    component: Modals,
  },
  {
    name: 'Breadcrumbs',
    path: '/elements/breadcrumbs',
    component: Breadcrumbs,
  },
  {
    name: 'Forms',
    path: '/elements/forms',
    component: Forms,
  },
  {
    name: 'Loaders',
    path: '/elements/loaders',
    component: Loaders,
  },
  {
    name: 'Avatars',
    path: '/elements/avatars',
    component: Avatars,
  },
  {
    name: 'Blank',
    path: '/pages/blank',
    component: BlankPage,
  },
  {
    name: 'Sub Navigation',
    path: '/pages/subnav',
    component: SubNav,
  },
  {
    name: '404',
    path: '/pages/404',
    component: ErrorPage,
  },
  {
    name: 'Analytics',
    path: '/apps/analytics',
    component: Analytics,
  },
  {
    name: 'Activity Feed',
    path: '/apps/feed',
    component: Feed,
  },
  {
    name: 'Invoice',
    path: '/apps/invoice',
    component: Invoice,
  },
  {
    name: 'CMS',
    path: '/apps/cms',
    component: CmsPage,
  },
  {
    name: 'Widgets',
    path: '/widgets',
    component: Widgets,
  },
];

export default pageList;
