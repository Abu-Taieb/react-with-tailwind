import React from 'react';
import { useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'

const Phones = () => {
    // const [phones, setPhones] = useState([]);

    useEffect( () => {
        // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            const phonesData = loadedData.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price,
                }
                return phoneInfo;
            })
            // setPhones(phonesData);
            console.log(phonesData);
        });

    }, [])

    return (
        <div>
            {/* <BarChart width={500} height={300} data={phones}>
                <Bar dataKey="price" fill="#8884d8"/>
            </BarChart> */}
        </div>
    );
};

export default Phones;