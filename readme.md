### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
1.answer:
getElementById("id") → নির্দিষ্ট ID অনুযায়ী একটিমাত্র element ধরে।
getElementsByClassName("class") → একই class নামের সব element ধরে।
querySelector("css") → প্রথম মিলে যাওয়া element ধরে।
querySelectorAll("css") → সবগুলো মিলে যাওয়া element ধরে (NodeList আকারে)।

2. How do you **create and insert a new element into the DOM**?
2.answer:
document.createElement("div");

3. What is **Event Bubbling** and how does it work?
3.answer:
document.getElementById("button").addEventListener("click", function() {
  alert("Button clicked!");
)};

4. What is **Event Delegation** in JavaScript? Why is it useful?
4.answer:
Event Delegation হলো JavaScript-এ একটি টেকনিক যেখানে আমরা child element-এর পরিবর্তে parent element-এ ইভেন্ট listener attach করি।
আর এইটা Useful কারন : অনেক child element-এ আলাদা listener attach করার প্রয়োজন নেই।

5. What is the difference between **preventDefault() and stopPropagation()** methods?
5.answer:
preventDefault()
ব্রাউজারের ডিফল্ট কাজ বন্ধ করে।
stopPropagation()
ইভেন্ট parent-এ ছড়াতে দেয় না।
