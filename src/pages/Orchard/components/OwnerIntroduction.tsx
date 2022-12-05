import React from 'react';

import gardenOwner from '@assets/orchard/01.png';

const OwnerIntroduction = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:gap-16">
      <div className="w-96">
        <img className="w-screen object-cover" src={gardenOwner}></img>
      </div>
      <div className="w-96 rounded-xl bg-white/90 px-4 py-2">
        <h1 className="mt-2 text-center text-xl">園主介紹</h1>
        <hr className="mt-4 mb-2 border-gray-800" />
        <p className="space-y-4">
          <span className="inline-block">
            本名段蔡麗珠，一生務農，從事農業40餘年。
          </span>
          <span className="inline-block indent-8">
            農地位於台東的南坑山上，原本種植釋迦有20年，但因為農地位置海拔高，相較於平地的一年二收，高山的釋迦一年只有ㄧ收，且釋迦的照顧及種植複雜又繁瑣，所以改為種植酪梨。
          </span>
          <span className="inline-block indent-8">
            藉由豐富的農務經驗，近10年開始種植酪梨，每一顆酪梨樹都由她悉心照料、親手栽種照顧。希望大家都能一起享用這個油亮、健康、價格公平的酪梨。
          </span>
        </p>
      </div>
    </div>
  );
};

export default OwnerIntroduction;
