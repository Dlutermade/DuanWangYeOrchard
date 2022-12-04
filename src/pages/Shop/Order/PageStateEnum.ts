enum PageStateEnum {
  ORDER_CHECK = '訂單確認',
  INPUT_FORM = '資料填寫',
  ORDER_SENT = '送出訂單',
}

const PageList: PageStateEnum[] = [
  PageStateEnum.ORDER_CHECK,
  PageStateEnum.INPUT_FORM,
  PageStateEnum.ORDER_SENT,
];

export { PageStateEnum, PageList };
