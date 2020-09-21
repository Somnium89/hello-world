
/**








*/


require('dotenv').config();


// Import the discord.js module


const Discord = require('discord.js');







// Create an instance of a Discord client


const client = new Discord.Client();

















/**


* The ready event is vital, it means that only _after_ this will your bot start reacting to information


* received from Discord


*/


client.on('ready', () => {


 console.log('I am ready!');


});












//new user joins


client.on('guildMemberAdd', member => {


 var role = member.guild.roles.find('name', 'apprentice');


 console.log("Role found!");


 member.addRole(role.id);


 var guildChannel = member.guild.channels.find(channel => channel.id === '607835294191845377');


 setTimeout(function () {


 guildChannel.send("Welcome " + member + " to the world of Neon Noodles. Are you ready for what it takes to become a Master Chef? Well, we’ll find out. It will be a long and difficult journey but I have faith in you.\n\nTo become a true master, you will need to travel the world and indulge in the local cuisines. Your journey will start at your home turf. What’s your preferred region food-wise?\n\nAmericas, Europe or Asia?\n\n(you must respond with one of these three options in order for the server to open up)").catch(console.error) }, 10);


});







//listen for when user choses


// Create an event listener for messages


client.on('message', message => {


 var welcome = client.channels.get(message.channel.id);


 console.log(welcome.id);


 if (welcome.id === '607835294191845377'){












   var args = message.content.toLowerCase().split(" ");


   console.log(args); //logs every word by itself


   if(args[0] === 'europe')


{


 var role = message.guild.roles.find('name', 'Europe');


 console.log("Role foundd!");


 message.member.addRole(role.id);


 var role2 = message.guild.roles.find('name', 'apprentice');


 message.member.removeRole(role2.id);


 console.log('Role succesfully removed!');


 //var channel = client.channels.get('617003017358671882').send("User " + message.member +" has joined Europe!");


}


else if(args[0] === 'americas')


{


 var role = message.guild.roles.find('name', 'Americas');


 console.log("Role found!");


 message.member.addRole(role.id);


 var role2 = message.guild.roles.find('name', 'apprentice');


 message.member.removeRole(role2.id);


 console.log('Role succesfully removed!');


 //var channel = client.channels.get('617003017358671882').send("User " + message.member +" has joined Americas!");


}


else if(args[0] === 'america')


{


 var role = message.guild.roles.find('name', 'Americas');


 console.log("Role found!");


 message.member.addRole(role.id);


 var role2 = message.guild.roles.find('name', 'apprentice');


 message.member.removeRole(role2.id);


 console.log('Role succesfully removed!');


 //var channel = client.channels.get('617003017358671882').send("User " + message.member +" has joined Americas!");


}  


else if(args[0] === 'asia')


{


 var role = message.guild.roles.find('name', 'Asia');


 console.log("Role found!");


 message.member.addRole(role.id);


 var role2 = message.guild.roles.find('name', 'apprentice');


 message.member.removeRole(role2.id);


 console.log('Role succesfully removed!');


 //var channel = client.channels.get('617003017358671882').send("User " + message.member +" has joined Asia!");


}

else if(args[0] === 'aisa')


{


 var role = message.guild.roles.find('name', 'Asia');


 console.log("Role found!");


 message.member.addRole(role.id);


 var role2 = message.guild.roles.find('name', 'apprentice');


 message.member.removeRole(role2.id);


 console.log('Role succesfully removed!');


 //var channel = client.channels.get('617003017358671882').send("User " + message.member +" has joined Asia!");


}





}


});







// Log our bot in using the token from https://discordapp.com/developers/applications/me


client.login(process.env.BOT_TOKEN);
