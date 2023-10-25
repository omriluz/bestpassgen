interface Props {
    title: string
    value: boolean
    setValue: (value: boolean) => void
    icon: any
}

const ToggleTest = ({ title, value, setValue, icon:Icon }: Props) => {
    return (
        <div className="checkbox-wrapper-16">
            <label className="checkbox-wrapper">
                <input className="checkbox-input" checked={value} onChange={({ target }) => setValue(target.checked)} type="checkbox" />
                <span className="checkbox-tile">
                    <span className="checkbox-icon">
                        <Icon/>
                    </span>
                    {title && <div className="checkbox-label">{title}</div>}
                </span>
            </label>
        </div>

    )
}
export default ToggleTest