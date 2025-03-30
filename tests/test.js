import Shoti from '../dist/index.mjs'

const shoti = new Shoti("$shoti-4edb9e37b6");

(async function testing() {
  const data = await shoti.getTop();
  console.log(data);
})();