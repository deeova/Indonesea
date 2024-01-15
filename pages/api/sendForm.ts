// pages/api/sendEmail.ts
import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";
import * as https from "https";

type SearchData = {
  name: string;
  email: string;
  whatsapp: string;
  dj: string;
  sound: string;
  alcohol: string;
  chef: string;
  light: string;
  food: string;
  date: string;
  guest: string;
  message: string;
};

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Extract data from the request body
    const {
      name,
      email,
      whatsapp,
      dj,
      sound,
      alcohol,
      chef,
      light,
      food,
      date,
      guest,
      message,
    } = req.body as SearchData;

    const requestData = {
      name,
      email,
      whatsapp,
      dj,
      sound,
      alcohol,
      chef,
      light,
      food,
      date,
      guest,
      message,
    };
    const data = JSON.stringify(requestData);
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://api.bohememansion.com/api/",
      headers: {
        "Content-Type": "application/json",
      },
      data,
      httpsAgent: new https.Agent({rejectUnauthorized: false}),
    };
    const response = await axios.request(config);
    // Respond with the data from the external API
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Internal server error"});
  }
}
