/*global $*/


const discord = require('discord.js');
const secret = require('./secrets.js');
var client = new discord.Client();
client.login(secret.secret);
let actionMusic = [];
let lastPlayed = [];
// let clients = client.users;
// console.log(clients);
console.log(secret.secret);

client.on('message', function(message){
    let mess = message.content;
    let messArr = message.content.toLowerCase().split(' ');
    if (message.author.bot) return;
    console.log(messArr);
    if (messArr.includes('zoe')){
        message.channel.send('ZOE MAX NOT OP, UNNERF PLZ');
    }
    if (messArr.includes('bandit') || messArr.includes('smoothbandit')){
        message.channel.send ('Smothbandit is in a menu');
    }
    if (messArr.includes('router'))
    message.reply('rooter')
            .catch(console.error); // Log error
    if (mess.slice(0, 5) === 'game:'){
    message.channel.send(`Game of the minute is ${mess.slice(mess[5] === ' ' ? 6:5, mess.length)}`)
    client.user.setGame(mess.slice(mess[5] === ' ' ? 6:5, mess.length))}
    if (messArr.includes('geno')){
        console.log('should play this shit');
        message.reply('GENO IS THE BEST');
    }
    if (mess === 'assholes'){
        var test;
        var request = require('superagent');
        function createElements(elements) {
            // Assuming you get an array of objects.
            elements = JSON.parse(elements.text);
            test = elements;
            message.channel.send(test.character_list.filter(function(e,i,a){
                return e.online_status === '1';
            }).map(function(e,i,a){
                return e.name.first;
            }).reduce(function(prev, current = 'Nobody', i, a){
                return prev + current + (i !== a.length-1 ? ', ' : '')
            }, 'Assholes currently online are: '));
        }
        request.get(`https://census.daybreakgames.com/s:fishington/get/ps2/character/5428011263403299873,5428010618020696081?c:resolve=online_status`).end(function(error, elements){
            if (!error) {
                createElements(elements);
            }
        });
    }
});

// client.on('presenceUpdate', function(newMember){
//     client.users
// })