class Pics {
  clicks = 0;
  timesShown = 0;

  constructor(name, imgSrc) {
      this.name = name;
      this.imgSrc = imgSrc;
  };
}

let leftPic = null;
let middlePic = null;
let rightPic = null;
let totalclicks = 0
let MaxClicks = 25

let allPics = [

new Pics("Corvette Z06", "images/one.jpg"), 
new Pics("Bugatti Divo", "images/two.jpg"),
new Pics("Nascar", "images/three.jpg"),
new Pics("Chiron Super Sport", "images/four.jpg"),
new Pics("Koenigsegg Jesko", "images/five.jpg"),
new Pics("Dodge Demon", "images/six.jpg"),
new Pics("McLaren Senna", "images/seven.jpg"),
new Pics("LaFerrari", "images/eight.jpg"),
new Pics("Lamborghini Veneno", "images/nine.jpg"),
new Pics("Bugatti Bolide", "images/ten.jpg"),
new Pics("Ultima RS", "images/eleven.jpg"),
new Pics("Nissan GTR", "images/twelve.jpg"),
new Pics("Lamborghini Sian", "images/thirteen.jpg"),
new Pics("Aston Martin Vulcan", "images/fourteen.jpg"),
new Pics("Dodge SRT Hellcat", "images/fifteen.jpg"),
new Pics("Hennesey Venom GT", "images/sixteen.jpg"),
new Pics("SSC Tuatara", "images/seventeen.jpg"),
new Pics("Mazda Furai", "images/eighteen.jpg"),
new Pics("Porsche 918 Spyder", "images/nineteen.jpg"),

]

