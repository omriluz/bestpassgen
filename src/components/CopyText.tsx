import { useState } from "react";
enum CopyStates {
    Copy = 'Copy',
    Copied = 'Copied',
}
function CopyText({ copyText }: { copyText: string }) {
    const [isCopied, setIsCopied] = useState(false);
    const { Copy, Copied } = CopyStates
    async function copyTextToClipboard(text: string) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            }
            )
    }

    return (
        <div className="flex md:px-10 mt-10">
            <input
                type="text"
                name="text"
                className="py-1 w-full indent-2 rounded-s-lg focus:outline-none"
                readOnly
                value={copyText} />
            <button
                className="py-1 rounded-e-lg text-white bg-green-300 flex justify-center items-center w-10 h-10"
                onClick={handleCopyClick}>
                <svg
                    className="pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect height="24" width="24"></rect>
                    <rect
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        stroke="#000000"
                        rx="1"
                        height="12"
                        width="12"
                        y="8"
                        x="4"
                    ></rect>
                    <path
                        strokeDasharray="2 2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        stroke="#000000"
                        d="M8 6V5C8 4.44772 8.44772 4 9 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H18"
                    ></path>
                </svg>
            </button>
        </div>

    );
}

export default CopyText