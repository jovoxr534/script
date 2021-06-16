


// 1-homework

var ism = prompt('Ismingizni kiriting?')
if(ism == 'Xurshidbek'){
    alert('Hello Boss')   
}
else{
   alert('Hello guest')   
}


// 2-homework

var  yosh = prompt('Yoshingizni kiriting')
if( yosh <= 0){
    alert("Nimadir notog'ri ketib qoldi")   
}
else if(0 <= yosh && yosh <= 18){
    alert("Yoshsiz. O'qishingiz kerak")   
}
else if(   18 < yosh && yosh <= 50){
    alert("Ishlashingiz kerak")   
}
else if(   50 < yosh && yosh <= 59){
    alert("Yaqinda pensiyaga chiqasiz")   
}
else if(   59 < yosh && yosh <= 150){
    alert("Pensiyanerga o'xshaysiz, hali tirik bo'lsangiz")   
}
else  {
   alert("Nimadir notog'ri ketib qoldi")   
}


// 3-homework

var a = +prompt("1-soni kiriting") 
var b = +prompt("2-soni kiriting") 
var c = +prompt("3-soni kiriting") 
if (b > a  && c < a || b < a && c > a) {
    alert("O'rta qiymat "+a) 
}else if (a > b  && c < b || a < b && c > b) {
    alert("O'rta qiymat "+b) 
}else if (b > c  && a < c || b < c && a > c) {
    alert("O'rta qiymat "+c) 
} 


// 4-homework

var son=+prompt("Son kiriting")
c=0
while(c <= son){
console.log(c++);
}
alert("Rosa asabni buzadigan narsa ekan torisi");

// 5-homework
var v2=3 , v1=1
var dil=+prompt('Dilfin hizmatidan foyadalanasizmi 👉🐬 1/0')
while(isNaN(dil)){
     dil=prompt('Seryozna so\'rayabman 😡 1/0')
}if (dil){
v1=2}
var s1=+prompt('Odamdan qirg\'oqacha masofani🏊‍♂️👉🏖')
var s2=+prompt('Akuladan odamgacha masofani🦈👉🏊‍♂️')
if (s1/v1>=(s1+s2)/v2){
    alert('Shark Bait 😫')
}else  {
    alert('Alive 🤪')}


// 6-homework

var soni = prompt('sonini kiriting');
while(isNaN(soni)||soni<0){
    soni = prompt('sonini kiriting');}
for (var i = 1; i<=soni; i++){
    if(i == 1){
       b= i+" qo'y..."
    }else {
      b=b+i+" qo'ylar..."  }
}console.log(b);

// 7-homework
var ism=prompt("ismingizni yozing")
var a=prompt("hozirgi yilni kiriting")
var b=prompt('tugulgan yiligizni kiriting')
function age(a,b){
    return a-b}
let yoshi=age(a,b)
console.log(ism+', yoshingiz '+yoshi);


// 8-homework

var soni=prompt('yechmoqchi bo\'lgan misollar sonini kiriting')
for (let i = 0; i<soni; i++) {
    function ex(){
        let a=Math.trunc(Math.random()*100)
        let b=Math.trunc(Math.random()*100)
        let c=Math.trunc(Math.random()*10)
        if (c>=0 && c<3 ){
                if(a>b && a!==0 && b!==0){
                resalt=a/b
                fon=+prompt(`${a}/${b}=?`)     
                }else if(a<b && a!==0 && b!==0){
                resalt=b/a
                fon=+prompt(`${b}/${a}=?`)      
                }else{
                resalt=a+b
                fon=+prompt(`${a}+${b}=?`)}
        }else if(c>=3 && c<5 ){
                resalt=a*b
                fon=+prompt(`${a}*${b}=?`)      
        }else if(c>=5 && c<7){
                resalt=a+b
                fon=+prompt(`${a}+${b}=?`)      
        }else {
                resalt=a-b
                fon=+prompt(`${a}-${b}=?`)     
        }
        if( resalt==fon ){
            console.log("javob togri " +"  siz kiritgan javob "+(fon) +"  to\'g\'ri javob "+(resalt));
        }else{
            console.log("javob xato " +"   siz kiritgan javob "+(fon) +"  to\'g\'ri javob "+(resalt));
        }
    }
 ex()
}

//9-homework

const persons = []
while(true){
  let command = prompt('komandani kiriting')
  command=command.split(', ')
 if( command[0]== 'add'){
     persons.push(command[1])
    
 }else if (command[0] == 'del'){
    for (let i = 0; i < persons.length; i++) {
       if(persons[i]==command[1]){
           persons.splice(i,1)
       }
        
    }
 }else if (command =='stop'){
  break   
 }
 
console.log(persons);
}

//10-homework
function vowels(gap){
    const unlilar ='aueoiyAUEOIY'
    let count = 0
    console.log(gap);
    for (let i = 0; i < gap.length; i++) {
        for (let j = 0; j < unlilar.length; j++) {
         gap[i]==unlilar[j]? count++: ''
            
        }
        
    }
return count
}




