export const Avatar = ({authorName} : {authorName : string}) => {
    return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-300">
        <span className="font-medium text-gray-300 dark:text-gray-600">{authorName.slice(0,2).toUpperCase()}</span>
    </div>
    
}