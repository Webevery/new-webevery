const TELEGRAM_CHAT_ID = "@WebeveryTel";
const telegramApi = process.env.TELEGRAM_API

export const sendToTelegram = async (formData) => {


    const { userName, tel, message } = formData;

    let text = `Шановний Webevery, ${userName} заповнив форму ${message} та залишив тел: ${tel} `;

    try {
        const response = await fetch(telegramApi, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            }),
        });

        if (response.ok) {
            console.log("To telegram sent:", formData);
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}