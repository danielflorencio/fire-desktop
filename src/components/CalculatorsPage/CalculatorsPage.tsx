import CiCalculator from "../CiCalc/CiCalc";
import './styles.css'
import CustomLink from "../RouterComponents/CustomLink";
import CustomButton from "../RouterComponents/CustomButton";
export default function CalculatorsPage(){
    return(
        <>
            <div className="wrapper d-flex">
                <div className="box-content-container shadow-lg p-3 mb-5 bg-white rounded">
                    <h3>Compound interest Calculator</h3>
                    <p>Simulate your financial results considering a consistent compound interest result.</p>
                    <CustomButton to='/calculators/compound_interest_calculator' name='Compound Interest Calculator'/>
                    {/* <button className="btn btn-primary" style={{maxWidth: '8rem'}}>Use calculator</button> */}
                </div>
                <div className="box-content-container shadow-lg p-3 mb-5 bg-white rounded">
                    <h3>Simple interest Calculator</h3>
                    <p>Simulate your financial results considering a consistent simple interest result.</p>
                    <button className="btn btn-primary" style={{maxWidth: '8rem'}}>Use calculator</button>
                </div>
            </div>
        </>
    )
}