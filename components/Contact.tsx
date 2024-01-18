'use client'

import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    } from "@/components/ui/select";
import {countryCodes} from "@/lib/CCode";
import { useTransition, useState, useEffect } from "react";
import { addDays, format, set } from "date-fns"
import { DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, LucideUser2, X } from "lucide-react";
import CounterForm from "./CounterForm";
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link";
import { formSchema } from "@/schemas";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";

export const Contact = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [cCode, setcCode] = useState<string>("");
    const [startDate, setStartDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            countryCode: cCode,
            phone: '',
            guest: 0,
            message: ''

        },
    })


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setError('');
        setSuccess('');

        startTransition(async () => {
            const body = JSON.stringify(values);
            const res = await fetch('/api/CCode', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body,
            });
            
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const responseData = await res.json();
            form.reset();
            if (responseData.error) {
                setError(responseData.error);

                setTimeout(() => {
                    setError('');
                }, 3000);
            } else {
                setSuccess(responseData.success);

                setTimeout(() => {
                    setSuccess('');
                }, 3000);
                setOpen(false);
            }
        })
    }
    return (
        <Dialog open={open}>
            <DialogTrigger onClick={() => setOpen(true)}>CONTACT</DialogTrigger>
            <DialogContent className="bg-main/50 backdrop-blur-sm p-5 border-0 !rounded-none">
            <DialogClose asChild>
                <Button onClick={() => setOpen(false)} className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-none focus:ring-ring focus:ring-offset- disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <X className="h-6 w-6" />
                </Button>
            </DialogClose>
                <div className="flex flex-col bg-third">
                    <div className="flex flex-col gap-1 text-center p-5">
                        <h3 className="text-3xl">Plan Your Charter</h3>
                        <p className="text-xs">
                            Fill in the details below and one of our experts will be in touch
                            shortly.
                        </p>
                    </div>
                    <div className="flex flex-col p-5">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-3">
                                <div className="col-span-2">
                                    <FormError message={error || ''}/>
                                    <FormSuccess message={success || ''}/>
                                </div>

                                <FormField control={form.control} name='name' render={({field}) => (
                                    <FormItem>
                                        <FormLabel htmlFor='name'>Name:</FormLabel>
                                        <FormControl>
                                            <Input
                                                className=""
                                                // disabled={isPending}
                                                {...field}
                                                type='text'
                                                placeholder='John Doe'
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}/>

                                <FormField control={form.control} name='email' render={({field}) => (
                                    <FormItem>
                                        <FormLabel htmlFor='email'>Email:</FormLabel>
                                        <FormControl>
                                            <Input
                                                className=""
                                                // disabled={isPending}
                                                {...field}
                                                type='email'
                                                placeholder='john.doe@example.com'
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}/>

                                <div className="col-span-2 lg:col-span-1 grid grid-cols-3 gap-5 w-full">
                                    
                                    <div className="">
                                        <FormField control={form.control} name='countryCode' render={({field}) => (
                                            <FormItem>
                                                <FormLabel htmlFor='countryCode'>Country Code:</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Code" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Code">Code</SelectItem>
                                                            {countryCodes
                                                                .map((country, index) => (
                                                                <SelectItem value={`${country.code} ${country.dial_code}`} key={"CC"+index}>
                                                                    {country.name} ({country.dial_code})
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}/>
                                    </div>
                                    
                                    <div className="col-span-2">
                                        <FormField control={form.control} name='phone' render={({field}) => (
                                            <FormItem>
                                                <FormLabel htmlFor='phone'>Phone:</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className=""
                                                        // disabled={isPending}
                                                        {...field}
                                                        type='tel'
                                                        placeholder='xxxx-xxxx-xxx'
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}/>
                                    </div>
                                </div>
                                
                                <div className="col-span-2 lg:col-span-1 grid grid-cols-3 gap-5 w-full">

                                    <div className="col-span-2">
                                        <FormField control={form.control} name='date' render={({field}) => (
                                            <FormItem>
                                                <FormLabel htmlFor='date'>Date:</FormLabel>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <FormControl>
                                                                <Button
                                                                    id="date"
                                                                    variant={"outline"}
                                                                    className="w-full justify-start text-left font-normal"
                                                                >
                                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                                    {field.value ? (
                                                                        format(field.value, "LLL dd, y")
                                                                    ) : (
                                                                        <span>Pick a date</span>
                                                                    )}
                                                                </Button>
                                                            </FormControl>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            initialFocus
                                                            mode="single"
                                                            defaultMonth={startDate}
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            disabled={(date) =>
                                                                date < new Date()
                                                            }
                                                        />
                                                        </PopoverContent>
                                                    </Popover>
                                                <FormMessage/>
                                            </FormItem>
                                        )}/>
                                    </div>

                                        <FormField control={form.control} name='guest' render={({field}) => (
                                            <FormItem>
                                                <FormLabel htmlFor='guest'>Guest:</FormLabel>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <FormControl>
                                                                <Button
                                                                    id="date"
                                                                    variant={"outline"}
                                                                    className="w-full justify-start text-left font-normal"
                                                                >
                                                                    <LucideUser2 className="mr-2 h-4 w-4" />
                                                                    {field.value ? (
                                                                        <span>
                                                                            {field.value > 1
                                                                            ? field.value + " Guests"
                                                                            : field.value + " Guest"}
                                                                        </span>
                                                                    ) : (
                                                                        <span>0 Guest</span>
                                                                    )}
                                                                </Button>
                                                            </FormControl>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-5" align="end">
                                                        <CounterForm 
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                        </PopoverContent>
                                                    </Popover>
                                                <FormMessage/>
                                            </FormItem>
                                        )}/>
                                    
                                </div>
                                
                                <div className="col-span-2">
                                    <FormField control={form.control} name='message' render={({field}) => (
                                        <FormItem>
                                            <FormLabel htmlFor='message'>Message:</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    className=""
                                                    // disabled={isPending}
                                                    {...field}
                                                    placeholder='Let us know more details so that we can tailor your escape.'
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                </div>
                                <div className="col-span-2 flex justify-center">
                                    <Button type='submit' className='w-auto' >
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                    <div className="bg-main w-full py-10">
                        <div className="w-full px-5 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-0 lg:items-center justify-between">
                            <div className="">
                                <Link href="/">
                                <img
                                    src="/Logo-Indosea.svg"
                                    alt="Indonesea"
                                    className="w-[200px] lg:w-[195px]"
                                />
                                </Link>
                            </div>
                            <Link href="/">
                                <div className="text-white lg:text-center w-fit">
                                    Jalan Raya Kerobokan No. 5x,
                                    <br />
                                    Badung, Bali 80361, Indonesia
                                </div>
                            </Link>
                            <div>
                                <a href="https://api.whatsapp.com/send?phone=+6287861854989&text=Hi">
                                <div className="text-white flex flex-row gap-3 items-center">
                                    <img src="/svg/wa.svg" alt="" className="w-5 h-5" />
                                    +62 878 6185 4989
                                </div>
                                </a>
                                <a href="mailto:info@indonesea.com">
                                <div className="text-white flex flex-row gap-3 items-center">
                                    <img src="/svg/envelope.svg" alt="" className="w-5 h-5" />
                                    info@indonesea.com
                                </div>
                                </a>
                            </div>
                            <div className="flex flex-row gap-2">
                                <a href="www.instagram.com">
                                <img src="/svg/instagram.svg" alt="" className="h-8" />
                                </a>
                                <a href="www.facebook.com">
                                <img src="/svg/facebook.svg" alt="" className="h-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}
