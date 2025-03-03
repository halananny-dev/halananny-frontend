import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const WHATSAPP_API_URL =
  "https://graph.facebook.com/v17.0/YOUR_PHONE_NUMBER_ID/messages";
const ACCESS_TOKEN = "YOUR_META_ACCESS_TOKEN";

async function sendWhatsAppOTP(whatsappNumber, otp) {
 
    const response = await axios.post(
      WHATSAPP_API_URL,
      {
        messaging_product: "whatsapp",
        to: whatsappNumber,
        type: "template",
        template: {
          name: "your_otp_template", // Create this in Meta's dashboard
          language: { code: "en_US" },
          components: [
            {
              type: "body",
              parameters: [{ type: "text", text: otp }],
            },
          ],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("OTP Sent:", response.data);
 
}

// Example Usage
sendWhatsAppOTP("+1234567890", "123456");
