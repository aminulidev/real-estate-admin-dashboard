import React, {ChangeEventHandler} from 'react';
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import CameraIcon from "@/components/icons/camera-icon";

const InputFile = ({className, name, register, onChange}: {className: string; name: string; register: object; onChange: ChangeEventHandler}) => {
    return (
        <div className={className}>
            <Label htmlFor="change-bg">
                <span className="flex items-center cursor-pointer gap-x-2.5 bg-background hover:bg-background/80 rounded-lg text-xs font-normal px-4 py-3">
                    <CameraIcon className="fill-popover-foreground" />
                    Change Photo
                </span>
            </Label>
            <Input onChange={onChange} name={name} {...register} id="change-bg" type="file" className="hidden" />
        </div>
    );
};

export default InputFile;