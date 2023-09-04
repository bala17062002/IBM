var typed = new Typed('.auto-type', {
    strings: ["Talk with our Pathbot"],
    typeSpeed: 60,
    loop: false
  })


const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; 
const API_KEY = "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"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {

    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; 
}

const generateResponse = () => {
    // Check if the user's message contains coding-related keywords
    const codingKeywords = ["code", "coding", "programming", "algorithm", "syntax","solution","answer","website"];
    const isCodingQuery = codingKeywords.some(keyword =>
        userMessage.toLowerCase().includes(keyword.toLowerCase())
    );

    if (isCodingQuery) {
        // If it's a coding-related query, respond with "I am not trained for this"
        const incomingChatLi = createChatLi("I am not trained for this.", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    } else {
        // Define the properties and message for the API request
        const API_URL = "https://api.openai.com/v1/chat/completions";
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }],
            })
        };

        // Send POST request to API and get the response
        fetch(API_URL, requestOptions)
            .then(res => res.json())
            .then(data => {
                const incomingChatLi = createChatLi(data.choices[0].message.content.trim(), "incoming");
                chatbox.appendChild(incomingChatLi);
                chatbox.scrollTo(0, chatbox.scrollHeight);
            })
            .catch(() => {
                const incomingChatLi = createChatLi("Oops! Something went wrong. Please try again.", "incoming");
                chatbox.appendChild(incomingChatLi);
                chatbox.scrollTo(0, chatbox.scrollHeight);
            });
    }
};


const handleChat = () => {
    userMessage = chatInput.value.trim(); 
    if (!userMessage) return;

    const studyKeywords = ["hello","hi","hey","bye","goodbye","study","learn","education","placement","career","programming","roadmap","communication","tips","interview","dsa" ,"ds" ,"java" ,"c","python","ml","guide","resources for studies","web development","good morning","good evening","good night","thankyou,","companies","IT","software"];

    const isStudyRelated = studyKeywords.some(keyword => userMessage.toLowerCase().includes(keyword.toLowerCase()));

    if (!isStudyRelated) {
        chatbox.appendChild(createChatLi("I didn't understand. Please ask a study-related question.", "incoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
        return;
    }

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    generateResponse();
}



chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
   
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 400) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));