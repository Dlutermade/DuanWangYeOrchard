import gardenOwner from '@assets/orchard/01.png';
import avocadoTree from '@assets/orchard/02.png';
import orchardProcess from '@assets/orchard/03.png';

type key = 'list' | 'iframe' | 'process';

type DataType = {
  title: string;
  img: string;
  contentType: key;
  content: string[];
};

const Data: DataType[] = [
  {
    title: '園主介紹',
    img: gardenOwner,
    contentType: 'list',
    content: [
      '本名段蔡麗珠，一生務農，從事農業40餘年。',
      '農地位於台東的南坑山上，原本種植釋迦有20年，但因為農地位置海拔高，相較於平地的一年二收，高山的釋迦一年只有ㄧ收，且釋迦的照顧及種植複雜又繁瑣，所以改為種植酪梨。',
      '藉由豐富的農務經驗，近10年開始種植酪梨，每一顆酪梨樹都由她悉心照料、親手栽種照顧。希望大家都能一起享用這個油亮、健康、價格公平的酪梨。',
    ],
  },
  {
    title: '果園環境',
    img: avocadoTree,
    contentType: 'iframe',
    content: [
      '果園位於被海岸和山脈滋養的台東，由阿嬤親手栽種照顧，以前只有分送給親朋好友，現在希望大家都能一起享用這個油亮、健康、價格公平的酪梨',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6720261812907!2d121.00549231364612!3d22.628719436179836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346fceb7758ca515%3A0x53a1407e85abb332!2zOTYz5Y-w5p2x57ij5aSq6bq76YeM6YSJ5p2xNjHphInpgZM56Jmf!5e0!3m2!1szh-TW!2stw!4v1669772840720!5m2!1szh-TW!2stw',
    ],
  },
  {
    title: '生產流程',
    img: orchardProcess,
    contentType: 'process',
    content: ['採收', '剪蒂頭', '裝保護套', '裝箱秤重', '寄出'],
  },
];

export type { DataType };
export default Data;
