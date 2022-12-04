/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as Home } from '../../assets/img/icon/home.svg';
import { ReactComponent as HoverHome } from '../../assets/img/icon/hover_home.svg';
import { ReactComponent as Logo1 } from '../../assets/img/icon/logo1.svg';
import { ReactComponent as Logo2 } from '../../assets/img/icon/logo2.svg';
import { ReactComponent as LatestNews } from '../../assets/img/icon/latest_news.svg';
import { ReactComponent as HoverLatestNews } from '../../assets/img/icon/hover_latest_news.svg';
import { ReactComponent as Orchard } from '../../assets/img/icon/orchard.svg';
import { ReactComponent as HoverOrchard } from '../../assets/img/icon/hover_orchard.svg';
import { ReactComponent as Knowledge } from '../../assets/img/icon/knowledge.svg';
import { ReactComponent as HoverKnowledge } from '../../assets/img/icon/hover_knowledge.svg';
import { ReactComponent as Toy } from '../../assets/img/icon/toy.svg';
import { ReactComponent as HoverToy } from '../../assets/img/icon/hover_toy.svg';
import { ReactComponent as Shop } from '../../assets/img/icon/shop.svg';
import { ReactComponent as HoverShop } from '../../assets/img/icon/hover_shop.svg';
import { ReactComponent as Feedback } from '../../assets/img/icon/feedback.svg';
import { ReactComponent as HoverFeedback } from '../../assets/img/icon/hover_feedback.svg';
import { ReactComponent as Fackbook } from '../../assets/img/icon/facebook.svg';

export type MenuDataType = {
  path: string;
  icon?: React.ReactNode;
  hoverIcon?: React.ReactNode;
  content: React.ReactNode;
  submenu?: MenuDataType[];
};

const inlineBlock = 'inline-block';
const icon = `${inlineBlock} relative -left-[16px]`;

const MenuData: MenuDataType[] = [
  {
    path: '/',
    icon: <Logo1 height="48px" width="36px" className={inlineBlock} />,
    content: (
      <Logo2
        height="48px"
        width="112px"
        viewBox="0 0 95 20"
        className={inlineBlock}
      />
    ),
  },
  {
    path: '/home',
    icon: <Home height="48px" width="48px" className={icon} />,
    hoverIcon: <HoverHome height="48px" width="48px" className={icon} />,
    content: '首頁',
  },
  {
    path: '/latestNews',
    icon: <LatestNews height="48px" width="48px" className={icon} />,
    hoverIcon: <HoverLatestNews height="48px" width="48px" className={icon} />,
    content: '最新消息',
  },
  {
    path: '/orchard',
    icon: <Orchard height="48px" width="48px" className={icon} />,
    hoverIcon: <HoverOrchard height="48px" width="48px" className={icon} />,
    content: '果園介紹',
  },
  {
    path: '/knowledge',
    icon: <Knowledge height="48px" width="48px" className={icon} />,
    hoverIcon: <HoverKnowledge height="48px" width="48px" className={icon} />,
    content: '酪梨小百科',
    submenu: [
      {
        path: '',
        content: '酪梨知識庫',
      },
      {
        path: '/cookbook',
        content: '酪梨吃法',
      },
    ],
  },
  {
    path: '/toy',
    icon: <Toy height="48px" width="48px" className={icon} />,
    hoverIcon: <HoverToy height="48px" width="48px" className={icon} />,
    content: '我的小酪梨',
  },
  {
    path: '/shop',
    icon: <Shop height="48px" width="48px" className={icon} />,
    hoverIcon: <HoverShop height="48px" width="48px" className={icon} />,
    content: '酪梨購買',
  },
  {
    path: '/feedback',
    icon: <Feedback height="48px" width="48px" className={icon} />,
    hoverIcon: <HoverFeedback height="48px" width="48px" className={icon} />,
    content: '顧客好評',
  },
  {
    path: 'https://www.facebook.com/people/%E6%AE%B5%E7%8E%8B%E7%88%BA%E3%81%AE%E6%9E%9C%E5%9C%92/100083708892925/',
    icon: <Fackbook height="2rem" width="48px" className={icon + 'left-0'} />,
    hoverIcon: (
      <Fackbook height="2rem" width="48px" className={icon + 'left-[4px]'} />
    ),
    content: '粉絲專頁',
  },
];

export { MenuData };
