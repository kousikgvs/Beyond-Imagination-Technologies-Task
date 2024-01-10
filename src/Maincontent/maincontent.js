import React from 'react';
import './maincontent.css';
import PieGraphKey from '../Piegraphs/PieGraphKey';
import PieGraphEmployment from '../Piegraphs/PieGraphEmployment';
const maincontent = () => {
    return (
        <div className='main-content'>
            <div className='partition1'>
                <div>
                    Key Performance Indicators
                </div>
                <div className='partition2'>
                    <div className='partition1-div1'>
                        Gender
                    </div>
                    <PieGraphKey />
                    <div className='partition1-div3'>
                        <p>Total Users=1024</p>
                        <p>Male=768</p>
                        <p>Female=256</p>
                    </div>
                </div>
            </div>
            <div className='partition1'>
                <div>
                    Employment Type
                </div>
                <div className='partition2'>
                    <div className='partition1-div1'>
                        Gender
                    </div>
                    <PieGraphEmployment />
                    <div className='partition1-div3'>
                        <p>Total Users=1024</p>
                        <p>Male=768</p>
                        <p>Female=256</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default maincontent;
