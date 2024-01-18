// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as z from 'zod';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { formSchema } from "@/schemas";

export default async function handler(
    req: {body: z.infer<typeof formSchema>},
    res: any
) {
    const values= req.body;

    const validatedFields = formSchema.safeParse(values);
    
    
    if (!validatedFields.success) {
        res.status(200).json({ error: 'Invalid Fields!' });
    }

    res.status(200).json({ success: 'Email Sent!' });
}
