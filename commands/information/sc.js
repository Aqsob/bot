const {
    quote
} = require("@itsreimau/ckptw-mod");

module.exports = {
    name: "sc",
    aliases: ["script", "source", "sourcecode"],
    category: "information",
    permissions: {},
    code: async (ctx) => {
        return await ctx.reply(
            `${quote("xnxx.com")}\n` +
            "\n" +
            config.msg.footer
        ); // Jika Anda tidak menghapus ini, terima kasih!
    }
};