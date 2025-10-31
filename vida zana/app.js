const tips = [
    "trata de hacer ejercisio de perdido una hora al dia.",
    "duermete temprano y evita dormirte con el celular.",
    "trata de consumir agua diario al menos 3 litros.",
    "come sano verduras y frutas.",
    "levantate temprano y ten un higene sano."
];

document.getElementById("btnConsejo").addEventListener("click", () => {
    const random = Math.floor(Math.random() * tips.length);
    document.getElementById("textoConsejo").textContent = "✅ " + tips[random];
});
