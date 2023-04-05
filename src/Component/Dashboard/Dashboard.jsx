import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const marksArray = [
        {"id": 1, "name": "John", "phy": 80, "chemi": 90, "math": 85},
        {"id": 2, "name": "Sarah", "phy": 70, "chemi": 80, "math": 75},
        {"id": 3, "name": "Mike", "phy": 90, "chemi": 85, "math": 95},
        {"id": 4, "name": "Emily", "phy": 95, "chemi": 92, "math": 88},
        {"id": 5, "name": "Dav", "phy": 88, "chemi": 80, "math": 90},
        {"id": 6, "name": "Rachel", "phy": 82, "chemi": 90, "math": 93},
        {"id": 7, "name": "Tom", "phy": 91, "chemi": 86, "math": 80},
        {"id": 8, "name": "Ava", "phy": 75, "chemi": 88, "math": 85},
        {"id": 9, "name": "Alex", "phy": 87, "chemi": 95, "math": 91},
        {"id": 10, "name": "Grace", "phy": 78, "chemi": 83, "math": 87},
        {"id": 11, "name": "Daniel", "phy": 92, "chemi": 90, "math": 95},
        {"id": 12, "name": "Sophie", "phy": 85, "chemi": 92, "math": 88}
      ];

    return (
        <div>
            <h2 className="text-3xl text-center py-5 bg-pink-300 my-4 font-bold">Dashboard Chart</h2>
            <div className="">
                <LineChart
                width={500}
                height={300}
                data={marksArray}
                >
                    <XAxis dataKey={"name"}/>
                    <YAxis />
                    <Tooltip />
                    <Line dataKey="phy" stroke="#82ca9d" />
                    <Line dataKey="math" stroke="#ddd" />
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;