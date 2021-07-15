module.exports = client => {
    console.log(`
    ============================================================================== \n 
    🤖 Bien connecté à => ${client.user.tag} \n 
    ==============================================================================`);










client.user.setActivity("🍁 i$help", {
  type: "STREAMING", url: 'https://www.twitch.tv/'
});
}
