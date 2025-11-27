const quotes = [
"Life isn't about finding yourself. Life is about creating yourself. \n— George Bernard Shaw",
"You were never meant to shrink for someone else's comfort. \n — Unknown",
"Sometimes you win, sometimes you learn. \n — John C. Maxwell",
"You don't have to see the whole staircase, just take the first step.\n — Martin Luther King Jr.",
"What you're not changing, you're choosing. \n — Unknown",
"Pain shapes a woman into a warrior. \n — R.H. Sin",
"Rock bottom became the solid foundation on which I rebuilt my life.\n — J.K. Rowling",
"Your life does not get better by chance, it gets better by change. \n — Jim Rohn", 
"You carry so much love in your heart. Give some to yourself. \n — rupi kaur",
"Be proud of how you've been handling these past few months. The silent battles. The moments you had to humble yourself. The times you wiped your own tears.\n — Unknown",
"Do not wait for someone else to come and speak for you. It's you who can change the world. \n — Malala Yousafzai",
"It always seems impossible until it's done. \n — Nelson Mandela",
"You deserve the love you keep trying to give to everyone else. \n — Nikita Gill",
"The future belongs to those who believe in the beauty of their dreams.\n — Eleanor Roosevelt",
"And one day she discovered that she was fierce, and strong, and full of fire.\n— Veronica Shoffstall"
];
function generateQuote(){
const text= document.getElementById('quote');
text.style.display= 'flex';
text.style.justifyContent= 'center';
text.style.alignItems= 'center';
text.style.fontSize= '40px';
const index= Math.floor(Math.random()*quotes.length);
text.textContent=quotes[index];}
setInterval(generateQuote,5000);