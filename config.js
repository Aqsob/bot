// Impor modul dan dependensi yang diperlukan
const {
    monospace,
    italic,
    quote
} = require("@itsreimau/ckptw-mod");

// Konfigurasi
global.config = {
    // Informasi bot dasar
    bot: {
        name: "Dragon", // Nama bot
        prefix: new RegExp("^\\.", "i"), // Karakter awalan perintah yang diizinkan
        phoneNumber: "62858239792311", // Nomor telepon bot (tidak perlu diisi jika menggunakan QR code)
        thumbnail: "https://files.catbox.moe/3yeevr.jpg", // Gambar thumbnail bot
        groupJid: "", // JID untuk group bot (opsional jika tidak menggunakan requireBotGroupMembership)
        newsletterJid: "120363202832071259@newsletter", // JID untuk saluran bot

        // Konfigurasi autentikasi sesi bot
        authAdapter: {
            adapter: "default", // Adapter untuk menyimpan sesi (Pilihan adapter: default, mysql, mongo, firebase)

            // Konfigurasi default
            default: {
                authDir: "state"
            },

            // Konfigurasi MySQL
            mysql: {
                host: "localhost:3306", // Nama host
                user: "root", // Nama pengguna
                password: "admin123", // Kata sandi
                database: "ckptw-wabot" // Nama database
            },

            // Konfigurasi MongoDB
            mongodb: {
                url: "mongodb://localhost:27017/ckptw-wabot" // URL
            },

            // Konfigurasi Firebase
            firebase: {
                tableName: "ckptw-wabot", // Nama tabel
                session: "state" // Nama sesi
            }
        }
    },

    // Pesan bot yang disesuaikan untuk situasi tertentu
    msg: {
        admin: quote("⛔ Kocak banget member satu ini 😹🫵!"),
        banned: quote("⛔ lu di ban deck 😹!"),
        botAdmin: quote("⛔ Tidak dapat memproses karena bot bukan admin grup ini!"),
        botGroupMembership: quote(`⛔ Tidak dapat memproses karena Anda tidak bergabung dengan grup bot! Ketik ${monospace("/botgroup")} untuk mendapatkan tautan grup bot.`),
        coin: quote("⛔ Tidak dapat memproses karena koin Anda tidak cukup!"),
        cooldown: quote("🔄 Perintah ini sedang dalam cooldown, tunggu..."),
        gamerestrict: quote("⛔ Tidak dapat memproses karena grup ini membatasi game!"),
        group: quote("⛔ Perintah hanya dapat diakses dalam grup!"),
        owner: quote("⛔ lu siapa mek 😹!"),
        premium: quote("⛔ Tidak dapat memproses karena Anda bukan pengguna Premium!"),
        private: quote("⛔ Perintah hanya dapat diakses dalam obrolan pribadi!"),
        restrict: quote("⛔ Perintah ini telah dibatasi karena alasan keamanan!"),

        readmore: "\u200E".repeat(4001),
        note: "“Lorem ipsum dolor sit amet, tenebris in umbra, vitae ad mortem.”",
        footer: italic("Developed by ItsReimau"),

        wait: quote("🔄 Tunggu sebentar..."),
        notFound: quote("❎ Tidak ada yang ditemukan! Coba lagi nanti."),
        urlInvalid: quote("❎ URL tidak valid!")
    },

    // Informasi owner bot
    owner: {
        name: "33333 ☠️",
        organization: "KTL",
        id: "6285656715298",
        co: ["6285656715298"]
    },

    // Stiker bot
    sticker: {
        packname: "33334",
        author: "333333 <sukianjirt>"
    },

    // Sistem bot
    system: {
        alwaysOnline: true,
        antiCall: true,
        autoMention: true,
        autoAiLabel: true,
        autoRead: true,
        autoTypingOnCmd: true,
        cooldown: 10 * 1000,
        maxListeners: 50,
        port: 3000,
        reportErrorToOwner: true,
        restrict: false,
        requireBotGroupMembership: false,
        selfOwner: false,
        selfReply: true,
        timeZone: "Asia/Jakarta",
        uploaderHost: "Nyxs",
        useCoin: true,
        usePairingCode: false,
        customPairingCode: "UMBR4L15",
        useServer: false
    }
};
