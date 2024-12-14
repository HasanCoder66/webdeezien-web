import './style.css'

const LetsTalkBtn = () => {
    return (
        <button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;LET'S&nbsp;TALK&nbsp;</span>
            <span aria-hidden="true" class="front-text">&nbsp;LET'S&nbsp;TALK&nbsp;</span>
        </button>
    )
}

export default LetsTalkBtn