import React, { useState } from 'react';
import Steps from '../../components/steps';

function StepsScreen() {
    const steps = [
        { title: 'Tạo Trường Học', description: <FormCreateSchool /> },
        { title: 'Tạo Hiệu Trưởng', description: <FormCreatePrincipal /> },
        { title: 'Liên Kết Trường Học', description: <FormLinkPrincipalToSchool /> },
    ];

    const [stepFinished, setStepFinished] = useState(1);

    const handleNext = () => {
        if (stepFinished < steps.length) {
            setStepFinished(stepFinished + 1);
        }
    };

    const handlePrevious = () => {
        if (stepFinished > 1) {
            setStepFinished(stepFinished - 1);
        }
    };
    return (
        <div className="p-4">
            <Steps
                current={stepFinished}
                steps={steps}
                footer={
                    <div className="flex items-center mt-4 gap-4">
                        {stepFinished < steps.length && (
                            <button
                                className="outline-none border-none bg-blue-500 px-4 py-1 rounded-md text-white"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        )}
                        {stepFinished > 1 && (
                            <button
                                className="outline-none border-none bg-blue-500 px-4 py-1 rounded-md text-white"
                                onClick={handlePrevious}
                            >
                                Previous
                            </button>
                        )}
                        {stepFinished === steps.length && (
                            <button className="outline-none border-none bg-[#3498db] px-4 py-1 rounded-md text-white">
                                Finish
                            </button>
                        )}
                    </div>
                }
            />
        </div>
    );
}

export default StepsScreen;

const FormCreateSchool = () => {
    return (
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-between gap-4">
                <div className="input flex flex-col w-fit flex-1">
                    <label
                        htmlFor="nameSchool"
                        className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                    >
                        Tên trường:
                    </label>
                    <input
                        id="nameSchool"
                        type="text"
                        placeholder="Hoa Phong Lan"
                        name="nameSchool"
                        className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                    />
                </div>
                <div className="input flex flex-col w-fit flex-1">
                    <label
                        htmlFor="addressSchool"
                        className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                    >
                        Địa chỉ:
                    </label>
                    <input
                        id="addressSchool"
                        type="text"
                        placeholder="127 Huỳnh Văn Nghệ, P.15, Q.Tân Bình, TP.HCM"
                        name="addressSchool"
                        className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                    />
                </div>
            </div>
        </form>
    );
};

const FormCreatePrincipal = () => {
    return (
        <form action="">
            <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex justify-between gap-4 w-full">
                    <div className="input flex flex-col flex-1">
                        <label
                            htmlFor="email"
                            className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                        >
                            Email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="user@kids.care.com"
                            name="email"
                            className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                        />
                    </div>
                    <div className="input flex flex-col flex-1">
                        <label
                            htmlFor="addressSchool"
                            className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                        >
                            Địa chỉ:
                        </label>
                        <input
                            id="addressSchool"
                            type="text"
                            placeholder="127 Huỳnh Văn Nghệ, P.15, Q.Tân Bình, TP.HCM"
                            name="addressSchool"
                            className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                        />
                    </div>
                </div>
                <div className="input flex flex-col w-[22%]">
                    <div className="max-w-md rounded-lg overflow-hidden md:max-w-xl">
                        <div className="md:flex">
                            <div className="w-full">
                                <div className="relative h-48 rounded-lg border-2 border-blue-500 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <div className="absolute flex flex-col items-center">
                                        <img
                                            alt="File Icon"
                                            className="mb-3"
                                            src="https://img.icons8.com/dusk/64/000000/file.png"
                                        />
                                        <span className="block text-gray-500 font-semibold">
                                            Drag &amp; drop your avatar here
                                        </span>
                                        <span className="block text-gray-400 font-normal mt-1">or click to upload</span>
                                    </div>

                                    <input name="" className="h-full w-full opacity-0 cursor-pointer" type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input flex flex-1 gap-4">
                    <div className="input flex flex-col w-1/3">
                        <label
                            htmlFor="phone"
                            className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                        >
                            Số điện thoại:
                        </label>
                        <input
                            id="phone"
                            type="text"
                            placeholder="0908345678"
                            name="phone"
                            className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                        />
                    </div>
                    <div className="input flex flex-col w-1/3">
                        <label
                            htmlFor="cardId"
                            className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                        >
                            Mã CCCD/CMD:
                        </label>
                        <input
                            id="cardId"
                            type="text"
                            placeholder="660755778943"
                            name="cardId"
                            className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                        />
                    </div>
                    <div className="input flex flex-col w-1/3">
                        <label
                            htmlFor="name"
                            className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                        >
                            Tên hiệu trưởng:
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="127 Huỳnh Văn Nghệ, P.15, Q.Tân Bình, TP.HCM"
                            name="name"
                            className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

const FormLinkPrincipalToSchool = () => {
    return (
        <div className="flex items-start justify-between gap-4">
            <div className="flex w-1/2 items-center justify-center">
                <img
                    src="https://bdnewcity.sis.edu.vn/wp-content/uploads/sites/21/2-3-scaled.jpg"
                    alt=""
                    className="object-cover rounded-md h-80"
                />
            </div>
            <div className="flex w-1/2 flex-col">
                <div className="pb-4">
                    <h3>Thông tin trường học:</h3>
                    <div className="flex flex-col gap-2 flex-1">
                        <div className="flex items-center justify-between gap-4 ">
                            <div className="input flex flex-col w-fit flex-1">
                                <label
                                    htmlFor="schoolName"
                                    className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                                >
                                    Tên trường học:
                                </label>
                                <input
                                    id="schoolName"
                                    type="text"
                                    readOnly
                                    placeholder="Nguyen Van A"
                                    name="schoolName"
                                    className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-4 ">
                            <div className="input flex flex-col w-fit flex-1">
                                <label
                                    htmlFor="addressSchool"
                                    className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                                >
                                    Địa chỉ:
                                </label>
                                <input
                                    id="addressSchool"
                                    type="text"
                                    readOnly
                                    placeholder="127 Huỳnh Văn Nghệ, P.15, Q.Tân Bình, TP.HCM"
                                    name="addressSchool"
                                    className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Thông tin hiệu trưởng: </h3>
                    <div className="flex flex-col  gap-4 flex-1">
                        <div className="flex items-center justify-between gap-4">
                            <div className="input flex flex-col w-fit flex-1">
                                <label
                                    htmlFor="principalName"
                                    className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                                >
                                    Tên hiệu trưởng:
                                </label>
                                <input
                                    id="principalName"
                                    type="text"
                                    readOnly
                                    placeholder="Hoa Phong Lan"
                                    name="principalName"
                                    className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                                />
                            </div>
                            <div className="input flex flex-col w-fit flex-1">
                                <label
                                    htmlFor="addressSchool"
                                    className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                                >
                                    Địa chỉ:
                                </label>
                                <input
                                    id="addressSchool"
                                    type="text"
                                    readOnly
                                    placeholder="127 Huỳnh Văn Nghệ, P.15, Q.Tân Bình, TP.HCM"
                                    name="addressSchool"
                                    className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <div className="input flex flex-col w-fit flex-1">
                                <label
                                    htmlFor="nameSchool"
                                    className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                                >
                                    Số điện thoại:
                                </label>
                                <input
                                    id="nameSchool"
                                    type="text"
                                    readOnly
                                    placeholder="Hoa Phong Lan"
                                    name="nameSchool"
                                    className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                                />
                            </div>
                            <div className="input flex flex-col w-fit flex-1">
                                <label
                                    htmlFor="addressSchool"
                                    className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                                >
                                    Mã CCCD/CMT:
                                </label>
                                <input
                                    id="addressSchool"
                                    type="text"
                                    readOnly
                                    placeholder="127 Huỳnh Văn Nghệ, P.15, Q.Tân Bình, TP.HCM"
                                    name="addressSchool"
                                    className="w-full border-blue-500 input px-[10px] py-[11px] text-xs bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/25"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
