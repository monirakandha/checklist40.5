// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। 

console.log('first outpur');
setTimeout(() => {
    console.log('Using Set time out');
}, 5000);

// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

function myFuntion(){
    const number = prompt('Please enter Number');
    const newNumber = parseFloat(number);
    console.log(newNumber + 200);
    alert('Your New Number is' + newNumber + 200);
    
}

// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

function myAnotherFunction(){
    const path = "Please confirm for get you location path";
    
    if(confirm(path) == true){
        console.log(window.location.href);
    }
    else{
        console.log('Get out');
    }
}


// ৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 

cookies is an amount of information that persist between a server side and a client side. A web browser stores this information at them of browsing. cookies are data stores in small text file on computer. When a web server has sent a web page to a browser the connection is shut down and the server forgets everything about the user. 

// ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )

localstorage : 1 . it is not session base . need to deleted via javascript by using clear method of local storage.
2. only client side reading support 
3. less order browser support

sessionStorage: 1. it is session base. working per session.
2. only client side reading support 
3. less order browser support

// ৬. জাভাস্ক্রিপ্ট এর কোড কিভাবে ব্রাউজারের মধ্যে রান করে। দরকার হলে গুগল বা ইউটিউবে সার্চ দিয়ে একটু ভালো করে দেখে রাখো। 

// ৭. জাভাস্ক্রিপ্ট এর কোন কোন জিনিস সেটার একটা লিষ্ট গুগলে সার্চ দিয়ে বের করে ফেলো। এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে রাখো। 
