"use client"
import * as z from "zod";
import {format} from "date-fns"
import {zodResolver} from "@hookform/resolvers/zod"
import {CalendarIcon, Check, ChevronsUpDown} from "lucide-react"
import {Controller, useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,} from "@/components/ui/command"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {Calendar} from "@/components/ui/calendar"
import {Input} from "@/components/ui/input"
import {useTransition} from "react";
import {EditProfileSchema} from "@/schemas/dashboard-schemas";
import {cn} from "@/lib/utils";
import useCountries from "@/hooks/useCountries";
import {editProfile} from "@/actions/edit-profile";
import {toast} from "sonner";
import {useCurrentUser} from "@/hooks/use-current-user";

export const EditProfileForm = () => {
    const user = useCurrentUser();
    const {getAll} = useCountries();
    const addresses = getAll();

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof EditProfileSchema>>({
        resolver: zodResolver(EditProfileSchema),

        defaultValues: {
            // @ts-ignore
            name: user?.name,
            phone: user?.phone,
            gender: user?.gender,
            // @ts-ignore
            dob: user?.dob,
            address: user?.address,
        },
    });

    const onSubmit = (values: z.infer<typeof EditProfileSchema>) => {
        startTransition(() => {
            editProfile(values).then((data) => {
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
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Your phone" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="gender"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Gender"/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="not to say">Not to say</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="dob"
                    render={({field}) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Date of birth</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Controller
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Address</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value
                                                ? addresses.find(
                                                    (address) => address.value === field.value
                                                )?.label
                                                : "Select address"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search address..." />
                                        <CommandList>
                                            <CommandEmpty>No language found.</CommandEmpty>
                                            <CommandGroup>
                                                {addresses.map((address) => (
                                                    <CommandItem
                                                        value={address.label}
                                                        key={address.value}
                                                        onSelect={() => {
                                                            form.setValue("address", address.value)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                address.value === field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {address.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="space-y-5 pt-2.5">
                    <Button type="submit" disabled={isPending}>Update</Button>
                </div>
            </form>
        </Form>
    )
}