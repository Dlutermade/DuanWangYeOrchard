import React from 'react';
import { useFormDataSentSuccess } from '../UserContext';

const index = () => {
  const success = useFormDataSentSuccess();
  return (
    <div className="mx-auto w-3/4 rounded-xl border-2 border-gray-800 bg-coconut-cream-100 px-4 text-center shadow-lg shadow-slate-700">
      <p
        className={`mt-6 inline-block rounded-lg py-6 px-12 text-2xl font-bold ${
          success ? 'bg-cactus-400' : 'bg-rose-500'
        }`}
      >
        {success ? '送出成功' : '送出失敗'}
      </p>
      <p className="mt-6 pb-12 text-justify">
        {success
          ? '送出成功，請隨時注意手機或是信箱訊息，如有疑問請私訊粉專'
          : '有可能是伺服器流量達到該月上限或是伺服器出現故障，請私訊粉專'}
      </p>
    </div>
  );
};

export default index;
