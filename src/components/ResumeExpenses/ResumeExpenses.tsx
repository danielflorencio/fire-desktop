// import './styles.css'

type Props = {
    title: string;
    value: number;
}
export default function ResumeExpenses({title, value}: Props){
    return(
        <div className='resume-item'>
            <h2>{title}</h2>
            <p>$$ {value}</p>
        </div>
    )
}