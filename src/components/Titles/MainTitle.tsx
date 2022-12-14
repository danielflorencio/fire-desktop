type Props = {
    title: string;
}
export default function MainTitle({title}: Props){
    return(
        <h1 className="text-center">{title}</h1>
    )
}