
// const ELEVEN_API_KEY = "sk_e61463e665bb35b8d3ee257c565dbeb91194fd3432203d83";
const AGENT_ID = "q8nxeqKRqbKrTxeGe7KM";

import { Conversation } from "https://esm.sh/@11labs/client";

let conversation;

document.getElementById("start").addEventListener("click", async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });

    conversation = await Conversation.startSession({
      agentId: AGENT_ID,
      onMessage: (msg) => {
        console.log("Agent:", msg.text);
      },
      onError: (err) => {
        console.error("Error:", err);
      },
    });

    console.log("Conversation started");
  } catch (e) {
    console.error("Failed to start conversation:", e);
  }
});

document.getElementById("stop").addEventListener("click", async () => {
  if (conversation) {
    await conversation.endSession();
    console.log("Conversation ended");
  }
});
