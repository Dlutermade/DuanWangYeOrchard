import InputControl from '@components/InputControl';
import { fetchPost } from '@lib/index';
import {
  useHandleClearOrder,
  useProductOrder,
} from '@pages/Shop/OutletContext';
import React, { useState } from 'react';
import {
  useFormDataContext,
  useFormDataHasError,
  useHandleFormDataChange,
  useHandleResetFormData,
  useHandleSentSuccess,
} from '../UserContext';

type Props = {
  handlePrevSetp: React.MouseEventHandler;
  handleNextSetp: React.MouseEventHandler;
};

const HandlerGenerator =
  <T extends string>(fn: (key: T) => (s: string) => void) =>
  (key: T): React.ChangeEventHandler<HTMLInputElement> =>
  (e) => {
    e.preventDefault();
    fn(key)(e.target.value);
  };

const index: React.FC<Props> = ({ handlePrevSetp, handleNextSetp }) => {
  const [readySentFlag, setReadySentFlagg] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { data, dataError, dataErrorMsg } = useFormDataContext();
  const formDataHasError = useFormDataHasError();
  const productOrder = useProductOrder();

  const handleClearOrder = useHandleClearOrder();

  const handleResetFormData = useHandleResetFormData();
  const handleSentSuccess = useHandleSentSuccess();

  const handleFormDataChange = HandlerGenerator(useHandleFormDataChange());

  const InputList = [
    {
      inputLabel: '購買者姓名',
      data: data.name,
      dataError: dataError.name,
      errorMsg: dataErrorMsg.name,
      onChange: handleFormDataChange('name'),
    },
    {
      inputLabel: '手機電話　',
      data: data.phoneNumber,
      dataError: dataError.phoneNumber,
      errorMsg: dataErrorMsg.phoneNumber,
      onChange: handleFormDataChange('phoneNumber'),
    },
    {
      inputLabel: '電子信箱　',
      data: data.email,
      dataError: dataError.email,
      errorMsg: dataErrorMsg.email,
      onChange: handleFormDataChange('email'),
    },
    {
      inputLabel: '收貨地址　',
      data: data.address,
      dataError: dataError.address,
      errorMsg: dataErrorMsg.address,
      onChange: handleFormDataChange('address'),
    },
    {
      inputLabel: '匯款帳號　',
      data: data.remittanceAccount,
      dataError: dataError.remittanceAccount,

      errorMsg: dataErrorMsg.remittanceAccount,
      onChange: handleFormDataChange('remittanceAccount'),
    },
    {
      inputLabel: '備註訊息　',
      data: data.remark,
      dataError: dataError.remark,
      errorMsg: dataErrorMsg.remark,
      onChange: handleFormDataChange('remark'),
    },
  ];

  const handleSubmit: React.MouseEventHandler = (e) => {
    e.preventDefault();

    if (formDataHasError) {
      alert('請確認資訊的填寫');
      setReadySentFlagg(true);
    } else {
      if (confirm('請再次確認是否要送出訂單!!')) {
        setUploading(true);
        fetchPost({ ...data, ...productOrder }).then((response) => {
          if (response.status === 201) {
            handleSentSuccess(true);
            handleClearOrder();
          } else {
            handleSentSuccess(false);
          }

          handleNextSetp(e);
        });
      }
    }
  };

  const handleReset: React.MouseEventHandler = (e) => {
    e.preventDefault();
    handleResetFormData();
  };

  return (
    <form>
      <h1 className="bg-cactus-300 p-2 text-lg md:text-xl">匯款資訊</h1>
      <div className="mt-2 rounded-lg border-2 border-gray-800 p-2">
        <ul className="list-inside list-decimal">
          <li>請匯款到下面帳戶</li>
          <li>{'國泰世華銀行 (013) 699513813931'}</li>
          <li>請填寫購買者資訊</li>
        </ul>
      </div>

      <h1 className="mt-6 bg-cactus-300 p-2 text-lg md:text-xl">
        購買者 資訊填寫
      </h1>

      {InputList.map(
        ({ inputLabel, data, errorMsg, dataError, onChange }, idx) => (
          <InputControl
            inputLabel={inputLabel}
            data={data}
            errorMsg={errorMsg}
            dataError={readySentFlag && dataError}
            onChange={onChange}
            key={idx}
            type="text"
          />
        )
      )}

      {uploading && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-gray-900/60 text-center "
          style={{ backdropFilter: 'blur(1px)' }}
        >
          <p className="text-xl font-medium text-slate-200 md:text-2xl">
            正在上傳給Server中
          </p>
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        </div>
      )}

      <div className="mt-6 flex w-full justify-end pb-12 text-right">
        <button
          className="mr-auto rounded-lg border-2 border-cactus-500 p-2 duration-300 hover:border-cactus-200 hover:bg-cactus-500 hover:text-slate-200"
          type="reset"
          onClick={handlePrevSetp}
        >
          返回上一頁
        </button>
        <button
          className="mr-8 rounded-lg bg-gray-800 p-2 text-slate-200 duration-300 hover:bg-gray-300 hover:text-gray-800"
          onClick={handleReset}
        >
          資料清空
        </button>
        <button
          className={`mr-8 rounded-lg p-2 text-slate-200 duration-300 ${
            uploading
              ? 'bg-slate-600'
              : 'bg-cactus-600 hover:bg-cactus-300 hover:text-gray-800'
          }`}
          onClick={handleSubmit}
          disabled={uploading}
        >
          確認送出
        </button>
      </div>
    </form>
  );
};

export default index;
