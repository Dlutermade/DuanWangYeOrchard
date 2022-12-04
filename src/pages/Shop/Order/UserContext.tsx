import {
  useEmailValidator,
  useNumberRangeValidator,
  usePhoneNumberValidator,
  useStringLengthValidator,
  useValidatorCompose,
} from '@hooks/useValidators';
import React, { createContext, useContext, useState } from 'react';

type Key =
  | 'name'
  | 'address'
  | 'email'
  | 'phoneNumber'
  | 'remittanceAccount'
  | 'remark';

type Data = {
  [n in Key]: string;
};

type DataError = {
  [n in Key]: boolean;
};

type DataErrorMsg = {
  [n in Key]: string;
};

type FormData = {
  data: Data;
  dataError: DataError;
  dataErrorMsg: DataErrorMsg;
  sentSuccess: boolean;
};

type FormContext = {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const formContext = createContext<FormContext>(null!);

const initData = {
  data: {
    name: '',
    address: '',
    email: '',
    phoneNumber: '0900-',
    remittanceAccount: '',
    remark: '',
  },
  dataError: {
    name: true,
    address: true,
    email: true,
    phoneNumber: true,
    remittanceAccount: true,
    remark: false,
  },
  dataErrorMsg: {
    name: '姓名必須填寫，且必須為真實的姓名',
    address: '地址必須填寫',
    email: '電子信箱必須填寫且符合格式',
    phoneNumber: '電話必須填寫且符合 四碼-六碼 EX: 0900-123456',
    remittanceAccount: '匯款帳號後五碼必須填寫',
    remark: '備註訊息請在50字以內',
  },
  sentSuccess: false,
};

const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<FormData>(initData);

  return (
    <formContext.Provider value={{ data, setData }}>
      {children}
    </formContext.Provider>
  );
};

const useFormDataSentSuccess = () => {
  const { data } = useContext(formContext);
  return data.sentSuccess;
};

const useFormDataContext = () => {
  const { data } = useContext(formContext);
  return data;
};

const HandlerValidatorMapping: Record<Key, ((s: string) => boolean)[]> = {
  name: [useStringLengthValidator(1, 20)],
  address: [useStringLengthValidator(1, Infinity)],
  email: [useEmailValidator()],
  phoneNumber: [useStringLengthValidator(11, 12), usePhoneNumberValidator()],
  remittanceAccount: [
    useStringLengthValidator(5, 6),
    (s: string) => useNumberRangeValidator(0, 100000)(Number(s)),
  ],
  remark: [useStringLengthValidator(0, 50)],
};

const useHandleFormDataChange = () => {
  const { setData } = useContext(formContext);

  return (prop: Key) => (s: string) => {
    const validators = HandlerValidatorMapping[prop];

    const validatorCompose = useValidatorCompose(...validators);

    setData((prev) => ({
      ...prev,
      data: { ...prev.data, [prop]: s },
      dataError: { ...prev.dataError, [prop]: !validatorCompose(s) },
    }));
  };
};

const useFormDataHasError = () => {
  const { data } = useContext(formContext);

  return Object.values(data.dataError).some((v) => v);
};

const useHandleResetFormData = () => {
  const { setData } = useContext(formContext);

  return () => setData(initData);
};

const useHandleSentSuccess = () => {
  const { setData } = useContext(formContext);

  return (state: boolean) =>
    setData((prev) => ({ ...prev, sentSuccess: state }));
};

export {
  FormContextProvider,
  useFormDataContext,
  useFormDataSentSuccess,
  useHandleFormDataChange,
  useFormDataHasError,
  useHandleResetFormData,
  useHandleSentSuccess,
};

// 姓名 地址 電話 信箱 匯款帳號後五碼 備註
