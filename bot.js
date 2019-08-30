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
  guildChannel.send("Welcome " + member + " to the world of Neon Noodles. Are you ready for what it takes to become a Master Chef? Well, we’ll find out. It will be a long and difficult journey but I have faith in you.\n\nTo become a true master, you will need to travel the world and indulge in the local cuisines. Your journey will start at your home turf. What’s your local cuisine?\n\nAmerican, European or Asian?").catch(console.error) }, 10);
});

//listen for when user choses
// Create an event listener for messages
client.on('message', message => {
  var welcome = client.channels.get(message.channel.id);
  console.log(welcome.id);
  if (welcome.id === '607835294191845377'){


    var args = message.content.toLowerCase().split(" ");
    console.log(args); //logs every word by itself
    if(args[0] === 'european')
{
  var role = message.guild.roles.find('name', 'Europe');
  console.log("Role foundd!");
  message.member.addRole(role.id);
  var role2 = message.guild.roles.find('name', 'apprentice');
  message.member.removeRole(role2.id);
  console.log('Role succesfully removed!');
  var channel = client.channels.get('617001966341455892').send("a new apprentice has approached! Teach " + message.member +" well!");
}
else if(args[0] === 'american')
{
  var role = message.guild.roles.find('name', 'America');
  console.log("Role found!");
  message.member.addRole(role.id);
  var role2 = message.guild.roles.find('name', 'apprentice');
  message.member.removeRole(role2.id);
  console.log('Role succesfully removed!');
  var channel = client.channels.get('617002379224809473').send("a new apprentice has approached! Teach " + message.member +" well!");
}
else if(args[0] === 'asian')
{
  var role = message.guild.roles.find('name', 'Asia');
  console.log("Role found!");
  message.member.addRole(role.id);
  var role2 = message.guild.roles.find('name', 'apprentice');
  message.member.removeRole(role2.id);
  console.log('Role succesfully removed!');
  var channel = client.channels.get('617001689639288862').send("a new apprentice has approached! Teach " + message.member +" well!");
}

}
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEN);
