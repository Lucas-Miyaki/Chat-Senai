import { login, cadastrarUsuario, cadastrarInfo, cadastrarEmail } from "./firebase.js";

const loginButton = document.querySelector(".login__button");
const loginError = document.querySelector(".login-error");

loginButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const email = document.querySelector(".login__email").value;
    const password = document.querySelector(".login__password").value;
    const name = document.querySelector(".login__name").value;


    const result = await login(email, password);
    await cadastrarEmail(name, email)

    if (result.success) {
            user.id = crypto.randomUUID();
            user.name = loginName.value;
            user.color = getRandomColor();
        
            loginSection.style.display = "none";
            signup.style.display = "none";
            chat.style.display = "flex";
        
            websocket = new WebSocket( "wss://chat-backend-gh82.onrender.com");
            websocket.onmessage = processMessage;      
    } else {
        loginError.textContent = "Erro: " + result.message;
    }
});

const signupButton = document.querySelector(".signup__button");
const signupError = document.querySelector(".signup-error");

signupButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const email = document.querySelector(".signup__email").value;
    const password = document.querySelector(".signup__password").value;

    const result = await cadastrarUsuario(email, password);

    if (result.success) {
        signupError.textContent = "Usuário criado com sucesso! Agora faça login.";
    } else {
        signupError.textContent = "Erro: " + result.message;
    }
});

// login elements
const loginSection = document.querySelector(".login");
const loginName = loginSection.querySelector(".login__name");

const signup = document.querySelector(".signup");

// chat elements
const chat = document.querySelector(".chat");
const chatForm = chat.querySelector(".chat__form");
const chatInput = chat.querySelector(".chat__input");
const chatMessages = chat.querySelector(".chat__messages");

const colors = [
    "aqua",
    "aquamarine",
    "blueviolet",
    "deeppink",
    "chocolate",
    "crimson",
    "gold",
    "hotpink",
    "cadetblue",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "chartreuse",
    "cyan",
    "firebrick"
]

// Emojis
const emojiPicker = document.getElementById("emojiPicker");
const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊","😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "🙂", "🤗","🤩", "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥","😮", "🤐", "😯", "😪", "😫", "🥱", "😴", "😌", "😛", "😜","😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹️","🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨","😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵","😡", "😠", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇","🥳", "🥸", "😈", "👿", "💀", "☠️", "👻", "👽", "👾", "🤖","🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾","🌀", "🌁", "🌂", "🌃", "🌄", "🌅", "🌆", "🌇", "🌈", "🌉","🌊", "🌋", "🌌", "🌍", "🌎", "🌏", "🌐", "🌑", "🌒", "🌓","🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌝","🌞", "🌟", "🌠", "🌡", "🌢", "🌣", "🌤", "🌥", "🌦", "🌧","🌨", "🌩", "🌪", "🌫", "🌬", "🌭", "🌮", "🌯", "🌰", "🌱","🌲", "🌳", "🌴", "🌵", "🌶", "🌷", "🌸", "🌹", "🌺", "🌻","🌼", "🌽", "🌾", "🌿", "🍀", "🍁", "🍂", "🍃", "🍄", "🍅","🍆", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏","🍐", "🍑", "🍒", "🍓", "🍔", "🍕", "🍖", "🍗", "🍘", "🍙","🍚", "🍛", "🍜", "🍝", "🍞", "🍟", "🍠", "🍡", "🍢", "🍣","🍤", "🍥", "🍦", "🍧", "🍨", "🍩", "🍪", "🍫", "🍬", "🍭","🍮", "🍯", "🍰", "🍱", "🍲", "🍳", "🍴", "🍵", "🍶", "🍷","🍸", "🍹", "🍺", "🍻", "🍼", "🍽", "🍾", "🍿", "🎀", "🎁","🎂", "🎄", "🎅", "🎆", "🎇", "🎈", "🎉", "🎊", "🎋", "🎌","🎍", "🎎", "🎏", "🎐", "🎑", "🎒", "🎓", "🎔", "🎕", "🎖","🎗", "🎘", "🎙", "🎚", "🎛", "🎜", "🎝", "🎞", "🎟", "🎠","🎡", "🎢", "🎣", "🎤", "🎥", "🎦", "🎧", "🎨", "🎩", "🎪","🎫", "🎬", "🎭", "🎮", "🎯", "🎰", "🎱", "🎲", "🎳", "🎴","🎵", "🎶", "🎷", "🎸", "🎹", "🎺", "🎻", "🎼", "🎽", "🎾","🎿", "🏀", "🏁", "🏂", "🏃", "🏄", "🏅", "🏆", "🏇", "🏈","🏉", "🏊", "🏋", "🏌", "🏍", "🏎", "🏏", "🏐", "🏑", "🏒","🏓", "🏔", "🏕", "🏖", "🏗", "🏘", "🏙", "🏚", "🏛", "🏜","🏝", "🏞", "🏟", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦","🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🏰","🏱", "🏲", "🏳", "🏴", "🏵", "🏶", "🏷", "🏸", "🏹", "🏺","🏻", "🏼", "🏽", "🏾", "🏿", "🐀", "🐁", "🐂", "🐃", "🐄","🐅", "🐆", "🐇", "🐈", "🐉", "🐊", "🐋", "🐌", "🐍", "🐎","🐏", "🐐", "🐑", "🐒", "🐓", "🐔", "🐕", "🐖", "🐗", "🐘","🐙", "🐚", "🐛", "🐜", "🐝", "🐞", "🐟", "🐠", "🐡", "🐢","🐣", "🐤", "🐥", "🐦", "🐧", "🐨", "🐩", "🐪", "🐫", "🐬","🐭", "🐮", "🐯", "🐰", "🐱", "🐲", "🐳", "🐴", "🐵", "🐶","🐷", "🐸", "🐹", "🐺", "🐻", "🐼", "🐽", "🐾", "🐿", "👀","👁", "👂", "👃", "👄", "👅", "👆", "👇", "👈", "👉", "👊","👋", "👌", "👍", "👎", "👏", "👐", "👑", "👒", "👓", "👔","👕", "👖", "👗", "👘", "👙", "👚", "👛", "👜", "👝", "👞","👟", "👠", "👡", "👢", "👣", "👤", "👥", "👦", "👧", "👨","👩", "👪", "👫", "👬", "👭", "👮", "👯", "👰", "👱", "👲","👳", "👴", "👵", "👶", "👷", "👸", "👹", "👺", "👼", "💁","💂", "💃", "💄", "💅", "💆", "💇", "💈", "💉", "💊", "💋","💌", "💍", "💎", "💏", "💐", "💑", "💒", "💓", "💔", "💕","💖", "💗", "💘", "💙", "💚", "💛", "💜", "💝", "💞", "💟","💠", "💡", "💢", "💣", "💤", "💥", "💦", "💧", "💨", "💩","💪", "💫", "💬", "💭", "💮", "💯", "💰", "💱", "💲", "💳","💴", "💵", "💶", "💷", "💸", "💹", "💺", "💻", "💼", "💽","💾", "💿", "📀", "📁", "📂", "📃", "📄", "📅", "📆", "📇","📈", "📉", "📊", "📋", "📌", "📍", "📎", "📏", "📐", "📑","📒", "📓", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📛","📜", "📝", "📞", "📟", "📠", "📡", "📢", "📣", "📤", "📥","📦", "📧", "📨", "📩", "📪", "📫", "📬", "📭", "📮", "📯","📰", "📱", "📲", "📳", "📴", "📵", "📶", "📷", "📸", "📹","📺", "📻", "📼", "📽", "📾", "📿", "🔀", "🔁", "🔂", "🔃","🔄", "🔅", "🔆", "🔇", "🔈", "🔉", "🔊", "🔋", "🔌", "🔍","🔎", "🔏", "🔐", "🔑", "🔒", "🔓", "🔔", "🔕", "🔖", "🔗","🔘", "🔙", "🔚", "🔛", "🔜", "🔝", "🔞", "🔟", "🔠", "🔡","🔢", "🔣", "🔤", "🔥", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫","🔬", "🔭", "🔮", "🔯", "🔰", "🔱", "🔲", "🔳", "🔴", "🔵","🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "🔼", "🔽", "🔾", "🔿","🕀", "🕁", "🕂", "🕃", "🕄", "🕅", "🕆", "🕇", "🕈", "🕉","🕊", "🕋", "🕌", "🕍", "🕎", "🕏", "🕐", "🕑", "🕒", "🕓","🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝","🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧","🕨", "🕩", "🕪", "🕫", "🕬", "🕭", "🕮", "🕯", "🕰", "🕱","🕲", "🕳", "🕴", "🕵", "🕶", "🕷", "🕸", "🕹", "🕺", "🕻","🕼", "🕽", "🕾", "🕿", "🖀", "🖁", "🖂", "🖃", "🖄", "🖅","🖆", "🖇", "🖈", "🖉", "🖊", "🖋", "🖌", "🖍", "🖎", "🖏","🖐", "🖑", "🖒", "🖓", "🖔", "🖕", "🖖", "🖗", "🖘", "🖙","🖚", "🖛", "🖜", "🖝", "🖞", "🖟", "🖠", "🖡", "🖢", "🖣","🖤", "🖥", "🖦", "🖧", "🖨", "🖩", "🖪", "🖫", "🖬", "🖭","🖮", "🖯", "🖰", "🖱", "🖲", "🖳", "🖴", "🖵", "🖶", "🖷","🖸", "🖹", "🖺", "🖻", "🖼", "🖽", "🖾", "🖿", "🗀", "🗁","🗂", "🗃", "🗄", "🗅", "🗆", "🗇", "🗈", "🗉", "🗊", "🗋","🗌", "🗍", "🗎", "🗏", "🗐", "🗑", "🗒", "🗓", "🗔", "🗕","🗖", "🗗", "🗘", "🗙", "🗚", "🗛", "🗜", "🗝", "🗞", "🗟","🗠", "🗡", "🗢", "🗣", "🗤", "🗥", "🗦", "🗧", "🗨", "🗩","🗪", "🗫", "🗬", "🗭", "🗮", "🗯", "🗰", "🗱", "🗲", "🗳","🗴", "🗵", "🗶", "🗷", "🗸", "🗹", "🗺", "🗻", "🗼", "🗽","🗾", "🗿", "🙅", "🙆", "🙇", "🙈", "🙉", "🙊", "🙋", "🙌","🙍", "🙎", "🙏", "🙐", "🙑", "🙒", "🙓", "🙔", "🙕", "🙖","🙗", "🙘", "🙙", "🙚", "🙛", "🙜", "🙝", "🙞", "🙟", "🙠","🙡", "🙢", "🙣", "🙤", "🙥", "🙦", "🙧", "🙨", "🙩", "🙪","🙫", "🙬", "🙭", "🙮", "🙯", "🙰", "🙱", "🙲", "🙳", "🙴","🙵", "🙶", "🙷", "🙸", "🙹", "🙺", "🙻", "🙼", "🙽", "🙾","🙿", "🚀", "🚁", "🚂", "🚃", "🚄", "🚅", "🚆", "🚇", "🚈","🚉", "🚊", "🚋", "🚌", "🚍", "🚎", "🚏", "🚐", "🚑", "🚒","🚓", "🚔", "🚕", "🚖", "🚗", "🚘", "🚙", "🚚", "🚛", "🚜","🚝", "🚞", "🚟", "🚠", "🚡", "🚢", "🚣", "🚤", "🚥", "🚦","🚧", "🚨", "🚩", "🚪", "🚫", "🚬", "🚭", "🚮", "🚯", "🚰","🚱", "🚲", "🚳", "🚴", "🚵", "🚶", "🚷", "🚸", "🚹", "🚺","🚻", "🚼", "🚽", "🚾", "🚿", "🛀", "🛁", "🛂", "🛃", "🛄","🛅", "🛆", "🛇", "🛈", "🛉", "🛊", "🛋", "🛌", "🛍", "🛎","🛏", "🛐", "🛑", "🛒", "🛓", "🛔", "🛕", "🛖", "🛗", "🛝","🛞", "🛟", "🛠", "🛡", "🛢", "🛣", "🛤", "🛥", "🛦", "🛧","🛨", "🛩", "🛪", "🛫", "🛬", "🛰", "🛱", "🛲", "🛳", "🛴","🛵", "🛶", "🛷", "🛸", "🛹", "🛺", "🜀", "🜁","🜂", "🜃", "🜄", "🜅", "🜆", "🜇", "🜈", "🜉", "🜊", "🜋","🜌", "🜍", "🜎", "🜏", "🜐", "🜑", "🜒", "🜓", "🜔", "🜕","🜖", "🜗", "🜘", "🜙", "🜚", "🜛", "🜜", "🜝", "🜞", "🜟","🜠", "🜡", "🜢", "🜣", "🜤", "🜥", "🜦", "🜧", "🜨", "🜩","🜪", "🜫", "🜬", "🜭", "🜮", "🜯", "🜰", "🜱", "🜲", "🜳","🜴", "🜵", "🜶", "🜷", "🜸", "🜹", "🜺", "🜻", "🜼", "🜽","🜾", "🜿", "🝀", "🝁", "🝂", "🝃", "🝄", "🝅", "🝆", "🝇","🝈", "🝉", "🝊", "🝋", "🝌", "🝍", "🝎", "🝏", "🝐", "🝑","🝒", "🝓", "🝔", "🝕", "🝖", "🝗", "🝘", "🝙", "🝚", "🝛","🝜", "🝝", "🝞", "🝟", "🝠", "🝡", "🝢", "🝣", "🝤", "🝥","🝦", "🝧", "🝨", "🝩", "🝪", "🝫", "🝬", "🝭", "🝮", "🝯","🝰", "🝱", "🝲", "🝳"];
const toggleEmojiPicker = document.querySelector(".toggleEmojiPicker")
toggleEmojiPicker.addEventListener('click', () => {
    emojiPicker.style.display = emojiPicker.style.display === "none" ? "block" : "none";
    if (emojiPicker.innerHTML.trim() === "") {
        emojis.forEach(emoji => {
            const span = document.createElement("span");
            span.textContent = emoji;
            span.style.cursor = "pointer";
            span.style.fontSize = "1.1rem";
            span.style.margin = "2px";
            span.onclick = () => insertEmoji(emoji);
            emojiPicker.appendChild(span);
        });
    }
})

function insertEmoji(emoji) {
    chatInput.value += emoji;
    chatInput.focus();
}

const user = { id: "", name:"", color: "" };

let websocket;

const createMessageSelfElement = (content, image, gif, audio, video, file, fileName, timestamp) => {
    const div = document.createElement("div");
    div.classList.add("message--self");

    const time = document.createElement("span");
    time.classList.add("message--timestamp");
    time.textContent = timestamp;
    time.style.display = "block";
    time.style.fontSize = "0.8em";
    time.style.color = "#888";

    div.innerHTML = content;
    

    if (image) {
        const img = document.createElement("img");
        img.src = image;
        img.style.maxWidth = "200px";
        img.style.display = "block";
        img.style.marginTop = "10px";
        div.appendChild(img);
    }

    if (gif) {
        const gifElement = document.createElement("img");
        gifElement.src = gif;
        gifElement.style.maxWidth = "200px";
        gifElement.style.display = "block";
        gifElement.style.marginTop = "10px";
        div.appendChild(gifElement);
    }

    if (audio) {
        const audioElem = document.createElement("audio");
        audioElem.src = audio;
        audioElem.controls = true;
        audioElem.style.display = "block";
        audioElem.style.marginTop = "10px";
        div.appendChild(audioElem);
    }

    if (video) {
        const videoElem = document.createElement("video");
        videoElem.src = video;
        videoElem.controls = true;
        videoElem.style.display = "block";
        videoElem.style.marginTop = "10px";
        videoElem.style.maxWidth = "200px";
        div.appendChild(videoElem);
    }

    if (file && fileName) {
        const fileLink = document.createElement("a");
        fileLink.href = file;
        fileLink.textContent = fileName;
        fileLink.target = "_blank";
        fileLink.style.display = "block";
        fileLink.style.marginTop = "10px";
        div.appendChild(fileLink);
    }
    div.appendChild(time);
    return div;
};

const createMessageOtherElement = (content, sender, senderColor, image, gif, audio, video, file, fileName, timestamp) => {
    const div = document.createElement("div");
    const span = document.createElement("span");

    const time = document.createElement("span");
    time.classList.add("message--timestamp");
    time.textContent = timestamp;
    time.style.display = "block";
    time.style.fontSize = "0.8em";
    time.style.color = "#888";

    div.classList.add("message--other");
    span.classList.add("message--sender");
    span.style.color = senderColor;
    span.textContent = sender;

    div.appendChild(span);
    div.innerHTML += content;

    if (image) {
        const img = document.createElement("img");
        img.src = image;
        img.style.maxWidth = "200px";
        img.style.display = "block";
        img.style.marginTop = "10px";
        div.appendChild(img);
    }

    if (gif) {
        const gifElement = document.createElement("img");
        gifElement.src = gif;
        gifElement.style.maxWidth = "200px";
        gifElement.style.display = "block";
        gifElement.style.marginTop = "10px";
        div.appendChild(gifElement);
    }

    if (audio) {
        const audioElem = document.createElement("audio");
        audioElem.src = audio;
        audioElem.controls = true;
        audioElem.style.display = "block";
        audioElem.style.marginTop = "10px";
        div.appendChild(audioElem);
    }

    if (video) {
        const videoElem = document.createElement("video");
        videoElem.src = video;
        videoElem.controls = true;
        videoElem.style.display = "block";
        videoElem.style.marginTop = "10px";
        videoElem.style.maxWidth = "200px";
        div.appendChild(videoElem);
    }

    if (file && fileName) {
        const fileLink = document.createElement("a");
        fileLink.href = file;
        fileLink.textContent = fileName;
        fileLink.target = "_blank";
        fileLink.style.display = "block";
        fileLink.style.marginTop = "10px";
        div.appendChild(fileLink);
    }
    div.appendChild(time);
    return div;
};

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const scrollScreen = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
}

const processMessage = ({ data }) => {
    const { userId, userName, userColor, content, image, gif, audio, video, file, fileName, timestamp} = JSON.parse(data);

    const message = userId == user.id
        ? createMessageSelfElement(content, image, gif, audio, video, file, fileName, timestamp)
        : createMessageOtherElement(content, userName, userColor, image, gif, audio, video, file, fileName, timestamp);

    chatMessages.appendChild(message);
    scrollScreen();
};

const sendMessage = (event) => {
    event.preventDefault();

    const message = {
        userId: user.id,
        userName: user.name,
        userColor: user.color,
        content: chatInput.value.replace(/</g,"&lt").replace(/>/g,"&lt").trim(),
        image: selectedImageBase64,
        gif: selectedGifBase64,
        audio: selectedAudioBase64,
        video: selectedVideoBase64,
        file: selectedGenericFile,
        fileName: selectedGenericFileName,
        timestamp: new Date().toLocaleTimeString([], { hour:"2-digit", minute:"2-digit"}),
    };

    websocket.send(JSON.stringify(message));

    chatInput.value = "";
    selectedImageBase64 = null;
    selectedGifBase64 = null;
    selectedAudioBase64 = null;
    selectedVideoBase64 = null;
    selectedGenericFile = null;
    selectedGenericFileName = "";

    const audio = document.getElementById('audioPreview');
    audio.style.display = "none";
    emojiPicker.style.display = "none";
    const pdfPreview = document.getElementById("pdfPreview");
    pdfPreview.style.display = "none";

    document.getElementById('fileLink').style.display = "none";
    document.getElementById('output').src = "";
    document.getElementById('audioPreview').src = "";
    document.getElementById('videoPreview').src = "";
    document.getElementById('videoPreview').style.display = "none";
    
};

chatForm.addEventListener('submit', async () => {
    await cadastrarInfo(user.name, user.id, chatInput.value);
});
chatForm.addEventListener("submit", sendMessage)