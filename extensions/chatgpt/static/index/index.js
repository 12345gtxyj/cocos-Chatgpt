const fs = require('fs');
const path = require('path');

module.exports = Editor.Panel.define({
    listeners: {
        show() { console.log('show'); },
        hide() { console.log('hide'); },
    },
    template: fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'),
    style: fs.readFileSync(path.join(__dirname, 'index.css'), 'utf8'),
    $: {
        elem: 'div',
    },
    methods: {
        /**
         * Example method for handling custom actions
         */
        customMethod() {
            console.log('Custom method triggered');
        },

        async sendRequestToChatGPT({ url, apiKey, description }) {
            if (!url || !apiKey || !description) {
                console.log("URL, API Key, and Description are required.");
                return;
            }

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({
                        model: "gpt-3.5-turbo",
                        messages: [{ role: "user", content: description }],
                    }),
                });

                const data = await response.json();
                console.log("ChatGPT Response: ", data.choices[0].message.content);
            } catch (error) {
                console.log("Error occurred while sending request to ChatGPT: ", error);
            }
        },

        // 加载并执行新脚本
        async loadAndExecuteScript() {
            try {
                // 向 'scene' 发送请求，调用 'log' 方法
                const result = await Editor.Message.request('scene', 'execute-scene-script', {
                    name: 'chatgpt',  // 扩展包的名称
                    method: 'createRandomCube',   // 要调用的方法
                    args: []         // 方法参数，log() 不需要参数
                });

                // 打印返回的结果
                console.log("Scene script result: ", result);
            } catch (error) {
                console.log("Error calling scene script: ", error);
            }
        },
    },

    ready() {
        console.log('Panel is ready');
        const sendButton = this.$.elem.querySelector('#sendButton');
        const executeButton = this.$.elem.querySelector('#executeButton');
        const urlInput = this.$.elem.querySelector('#url');
        const apiKeyInput = this.$.elem.querySelector('#apiKey');
        const descriptionInput = this.$.elem.querySelector('#description');

        // Set initial values for URL and API Key
        urlInput.value = 'https://api.chatanywhere.org/v1/chat/completions'; // Replace with your desired URL
        apiKeyInput.value = 'sk-9oz3RDKf31xqEQD8oKO6jxWwHxdpcLFNoOYlHJbJmbGFCxkY'; // Replace with your desired API Key

        sendButton.addEventListener('click', () => {
            const url = urlInput.value.trim();
            const apiKey = apiKeyInput.value.trim();
            const description = descriptionInput.value.trim();

            if (!url || !apiKey || !description) {
                alert("Please fill out all fields.");
                return;
            }

            // Send message to panel using the correct method
            this.sendRequestToChatGPT({ url, apiKey, description });
        });

        executeButton.addEventListener('click', () => {
            // Send message to panel using the correct method
            this.loadAndExecuteScript();
        });
    },
    beforeClose() {
        console.log('Panel is about to close');
    },
    close() {
        console.log('Panel has been closed');
    },
});
