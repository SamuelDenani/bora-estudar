import React from 'react';

import { Label, Input, Fieldset } from './styles';

interface InputFieldProps {
    type: string;
    placeholder: string;
    id: string;
    onChange(value: string): void;
    value: string;
};

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, id, onChange, value }) => {
    return (
        <Fieldset>
            <Input type={type} id={id} onChange={ev => onChange(ev.target.value)} value={value} autoComplete="off" required />
            <Label htmlFor={id}>{placeholder}</Label>
        </Fieldset>
    );
}

export default InputField;