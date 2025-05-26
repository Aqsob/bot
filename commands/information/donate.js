const {
    quote
} = require("@itsreimau/ckptw-mod");

module.exports = {
    name: "donate",
    aliases: ["donasi"],
    category: "information",
    permissions: {},
    code: async (ctx) => {
        try {
            const customText = await db.get("bot.text.donate") || null;
            const text = customText ?
                customText
                .replace(/%tag%/g, `@${tools.general.getID(ctx.sender.jid)}`)
                .replace(/%name%/g, config.bot.name)
                .replace(/%prefix%/g, ctx.used.prefix)
                .replace(/%command%/g, ctx.used.command)
                .replace(/%footer%/g, config.msg.footer)
                .replace(/%readmore%/g, config.msg.readmore) :
                `${quote("085656715298 (DANA)")}\n` +
                `${quote("─────")}\n` +
                `${quote("takde (lahh)")}\n` +
                `${quote("takde (udin)")}\n` +
                `${quote("takde (memes)")}\n` +
                "\n" +
                config.msg.footer;

            return await ctx.reply({
                text: text,
                mentions: [ctx.sender.jid]
            });
        } catch (error) {
            return await tools.cmd.handleError(ctx, error, false);
        }
    }
};