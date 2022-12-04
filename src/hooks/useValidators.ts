/**
 *
 * @param min 包含
 * @param max 不包含
 * @returns
 */
const useNumberRangeValidator = (min: number, max: number) => (n: number) =>
  n >= min && n < max;

/**
 *
 * @param min 包含
 * @param max 不包含
 * @returns
 */
const useStringLengthValidator = (min: number, max: number) => (s: string) =>
  s.length >= min && s.length < max;

const usePhoneNumberValidator = () => (s: string) =>
  s.match(/(\d{4,}-\d{6,})/g) !== null;

const useEmailValidator = () => (s: string) =>
  s.match(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/g) !== null;

const useValidatorCompose =
  <T extends unknown[]>(
    ...validators: Array<(...args: T) => boolean>
  ): ((...args: T) => boolean) =>
  (...args: T): boolean =>
    [...validators].every((validator) => validator(...args));

export {
  useNumberRangeValidator,
  useValidatorCompose,
  useStringLengthValidator,
  usePhoneNumberValidator,
  useEmailValidator,
};
