import { InputText } from "primereact/inputtext"
import { InputTextarea } from "primereact/inputtextarea";
import { Password } from "primereact/password";
import type { Dispatch, ReactNode, SetStateAction } from "react"

function CustomInputGroup({label, placeholder, message, type = 'text', state, setState}: {label: string, placeholder: string, message?: ReactNode, type?: string, state: string, setState: Dispatch<SetStateAction<string>>}) {

    const renderInput = (type: string) => {
        switch(type) {
            case 'text':
                return <InputText placeholder={placeholder} value={state} onChange={(e)=>setState(e.target.value)} />;
            case 'password': 
                return <Password placeholder={placeholder}  feedback={false} toggleMask value={state} onChange={(e)=>setState(e.target.value)} />
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
            
            {message}
        </div>
    )
}

export default CustomInputGroup
