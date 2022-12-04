import InputForm from './InputForm';
import OrderCheck from './OrderCheck';
import { PageStateEnum } from './PageStateEnum';
import SentPage from './SentPage';

type Props = {
  state: PageStateEnum;
  handleChangeSetp: (n: PageStateEnum) => React.MouseEventHandler;
};

const Page = ({ state, handleChangeSetp }: Props) => {
  const page = {
    [PageStateEnum.ORDER_CHECK]: (
      <OrderCheck
        handleNextSetp={handleChangeSetp(PageStateEnum.INPUT_FORM)}
        key={PageStateEnum.ORDER_CHECK}
      />
    ),
    [PageStateEnum.INPUT_FORM]: (
      <InputForm
        handlePrevSetp={handleChangeSetp(PageStateEnum.ORDER_CHECK)}
        handleNextSetp={handleChangeSetp(PageStateEnum.ORDER_SENT)}
        key={PageStateEnum.INPUT_FORM}
      />
    ),
    [PageStateEnum.ORDER_SENT]: <SentPage key={PageStateEnum.ORDER_SENT} />,
  };

  return page[state];
};
export default Page;
