# Shoti API
Shoti API sends random beautiful, cute, and hot girl thirst-trap videos & images from TikTok.

## Installation 
Installing Shoti API is pretty straightforward, just type these commands on your fuck*ing terminal to install Shoti API Wrapper:

```sh
npm i shoti
```
Initialize Shoti API instance:

```js
import Shoti from 'shoti';

/* Initialize with API key */
const shoti = new Shoti("YOUR-APIKEY"); //$shoti-xxxx
```

You can get your apikey [here](https://shoti.fbbot.org/myapikey).

## Getting Shoti
Getting videos on Shoti API is pretty basic 😎, just copy this codes:
```js
const data = await shoti.getShoti({ type: "video" });
        
/* or dont specify config, by default shoti api returns videos */
const data = await shoti.getShoti();

/* Print the result */
console.log("Shoti Result:", data);
```

For getting Shoti API images:

```js
const data = await shoti.getShoti({ type: 'image' });

/* Print the result */
console.log("Shoti Images Result:", data);
```
Shoti API response output:
```json
{
  "code": number,
  "result": {
    "content": string | Array[string,...], //If the type is video, this will be string, else it will be array of string's.
    "duration": string,
    "region": string, //ISO 3166-1
    "title": string,
    "type": "video" | "image",
    "shoti_score": number,
    "shoti_id": string,
    "user": {
      "signature": string,
      "instagram": string,
      "twitter": string,
      "nickname": string,
      "username": string
    }
  }
}
```

## Adding Shoti

> [!NOTE]  
> Adding data to Shoti API database isn't available to everyone, you should request to the API administrators to promote your apikey into admin type.

```js
const sumakses = await shoti.newShoti({ 
  url: "https://vt.tiktok.com/XxXxxxX"
});

console.log(sumakses);
```

## Rating Shoti
This function let the user rate the quality of Shoti API output.

```js
const rate = await shoti.rateShoti({ 
  shoti_id: "xxxxxx-xxx-xxxx",
  isNotMaasim: true /* true or false */
});

console.log(rate);
```

If you rate this as 'not maasim' the score of the shoti will be increased by one, please don't abuse this feature because you can rate it multiple times.

> [!TIP]
> Honestly rating the Shoti will help our API to produce more quality Shoti videos and images.

## Getting Top Users
This function lets you get the top 10 Shoti API users.

```js
const topUsers = await shoti.getTop();

console.log(topUsers);
```

# Developer
- **Jan Liby Dela Costa** (@libyzxy0)

# LICENSE
This project is licensed under the [MIT License](https://github.com/libyzxy0/shoti-wrappper/blob/main/LICENSE).