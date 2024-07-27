import React from 'react';

const gradients = [
    { name: "Sunset", gradient: "linear-gradient(to right, #ff7e5f, #feb47b)" },
    { name: "Ocean Blue", gradient: "linear-gradient(to right, #00c6ff, #0072ff)" },
    { name: "Purple Bliss", gradient: "linear-gradient(to right, #360033, #0b8793)" },
    { name: "Mango", gradient: "linear-gradient(to right, #ffe259, #ffa751)" },
    { name: "Flare", gradient: "linear-gradient(to right, #f12711, #f5af19)" },
    { name: "Dusk", gradient: "linear-gradient(to right, #2c3e50, #4ca1af)" },
    { name: "Peach", gradient: "linear-gradient(to right, #ed4264, #ffedbc)" },
    { name: "Mojito", gradient: "linear-gradient(to right, #1d976c, #93f9b9)" },
    { name: "Firewatch", gradient: "linear-gradient(to right, #cb2d3e, #ef473a)" },
    { name: "Amethyst", gradient: "linear-gradient(to right, #9d50bb, #6e48aa)" },
    { name: "Blush", gradient: "linear-gradient(to right, #b24592, #f15f79)" },
    { name: "Frost", gradient: "linear-gradient(to right, #000428, #004e92)" },
    { name: "Cherry", gradient: "linear-gradient(to right, #eb3349, #f45c43)" },
    { name: "Passion", gradient: "linear-gradient(to right, #e53935, #e35d5b)" },
    { name: "Summer", gradient: "linear-gradient(to right, #22c1c3, #fdbb2d)" },
    { name: "Sea Wave", gradient: "linear-gradient(to right, #00c6ff, #0072ff)" },
    { name: "Emerald", gradient: "linear-gradient(to right, #348f50, #56b4d3)" },
    { name: "Calm", gradient: "linear-gradient(to right, #eecda3, #ef629f)" },
    { name: "Royal", gradient: "linear-gradient(to right, #141e30, #243b55)" },
    { name: "Skyline", gradient: "linear-gradient(to right, #1488cc, #2b32b2)" },
    { name: "Dawn", gradient: "linear-gradient(to right, #ff512f, #dd2476)" },
    { name: "Turquoise", gradient: "linear-gradient(to right, #1c92d2, #f2fcfe)" },
    { name: "Lavender", gradient: "linear-gradient(to right, #ee9ca7, #ffdde1)" },
    { name: "Candy", gradient: "linear-gradient(to right, #d3959b, #bfe6ba)" },
    { name: "Horizon", gradient: "linear-gradient(to right, #003973, #e5e5be)" },
];

const GradientList = () => {
    return (
        <div>
            {gradients.map((gradient, index) => (
                <div key={index} style={{ background: gradient.gradient, padding: '20px', margin: '10px', color: '#fff' }}>
                    {gradient.name}
                </div>
            ))}
        </div>
    );
};

export default GradientList;
