export const PAGE_IDS = {
  dashboard: 'cyberkongz',
  vx: 'cyberkongz-vx',
} as const

export const SIDEBAR_MENU = [
  {
    id: PAGE_IDS.dashboard,
    title: 'Cyberkongz',
    route: '/',
  },
  {
    id: PAGE_IDS.vx,
    title: 'Cyberkongz VX',
    route: '/vx',
  },
] as const
