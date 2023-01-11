import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { ReactElement } from 'react';

type Props = {
    to: string,
    name: string,
    icon: ReactElement
}

export default function CustomButton({to, name, icon}: Props ){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname})
    return(
    <li>
        <Link to={to} className={isActive ? 'nav-link active' : 'nav-link text-white'}>
        <svg className="bi d-block mx-auto mb-1" width="24" height="24">{icon}</svg>
        {name}
        </Link>
    </li>
    )
}   