const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require("discord.js");
const { useMainPlayer, QueryType } = require("discord-player");
const Language = require("../strings.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName(Language.play.command)
    .setDescription(Language.play.description)
    .addStringOption((option) => option
        .setName(Language.play.name)
        .setDescription(Language.play.option)
        .setRequired(true)
    ),
    run: async ({interaction}) => {
        const player = useMainPlayer()
        const channel = interaction.member.voice.channel
        if (!channel) return interaction.editReply(Language.play.nochannel);

            const queue = await player.nodes.create(interaction.guild);
            if (!queue.connection) await queue.connect(channel);

            let embed = new EmbedBuilder();

                let music = interaction.options.getString(Language.play.name, true);
                const result = await player.search(music, {
                    requestedBy: interaction.user,
                    searchEngine: QueryType.AUTO
                })

                if(!result.hasTracks()) {
                    return interaction.editReply(Language.play.noresult);
                } else {
                    try{
                        await player.play(channel, result, {
                            nodeOptions: {
                                metadata: interaction
                            }
                        })
                        await interaction.editReply(Language.play.loading)
                        embed
                            .setDescription(`**[${result.tracks[0].title}](${result.tracks[0].url})**` + Language.play.songadded + `\n\n\n` +
                                                Language.song.requestedby + `<@${result.requestedBy.id}>`)
                            .setThumbnail(result.tracks[0].thumbnail)
                            .setFooter({ text: Language.song.duration + `${result.tracks[0].duration}`})
                        await interaction.editReply({
                            embeds: [embed]
                        })
                    } catch (e) {
                        return interaction.editReply("Something went wrong:" + e)
                    }
                }
                //if (!queue.playing) await queue.play()
            await interaction.editReply({
                embeds: [embed]
            })

                // let url = interaction.options.getString("url");
                // const result = await client.player.nodes.search(url, {
                //     requestdBy: interaction.user,
                //     searchEngine: QueryType.SOUNDCLOUD_TRACK
                // })
                // console.log(result.tra);
                // if (result.tracks.length === 0) 
                //     return interaction.editReply("No results");

                // const song = result.tracks[0]
                // await queue.addTrack(song);
                // embed
                //     .setDescription(`**[${song.title}](${song.url})** has been added to the queue`)
                //     .setThumbnail(song.setThumbnail)
                //     .setFooter({text: `Duration: ${song.duration}`})

            // else if (interaction.options.getSubcommand() === "playlist") {

            // } (interaction.options.getSubcommand() === "search") {

            // }
    }
}