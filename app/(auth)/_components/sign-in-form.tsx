"use client"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {SignInSchema} from "@/schemas/auth-schema";
import Link from "next/link";
import {AuthFooter} from "@/app/(auth)/_components/auth-footer";
import {register} from "@/actions/register";
import {toast} from "sonner";
import {useTransition} from "react";
import {login} from "@/actions/login";

export const SignInForm = () => {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = (values: z.infer<typeof SignInSchema>) => {
        startTransition( () => {
            login(values).then((data) => {
                if (data?.error) {
                    form.reset();
                    toast.error(data.error);
                }
                if (data?.success) {
                    form.reset();
                    toast.success(data.success);
                }
            });
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5 w-full">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/*<div className="text-end">*/}
                {/*    <Button asChild variant="link" size="link">*/}
                {/*        <Link href="/forgot-password">Forgot Password</Link>*/}
                {/*    </Button>*/}
                {/*</div>*/}
                <div className="space-y-5 pt-2.5">
                    <Button type="submit" disabled={isPending}>Sign in</Button>
                    <AuthFooter
                        description="Already have an account?"
                        link="/sign-up" linkText="Sign up"
                    />
                </div>
            </form>
        </Form>
    )
}