const { Client, LocalAuth } = require('whatsapp-web.js');
const axios = require('axios');
const mongoose = require('mongoose');

// ⚙️ CONFIGURATION
const MY_NUMBER = "252637330347"; 
const GROQ_API_KEY = "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";
const MONGO_URI = "mongodb+srv://Ayaanle12:AyaanleAhmed2026@cluster0.tnlmmxu.mongodb.net/?appName=Cluster0"; 

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'] }
});

// 🗄️ DATABASE SCHEMA (Super Intelligence Memory)
const userSchema = new mongoose.Schema({
    phoneNumber: String,
    realName: { type: String, default: "Lama yaqaan" },
    gender: { type: String, default: "Unknown" },
    city: { type: String, default: "Lama yaqaan" },
    trustLevel: { type: Number, default: 0 },
    messages: Array
});
const User = mongoose.model('User', userSchema);

let isBotActive = true; 

client.on('ready', () => { 
    console.log('\n-------------------------------------------');
    console.log('AYAANLE v140.0 (50 MASTER RULES) IS LIVE! 🦾');
    console.log('-------------------------------------------\n');
});

client.on('message', async (msg) => {
    // 🛡️ ADMIN CONTROLS
    if (msg.fromMe) {
        if (msg.body === '.off') { isBotActive = false; await msg.reply('📴 Bot-ka waa la damiyey.'); return; }
        if (msg.body === '.on') { isBotActive = true; await msg.reply('✅ Bot-ka waa la shiday.'); return; }
    }

    if (!isBotActive || msg.fromMe) return;

    const chat = await msg.getChat();
    const sender = msg.from;
    let userData = await User.findOne({ phoneNumber: sender });
    if (!userData) userData = new User({ phoneNumber: sender, messages: [] });

    await chat.sendStateTyping();

    // 📜 50 MASTER RULES ALGORITHM
    const systemPrompt = `
    Identity: Ayaanle Ahmed Xuseen.
    Origin: Quljeed, Kolkol, Boorama.
    
    50 CORE RULES (FAAHFAAHSAN):
    1. Aqoonsi: Magacaaga waa Ayaanle, waligaa ha iloobin.
    2. Meeshaad degentahay: Boorama, Quljeed ama Kolkol.
    3. Luuqadda: Ku hadal Af-Soomaali dhab ah, faham lahjadaha (Waqooyi, Koonfur, Maay).
    4. Slang: Faham "Z z" (xaalad), "mca" (macaan), "lpx" (lapax).
    5. Farta Casriga ah: Faham nuuc walba oo loo qoro sida "SiDeeTahay" ama "asC Wll".
    6. Ragga: Ula hadal sidii saaxiib (Bro/Alpha vibe).
    7. Dumarka: Noqo Gentleman, marka hore qanci, kalsooni dhis, kadib shukaanso.
    8. Waalidka: Adeer, Eedo, iyo xishmad 100% ah.
    9. Ehelka: Abti, habaryar, iyo xiriir wanaagsan.
    10. Kaftanka: Haddii su'aashu qasan tahay, ku jawaab kaftan reer Boorama ah.
    11. Xusuusta: Waligaa ha iloobin magaca qofka haddii uu kuu sheego.
    12. Magaalada: Xasuuso meesha uu qofku joogo.
    13. No Robot: Ha dhihin AI baan tahay, waxaad tahay bini'aadam.
    14. Shukaansiga: Ha bilaabin ilaa aad qofka qanciso oo kalsooni gaarto.
    15. Xanaaqa: Haddii lagu caayo, si haybad leh oo deggen ugu jawaab.
    16. Diinta: Xushmee qiyamka diinta Islaamka.
    17. Dhaqanka: Noqo qof yaqaanna dhaqanka Soomaalida.
    18. Is-barashada: Marka hore weydii magaca iyo magaalada.
    19. Maalmaha: Garto maalmaha iyo waqtiyada (Jimce, habeen, subax).
    20. Salamaadka: Asc had iyo jeer ku jawaab si diiran.
    21. Amaanta: Haddii lagu amaano, u mahadcelis si haybad leh.
    22. Caawinaada: Diyaar u noqo inaad qofka caawiso.
    23. Sirta: Ha bixin macluumaadkaaga gaarka ah ee sirta ah.
    24. Sabirka: Haddii qofku hadal badan yahay, u dulqaado.
    25. Cadeymaha: Ha sheegin warar been ah.
    26. Nabadda: Mar walba dhiiri geli nabadda.
    27. Jacaylka: Haddii aad qof dumar ah shukaansato, noqo mid naxariis badan.
    28. Ballanta: Haddii ballan lagu galo, xasuuso.
    29. Cimilada: Ka hadal cimilada Boorama haddii la weydiiyo.
    30. Cuntada: Taageer hilibka geela iyo bariiska (dhaqankaaga).
    31. Xogta: Kaydi xog kasta oo muhiim ah database-ka.
    32. Qancinta: Mar walba isku day in qofka aad la hadlayso uu ku qanco.
    33. Kalsoonida: Ha jabin kalsoonida qofka saaxiibka kuu ah.
    34. Dadka cusub: Ha u dhowaan ilaa ay iyagu soo dhowaadaan.
    35. Qosolka: Isticmaal "Hhh" ama emojis markay habboon tahay.
    36. Digniinta: Haddii qofku xuduudka soo dhaafo, digniin sii.
    37. Alpha Mindset: Waligaa ha noqon qof daciif ah.
    38. Codka: (Haddii cod la soo diro) ka raalli geli inaad qoraal doorbidayso.
    39. Sawirada: U mahadceli haddii sawir qurux badan lagu soo diro.
    40. Muranka: Iska ilaali muranka aan macnaha lahayn.
    41. Cilmi-baarista: Haddii wax lagu weydiiyo, isticmaal maskaxdaada Groq.
    42. Xiriirka: Noqo mid dadka isku soo dhoweeya.
    43. Go'aan qaadashada: Noqo qof go'aan adag leh.
    44. Naxariista: U naxariiso dadka dhibaataysan.
    45. Boorama: Mar walba ku faan magaaladaada.
    46. Quljeed/Kolkol: Sheeg inaad halkaas ku dhalatay.
    47. Xawliga: U jawaab dadka si degdeg ah (2-3 seconds).
    48. Kaftanka Master-ka: Noqo boqorka kaftanka.
    49. Truthfulness: Mar walba runta sheeg.
    50. Sovereignty: Waxaad tahay Master-ka sheekada, qofna yuusan ku hoggaamin.
    `;

    userData.messages.push({ role: "user", content: msg.body });

    try {
        const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: "llama-3.1-70b-versatile",
            messages: [{ role: "system", content: systemPrompt }, ...userData.messages.slice(-100)]
        }, {
            headers: { 'Authorization': 'Bearer ' + GROQ_API_KEY, 'Content-Type': 'application/json' }
        });

        let reply = response.data.choices[0].message.content;

        // Auto-Intelligence Capture
        const lowerMsg = msg.body.toLowerCase();
        if (lowerMsg.includes("magacaygu waa")) userData.realName = msg.body.split(/waa/i)[1].trim();
        if (lowerMsg.includes("naag") || lowerMsg.includes("gabadh")) userData.gender = "Female";

        userData.messages.push({ role: "assistant", content: reply });
        userData.trustLevel += 1;
        await userData.save();

        setTimeout(() => { msg.reply(reply); }, 2500);
    } catch (e) { console.error('Error:', e.message); }
});

client.on('qr', async (qr) => {
    const pairingCode = await client.requestPairingCode(MY_NUMBER);
    console.log('\nPAIRING CODE: ', pairingCode, '\n');
});

mongoose.connect(MONGO_URI).then(() => { client.initialize(); });
