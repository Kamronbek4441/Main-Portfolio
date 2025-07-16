export const sendTelegramMessage = async (name, email, message) => {
  const token = '7740724554:AAGQdqMs7sd3bnSACV_iJc2k5h8NxlaP2tA'; // bu yerga o'zingizning tokeningizni yozing
  const chatId = '5764570183'; // bu yerga o'zingizning Telegram user ID yoki kanal ID'ingizni yozing

  const text = `📩 Yangi xabar:\n\n👤 Ism: ${name}\n📧 Email: ${email}\n💬 Xabar: ${message}`;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    })
  });
};
