// botões do HTML

function toggleGallery() {
    const gallery = document.getElementById("imageGallery");
    gallery.style.display = gallery.style.display === "none" ? "flex" : "none";
}

function toggleUploads() {
    const uploads = document.getElementById("uploadFields");
    uploads.style.display = uploads.style.display === "none" ? "block" : "none";
}

function toggleColors() {
    const coloring = document.getElementById("changeColor");
    coloring.style.display = coloring.style.display === "none" ? "block" : "none";
}

function revealAudio() {
    const audio = document.getElementById('audioPreview');
    audio.style.display = audio.style.display === "none" ? "block" : "none";
}

function revealButtons() {
}


//Mudar cores do site

function applyCustomColors() {
    const background = localStorage.getItem("background-color");
    const text = localStorage.getItem("text-color");
    const primary = localStorage.getItem("primary-color");

    if (background) document.documentElement.style.setProperty('--background-color', background);
    if (text) document.documentElement.style.setProperty('--text-color', text);
    if (primary) document.documentElement.style.setProperty('--primary-color', primary);
}

document.getElementById("backgroundColorPicker").addEventListener("change", (e) => {
    const value = e.target.value;
    document.documentElement.style.setProperty('--background-color', value);
    localStorage.setItem("background-color", value);
});

document.getElementById("textColorPicker").addEventListener("change", (e) => {
    const value = e.target.value;
    document.documentElement.style.setProperty('--text-color', value);
    localStorage.setItem("text-color", value);
});

document.getElementById("primaryColorPicker").addEventListener("change", (e) => {
    const value = e.target.value;
    document.documentElement.style.setProperty('--primary-color', value);
    localStorage.setItem("primary-color", value);
});

// Aplicar cores salvas ao carregar
applyCustomColors();

// login elements
const login = document.querySelector(".login");
const loginForm = login.querySelector(".login__form");
const loginInput = login.querySelector(".login__input");

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

// Figurinhas
function selectSiteImage(url) {
    selectedImageBase64 = url;
    document.getElementById('output').src = url;
}

// Emojis
const emojiPicker = document.getElementById("emojiPicker");
const emojis = ["😀" ,  "😁" ,  "😂" ,  "😃" ,  "😄" ,  "😅" ,  "😆" ,  "😇" ,  "😈" ,  "😉" ,  "😊" ,  "😋" ,  "😌" ,  "😍" ,  "😎" ,  "😏" ,  "😐" ,  "😑" ,  "😒" ,  "😓" ,  "😔" ,  "😕" ,  "😖" ,  "😗" ,  "😘" ,  "😙" ,  "😚" ,  "😛" ,  "😜" ,  "😝" ,  "😞" ,  "😟" ,  "😠" ,  "😡" ,  "😢" ,  "😣" ,  "😤" ,  "😥" ,  "😦" ,  "😧" ,  "😨" ,  "😩" ,  "😪" ,  "😫" ,  "😬" ,  "😭" ,  "😮" ,  "😯" ,  "😰" ,  "😱" ,  "😲" ,  "😳" ,  "😴" ,  "😵" ,  "😶" ,  "😷" ,  "😸" ,  "😹" ,  "😺" ,  "😻" ,  "😼" ,  "😽" ,  "😾" ,  "😿" ,  "🙀" ,  "🙁" ,  "🙂" ,  "🙃" ,  "🙄" ,  "🙅" ,  "🙆" ,  "🙇" ,  "🙈" ,  "🙉" ,  "🙊" ,  "🙋" ,  "🙌" ,  "🙍" ,  "🙎" ,  "🙏" ,  "🌀" ,  "🌁" ,  "🌂" ,  "🌃" ,  "🌄" ,  "🌅" ,  "🌆" ,  "🌇" ,  "🌈" ,  "🌉" ,  "🌊" ,  "🌋" ,  "🌌" ,  "🌍" ,  "🌎" ,  "🌏" ,  "🌐" ,  "🌑" ,  "🌒" ,  "🌓" ,  "🌔" ,  "🌕" ,  "🌖" ,  "🌗" ,  "🌘" ,  "🌙" ,  "🌚" ,  "🌛" ,  "🌜" ,  "🌝" ,  "🌞" ,  "🌟" ,  "🌠" ,  "🌡" ,  "🌢" ,  "🌣" ,  "🌤" ,  "🌥" ,  "🌦" ,  "🌧" ,  "🌨" ,  "🌩" ,  "🌪" ,  "🌫" ,  "🌬" ,  "🌭" ,  "🌮" ,  "🌯" ,  "🌰" ,  "🌱" ,  "🌲" ,  "🌳" ,  "🌴" ,  "🌵" ,  "🌶" ,  "🌷" ,  "🌸" ,  "🌹" ,  "🌺" ,  "🌻" ,  "🌼" ,  "🌽" ,  "🌾" ,  "🌿" ,  "🍀" ,  "🍁" ,  "🍂" ,  "🍃" ,  "🍄" ,  "🍅" ,  "🍆" ,  "🍇" ,  "🍈" ,  "🍉" ,  "🍊" ,  "🍋" ,  "🍌" ,  "🍍" ,  "🍎" ,  "🍏" ,  "🍐" ,  "🍑" ,  "🍒" ,  "🍓" ,  "🍔" ,  "🍕" ,  "🍖" ,  "🍗" ,  "🍘" ,  "🍙" ,  "🍚" ,  "🍛" ,  "🍜" ,  "🍝" ,  "🍞" ,  "🍟" ,  "🍠" ,  "🍡" ,  "🍢" ,  "🍣" ,  "🍤" ,  "🍥" ,  "🍦" ,  "🍧" ,  "🍨" ,  "🍩" ,  "🍪" ,  "🍫" ,  "🍬" ,  "🍭" ,  "🍮" ,  "🍯" ,  "🍰" ,  "🍱" ,  "🍲" ,  "🍳" ,  "🍴" ,  "🍵" ,  "🍶" ,  "🍷" ,  "🍸" ,  "🍹" ,  "🍺" ,  "🍻" ,  "🍼" ,  "🍽" ,  "🍾" ,  "🍿" ,  "🎀" ,  "🎁" ,  "🎂" ,  "🎃" ,  "🎄" ,  "🎅" ,  "🎆" ,  "🎇" ,  "🎈" ,  "🎉" ,  "🎊" ,  "🎋" ,  "🎌" ,  "🎍" ,  "🎎" ,  "🎏" ,  "🎐" ,  "🎑" ,  "🎒" ,  "🎓" ,  "🎔" ,  "🎕" ,  "🎖" ,  "🎗" ,  "🎘" ,  "🎙" ,  "🎚" ,  "🎛" ,  "🎜" ,  "🎝" ,  "🎞" ,  "🎟" ,  "🎠" ,  "🎡" ,  "🎢" ,  "🎣" ,  "🎤" ,  "🎥" ,  "🎦" ,  "🎧" ,  "🎨" ,  "🎩" ,  " 🎪" ,  "🎫" ,  "🎬" ,  "🎭" ,  "🎮" ,  "🎯" ,  "🎰" ,  "🎱" ,  "🎲" ,  "🎳" ,  "🎴" ,  "🎵" ,  "🎶" ,  "🎷" ,  "🎸" ,  "🎹" ,  "🎺" ,  "🎻" ,  "🎼" ,  "🎽" ,  "🎾" ,  "🎿" ,  "🏀" ,  "🏁" ,  "🏂" ,  "🏃" ,  "🏄" ,  "🏅" ,  "🏆" ,  "🏇" ,  "🏈" ,  "🏉" ,  "🏊" ,  "🏋" ,  "🏌" ,  "🏍" ,  "🏎" ,  "🏏" ,  "🏐" ,  "🏑" ,  "🏒" ,  "🏓" ,  "🏔" ,  "🏕" ,  "🏖" ,  "🏗" ,  "🏘" ,  "🏙" ,  "🏚" ,  "🏛" ,  "🏜" ,  "🏝" ,  "🏞" ,  "🏟" ,  "🏠" ,  "🏡" ,  "🏢" ,  "🏣" ,  "🏤" ,  "🏥" ,  "🏦" ,  "🏧" ,  "🏨" ,  "🏩" ,  "🏪" ,  "🏫" ,  "🏬" ,  "🏭" ,  "🏮" ,  "🏯" ,  "🏰" ,  "🏱" ,  "🏲" ,  "🏳" ,  "🏴" ,  "🏵" ,  "🏶" ,  "🏷" ,  "🏸" ,  "🏹" ,  "🏺" ,  "🏻" ,  "🏼" ,  "🏽" ,  "🏾" ,  "🏿" ,  "🐀" ,  "🐁" ,  "🐂" ,  "🐃" ,  "🐄" ,  "🐅" ,  "🐆" ,  "🐇" ,  "🐈" ,  "🐉" ,  "🐊" ,  "🐋" ,  "🐌" ,  "🐍" ,  "🐎" ,  "🐏" ,  "🐐" ,  "🐑" ,  "🐒" ,  "🐓" ,  "🐔" ,  "🐕" ,  "🐖" ,  "🐗" ,  "🐘" ,  "🐙" ,  "🐚" ,  "🐛" ,  "🐜" ,  "🐝" ,  "🐞" ,  "🐟" ,  "🐠" ,  "🐡" ,  "🐢" ,  "🐣" ,  "🐤" ,  "🐥" ,  "🐦" ,  "🐧" ,  "🐨" ,  "🐩" ,  "🐪" ,  "🐫" ,  "🐬" ,  "🐭" ,  "🐮" ,  "🐯" ,  "🐰" ,  "🐱" ,  "🐲" ,  "🐳" ,  "🐴" ,  "🐵" ,  "🐶" ,  "🐷" ,  "🐸" ,  "🐹" ,  "🐺" ,  "🐻" ,  "🐼" ,  "🐽" ,  "🐾" ,  "🐿" ,  "👀" ,  "👁" ,  "👂" ,  "👃" ,  "👄" ,  "👅" ,  "👆" ,  "👇" ,  "👈" ,  "👉" ,  "👊" ,  "👋" ,  "👌" ,  "👍" ,  "👎" ,  "👏" ,  "👐" ,  "👑" ,  "👒" ,  "👓" ,  "👔" ,  "👕" ,  "👖" ,  "👗" ,  "👘" ,  "👙" ,  "👚" ,  "👛" ,  "👜" ,  "👝" ,  "👞" ,  "👟" ,  "👠" ,  "👡" ,  "👢" ,  "👣" ,  "👤" ,  "👥" ,  "👦" ,  "👧" ,  "👨" ,  "👩" ,  "👪" ,  "👫" ,  "👬" ,  "👭" ,  "👮" ,  "👯" ,  "👰" ,  "👱" ,  "👲" ,  "👳" ,  "👴" ,  "👵" ,  "👶" ,  "👷" ,  "👸" ,  "👹" ,  "👺" ,  "👻" ,  "👼" ,  "👽" ,  "👾" ,  "👿" ,  "💀" ,  "💁" ,  "💂" ,  "💃" ,  "💄" ,  "💅" ,  "💆" ,  "💇" ,  "💈" ,  "💉" ,  "💊" ,  "💋" ,  "💌" ,  "💍" ,  "💎" ,  "💏" ,  "💐" ,  "💑" ,  "💒" ,  "💓" ,  "💔" ,  "💕" ,  "💖" ,  "💗" ,  "💘" ,  "💙" ,  "💚" ,  "💛" ,  "💜" ,  "💝" ,  "💞" ,  "💟" ,  "💠" ,  "💡" ,  "💢" ,  "💣" ,  "💤" ,  "💥" ,  "💦" ,  "💧" ,  "💨" ,  "💩" ,  "💪" ,  "💫" ,  "💬" ,  "💭" ,  "💮" ,  "💯" ,  "💰" ,  "💱" ,  "💲" ,  "💳" ,  "💴" ,  "💵" ,  "💶" ,  "💷" ,  "💸" ,  "💹" ,  "💺" ,  "💻" ,  "💼" ,  "💽" ,  "💾" ,  "💿" ,  "📀" ,  "📁" ,  "📂" ,  "📃" ,  "📄" ,  "📅" ,  "📆" ,  "📇" ,  "📈" ,  "📉" ,  "📊" ,  "📋" ,  "📌" ,  "📍" ,  "📎" ,  "📏" ,  "📐" ,  "📑" ,  "📒" ,  "📓" ,  "📔" ,  "📕" ,  "📖" ,  "📗" ,  "📘" ,  "📙" ,  "📚" ,  "📛" ,  "📜" ,  "📝" ,  "📞" ,  "📟" ,  "📠" ,  "📡" ,  "📢" ,  "📣" ,  "📤" ,  "📥" ,  "📦" ,  "📧" ,  "📨" ,  "📩" ,  "📪" ,  "📫" ,  "📬" ,  "📭" ,  "📮" ,  "📯" ,  "📰" ,  "📱" ,  "📲" ,  "📳" ,  "📴" ,  "📵" ,  "📶" ,  "📷" ,  "📸" ,  "📹" ,  "📺" ,  "📻" ,  "📼" ,  "📽" ,  "📾" ,  "📿" ,  "🔀" ,  "🔁" ,  "🔂" ,  "🔃" ,  "🔄" ,  "🔅" ,  "🔆" ,  "🔇" ,  "🔈" ,  "🔉" ,  "🔊" ,  "🔋" ,  "🔌" ,  "🔍" ,  "🔎" ,  "🔏" ,  "🔐" ,  "🔑" ,  "🔒" ,  "🔓" ,  "🔔" ,  "🔕" ,  "🔖" ,  "🔗" ,  "🔘" ,  "🔙" ,  "🔚" ,  "🔛" ,  "🔜" ,  "🔝" ,  "🔞" ,  "🔟" ,  "🔠" ,  "🔡" ,  "🔢" ,  "🔣" ,  "🔤" ,  "🔥" ,  "🔦" ,  "🔧" ,  "🔨" ,  "🔩" ,  "🔪" ,  "🔫" ,  "🔬" ,  "🔭" ,  "🔮" ,  "🔯" ,  "🔰" ,  "🔱" ,  "🔲" ,  "🔳" ,  "🔴" ,  "🔵" ,  "🔶" ,  "🔷" ,  "🔸" ,  "🔹" ,  "🔺" ,  "🔻" ,  "🔼" ,  "🔽" ,  "🔾" ,  "🔿" ,  "🕀" ,  "🕁" ,  "🕂" ,  "🕃" ,  "🕄" ,  "🕅" ,  "🕆" ,  "🕇" ,  "🕈" ,  "🕉" ,  "🕊" ,  "🕋" ,  "🕌" ,  "🕍" ,  "🕎" ,  "🕏" ,  "🕐" ,  "🕑" ,  "🕒" ,  "🕓" ,  "🕔" ,  "🕕" ,  "🕖" ,  "🕗" ,  "🕘" ,  "🕙" ,  "🕚" ,  "🕛" ,  "🕜" ,  "🕝" ,  "🕞" ,  "🕟" ,  "🕠" ,  "🕡" ,  "🕢" ,  "🕣" ,  "🕤" ,  "🕥" ,  "🕦" ,  "🕧" ,  "🕨" ,  "🕩" ,  "🕪" ,  "🕫" ,  "🕬" ,  "🕭" ,  "🕮" ,  "🕯" ,  "🕰" ,  "🕱" ,  "🕲" ,  "🕳" ,  "🕴" ,  "🕵" ,  "🕶" ,  "🕷" ,  "🕸" ,  "🕹" ,  "🕺" ,  "🕻" ,  "🕼" ,  "🕽" ,  "🕾" ,  "🕿" ,  "🖀" ,  "🖁" ,  "🖂" ,  "🖃" ,  "🖄" ,  "🖅" ,  "🖆" ,  "🖇" ,  "🖈" ,  "🖉" ,  "🖊" ,  "🖋" ,  "🖌" ,  "🖍" ,  "🖎" ,  "🖏" ,  "🖐" ,  "🖑" ,  "🖒" ,  "🖓" ,  "🖔" ,  "🖕" ,  "🖖" ,  "🖗" ,  "🖘" ,  "🖙" ,  "🖚" ,  "🖛" ,  "🖜" ,  "🖝" ,  "🖞" ,  "🖟" ,  "🖠" ,  "🖡" ,  "🖢" ,  "🖣" ,  " 🖤" ,  "🖥" ,  "🖦" ,  "🖧" ,  "🖨" ,  "🖩" ,  "🖪" ,  "🖫" ,  "🖬" ,  "🖭" ,  "🖮" ,  "🖯" ,  "🖰" ,  "🖱" ,  "🖲" ,  "🖳" ,  "🖴" ,  "🖵" ,  "🖶" ,  "🖷" ,  "🖸" ,  "🖹" ,  "🖺" ,  "🖻" ,  "🖼" ,  "🖽" ,  "🖾" ,  "🖿" ,  "🗀" ,  "🗁" ,  "🗂" ,  "🗃" ,  "🗄" ,  "🗅" ,  "🗆" ,  "🗇" ,  "🗈" ,  "🗉" ,  "🗊" ,  "🗋" ,  "🗌" ,  "🗍" ,  "🗎" ,  "🗏" ,  "🗐" ,  "🗑" ,  "🗒" ,  "🗓" ,  "🗔" ,  "🗕" ,  "🗖" ,  "🗗" ,  "🗘" ,  "🗙" ,  "🗚" ,  "🗛" ,  "🗜" ,  "🗝" ,  "🗞" ,  "🗟" ,  "🗠" ,  "🗡" ,  "🗢" ,  "🗣" ,  "🗤" ,  "🗥" ,  "🗦" ,  "🗧" ,  "🗨" ,  "🗩" ,  "🗪" ,  "🗫" ,  "🗬" ,  "🗭" ,  "🗮" ,  "🗯" ,  "🗰" ,  "🗱" ,  "🗲" ,  "🗳" ,  "🗴" ,  "🗵" ,  "🗶" ,  "🗷" ,  "🗸" ,  "🗹" ,  "🗺" ,  "🗻" ,  "🗼" ,  "🗽" ,  "🗾" ,  "🗿" ,  "🚀" ,  "🚁" ,  "🚂" ,  "🚃" ,  "🚄" ,  "🚅" ,  "🚆" ,  "🚇" ,  "🚈" ,  "🚉" ,  "🚊" ,  "🚋" ,  "🚌" ,  "🚍" ,  "🚎" ,  "🚏" ,  "🚐" ,  "🚑" ,  "🚒" ,  "🚓" ,  "🚔" ,  "🚕" ,  "🚖" ,  "🚗" ,  "🚘" ,  "🚙" ,  "🚚" ,  "🚛" ,  "🚜" ,  "🚝" ,  "🚞" ,  "🚟" ,  "🚠" ,  "🚡" ,  "🚢" ,  "🚣" ,  "🚤" ,  "🚥" ,  "🚦" ,  "🚧" ,  "🚨" ,  "🚩" ,  "🚪" ,  "🚫" ,  "🚬" ,  "🚭" ,  "🚮" ,  "🚯" ,  "🚰" ,  "🚱" ,  "🚲" ,  "🚳" ,  "🚴" ,  "🚵" ,  "🚶" ,  "🚷" ,  "🚸" ,  "🚹" ,  "🚺" ,  "🚻" ,  "🚼" ,  "🚽" ,  "🚾" ,  "🚿" ,  "🛀" ,  "🛁" ,  "🛂" ,  "🛃" ,  "🛄" ,  "🛅" ,  "🛆" ,  "🛇" ,  "🛈" ,  "🛉" ,  "🛊" ,  "🛋" ,  "🛌" ,  "🛍" ,  "🛎" ,  "🛏" ,  "🛐" ,  "🛑" ,  "🛒" ,  "🛕" ,  "🛖" ,  "🛗" ,  "🛜" ,  "🛝" ,  "🛞" ,  "🛟" ,  "🛠" ,  "🛡" ,  "🛢" ,  "🛣" ,  "🛤" ,  "🛥" ,  "🛦" ,  "🛧" ,  "🛨" ,  "🛩" ,  "🛪" ,  "🛫" ,  "🛬",  "🛴" ,  "🛵" ,  "🛶" ,  "🛷" ,  "🛸" ,  "🛹" ,  "🛺" ,  "🛻" ,  "🛼" , "🤌" ,  "🤍" ,  "🤎" ,  "🤏" ,  "🤐" ,  "🤑" ,  "🤒" ,  "🤓" ,  "🤔" ,  "🤕" ,  "🤖" ,  "🤗" ,  "🤘" ,  "🤙" ,  "🤚" ,   "🤛" ,  "🤜" ,  "🤝" ,  "🤞" ,  "🤟" ,  "🤠" ,  "🤡" ,  "🤢" ,  "🤣" ,  "🤤" ,  "🤥" ,  "🤦" ,  "🤧" ,  "🤨" ,  "🤩" ,  "🤪" ,  "🤫" ,  "🤬" ,  "🤭" ,  "🤮" ,  "🤯" ,  "🤰" ,  "🤱" ,  "🤲" ,  "🤳" ,  "🤴" ,  "🤵" ,  "🤶" ,  "🤷" ,  "🤸" ,  "🤹" ,  "🤺" ,  "🤻" ,  "🤼" ,  "🤽" ,  "🤾" ,  "🤿" ,  "🥀" , "🥁" ,  "🥂" ,  "🥃" ,  "🥄" ,  "🥅" ,  "🥇" ,  "🥈" ,  "🥉" ,  "🥊" ,  "🥋" ,  "🥌" ,  "🥍" ,  "🥎" ,  "🥏" ,  "🥐" ,  "🥑" ,  "🥒" ,  "🥓" , "🥔" ,  "🥕" ,  "🥖" ,  "🥗" ,  "🥘" ,  "🥙" ,  "🥚" ,  "🥛" ,  "🥜" ,  "🥝" ,  "🥞" ,  "🥟" ,  "🥠" ,  "🥡" ,  "🥢" ,  "🥣" ,  "🥤" ,  "🥥" ,  "🥦" ,  "🥧" ,  "🥨" ,  "🥩" ,  "🥪" ,  "🥫" ,  "🥬" ,  "🥭" ,  "🥮" ,  "🥯" ,  "🥰" ,  "🥱" ,  "🥲" ,  "🥳" ,  "🥴" ,  "🥵" ,  "🥶" ,  "🥷" ,  "🥸" ,  "🥹" , "🥺" ,  "🥻" ,  "🥼" ,  "🥽" ,  "🥾" ,  "🥿" ,  "🦀" ,  "🦁" ,  "🦂" ,  "🦃" ,  "🦄" ,  "🦅" ,  "🦆" ,  "🦇" ,  "🦈" ,  "🦉" ,  "🦊" ,  "🦋" ,  "🦌" ,  "🦍" ,  "🦎" ,  "🦏" ,  "🦐" ,  "🦑" ,  "🦒" ,  "🦓" ,  "🦔" ,  "🦕" ,  "🦖" ,  "🦗" ,  "🦘" ,  "🦙" ,  "🦚" ,  "🦛" ,  "🦜" ,  "🦝" ,  "🦞" ,  "🦟" ,  "🦠" ,  "🦡" ,  "🦢" ,  "🦣" ,  "🦤" ,  "🦥" ,  "🦦" ,  "🦧" ,  "🦨" ,  "🦩" ,  "🦪" ,  "🦫" ,  "🦬" ,  "🦭" ,  "🦮" ,  "🦯" ,  "🦰" ,  "🦱" ,  "🦲", "🦳" ,  "🦴" ,  "🦵" ,  "🦶" ,  "🦷" ,  "🦸" ,  "🦹" ,  "🦺" ,  "🦻" ,  "🦼" ,  "🦽" ,  "🦾" ,  "🦿" ,  "🧀" ,  "🧁" ,  "🧂" ,  "🧃" ,  "🧄" ,  "🧅" ,  "🧆" ,  "🧇" ,  "🧈" ,  "🧉" ,  "🧊" ,  "🧋" ,  "🧌" ,  "🧍" ,  "🧎" ,  "🧏" ,  "🧐" ,  "🧑" ,  "🧒" ,  "🧓" ,  "🧔" ,  "🧕" ,  "🧖" ,  "🧗" ,  "🧘" ,  "🧙" ,  "🧚" ,  "🧛" ,  "🧜" ,  "🧝" ,  "🧞" ,  "🧟" ,  "🧠" ,  "🧡" ,  "🧢" ,  "🧣" ,  "🧤" ,  "🧥" ,  "🧦" ,  "🧧" ,  "🧨" ,  "🧩" ,  "🧪" ,  "🧫" ,  "🧬" ,  "🧭" ,  "🧮" ,  "🧯" ,  "🧰" ,  "🧱" ,  "🧲" ,  "🧳" ,  "🧴" ,  "🧵" ,  "🧶" ,  "🧷" ,  "🧸" ,  "🧹" ,  "🧺" ,  "🧻" ,  "🧼" ,  "🧽" ,  "🧾" ,  "🧿" ,  "🩰" ,  "🩱" ,  "🩲" ,  "🩳" ,  "🩴" ,  "🩵" ,  "🩶" ,  "🩷" ,  "🩸" ,  "🩹" ,  "🩺" ,  "🩻" ,  "🩼" ,  "🪀" ,  "🪁" ,  "🪂" ,  "🪃" ,  "🪄" ,  "🪅" ,  "🪆" ,  "🪇" ,  "🪈" ,  "🪐" ,  "🪑" ,  "🪒" ,  "🪓" ,  "🪔" ,  "🪕" ,  "🪖" ,  "🪗" ,  "🪘" ,  "🪙" ,  "🪚" ,  "🪛" ,  "🪜" ,  "🪝" ,  "🪞" ,  "🪟" ,  "🪠" ,  "🪡" ,  "🪢" ,  "🪣" ,  "🪤" ,  "🪥" ,  "🪦" ,  "🪧" ,  "🪨" ,  "🪩" ,  "🪪" ,  "🪫" ,  "🪬" ,  "🪭" ,  "🪮" ,  "🪯" ,  "🪰" ,  "🪱" ,  "🪲" ,  "🪳" ,  "🪴" ,  "🪵" ,  "🪶" ,  "🪷" ,  "🪸" ,  "🪹" ,  "🪺" ,  "🪻" ,  "🪼" ,  "🪽" ,  "🪿" ,  "🫀" ,  "🫁" ,  "🫂" ,  "🫃" ,  "🫄" ,  "🫅",  "🫎" ,  "🫏" ,  "🫐" ,  "🫑" ,  "🫒" ,  "🫓" ,  "🫔" ,  "🫕" ,  "🫖" ,  "🫗" ,  "🫘" ,  "🫙" ,  "🫚" ,  "🫛",  "🫠" ,  "🫡" ,  "🫢" ,  "🫣" ,  "🫤" ,  "🫥" ,  "🫦" ,  "🫧" ,  "🫨", "🫰" ,  "🫱" ,  "🫲" ,  "🫳" ,  "🫴" ,  "🫵" ,  "🫶" ,  "🫷" ,  "🫸"];

function toggleEmojiPicker() {
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
}

function insertEmoji(emoji) {
    chatInput.value += emoji;
    chatInput.focus();
}

// Upload Imagens
let selectedImageBase64 = null;

var loadFile = function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    const image = document.getElementById('output');

    reader.onload = function(e) {
        selectedImageBase64 = e.target.result;
        image.src = selectedImageBase64;
    };

    reader.readAsDataURL(file);
};
// Upload Audio
let selectedAudioBase64 = null;

function previewAudio() {
    const file = document.getElementById("audioFile").files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        selectedAudioBase64 = e.target.result;
        document.getElementById("audioPreview").src = selectedAudioBase64;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}
// Upload Video
let selectedVideoBase64 = null;

function previewVideo() {
    const file = document.getElementById("videoFile").files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        selectedVideoBase64 = e.target.result;
        const video = document.getElementById("videoPreview");
        video.src = selectedVideoBase64;
        video.style.display = "block";
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}
// Upload Arquivo (excel, txt, pdf, zip)
let selectedGenericFile = null;
let selectedGenericFileName = "";

function handleGenericFile() {
    const file = document.getElementById("genericFile").files[0];
    const pdfPreview = document.getElementById("pdfPreview");

    if (!file) return;

    const reader = new FileReader();
    const fileType = file.type;

    reader.onload = function(e) {
        const fileURL = e.target.result;
        selectedGenericFile = e.target.result;
        selectedGenericFileName = file.name;

        const link = document.getElementById("fileLink");
        link.href = selectedGenericFile;
        link.textContent = selectedGenericFileName;
        link.style.display = "inline";

        // Se for PDF, mostrar no iframe
        if (fileType === "application/pdf") {
            pdfPreview.src = fileURL;
            pdfPreview.style.display = "block";
        } else {
            // Caso contrário, exibir link de download
            pdfPreview.style.display = "none";
            fileLink.href = fileURL;
            fileLink.textContent = `Baixar: ${file.name}`;
            fileLink.style.display = "block";
        }
    };

    reader.readAsDataURL(file);
}

// Upload Gif

let selectedGifBase64 = null;

function previewGif() {
    const file = document.getElementById("gifFile").files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        selectedGifBase64 = e.target.result;
        const image = document.getElementById('output');
        image.src = selectedGifBase64;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
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

const handleLogin = (event) => {
    event.preventDefault();
    user.id = crypto.randomUUID();
    user.name = loginInput.value;
    user.color = getRandomColor();

    login.style.display = "none";
    chat.style.display = "flex";

    websocket = new WebSocket( "wss://chat-backend-h4xe.onrender.com");
    websocket.onmessage = processMessage;
    
}

const sendMessage = (event) => {
    event.preventDefault();

    const message = {
        userId: user.id,
        userName: user.name,
        userColor: user.color,
        content: chatInput.value,
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

loginForm.addEventListener("submit", handleLogin)
chatForm.addEventListener("submit", sendMessage)