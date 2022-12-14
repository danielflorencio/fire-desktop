import './styles.css'
import MainTitle from '../Titles/MainTitle'
import SubTitle from '../Titles/SubTitle'
type Props = {
    pageTitle: string;
    subtitle: string;
}
export default function HomePage({pageTitle, subtitle}: Props){
    return( 
        <>
            {pageTitle !== null ? (<MainTitle title={pageTitle}/>) : null}
            {subtitle !== null ? (<SubTitle title={subtitle}/>) : null}

            {/* Show income, expenses and balance components.*/}
            {/* Show a component saying like. Following this route you're following right now, you're probably going to achieve financial independence in X years. (Here goes a phrase if the result is going good or not. Like, "Keep it up!" or "Hey, you're gonna take a while to FIRE that way. Click here to see somethings you can do to improve this results." or "You're not doing bad, but we think you might do even better if you follow some of the advice we have to give you. Click here to see.") */}
            <div className="options-container"></div>
        </>
    )
}