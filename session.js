//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUd3bjJWc0M4V1IxR1ZpZ2plNTZQUkZNVHczZ2lWRDV0ZWZpbHhqYXgwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEsxSG1ZbHMxQVROc3FyTExEODNDblQ1THdaZTlDZGFwM29KbzRPNVBTQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRFhNYW1kRHowRTVBSGlTaVlOTElxWFpnU08vcmh2cEVrOG5rTnBiQW40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTZXZlTVJqMi9RL2Q0SE1HS2xCWFZpSktiazlOU0hRZHVvNkRjZ1F5V213PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1DaXE3RS85N0p3eVRNNEk2VUgxMnB5ems4MTFzekhmZmdzRTJ5bzRObGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCbEtUbFprNXhQTmd0TDgzMk0xT2JaOEJhSnd0dEFkTEdqQThXcWtIRW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1A1WTBkMWZOT2NFeCtaYlFueEhEeDIvS1RaOVJucFhMR0I5eGErZ0VWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkdUYURVLysyeUlrZURPR04xbTM3Tnc4eVhRRHBXbEFtejNrcUg3YjVXMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFleFh1cUhiTXJaU1VKRENKdUZHREwzaU5HcGRSdGZlNFJwbnFla3liSnIyMFFZS1pwZWh4MEgwWHVKMHRoTTd3Tmp1VUd5S0txMElSQ0U5UXRvOWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiQmhHTm1sK0s0OU8waWxua1dZbE5VTGVKbDBPS1hTVFErTEczbmNNYjUwST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZE1oLTl6SEdRN0tvQzExbnlBZWdNUSIsInBob25lSWQiOiI4NGY4ODZjNC0zMDk2LTQ4ZjktYWIwMC01ZGQ3YmY2Mjk0ZDYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5zdnQ5azV3a3lRdktXSnJDZ2hMWHVXaG4wPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkzNTRJNXUyZFJQbTNPTGNHT0xPU3NVVk95UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUVlpOVEZKOSIsIm1lIjp7ImlkIjoiOTQ3MTA0MjU1Mjg6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJObyBvbmUgaW4gdGhlcmUiLCJsaWQiOiIyNTMwMTcyMTEzMjI2MTU6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05DUXJJb0VFSnFVOXNjR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ind0QU0xK0RCMUZpQXpzdkQrcmJ3L010NEpWTzJqZjFiQVVQcDdYbWVCRWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9kbkpSYm9EZ3VLaFRkTlRKYkNDVHUvcE5vRHJEckFZaHRrdTFpWFU0N29GOExNK0tZYis0MEpIN1Zva09RbFZmQXNFdTROSGhRTlREaXZWeGphOUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvc1BTY1dwZng1OW9nOGxzZVFpY0p2WVZjTldwOEYxUFFNcjZpRHhIeHcxeCtCMGt2RXh6SnQvYlYrcVYvSUFmTFpsZnRpbVlVVjd5alJqb28xZW1pUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzEwNDI1NTI4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0xRRE5mZ3dkUllnTTdMdy9xMjhQekxlQ1ZUdG8zOVd3RkQ2ZTE1bmdSSCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxNDQ2NDM4LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSFlzIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
