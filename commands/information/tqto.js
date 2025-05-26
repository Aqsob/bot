const {
    quote
} = require("@itsreimau/ckptw-mod");

module.exports = {
    name: "tqto",
    aliases: ["thanksto"],
    category: "information",
    permissions: {},
    code: async (ctx) => {
        return await ctx.reply(
            `${quote("Allah SWT")}\n` +
            `${quote("Orang tua saya")}\n` +
            `${quote("─────")}\n` +
            "\n" +
            config.msg.footer
        ); // Jika Anda tidak menghapus ini, terima kasih!
    }
};