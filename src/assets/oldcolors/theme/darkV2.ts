import Dark from "../tokens/Dark.json";
import { palette } from "../palette/palette";
//@ts-ignore
function testt<TParam extends Record<string, unknown>>(input: TParam) {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      if (
        typeof value === "object" &&
        !Object.keys(value as Object).some((iKey) => iKey === "value")
      ) {
        //@ts-ignore
        return [key, testt(value)];
      }
      //@ts-ignore
      const newValue = (value.value as string)
        .replace("{", "")
        .replace("}", "")
        .split(".");
      let t = palette;
      newValue.forEach((v, index) => {
        console.log(v);
        //@ts-ignore
        if (index) t = t[v];
      });
      //@ts-ignore
      return [key, t.value];
    })
  );
}

function formatJSONColorVariable<TParam extends Record<string, unknown>>(
  input: TParam
): TParam {
  const test = testt(input) as TParam;
  return test;
}
//@ts-ignore
const dark = formatJSONColorVariable(Dark.THEME);
console.log(dark);

export default dark;
