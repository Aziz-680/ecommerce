"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "../../components/ui/form"
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { loginSchema, LoginSchemaType } from '../../schema/login.schema';
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {signIn} from "next-auth/react"


const Login = () => {

    const router = useRouter();

    const form = useForm<LoginSchemaType>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(loginSchema)
    })

    async function handleLogin(values: LoginSchemaType) {
        // try {
        //     const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
        //     console.log(data);

        //     router.push("/")

        // } catch (error) {
        //     console.log(error);
        // }

        await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
            callbackUrl: "/"
        }).then((res) => {
        console.log(res);
        }).catch(e => console.log(e))



    }

    return (
        <div className='mx-auto px-5 md:px-0 w-full my-12 md:w-1/2 text-black'>
            <h1 className='mb-5 text-3xl text-center font-bold text-indigo-700'>Login</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleLogin)} className='space-y-3'>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className={undefined}>
                                <FormLabel className='text-indigo-700'>Enter Your Email</FormLabel>
                                <FormControl>
                                    <Input type='email' {...field} />
                                </FormControl>
                                <FormDescription className={undefined} />
                                <FormMessage className={undefined} />

                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className={undefined}>
                                <FormLabel className='text-indigo-700'>Enter Your Password</FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} />
                                </FormControl>
                                <FormDescription className={undefined} />
                                <FormMessage className={undefined} />

                            </FormItem>
                        )}
                    />

                    <Button className=' w-full mt-5 bg-indigo-700 text-emerald-400 hover:text-indigo-700 hover:bg-emerald-400 transition-all  duration-300' variant={undefined} size={undefined}>Login</Button>

                </form>

            </Form>
        </div>
    )
}

export default Login

