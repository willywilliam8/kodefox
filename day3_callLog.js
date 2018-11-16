// @flow

type CallType = 'INCOMING' | 'OUTGOING' | 'MISSED';

type Call = {
  type: CallType,
  phoneNumber: string,
  timestamp: string,
};
type TimeStampFunction = () => string;

let defaultMakeTimeStamp = () => new Date().toISOString();

function createCallLog(makeTimeStamp: Function = defaultMakeTimeStamp) {
  let callLog: Array<Call> = [];
  return {
    add: (type: CallType, phoneNumber: string) => {
      callLog.push({
        type,
        phoneNumber,
        timestamp: makeTimeStamp(),
      });
    },
    getRecent: (maximalNum: number) => {
      return callLog.slice(0, maximalNum);
    },
  };
}
let log = createCallLog();
log.add('INCOMING', '123123');
