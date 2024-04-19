import React from 'react';
import {Input} from "@/components/ui/input";
import FilterDropdown from "@/app/(backend)/property/_components/filter-dropdown";

const PropertyFilter = () => {
    const statusOptions = [
        {value: "For Sale", label: "For Sale"},
        {value: "For Rent", label: "For Rent"}
    ];
    const typeOptions = [
        {value: "Apartments", label: "Apartments"},
        {value: "Houses", label: "Houses"},
        {value: "Commercial", label: "Commercial"},
        {value: "Garages", label: "Garages"},
        {value: "Lots", label: "Lots"}
    ];

    return (
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
            <Input type="search" placeholder="Search property"/>
            <FilterDropdown
                options={statusOptions}
                placeholder="Any Status"
            />
            <FilterDropdown
                options={typeOptions}
                placeholder="Any Type"
            />
        </div>
    );
};

export default PropertyFilter;