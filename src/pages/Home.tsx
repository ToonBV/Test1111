import { Fragment, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ThemeProvider, Typography } from '@mui/material';
import theme from "../Theme";
import { alpha } from '@mui/material/styles';
import { styled } from "@mui/system";
import rows from "./Leaderboard/Rows";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Home() {

    const bgColor = alpha('#143c6d', 0.5);
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const monthNames = [
        'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];

    const [countWalk, setCount] = useState(10);

    const handleButtonClick = () => {
        setCount(countWalk + 1); // เพิ่มค่า count ทีละ 1 เมื่อกดปุ่ม
    };



    return (<Fragment >
        
        <Box
        sx={{
            display: 'flex',
            backgroundColor: 'secondary.main',
            color: 'black',
            margin: '0 auto',
            borderRadius: 3,
            justifyContent: 'center', // จัดให้เกิดการค่อยตัวอักษรให้อยู่ตรงกลางแนวนอน
            alignItems: 'top', // จัดให้เกิดการค่อยตัวอักษรให้อยู่ตรงกลางแนวตั้ง
            marginTop: '50px',// กำหนดช่องว่างด้านบน
            marginLeft: '50px', // กำหนดช่องว่างด้านซ้าย
            marginRight: '50px', // กำหนดช่องว่างด้านขวา
            marginBottom: '0px', // กำหนดช่องว่างด้านล่าง
            border: '0px solid #143c6d',
            }}
        >
            <div>
            <ThemeProvider theme={theme}>
                <Typography variant="h4" align="center" >
                    <br />เดือน {monthNames[month]}<br />
                    <Typography variant="h6" align="center" fontSize={16}>ก้าวของคุณ<br /></Typography>
                    <Box 
                        sx={{
                            display: 'flex',
                            color: 'black',
                            height: 200,
                            width: 200,
                            margin: '0 auto',
                            borderRadius: '50%',
                            background: 'linear-gradient(to right, #0a1d35, #2d8bff)',
                            backgroundRepeat: "no-repeat",
                            justifyContent: 'center', // จัดให้เกิดการค่อยตัวอักษรให้อยู่ตรงกลางแนวนอน
                            alignItems: 'center', // จัดให้เกิดการค่อยตัวอักษรให้อยู่ตรงกลางแนวตั้ง
                            marginBottom: '10px',
                            marginLeft: '10px', // กำหนดช่องว่างด้านซ้าย
                            marginRight: '10px',
                            }}
                    ><Typography variant="h1" style={{ fontFamily: 'Prompt, sans-serif', color: 'white',}}>{countWalk}</Typography></Box>
                    <Button variant="contained" color="primary" onClick={handleButtonClick} 
                        sx={{
                            display: 'flex',
                            margin: '0 auto',
                            marginBottom: '40px',
                            borderRadius: 5,}}
                    >
                        Connect
                    </Button>
                </Typography>
                </ThemeProvider>
            </div>
        </Box>
        <Box
        sx={{
            display: 'flex',
            backgroundColor: 'primary.main',
            color: 'black',
            margin: '0 auto',
            justifyContent: 'center', // จัดให้เกิดการค่อยตัวอักษรให้อยู่ตรงกลางแนวนอน
            alignItems: 'top', // จัดให้เกิดการค่อยตัวอักษรให้อยู่ตรงกลางแนวตั้ง
            marginTop: '0px',// กำหนดช่องว่างด้านบน
            marginBottom: '50px', // กำหนดช่องว่างด้านล่าง
            border: '0px solid #143c6d',
            }}>
                    <Box sx={{
                            display: 'flex',
                            color: 'black',
                            height: 300,
                            width: 300,
                            margin: '0 auto',
                            backgroundRepeat: "no-repeat",
                            justifyContent: 'center', // จัดให้เกิดการค่อยตัวอักษรให้อยู่ตรงกลางแนวนอน
                            alignItems: 'center', // จัดให้เกิดการค่อยตัวอักษรให้อยู่ตรงกลางแนวตั้ง
                            marginTop: '20px',// กำหนดช่องว่างด้านบน
                            marginBottom: '10px',
                            marginLeft: '35px',
                            marginRight: '65px'
                            }}
                    >
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={rows}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" stroke="#ffffff"/>
                            <YAxis stroke="#ffffff"/>
                            <Tooltip />
                            <Legend wrapperStyle={{ color: '#ffffff' }}/>
                            <Bar dataKey="name" fill="#8884d8" />
                            <Bar dataKey="count_walk" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
        </Box>
        
    </Fragment>);
    
}

export default Home;