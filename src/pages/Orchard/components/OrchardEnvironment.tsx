import React from 'react';

import avocadoTree from '@assets/orchard/02.png';

const OwnerIntroduction = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:gap-16">
      <div className="w-96">
        <img className="w-screen object-cover" src={avocadoTree}></img>
      </div>
      <div className="w-96 rounded-xl bg-white/90 px-4 py-2">
        <h1 className="mt-2 text-center text-xl">園主介紹</h1>
        <hr className="mt-4 mb-2 border-gray-800" />
        <p>
          果園位於被海岸和山脈滋養的台東，由阿嬤親手栽種照顧，以前只有分送給親朋好友，現在希望大家都能一起享用這個油亮、健康、價格公平的酪梨
        </p>
        <iframe
          className="mx-auto mt-4 mb-6 h-80 w-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6720261812907!2d121.00549231364612!3d22.628719436179836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346fceb7758ca515%3A0x53a1407e85abb332!2zOTYz5Y-w5p2x57ij5aSq6bq76YeM6YSJ5p2xNjHphInpgZM56Jmf!5e0!3m2!1szh-TW!2stw!4v1669772840720!5m2!1szh-TW!2stw"
          frameBorder="0"
          allowFullScreen={false}
        ></iframe>
      </div>
    </div>
  );
};

export default OwnerIntroduction;
