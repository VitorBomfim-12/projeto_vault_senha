import { InputText } from "primereact/inputtext"
import { InputTextarea } from "primereact/inputtextarea";
import { Password } from "primereact/password";
import type { ReactNode } from "react"

function CustomInputGroup({label, placeholder, message, type = 'text'}: {label: string, placeholder: string, message?: ReactNode, type?: string}) {

    const renderInput = (type: string) => {
        switch(type) {
            case 'text':
                return <InputText placeholder={placeholder} />;
            case 'password': 
                return <Password placeholder={placeholder} feedback={false} toggleMask />
            case 'textArea':
                return <InputTextarea placeholder={placeholder} rows={3} cols={30} aria-placeholder={placeholder} />
            default: 
                break;
        }
    };

    return (
        <div className="input-group">
            <label className="input-group__label" htmlFor="">{label}</label>
            {renderInput(type)}
            
            <p>{message}</p>
        </div>
    )
}

export default CustomInputGroup
