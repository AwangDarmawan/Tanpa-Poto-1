// encode teks agar aman di URL
export const encodeForShare = (text) => encodeURIComponent(text);

// generate link undangan
export const generateInvitationLink = (name) =>
  name ? `https://wedding-tp1.vercel.app/${name.toLowerCase()}` : "";

// generate teks undangan lengkap
export const generateShareText = (name, invitationLink) =>
  name
    ? `Kepada Yth. Bapak/Ibu/Saudara/i ${name}\n\n` +
      `Assalamualaikum Warahmatullahi Wabarakatuh\n\n` +
      `Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami.\n\n` +
      `Berikut link undangan kami, untuk info lengkap dari acara, bisa kunjungi: ${invitationLink}\n\n` +
      `Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\n` +
      `Acara akan diselenggarakan pada:\n` +
      `🗓️ Hari/Tanggal : Minggu, 20 Agustus 2026\n` +
      `⏰ Waktu        : 08.00 WIB – selesai\n` +
      `📍 Tempat       : Kp. LosAnggeles RT 003 RW 004, Desa Miami, Kecamatan KrajanBarat\n\n` +
      `Wassalamualaikum Warahmatullahi Wabarakatuh\n\n` +
      `Terima Kasih\nHormat kami,\nADIT & DINDA `
    : "";
