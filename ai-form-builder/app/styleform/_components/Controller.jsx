"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

const Controller = ({ settheme, setbg }) => {
    const themes = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
    ];
    const gradients = [
        { "name": "None", "gradient": "linear-gradient(to right, #0000, #0000)" },
        { "name": "Sunset", "gradient": "linear-gradient(to right, #ff7e5f, #feb47b)" },
        { "name": "Ocean Blue", "gradient": "linear-gradient(to right, #00c6ff, #0072ff)" },
        { "name": "Purple Bliss", "gradient": "linear-gradient(to right, #360033, #0b8793)" },
        { "name": "Mango", "gradient": "linear-gradient(to right, #ffe259, #ffa751)" },
        { "name": "Flare", "gradient": "linear-gradient(to right, #f12711, #f5af19)" },
        { "name": "Dusk", "gradient": "linear-gradient(to right, #2c3e50, #4ca1af)" },
        { "name": "Peach", "gradient": "linear-gradient(to right, #ed4264, #ffedbc)" },
        { "name": "Mojito", "gradient": "linear-gradient(to right, #1d976c, #93f9b9)" },
        { "name": "Firewatch", "gradient": "linear-gradient(to right, #cb2d3e, #ef473a)" },
        { "name": "Amethyst", "gradient": "linear-gradient(to right, #9d50bb, #6e48aa)" },
        { "name": "Blush", "gradient": "linear-gradient(to right, #b24592, #f15f79)" },
        { "name": "Frost", "gradient": "linear-gradient(to right, #000428, #004e92)" },
        { "name": "Cherry", "gradient": "linear-gradient(to right, #eb3349, #f45c43)" },
        { "name": "Passion", "gradient": "linear-gradient(to right, #e53935, #e35d5b)" },
        { "name": "Summer", "gradient": "linear-gradient(to right, #22c1c3, #fdbb2d)" },
        { "name": "Sea Wave", "gradient": "linear-gradient(to right, #00c6ff, #0072ff)" },
        { "name": "Emerald", "gradient": "linear-gradient(to right, #348f50, #56b4d3)" },
        { "name": "Calm", "gradient": "linear-gradient(to right, #eecda3, #ef629f)" },
        { "name": "Royal", "gradient": "linear-gradient(to right, #141e30, #243b55)" },
        { "name": "Skyline", "gradient": "linear-gradient(to right, #1488cc, #2b32b2)" },
        { "name": "Dawn", "gradient": "linear-gradient(to right, #ff512f, #dd2476)" },
        { "name": "Turquoise", "gradient": "linear-gradient(to right, #1c92d2, #f2fcfe)" },
        { "name": "Lavender", "gradient": "linear-gradient(to right, #ee9ca7, #ffdde1)" },
        { "name": "Candy", "gradient": "linear-gradient(to right, #d3959b, #bfe6ba)" },
        { "name": "Horizon", "gradient": "linear-gradient(to right, #003973, #e5e5be)" },
        { "name": "Calm Darya", "gradient": "linear-gradient(to right, #5f2c82, #49a09d)" },
        { "name": "Mango", "gradient": "linear-gradient(to right, #ffe259, #ffa751)" },
        { "name": "Crimson Tide", "gradient": "linear-gradient(to right, #642b73, #c6426e)" },
        { "name": "Royal", "gradient": "linear-gradient(to right, #141e30, #243b55)" },
        { "name": "Windy", "gradient": "linear-gradient(to right, #acb6e5, #86fde8)" },
        { "name": "Influenza", "gradient": "linear-gradient(to right, #c04848, #480048)" },
        { "name": "Kyoto", "gradient": "linear-gradient(to right, #c21500, #ffc500)" },
        { "name": "Hydrogen", "gradient": "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)" },
        { "name": "Azure Pop", "gradient": "linear-gradient(to right, #ef32d9, #89fffd)" },
        { "name": "Ohhappiness", "gradient": "linear-gradient(to right, #00b09b, #96c93d)" },
        { "name": "Grapefruit Sunset", "gradient": "linear-gradient(to right, #e96443, #904e95)" },
        { "name": "Wedding Day Blues", "gradient": "linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)" },
        { "name": "Sand to Blue", "gradient": "linear-gradient(to right, #3e5151, #decba4)" },
        { "name": "Quepal", "gradient": "linear-gradient(to right, #11998e, #38ef7d)" },
        { "name": "Pun Yeta", "gradient": "linear-gradient(to right, #108dc7, #ef8e38)" },
        { "name": "Sublime Light", "gradient": "linear-gradient(to right, #fc5c7d, #6a82fb)" },
        { "name": "Sublime Vivid", "gradient": "linear-gradient(to right, #fc466b, #3f5efb)" },
        { "name": "Bighead", "gradient": "linear-gradient(to right, #c94b4b, #4b134f)" },
        { "name": "Taran Tado", "gradient": "linear-gradient(to right, #23074d, #cc5333)" },
        { "name": "Relaxing Red", "gradient": "linear-gradient(to right, #ff4b1f, #ff9068)" },
        { "name": "Lawrencium", "gradient": "linear-gradient(to right, #0f0c29, #302b63, #24243e)" },
        { "name": "Ohhappiness", "gradient": "linear-gradient(to right, #00b09b, #96c93d)" },
        { "name": "Delicate", "gradient": "linear-gradient(to right, #d3cce3, #e9e4f0)" },
        { "name": "Pink Flavour", "gradient": "linear-gradient(to right, #800080, #ffc0cb)" },
        { "name": "Grapefruit Sunset", "gradient": "linear-gradient(to right, #e96443, #904e95)" },
        { "name": "Deep Sea Space", "gradient": "linear-gradient(to right, #2c3e50, #4ca1af)" },
        { "name": "Sublime Vivid", "gradient": "linear-gradient(to right, #fc466b, #3f5efb)" },
        { "name": "Magic", "gradient": "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)" },
        { "name": "Good Morning", "gradient": "linear-gradient(to right, #ff5f6d, #ffc371)" },
        { "name": "Salt Mountain", "gradient": "linear-gradient(to right, #ffecd2, #fcb69f)" },
        { "name": "New York", "gradient": "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)" },
        { "name": "Superman", "gradient": "linear-gradient(to right, #0099f7, #f11712)" },
        { "name": "Blue Skies", "gradient": "linear-gradient(to right, #56ccf2, #2f80ed)" },
        { "name": "Purple Love", "gradient": "linear-gradient(to right, #cc2b5e, #753a88)" },
        { "name": "Piggy Pink", "gradient": "linear-gradient(to right, #ee9ca7, #ffdde1)" },
        { "name": "Cherryblossoms", "gradient": "linear-gradient(to right, #fdbb2d, #22c1c3)" },
        { "name": "Pinky", "gradient": "linear-gradient(to right, #dd5e89, #f7bb97)" },
        { "name": "Dull", "gradient": "linear-gradient(to right, #c9d6ff, #e2e2e2)" },
        { "name": "Green and Blue", "gradient": "linear-gradient(to right, #c2e59c, #64b3f4)" },
        { "name": "Rastafari", "gradient": "linear-gradient(to right, #1e9600, #fff200, #ff0000)" },
        { "name": "Tranquil", "gradient": "linear-gradient(to right, #eecda3, #ef629f)" },
        { "name": "Transfile", "gradient": "linear-gradient(to right, #16bffd, #cb3066)" },
        { "name": "Sylvia", "gradient": "linear-gradient(to right, #ff4b1f, #1fddff)" },
        { "name": "Opa", "gradient": "linear-gradient(to right, #3d7eaa, #ffe47a)" },
        { "name": "Mauve", "gradient": "linear-gradient(to right, #42275a, #734b6d)" },
        { "name": "Blooker20", "gradient": "linear-gradient(to right, #e65c00, #f9d423)" },
        { "name": "Sea Blue", "gradient": "linear-gradient(to right, #2b5876, #4e4376)" },
        { "name": "Nighthawk", "gradient": "linear-gradient(to right, #2980b9, #2c3e50)" },
        { "name": "Dawn", "gradient": "linear-gradient(to right, #f3904f, #3b4371)" },
        { "name": "Ibiza Sunset", "gradient": "linear-gradient(to right, #ee0979, #ff6a00)" }


    ];
    const handlechange = (theme) => {
        settheme(theme);
    };
    const [list, setlist] = useState(themes);
    const [curr, setcurr] = useState("light");
    return (
        <div className="overflow-scroll">
            <div className="theme flex  flex-col items-center justify-center w-full mb-8 shadow-md">
                <div className="text-lg font-bold ">Customize Themes</div>
                <Select onValueChange={handlechange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        {list.map((theme, index) => (
                            <SelectItem
                                onClick={() => {
                                    setcurr(theme);
                                    handlechange(curr);
                                }}
                                className="rounded-xl border-2 capitalize my-3 p-3"
                                data-theme={theme}
                                key={index}
                                value={theme}
                            >
                                {theme}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

            </div>
            <div >
               <div className="text-lg font-bold w-full  flex justify-center shadow-md">
                    Background Change
                </div>
               <div className="overflow-y-scroll h-[60vh] overflow-x-hidden">
                <div className="grid grid-cols-3 gap-1">
                    {gradients.map((bg, index) => (
                        <div
                            key={index}
                            value={bg.name}
                            className="rounded-lg border-2 cursor-pointer p-1"
                            onClick={() => setbg(bg.gradient)}
                            style={{ background: bg.gradient }}
                        >
                            {/* <div key={index} className="flex flex-col items-center gap-2 my-3"> */}
                                <div
                                    className="h-10 rounded-lg"
                                ></div>
                            {/* </div> */}
                        </div>
                    ))}
                </div>
               </div>
            </div>
        </div>
    );
};

export default Controller;
