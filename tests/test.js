import Shoti from '../dist/index.mjs';

const shoti = new Shoti({
  apikey: "$shoti-b8b9880548"
});

(async function() {
  const data = await shoti.getTop();
  console.log(data)
})()