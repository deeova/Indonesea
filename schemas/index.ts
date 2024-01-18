import * as z from 'zod';

export const formSchema = z.object({
    name: z.coerce.string().min(1, {message: "Name is required"}),
    email: z.coerce.string().email({message: "Email is required"}),
    countryCode: z.coerce.string().min(1, {message: "Country Code is required"}),
    phone: z.coerce.string().min(1, {message: "Phone is required"}),
    date: z.coerce.date({ required_error: "Start Date is required", }),
    guest: z.coerce.number().min(1, {message: "Guest is required"}),
    message: z.coerce.string().min(0, {message: "Message is required"})
})