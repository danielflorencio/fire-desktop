
type Props = {
    title: string;
}
export default function SubTitle({title}: Props){
    return(
        <h2 className="text-center">{title}</h2>
    )
}