
import { v4 as uuidv4 }  from 'uuid';

function chillHop() {
  return [
    {
      name: "Cruising",
      artist: "Evil Needle",
      cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#EB7651", "#E6B04E"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
    },
    {
      name: "Lavish",
      artist: "Toonorth",
      cover: "https://chillhop.com/wp-content/uploads/2021/05/94a210b97ac05e5f05e1ce784a1a9ecf90168d03-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#7BAECB", "#555368"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17933",
    },
    {
      name: "Dreamstate",
      artist: "Toonorth",
      cover: "https://chillhop.com/wp-content/uploads/2021/05/8ef1fa972003495d1ecfba6292116174e9c5d940-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#384D6D", "#FFFAC0"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17947",
    },
    {
      name: "Melodiya",
      artist: "Psalm Trees, FloFilz",
      cover: "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FAB438", "#EC462E"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16060",
    },
  ];
}

export default chillHop;