function randomString() {
    const arr = [
      "Lorem Ipsum",
      "dolor sit, amet consectetur",
      "adipisicing elit.",
      "Ducimus quod velit nobis, corporis sit at",
      "eveniet",
      "Accusantium nisiy fugit",
      "laudantium nesciunt aperiam a.",
      "Odit",
      "minima nostrum ad",
      "quidem voluptatum deleniti.",
      "Vel, officiis?",
      "consectetur adipisicing Elit",
      "Ulan sera Yalut!",
    ];
    let answer = "";
    let itr = 0;
    for (let index = 0; index < 1; index++) {
      let str = arr[random(0, arr.length)];
      let answerFunction = answerString(vowels(str), str);
      answer += " " + ++itr + ": " + answerFunction + " | ";
    }
    return answer;
  }
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function answerString(answer, random) {
    let reg = /[ayieou]/gi;
    let str = random.match(reg).length == answer ? "To'g'ri" : "Noto'g'ri";
    return str
  }
  console.log(randomString());
  
