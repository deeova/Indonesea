// pages/api/sendEmail.ts
import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";
import * as https from "https";

type SearchData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  date: string;
  countryCode: string;
  guest: string;
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
      phoneNumber,
      countryCode,
      date,
      guest,
      message,
    } = req.body as SearchData;

    const requestData = {
      name,
      email,
      phoneNumber,
      countryCode,
      date,
      guest,
      message,
    };
    const data = JSON.stringify(requestData);
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://api.indonesea.com/api/",
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
