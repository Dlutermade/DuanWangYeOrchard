import a01 from '@assets/latestNews/01.jpg';
import a02 from '@assets/latestNews/02.jpg';

type newsData = {
  title: string;
  month: number;
  day: number;
  imgPath: string;
  content: string[];
};

const NewsList: newsData[] = [
  {
    title: '🥑今年酪梨產季已結束',
    month: 8,
    day: 19,
    imgPath: a01,
    content: [
      '謝謝各位親朋好友的支持❤️今年的酪梨產季已經結束囉！我們昨天已寄出最後一批酪梨。',
      '這是我們第一次對外販賣，謝謝大家的包容與支持🥺🙏從訂購到品管，再到出貨都還有許多地方可以進步！期許明年段王爺の果園可以升級，讓大家買得更方便！更安心！',
      '我們明年見～～🥳🥳有任何消息會公布在粉專讓大家知道🙏',
    ],
  },
  {
    title: '🔍✨🥑酪梨放大鏡',
    month: 8,
    day: 5,
    imgPath: a02,
    content: [
      '我們家的酪梨品種有：「黑美人」、「青皮」你們知道嗎？！我認為最好辨認的就是它的「身材」🤣，長橢圓形有脖子的是黑美人，圓胖的就是青皮。🔺黑美人的產季已經結束，剩下少量的青皮，要訂要把握現在。😭',
      '📣如果您們收到的酪梨有問題都可以跟我們反應！有一些被蜜蜂或果蠅叮到，採收時是看不太出來的，要等到熟成才能知。雖然要食用時挖掉那塊即可～但如果損失嚴重請一定要跟我們說！',
      '我們家的酪梨沒有A、B貨之分，因為B貨全部被丟掉或自己吃掉了。',
    ],
  },
];

export { NewsList };
