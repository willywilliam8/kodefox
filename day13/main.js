import * as fs from 'fs';
import denodeify from 'denodeify';

type CallbackStyleFunc<Input, Result> = (
  input: Input,
  callback: (error: ?Error, result: Result) => void,
) => void;
type PromiseStyleFunc<Input, Result> = (input: Input) => Promise<Result>;

type Denodify<Input, Result> = (
  CallbackStyleFunc<Input, Result>,
) => PromiseStyleFunc<Input, Result>;

function getStudents(
  schoolID: string,
  callback: (error: ?Error, result: Array<string>) => void,
) {
  setTimeout(() => {
    callback(null, ['Evan', 'Yosua']);
  }, 500);
}

let denodify: Denodify<*, *> = global.denodify;

let getStudentNew = denodify(getStudents);

let result = getStudentNew('100');

result.then((students) => {
  for (let stu of students) {
    console.log(stu * 10);
  }
});
