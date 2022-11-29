import './styles.css'
import MainTitle from '../Titles/MainTitle'
import SubTitle from '../Titles/Subtitle'
export default function HomePage({pageTitle, subtitle}: string){
    return( 
        <>
            {pageTitle !== null ? (<MainTitle title={pageTitle}/>) : null}
            {subtitle !== null ? (<SubTitle title={subtitle}/>) : null}
            <div className="options-container"></div>
        </>
    )
}