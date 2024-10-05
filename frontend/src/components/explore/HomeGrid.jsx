import React from 'react'
import ArrowLink from './ArrowLink';

const HomeGrid = () => {
    return (
        <div className="grid grid-cols-5 grid-rows-4 gap-4">
            <div className="col-span-2 row-span-4 bg-purple-600 text-white p-6 rounded-lg relative">
                <ArrowLink link={"#"}/>
                <h2 className="text-2xl font-bold mb-4">Curriculum is going to be very hot.</h2>
                <div className="flex items-center">
                    <img src="https://via.placeholder.com/50" alt="brain with fire" className="mr-2" />
                </div>
            </div>

            <div className="col-span-2 row-span-2 bg-blue-200 p-6 rounded-lg flex flex-col justify-between relative">
                <ArrowLink link={"#"}/>
                <h3 className="text-lg">Statistics</h3>
                <p className="text-5xl font-bold">32h</p>
                <div className="flex justify-end">
                    <img src="https://via.placeholder.com/50" alt="bar chart" />
                </div>
            </div>

            <div className="row-span-2 col-start-3 row-start-3 bg-yellow-300 p-6 rounded-lg flex flex-col justify-between relative">
                <ArrowLink link={"#"}/>
                <h3 className="text-lg">Homework</h3>
                <p className="text-5xl font-bold">+80%</p>
            </div>

            <div className="row-span-2 col-start-4 row-start-3 bg-white p-6 rounded-lg flex items-center justify-center relative">
                <ArrowLink link={"#"}/>
                <button className="text-5xl">+</button>
            </div>

            <div className="row-span-4 col-start-5 row-start-1 bg-gray-900 text-white p-6 rounded-lg flex flex-col justify-between relative">
                <ArrowLink link={"#"}/>
                <p className="text-xl">Until August <strong>6</strong>, choose a discount curriculum. The best <strong>12</strong> tutors will always help you.</p>
                <div className="flex justify-around">
                    <img src="https://via.placeholder.com/50" alt="avatar" className="rounded-full" />
                    <img src="https://via.placeholder.com/50" alt="avatar" className="rounded-full" />
                    <img src="https://via.placeholder.com/50" alt="avatar" className="rounded-full" />
                </div>
                <div className="text-sm mt-4">Course start: 06/08/2023</div>
            </div>
        </div>
    )
}

export default HomeGrid