//random number generator
function randomNumGenerator (num) {
    return Math.floor(Math.random() * num);
}

// object of an array of random messages
const messages = {
    greeting: ['Hello!', "Good Morning!", "How's your day?", "Goodnight!", "How are you?"],
    reminder: ["Wake up at 8 am today", "Don't forget your food", "Study tonight", "Brush your teeth later", "Drink water"],
    motivation: ["Never stop working", "Keep believing", "It's not done till it's done", "Don't lose hope", "Don't doubt yourself"]
}

//empty array to store messages
let messageArr = [];

// access message and push to empty array

for (let key in messages){
    // index is random because of the randomNumGenerator
    // length is used as the number maximzer for random and then it picks a number between 0 to num
    let index = randomNumGenerator(messages[key].length);
    switch(key){
        case "greeting":
            messageArr.push(`Greeting: ${messages[key][index]}`);
            break;
        case "reminder":
            messageArr.push(`Reminder: ${messages[key][index]}`);
            break;
        case "motivation":
            messageArr.push(`Motivation: ${messages[key][index]}`);
            break;
        default:
            messageArr.push('Not enough info');
            break;
    }
}

// formats the array into a string and joins them into a sentence
function format(key){
    const formatted = messageArr.join('\n');
    console.log(formatted);
}

format(messageArr);


