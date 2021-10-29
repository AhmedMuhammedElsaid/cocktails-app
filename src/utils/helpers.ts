/*
 @params object
 return object with no null ,undefined , empty string "cleaned object"
*/
export function cleanObject(object: { [x: string]: any }) {
  if (!object) return {};
  if (typeof object === "object") {
    for (let propName in object) {
      if (
        object[propName] === null ||
        object[propName] === undefined ||
        object[propName]?.length === 0
      ) {
        delete object[propName];
      }
    }
  }
  return object;
}
