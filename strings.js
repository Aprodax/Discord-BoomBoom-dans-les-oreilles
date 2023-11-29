const play = {
    command: "play",
    name: "musique",
    description : "Tu sais très bien ce que fait cette commande",
    option: "Fous une URL",
    nochannel: "Mets toi dans un voice channel enculé !",
    noresult: "J'ai rien trouvé mon frère",
    loading: "Tranquille, ça charge",
    songadded: " ajouté à la queue"
}

const pause = {
    command: "pause",
    description: "Met sur pause la musique",
    notify: "Le son est bien sur pause"
}

const shuffle = {
    command: "shuffle",
    description: "Ça mélange ta playlist miteuse",
    notify: "Ça a bien été mélangé. Y'a tant de sons dans ta playlist : "
}

const skip = {
    command: "skip",
    description: "A utiliser quand quelqu'un met un son vraiment mauvais",
    notify: "Ça dégage !"
}

const skipto = {
    command: "skipto",
    name: "number",
    description: "Skips the current song to a queue number",
    option: "Queue number",
    notify: "Skipping to "
}

const remove = {
    command: "remove",
    description: "Removes the specified track",
    name: "number",
    option: "Number of the song to be removed",
    notify: "Song removed!"
}

const info = {
    command: "info",
    description: "Quelques infos sur le son"
}

const queue = {
    command: "queue",
    name: "page",
    description: "Regarder la queue",
    option: "page de la queue que tu veux voir",
    nosongs: "Y'a aucun son à suivre",
    playing: "En ce moment y'a : ",
    nopage: "Page inexistante",
    title: "Queue",
    footer: "Page ",
    footer2: " sur "
}

const song = {
    duration: "Y'en a pour : ",
    requestedby: "C'est lui qui a mis ce son : "
}

const resume = {
    command: "resume",
    description: "Resumes the bot",
    notify: "Bot has been resumed!"
}

const quit = {
    command: "quit",
    description: "Pour faire nachav le bot",
    exit: "Allez, bisous !"
}

const clear = {
    command: "clear",
    description: "Clears the queue",
    notify: "Queue cleared!"
}

const boost = {
    command: "boost",
    description: "Toggle bassboost",
    notify: "Bassboost toggled!"
}

const system = {
    loading: "Loading new commands",
    notfound: "Command not found!",
    success: "Sucess",
    error: "Something went wrong: ",
    logged: "Logged in as ",
    run: "Command: ",
    user: "User: ",
    server: "Server: ",
    invalidopt: "Invalid option"
}

module.exports = {
    play,
    pause,
    shuffle,
    skip,
    skipto,
    remove,
    info,
    queue,
    song,
    resume,
    quit,
    clear,
    boost,
    system
}