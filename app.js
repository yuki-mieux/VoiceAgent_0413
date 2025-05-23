
// const ELEVEN_API_KEY = "sk_e61463e665bb35b8d3ee257c565dbeb91194fd3432203d83";


import { Conversation } from "https://esm.sh/@11labs/client";

let conversation;

document.getElementById("start-free").addEventListener("click", async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });

    conversation = await Conversation.startSession({
      agentId: "mJkNgquT2LcEXvKwJCS2", // 無料エージェントのIDに差し替えてください
      onMessage: (msg) => console.log("FREE Agent:", msg.text),
      onError: (err) => console.error("Error:", err),
    });
  } catch (e) {
    console.error("マイクアクセスまたは会話セッションのエラー", e);
  }
});
