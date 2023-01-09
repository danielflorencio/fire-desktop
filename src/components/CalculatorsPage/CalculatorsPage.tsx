import { Link } from 'react-router-dom';
export default function CalculatorsPage(){
    return(
        <div className="d-flex flex-wrap">
            <div style={{maxWidth: '22rem'}} className="shadow-lg px-4 pt-4 pb-5 m-4 bg-white rounded">
                <h3>Compound interest Calculator</h3>
                <p>Simulate your financial results considering a consistent compound interest result.</p>
                <Link className='btn btn-primary' to='/calculators/compound_interest_calculator'>Compound Interest Calculator</Link>
            </div>
            <div style={{maxWidth: '22rem'}} className="shadow-lg px-4 pt-4 pb-5 m-4 bg-white rounded">
                <h3>Simple interest Calculator</h3>
                <p>Simulate your financial results considering a consistent simple interest result.</p>
                <Link className='btn btn-primary' to='/calculators/simple_interest_calculator'>Simple Interest Calculator</Link>
            </div>
        </div>
    )
}