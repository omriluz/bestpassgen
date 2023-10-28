import { useState } from "react"
import Button from "./Button"
// import Toggle from "./ToggleOld"
import Toggle from "./Toggle"
import AaIcon from "./AaIcon"
import NumbersIcon from "./NumbersIcon"
import CharactersIcon from "./CharactersIcon"
import CopyText from "./CopyText"
import SaveSettingsIcon from "./SaveSettingsIcon"

const bullets = [
    {
        bold: 'Length Matters:',
        text: 'The length of a password significantly impacts its security. Longer passwords are more challenging to crack. Hackers commonly use automated tools that can guess shorter passwords within seconds. By opting for passwords with a minimum of 12-16 characters, the complexity and difficulty in deciphering them increase substantially.'
    },
    {
        bold: 'Unique Passwords:',
        text: 'Using unique passwords for each online account is crucial. Reusing passwords across multiple accounts magnifies the risk—if one password is compromised, it jeopardizes all accounts using that same password. A password manager can aid in generating and storing unique passwords for different platforms.'
    },
    {
        bold: 'Password Manager:',
        text: 'Password managers offer a convenient and secure way to store, generate, and manage passwords for various accounts. They typically use advanced encryption to protect your password vault. By using a reputable password manager, you ensure your passwords are stored securely, and you only need to remember one strong master password.'
    },
    {
        bold: 'Two-Factor Authentication (2FA):',
        text: '2FA adds an additional layer of security to your accounts. Even if someone obtains your password, they\'ll be unable to access the account without the second form of verification. This could be a code sent to your phone, a biometric scan, or a hardware security key.'
    },
    {
        bold: 'Avoid Dictionary Words:',
        text: 'Common words and phrases can be easily guessed or brute-forced by attackers. Using an obscure combination of characters that doesn\'t form any recognizable words is essential for strong passwords.'
    },
    {
        bold: 'Mix Characters:',
        text: 'A mix of uppercase, lowercase, numbers, and symbols makes passwords more resilient to brute-force attacks. Combining these elements increases the possible combinations, making it more challenging for attackers to crack the password.'
    },
    {
        bold: 'Avoid Personal Information:',
        text: 'Avoid incorporating personal information like birthdates, names, or easily discoverable details about your life in your passwords. Such information can be easily obtained or guessed by attackers.'
    },
    {
        bold: 'Regular Updates:',
        text: 'Regularly changing passwords is a proactive measure against potential breaches. This practice mitigates the risk of an old password being compromised, especially in the event of a data breach or leak.'
    },
    {
        bold: 'Avoid Common Passwords:',
        text: 'Passwords like "password123" or "123456" are exceedingly common and are the first ones attackers try. It’s crucial to use unique, uncommon passwords to mitigate the risk of being easily compromised.'
    },
    {
        bold: 'Secret Answers:',
        text: 'Security questions often involve personal information. Crafting unique and unrelated answers to these questions provides an added layer of protection in case attackers attempt to reset your passwords using your personal information.'
    },
    {
        bold: 'Use Passphrases:',
        text: 'Passphrases, a sequence of unrelated words or a sentence, are easier to remember and harder to crack. They offer stronger security compared to single-word passwords.'
    },
    {
        bold: 'Avoid Incrementing Numbers:',
        text: 'Avoid using sequences or patterns in passwords, such as "1234" or "ABCDE." These can be easily guessed by attackers.'
    },
    {
        bold: 'Avoid Public Wi-Fi:',
        text: 'Public Wi-Fi networks are often unsecured, making it easier for attackers to intercept data. Avoid using such networks when accessing password generators or other sensitive online services.'
    },
    {
        bold: 'Browser Security:',
        text: 'Ensure your web browser is regularly updated and has strong security features enabled to protect against threats and vulnerabilities.'
    },
    {
        bold: 'Check Site Security:',
        text: 'Before using a password generator site like bestpassgen.com, verify its security by ensuring it uses SSL encryption (HTTPS). This encryption ensures that the data you send and receive is encrypted and secure.'
    },
    {
        bold: 'Use Encrypted Connection:',
        text: 'Utilizing a Virtual Private Network (VPN) adds an extra layer of security by encrypting the data being transmitted between your device and the password generator site. This secures your data, especially when using public networks.'
    },
    {
        bold: 'Beware of Phishing:',
        text: 'Phishing attempts often imitate legitimate websites to trick users into revealing their passwords. Ensure you access the password generator site directly through the official URL to avoid phishing scams.'
    },
    {
        bold: 'Review Permissions:',
        text: 'When using a password manager, review the permissions granted to it. Ensure the access is limited and only essential features are enabled to prevent potential vulnerabilities.'
    },
    {
        bold: 'Biometric Authentication:',
        text: 'When available, biometric authentication (like fingerprint or facial recognition) offers a secure and convenient method of accessing your passwords.'
    },
    {
        bold: 'Avoid Shared Devices:',
        text: 'Generating passwords on shared or public devices poses a significant risk. The potential for keyloggers or other forms of malware to capture your sensitive information is higher on such devices.'
    },
    {
        bold: 'Offline Password Generation:',
        text: 'Some password managers offer the option to generate passwords offline. This method ensures that the passwords are created without an internet connection, reducing the risk of interception.'
    },
    {
        bold: 'Firewall Protection:',
        text: 'A robust firewall is essential in preventing unauthorized access to your system. It acts as a barrier between your network and external threats, adding an extra layer of security.'
    },
    {
        bold: 'Use Random Generators:',
        text: 'Rely on the password generator provided by bestpassgen.com or trusted password managers. These tools generate random, secure passwords, ensuring a high level of complexity and uniqueness.'
    },
    {
        bold: 'Secure Recovery Options:',
        text: 'Enable and secure account recovery options provided by the password generator site. This adds an extra layer of security in case you forget your master password or lose access to your account.'
    },
    {
        bold: 'Monitor Account Activity:',
        text: 'Regularly check your account activity for any unauthorized access. Most password manager apps or the password generator site itself will allow you to review your login history or activity logs.'
    },
    {
        bold: 'Educate Yourself:',
        text: 'Stay informed about evolving security practices. Subscribe to reputable cybersecurity blogs, follow security experts on social media, and keep yourself updated on the latest security threats and best practices.'
    },
    {
        bold: 'Backup Passwords:',
        text: 'Backup your passwords securely in case of emergencies like a lost device or forgotten master password. Some password managers offer options to export and securely store password backups.'
    },
    {
        bold: 'Avoid Clicking Suspicious Links:',
        text: 'Be cautious with email or message links claiming to be from the password generator site. Avoid clicking on suspicious links to prevent falling victim to phishing attempts.'
    },
    {
        bold: 'Regular System Updates:',
        text: 'Regularly update your operating system and software. These updates often include security patches and bug fixes, essential for safeguarding your device against potential threats.'
    },
    {
        bold: 'Use Different Email Accounts:',
        text: 'Consider using separate email accounts for various types of logins. This separation reduces the risk of a single point of failure if one email account gets compromised.'
    },
    {
        bold: 'Limit Access:',
        text: 'Minimize the number of individuals who have access to your passwords. Restrict sharing passwords to only those who absolutely need them, and ensure that they understand the importance of password security.'
    },
    {
        bold: 'Avoid Auto-Fill Options:',
        text: 'Refrain from using auto-fill features for sensitive information, especially on shared or public devices. These features might store and auto-fill passwords, making them accessible to unauthorized users.'
    },
    {
        bold: 'Change Default Passwords:',
        text: 'Password generator sites might provide default passwords that need changing. Always alter these to unique, complex passwords to enhance your security.'
    },
    {
        bold: 'Secure Your Devices:',
        text: 'Lock your devices with strong passcodes, PINs, or biometric locks. This ensures that even if the device is lost or stolen, unauthorized access to the stored passwords is restricted.'
    },
    {
        bold: 'Multi-Step Verification:',
        text: 'Opt for multi-step verification where available. This could involve receiving a code on your mobile device or using an authentication app in addition to entering your password.'
    },
    {
        bold: 'Offline Backup:',
        text: 'While digital backups are essential, having a physical copy of your passwords, securely stored in case of digital failures, adds an extra layer of security.'
    },
    {
        bold: 'Secure Recovery Email:',
        text: 'The email used for password recovery should have its password secured. This email account becomes a crucial link for account recovery, and thus its security is paramount.'
    },
    {
        bold: 'Use Strong Security Questions:',
        text: 'Select security questions and provide answers that are difficult for others to guess or ascertain, strengthening the security of your account recovery options.'
    },
    {
        bold: 'Test Generated Passwords:',
        text: 'Always assess the strength and uniqueness of the passwords generated by the password generator site. Ensure they meet the recommended criteria for a secure password.'
    },
    {
        bold: 'Regular Security Audits:',
        text: 'Periodically review your password strategies. Regular audits ensure that your passwords remain strong and are in line with evolving security practices.'
    },
    {
        bold: 'Educate Family Members:',
        text: 'Share the importance of password security with family members or those sharing the household. Ensuring that everyone understands the significance of strong passwords can collectively enhance security.'
    },
    {
        bold: 'Physical Security:',
        text: 'If you maintain physical copies of passwords, safeguard them in a secure location. Use a safe or lockbox to ensure they are protected from unauthorized access.'
    },
    {
        bold: 'Account Lockout Policies:',
        text: 'Familiarize yourself with the account lockout policies provided by the password generator site. Understand the consequences of repeated failed login attempts, and how it affects your account\'s security.'
    },
    {
        bold: 'Employ Access Controls:',
        text: 'When using password managers, ensure that access controls are in place. These controls limit who can access certain passwords or features within the password manager app.'
    },
    {
        bold: 'Stay Informed About Breaches:',
        text: 'Be vigilant about potential data breaches that might affect your accounts. Sign up for breach alert services to be notified if your data is compromised.'
    },
    {
        bold: 'Avoid Public Password Sharing:',
        text: 'Never share passwords publicly or with unknown individuals. Maintaining the privacy and confidentiality of your passwords is vital to ensure their security.'
    },
    {
        bold: 'Secure Email Communications:',
        text: 'Ensure that any communications regarding passwords or security measures are sent and received through secure, encrypted channels. Avoid discussing sensitive information over unsecured platforms.'
    },
    {
        bold: 'Regular Reviews:',
        text: 'Consistently review and update your password strategies. Regularly revisiting and updating your password security practices ensures that they remain robust and aligned with the latest security standards.'
    },
    {
        bold: 'Use Encrypted Storage:',
        text: 'If you\'re storing passwords locally, use encrypted storage methods to protect them from unauthorized access. This ensures that even if someone gains access to your device, the passwords remain secure.'
    },
    {
        bold: 'Stay Cautious:',
        text: 'Maintaining a constant sense of vigilance is key to keeping your passwords safe. Be cautious when dealing with password-related activities and remain mindful of potential security threats.'
    }
];

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

            <div className="max-md:flex-col  flex gap-4 mt-10">
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
            <div className="mt-10">
                <h2 className="font-bold mb-10">
                    Here’s an in-depth look at each of the 50 ways to enhance the security of your passwords, ensuring a detailed understanding of why and how each method contributes to a safer online experience.
                </h2>
                <ul className="list list-decimal space-y-4">
                    {bullets.map(({ bold, text }: any, index: number) => (
                        <li key={index}>
                            <span className="font-bold">{bold}</span>{' '}<span>{text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
export default Main

