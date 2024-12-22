import { ChangeEvent} from "react";

interface LabelledInputType {
    label : string;
    placeholder : string;
    onChange : (e : ChangeEvent<HTMLInputElement>) => void;
    type? : string
}

const Label = ({label, placeholder, onChange, type} : LabelledInputType) => {
    return (
        <div className="mt-2">
            <label className="block mb-2 text-md font-medium text-black ">{label}</label>
            <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
        
    )
}

export default Label
