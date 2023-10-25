import { useState } from "react"
import Button from "./Button"
// import Toggle from "./ToggleOld"
import Toggle from "./Toggle"
import AaIcon from "./AaIcon"
import NumbersIcon from "./NumbersIcon"
import CharactersIcon from "./CharactersIcon"
import CopyText from "./CopyText"
import SaveSettingsIcon from "./SaveSettingsIcon"

const Main = () => {
    const [password, setPassword] = useState('')
    const [length, setLength] = useState(8)
    const [hasNumbers, setHasNumbers] = useState(true)
    const [hasCharacters, setHasCharacters] = useState(false)
    const [hasAlphaLower, setHasAlphaLower] = useState(true)
    const [hasAlphaUpper, setHasAlphaUpper] = useState(false)
    const [error, setError] = useState('')


    const NUMBERS = '0123456789'
    const CHARACTERS = '!@#$%^&*()_-=+{[}]<>?/.,;:~`'
    const ALPHA_LOWER = 'abcdeghijklmnopqrstuvwxyz'
    const ALPHA_UPPER = 'ABCDEGHIJKLMNOPQRSTUVWXYZ'

    const generatePassword = () => {
        let randomString = ''
        if (hasNumbers) {
            randomString += NUMBERS
        }
        if (hasCharacters) {
            randomString += CHARACTERS
        }
        if (hasAlphaLower) {
            randomString += ALPHA_LOWER
        }
        if (hasAlphaUpper) {
            randomString += ALPHA_UPPER
        }

        !randomString ? setError('you have to choose at least one type') : setError('')

        let generatedPassword = ''
        for (let i = 0; i < length; i++) {
            const charIndex = Math.floor(Math.random() * randomString.length)
            generatedPassword += randomString.charAt(charIndex)
        }
        setPassword(generatedPassword)
    }
    return (
        <main
            className="bg-slate-100 p-16 mx-auto rounded-lg max-w-[calc(100%-2rem)] w-[800px] lg:p-8 shadow-lg h-full"
        >
            <header className="mb-20">
                <div className="font-logo text-3xl bg-clip-text text-transparent bg-gradient-to-br from-black via-purple-400 to-black">BESTPASSGEN</div>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-2 border-b-4 border-purple-300 pb-8">
                <Toggle title={'numbers'} icon={NumbersIcon} value={hasNumbers} setValue={setHasNumbers} />
                <Toggle title="alpha lower" icon={AaIcon} value={hasAlphaLower} setValue={setHasAlphaLower} />
                <Toggle title="alpha upper" icon={AaIcon} value={hasAlphaUpper} setValue={setHasAlphaUpper} />
                <Toggle title="characters" icon={CharactersIcon} value={hasCharacters} setValue={setHasCharacters} />
                {/* <Toggle title="Save Settings" icon={SaveSettingsIcon} /> */}
            </div>

            <div className="max-md:flex-col  flex md:px-10 gap-4 mt-10">
                <label className=" border-2 border-purple-300 p-4 rounded-lg grow flex gap-4 bg-gradient-to-br from-sky-200 via-teal-100 via-10% to-purple-600">
                    <span className="font-bold lg:text-xl text-gray-600">Password Length</span>
                    <input className="font-bold w-fit text-center" type="number" value={length} max={20} min={5} onChange={({ target }) => setLength(+target.value)} />
                </label>
                {hasNumbers}
                <Button className="grow max-md:w-full max-md:text-sm max-md:h-[53px]" onClick={generatePassword}>Generate</Button>
            </div>
            <div>
                <CopyText copyText={password} />
            </div>
            {error && <div>{error}</div>}
        </main>
    )
}
export default Main

