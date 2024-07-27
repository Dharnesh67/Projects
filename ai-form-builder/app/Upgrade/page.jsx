"use client"
import React from 'react';
import QRCode from 'qrcode.react';

const getRandomString = () => {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
};

const Page = () => {
    const randomString = getRandomString();
    return (
        <div className='bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen flex items-center justify-center'>
            <div className="flex flex-col gap-3 justify-center items-center p-6 bg-white bg-opacity-10 rounded-lg shadow-lg">
                <h1 className=' p-5 rounded-md bg-white bg-opacity-20 text-white'>Upgrade to premium by paying Money</h1>
                <div className="qr-code  p-3 rounded-md bg-white bg-opacity-20">
                    <QRCode value={randomString} size={256} />
                </div>
            </div>
        </div>
    );
}

export default Page;
