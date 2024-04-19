"use client";
import React from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import useCountries from "@/hooks/useCountries";

type OptionType = {
    value: string,
    label: string
};
type FilterDropDownType = {
    placeholder: string,
    options: OptionType[]
}
const FilterDropdown = ({placeholder, options} : FilterDropDownType) => {
    const {getAll} = useCountries();
    const co = getAll();

    return (
        <Select>
            <SelectTrigger className="">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map(option =>
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                )}
            </SelectContent>
        </Select>
    );
};

export default FilterDropdown;