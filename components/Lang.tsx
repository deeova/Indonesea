'use client'

import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    } from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    } from "@/components/ui/form";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const formSchema = z.object({
    lang: z.string().min(2).max(50),
})

export const Lang = () => {
    const [locale, setLocale] = useState("EN");
    const router = useRouter();
    const { lang } = router.query;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            lang: locale,
        },
    })

    useEffect(() => {
        const storedLang = localStorage.getItem("lang");
        console.log(storedLang);
        if(storedLang) updateLocale(storedLang);
        const initialLang = lang || storedLang || "EN";
    
        localStorage.setItem("lang", initialLang.toString());
        setLocale(initialLang.toString());
    }, [lang]);
    
    const updateLocale = (newLocale: string) => {
        localStorage.setItem("lang", newLocale);
        setLocale(newLocale);
        const currentPathname = router.pathname;

        router.push({
            pathname: currentPathname,
            query: { ...router.query, lang: newLocale },
        });
    };

    return (
        <Form {...form}>
            <FormField control={form.control} name='lang' render={({field}) => (
                <FormItem>
                    <FormControl>
                        <Select onValueChange={(value) => updateLocale(value)} defaultValue={locale}>
                            <SelectTrigger className="bg-transparent border-0 p-0 items-center focus:ring-0 focus:outline-none focus:ring-offset-0">
                                <SelectValue placeholder="LANG"/>
                            </SelectTrigger>
                            <SelectContent className="bg-main/40 backdrop-blur-md ">
                                <SelectItem value="EN" className="hover:bg-main group hover:cursor-pointer">
                                    <span className="flex items-center gap-2">
                                        <Image src="/lang/uk.svg" alt="English" width={30} height={30} />
                                        <span className="text-white group-hover:text-second">EN</span>
                                    </span>
                                </SelectItem>
                                <SelectItem value="FR" className="hover:bg-main group hover:cursor-pointer">
                                    <span className="flex items-center gap-2">
                                        <Image src="/lang/fr.svg" alt="French" width={30} height={30} />
                                        <span className="text-white group-hover:text-second">FR</span>
                                    </span>
                                </SelectItem>
                                <SelectItem value="ID" className="hover:bg-main group hover:cursor-pointer">
                                    <span className="flex items-center gap-2">
                                        <Image src="/lang/id.svg" alt="Indonesian" width={30} height={30} />
                                        <span className="text-white group-hover:text-second">ID</span>
                                    </span>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </FormControl>
                </FormItem>
            )} />
        </Form>
    );
};
