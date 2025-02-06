import greenIcon from '../assets/layers/Bots/1/green.png';
import yellowIcon from '../assets/layers/Bots/2/yellow.png';
import redIcon from '../assets/layers/Bots/3/red.png';
import blueIcon from '../assets/layers/Bots/4/blue.png';
import emptyIcon from '../assets/layers/Bots/5/empty.png';
import orangeIcon from '../assets/layers/Bots/6/orange.png';
export interface IBotData {
  name: string;
  icon?: string;
  cost?: number;
  '24h'?: number;
  '7d'?: number;
  '30d'?: number;
  '60d'?: number;
  '90d'?: number;
  all_time?: number;
}

export interface IUserData {
  trading_capital: number;
  trading_capital_currency: string;
  balance: number;
  on_hold: number;
  bots: IBotData[];
}

export const userData: IUserData = {
  trading_capital: 3.081,
  trading_capital_currency: 'eth',
  balance: 14630,
  on_hold: 8300,
  bots: [
    {
      name: 'ATTACK',
      icon: orangeIcon,
      cost: 550,
      '24h': 210.1,
      '7d': 81.3,
      '30d': 90.7,
      '60d': 13.4,
      '90d': -40.6,
      all_time: 98.67,
    },
    {
      name: 'PLACE BOT HERE',
      icon: emptyIcon,
    },
    {
      name: 'BALANCE',
      icon: blueIcon,
      cost: 7400,
      '24h': -6.5,
      '7d': -4.3,
      '30d': -0.17,
      '60d': 4.32,
      '90d': 6.8,
      all_time: 10.1,
    },
    {
      name: 'DEFENCE',
      icon: greenIcon,
      cost: 4200,
      '24h': 3.33,
      '7d': -17.6,
      '30d': -2.5,
      '60d': 13.0,
      '90d': 25.1,
      all_time: 4.99,
    },
    {
      name: 'MEGABOT',
      icon: yellowIcon,
      cost: 10000,
      '24h': 3.15,
      '7d': 0.065,
      '30d': 4.1,
      '60d': 15.04,
      '90d': 80.25,
      all_time: 126.85,
    },
    {
      name: 'ATTACK',
      icon: redIcon,
      cost: 1500,
      '24h': -10.8,
      '7d': 5.5,
      '30d': 11.4,
      '60d': 12.1,
      '90d': 24.36,
      all_time: 71.0,
    },
  ],
};
