/* eslint-disable no-global-assign */
export const mockDate = () => {
  const fakeNow = new Date(2022, 6, 20, 10, 30, 45).valueOf();

  // @ts-expect-error
  Date = class extends Date {
    // @ts-expect-error
    constructor(...args) {
      if (args.length === 0) {
        super(fakeNow);
      } else {
        // @ts-expect-error
        super(...args);
      }
    }
  };

  /* eslint-disable no-underscore-dangle, @typescript-eslint/naming-convention */
  // Override Date.now() to start from fakeNow
  const __DateNowOffset = fakeNow - Date.now();
  const __DateNow = Date.now;
  /* eslint-enable no-underscore-dangle, @typescript-eslint/naming-convention */
  Date.now = () => __DateNow() + __DateNowOffset;
};
