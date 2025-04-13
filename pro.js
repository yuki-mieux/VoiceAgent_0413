import { Conversation } from "https://esm.sh/@11labs/client";

let conversation;

document.getElementById("start-pro").addEventListener("click", async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });

    conversation = await Conversation.startSession({
      agentId: "bFynjX5qk6zYKNH8tItu", // 有償エージェントのIDに差し替えてください
      onMessage: (msg) => console.log("PRO Agent:", msg.text),
      onError: (err) => console.error("Error:", err),
    });
  } catch (e) {
    console.error("マイクアクセスまたは会話セッションのエラー", e);
  }
});
