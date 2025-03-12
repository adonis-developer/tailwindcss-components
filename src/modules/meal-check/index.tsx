import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
export enum QuantityFood {
    'NONE' = 'NONE',
    'NOT' = 'NOT',
    'LITTLE' = 'LITTLE',
    'HALF' = 'HALF',
    'ALMOST_ALL' = 'ALMOST_ALL',
    'ALL' = 'ALL',
    'MORE' = 'MORE',
    'UNKNOWN' = 'UNKNOWN',
}

function MealCheck() {
    const data: any[] = [
        {
            studentId: 'd32e4609-9270-4ea7-b93d-0bbffe1220cb',
            name: 'Student Name 1',
            address: 'Đà Nẵng 1',
            gender: 'FEMALE',
            avatar: 'http://res.cloudinary.com/dw4yhyvak/image/upload/v1737433020/uploads/users/avatars/xquoavzwlahefut3zkmg.jpg',
            allergy: [],
            parentId: 'f2d12a04-5c0a-414c-9765-e91fa7895ffa',
            dateOfBirth: '2025-02-03T19:53:03.327Z',
            classId: '446b81b2-94b2-470a-a167-ec8939327471',
            joinedClassAt: '2025-02-03T19:54:04.108Z',
            outedClassAt: null,
            classBanner: null,
            className: 'Lớp 1A1',
            mealCheckDailyId: null,
            feederId: null,
            dateChecked: null,
            quantityRice: QuantityFood.ALMOST_ALL,
            quantityMainDish: QuantityFood.HALF,
            quantitySideDish: QuantityFood.LITTLE,
            quantitySoup: QuantityFood.MORE,
            quantityDessert: QuantityFood.ALL,
            mealPicture: null,
            mealNote: null,
            mealNoteImages: null,
            createByName: null,
            updateByName: null,
        },
        {
            studentId: 'd32e4609-9270-4ea7-b93d-0bbffe1220cb',
            name: 'Student Name 2',
            address: 'Đà Nẵng 2',
            gender: 'MALE',
            avatar: 'http://res.cloudinary.com/dw4yhyvak/image/upload/v1737433020/uploads/users/avatars/xquoavzwlahefut3zkmg.jpg',
            allergy: [],
            parentId: 'f2d12a04-5c0a-414c-9765-e91fa7895ffa',
            dateOfBirth: '2025-02-03T19:53:03.327Z',
            classId: '446b81b2-94b2-470a-a167-ec8939327471',
            joinedClassAt: '2025-02-03T19:54:04.108Z',
            outedClassAt: null,
            classBanner: null,
            className: 'Lớp 1A1',
            mealCheckDailyId: null,
            feederId: null,
            dateChecked: null,
            quantityRice: QuantityFood.ALMOST_ALL,
            quantityMainDish: QuantityFood.HALF,
            quantitySideDish: QuantityFood.LITTLE,
            quantitySoup: QuantityFood.MORE,
            quantityDessert: QuantityFood.ALL,
            mealPicture: null,
            mealNote: null,
            mealNoteImages: null,
            createByName: null,
            updateByName: null,
        },
    ];
    const titleEatMeal: { [key: string]: string } = {
        quantityRice: 'Cơm',
        quantityMainDish: 'Món Chính',
        quantitySideDish: 'Món Phụ',
        quantitySoup: 'Canh',
        quantityDessert: 'Tráng miệng',
    };

    const keyEatMeal: string[] = [
        'quantityRice',
        'quantityMainDish',
        'quantitySideDish',
        'quantitySoup',
        'quantityDessert',
    ];

    const valueBindEatMeal = {
        NONE: 'NONE',
        NOT: 'NOT',
        LITTLE: 'LITTLE',
        HALF: 'HALF',
        ALMOST_ALL: 'ALMOST_ALL',
        ALL: 'ALL',
        MORE: 'MORE',
        UNKNOWN: 'UNKNOWN',
    };

    const valueEatMeal = [
        { title: 'Không ăn', mealQuantity: valueBindEatMeal.NOT },
        { title: 'Ăn ít', mealQuantity: valueBindEatMeal.LITTLE },
        { title: 'Ăn một nửa', mealQuantity: valueBindEatMeal.HALF },
        { title: 'Ăn gần hết', mealQuantity: valueBindEatMeal.ALMOST_ALL },
        { title: 'Ăn hết', mealQuantity: valueBindEatMeal.ALL },
        { title: 'Ăn thêm', mealQuantity: valueBindEatMeal.MORE },
        { title: 'Không xác định', mealQuantity: valueBindEatMeal.UNKNOWN },
    ];

    const boxQuantityMealRefs = useRef<any[]>([]);

    const [rowHeights, setRowHeights] = useState<number[]>([]);

    useEffect(() => {
        // Lấy chiều cao lớn nhất của mỗi hàng
        const heights = boxQuantityMealRefs.current.map((el) => el?.offsetHeight || 100);
        setRowHeights(heights);
    }, []);

    return (
        <div className="p-4 mx-auto w-full bg-gray-200 overflow-x-hidden">
            <div className="overflow-x-auto">
                <div className="flex items-center w-max">
                    <div className="p-1 bg-slate-300 w-[200px] text-center border-r border-[#333] sticky left-0 ">
                        Tên học sinh
                    </div>
                    <div className="p-1 bg-slate-300 w-[200px] text-center border-r border-[#333] sticky left-[200px] ">
                        Lớp Học
                    </div>
                    <div className="p-1 bg-slate-300 w-[200px] text-center border-r border-[#333]">dị ứng</div>
                    <div className="p-1 bg-slate-300 w-[200px] text-center border-r border-[#333]">Người cho ăn</div>
                    <div className="p-1 bg-slate-300 w-[820px] text-center border-r border-[#333]">số lượng ăn</div>
                    <div className="p-1 bg-slate-300 w-[200px] text-center border-r border-[#333]">hình ảnh bửa ăn</div>
                    <div className="p-1 bg-slate-300 w-[400px] text-center">Ghi chú bửa ăn</div>
                </div>

                {data.map((item, index) => {
                    const rowHeight = Math.max(rowHeights[index], 100);
                    return (
                        <div className="flex items-center w-max border-[#333] border-b">
                            <div
                                className="p-1 w-[200px] text-center flex items-center justify-center border-r border-[#333] sticky left-0 bg-gray-200"
                                style={{
                                    height: `${rowHeight}px`,
                                }}
                            >
                                Tên học sinh
                            </div>
                            <div
                                className="p-1 w-[200px] text-center flex items-center justify-center border-r border-[#333] sticky left-[200px] bg-gray-200 "
                                style={{
                                    height: `${rowHeight}px`,
                                }}
                            >
                                Lớp Học
                            </div>
                            <div
                                className="p-1 w-[200px] text-center flex items-center justify-center border-r border-[#333]"
                                style={{
                                    height: `${rowHeight}px`,
                                }}
                            >
                                dị ứng
                            </div>
                            <div
                                className="p-1 w-[200px] text-center flex items-center justify-center border-r border-[#333]"
                                style={{
                                    height: `${rowHeight}px`,
                                }}
                            >
                                Người cho ăn
                            </div>
                            <div
                                className="p-2 w-[820px] text-center border-r border-[#333] flex items-center justify-between"
                                ref={(el) => (boxQuantityMealRefs.current[index] = el)}
                            >
                                <div className="flex flex-col items-start justify-center gap-2">
                                    {keyEatMeal.map((key) => {
                                        return (
                                            <div className="flex items-center gap-2">
                                                <div className="w-24 font-bold text-sm text-left">
                                                    {titleEatMeal[key]}
                                                </div>
                                                {valueEatMeal.map((valueMeal) => {
                                                    return (
                                                        <MealQuantity
                                                            nativeMealQuantity={valueMeal.mealQuantity}
                                                            paramMealQuantity={item[key]}
                                                            title={valueMeal.title}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="ml-2 px-2 rounded-lg border bg-gray-200 border-[#999]">X</div>
                            </div>
                            <div
                                className="p-1 w-[200px] text-center flex items-center justify-center border-r border-[#333]"
                                style={{
                                    height: `${rowHeight}px`,
                                }}
                            >
                                hình ảnh bửa ăn
                            </div>
                            <div
                                className="p-1 w-[400px] text-center flex items-center justify-center"
                                style={{
                                    height: `${rowHeight}px`,
                                }}
                            >
                                Ghi chú bửa ăn
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MealCheck;

const MealQuantity = ({
    paramMealQuantity,
    nativeMealQuantity,
    title,
}: {
    paramMealQuantity: string;
    nativeMealQuantity: string;
    title: string;
}) => {
    return (
        <div
            className={clsx(
                'px-2 py-1 cursor-pointer rounded-md border border-[#999] text-center',
                nativeMealQuantity === paramMealQuantity ? 'bg-[#e74c3c] text-white' : '',
            )}
        >
            {title}
        </div>
    );
};
