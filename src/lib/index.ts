import fetch from './fetch';

type Key =
  | 'name'
  | 'address'
  | 'email'
  | 'phoneNumber'
  | 'remittanceAccount'
  | 'remark'
  | 'product';

type Data = {
  [n in Key]: string;
} & {
  price: number;
};

const fetchPost = (data: Data) =>
  fetch.post(import.meta.env.VITE_API_URL, { data: [data] });

export { fetchPost };
