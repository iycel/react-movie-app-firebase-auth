export const ClickButton = ({ text, style, handleClick, classNameClick, classNameText }) => {

    return (
        <button type="button" style={style} className={classNameClick} onClick={handleClick}><span className={classNameText}>{text}</span></button>
    );
};

export const SubmitButton = ({ text, style, handleSubmit, classNameSubmit }) => {
    return (
        <button type="submit" className={classNameSubmit} style={style} >{text}</button>
    );
};