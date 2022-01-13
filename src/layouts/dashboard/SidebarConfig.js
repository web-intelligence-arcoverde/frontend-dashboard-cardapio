import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import shoppingCart from '@iconify/icons-eva/shopping-cart-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'usuario',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'categoria',
    path: '/dashboard/category',
    icon: getIcon(peopleFill)
  },
  {
    title: 'produto',
    path: '/dashboard/products',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'pedido',
    path: '/dashboard/order',
    icon: getIcon(shoppingCart)
  }
];

export default sidebarConfig;
