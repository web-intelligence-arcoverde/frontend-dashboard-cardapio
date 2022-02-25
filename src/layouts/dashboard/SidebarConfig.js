import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import shoppingCart from '@iconify/icons-eva/shopping-cart-fill';

import job from '@iconify/icons-eva/briefcase-outline';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Cargo',
    path: '/dashboard/role',
    icon: getIcon(job)
  }
];

/*

{
    title: 'usuario',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'mesa',
    path: '/dashboard/client',
    icon: getIcon(peopleFill)
  },
  {
    title: 'cliente',
    path: '/dashboard/client',
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
    title: 'cargos',
    path: '/dashboard/cargos',
    icon: getIcon(shoppingCart)
  },
  {
    title: 'pedido',
    path: '/dashboard/order',
    icon: getIcon(shoppingCart)
  }

  */

export default sidebarConfig;
