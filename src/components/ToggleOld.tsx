import type { ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<'label'> {
    title: string
    value: boolean
    setValue: (value: boolean) => void
}

const Toggle = ({ title, value, setValue }: Props) => {
    return (
        <label>
            <span>{title}</span>
            <input type="checkbox" checked={value} onChange={({ target }) => setValue(target.checked)} />
        </label>
    )
}
export default Toggle