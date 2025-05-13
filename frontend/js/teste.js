// Intervalos comuns de emojis no Unicode
const emojiRanges = [
    [0x1F600, 0x1F64F], // Emojis clássicos (carinhas)
    [0x1F300, 0x1F5FF], // Símbolos e pictogramas
    [0x1F680, 0x1F6FF], // Transporte e mapas
    [0x1F700, 0x1F77F], // Símbolos alquímicos
    [0x1F900, 0x1F9FF], // Suplemento de emojis
    [0x1FA70, 0x1FAFF], // Mais emojis
    [0x2600, 0x26FF],   // Símbolos diversos (ex: ☀️⚡)
    [0x2700, 0x27BF],   // Setas, mãos, etc.
  ];
  
  // Função para verificar se o caractere é visível e parece um emoji
  function isLikelyEmoji(char) {
    const code = char.codePointAt(0);
    return (
      (code >= 0x1F600 && code <= 0x1F64F) ||  // Faces
      /\p{Emoji}/u.test(char)                 // Usa propriedade Unicode Emoji (se suportado)
    );
  }
  
  // Geração e exibição
  let output = "";
  
  for (const [start, end] of emojiRanges) {
    for (let cp = start; cp <= end; cp++) {
      const char = String.fromCodePoint(cp);
      if (isLikelyEmoji(char)) {
        output += char + " ";
      }
    }
  }
  
  console.log(output);