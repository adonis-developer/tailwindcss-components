import React, { useEffect } from 'react';
// import List, { ListItem, ListItemDataType } from '../../components/list';
// import CloseIcon from '../../components/icons/closeIcon';

// function ListScreen() {
//     const data = Array.from({
//         length: 4,
//     }).map((_, i) => ({
//         href: 'https://ant.design',
//         title: `Ant design part ${i}`,
//         avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
//         description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//         content:
//             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//     }));
//     return (
//         <div className="w-full h-full flex justify-center items-center">
//             <div className="">
//                 <List
//                     width={1297}
//                     items={data}
//                     renderItem={(item: ListItemDataType) => (
//                         <ListItem
//                             avatar={
//                                 <div className="rounded-full w-12 h-12 overflow-hidden shadow-custom-1">
//                                     <img src={item.avatar} alt={item?.altAvatar} className="object-cover" />
//                                 </div>
//                             }
//                             title={item.title}
//                             description={item.description}
//                             content={item.content}
//                             actions={[
//                                 <div className="flex items-center justify-start gap-2 px-2 border-r last:border-r-0">
//                                     <CloseIcon />
//                                     <span>123</span>
//                                 </div>,
//                                 <div className="flex items-center justify-start gap-2 px-2 border-r last:border-r-0">
//                                     <CloseIcon />
//                                     <span>123</span>
//                                 </div>,
//                                 <div className="flex items-center justify-start gap-2 px-2 border-r last:border-r-0">
//                                     <CloseIcon />
//                                     <span>123</span>
//                                 </div>,
//                             ]}
//                         />
//                     )}
//                 />
//             </div>
//         </div>
//     );
// }

// export default ListScreen;

import { useState, useRef } from 'react';
import { useFormik } from 'formik';

const DynamicHeightInputs: React.FC<any> = ({
    values,
    handleChange,
    indexElement,
    inputCount = 1,
    element = 'inputs',
    attribute = [],
}: any) => {
    if (attribute.length > 1 && attribute.length !== inputCount) throw new Error('invalid attribute');
    const defaultHeight = 56; // Chiều cao mặc định
    const maxLines = 11; // Số dòng tối đa trước khi hiển thị scroll
    const lineHeight = 20; // Độ cao mỗi dòng (ước lượng)
    const maxHeight = maxLines * lineHeight - 2; // Giảm nhẹ để tránh giật khi thêm scroll

    const [dynamicHeight, setDynamicHeight] = useState(defaultHeight);
    const inputRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

    const updateHeight = () => {
        setTimeout(() => {
            const tempTextarea = document.createElement('textarea');
            tempTextarea.style.position = 'absolute';
            tempTextarea.style.visibility = 'hidden';
            tempTextarea.style.height = 'auto';
            tempTextarea.style.lineHeight = `${lineHeight}px`;
            tempTextarea.style.overflow = 'hidden';
            tempTextarea.style.whiteSpace = 'pre-wrap';

            let maxContentHeight = defaultHeight;

            inputRefs.current.forEach((ref) => {
                if (ref) {
                    tempTextarea.value = ref.value;

                    const computedStyle = window.getComputedStyle(ref);
                    tempTextarea.style.font = computedStyle.font;
                    tempTextarea.style.padding = computedStyle.padding;
                    tempTextarea.style.border = computedStyle.border;
                    tempTextarea.style.boxSizing = computedStyle.boxSizing;
                    tempTextarea.style.width = computedStyle.width;

                    document.body.appendChild(tempTextarea);
                    const contentHeight = tempTextarea.scrollHeight;
                    document.body.removeChild(tempTextarea);

                    maxContentHeight = Math.max(maxContentHeight, contentHeight);
                }
            });

            setDynamicHeight(Math.min(maxContentHeight, maxHeight));
        }, 0);
    };

    return (
        <div className="flex items-center justify-start gap-2">
            {Array.from({ length: inputCount }).map((_, index) => {
                const name =
                    inputCount === 1
                        ? element
                        : indexElement !== undefined
                          ? `${element}[${indexElement}]${attribute[index]}`
                          : `${element}[${attribute[index]}]`;
                return (
                    <textarea
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        name={name}
                        value={values[name]}
                        onChange={handleChange}
                        onKeyDown={updateHeight}
                        style={{
                            width: `calc(100%/${inputCount})`,
                            minHeight: `${defaultHeight}px`,
                            height: `${dynamicHeight}px`,
                            maxHeight: `${maxHeight}px`,
                            resize: 'none',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            lineHeight: '20px',
                            overflowY: dynamicHeight >= maxHeight ? 'auto' : 'hidden',
                            boxSizing: 'border-box',
                            transition: 'height 0.2s ease-in-out',
                        }}
                    />
                );
            })}
        </div>
    );
};

const RowDynamicHeightInputs: React.FC<any> = ({
    values,
    handleChange,
    indexElement,
    rowTitle,
    rowTitleWidth,
    rowWidth,
    inputCount = 1,
    element = 'inputs',
    attribute = [],
}: any) => {
    if (attribute.length > 1 && attribute.length !== inputCount) throw new Error('invalid attribute');
    const defaultHeight = 76; // Chiều cao mặc định
    const maxLines = 11; // Số dòng tối đa trước khi hiển thị scroll
    const lineHeight = 20; // Độ cao mỗi dòng (ước lượng)
    const maxHeight = maxLines * lineHeight - 2; // Giảm nhẹ để tránh giật khi thêm scroll

    const [dynamicHeight, setDynamicHeight] = useState(defaultHeight);
    const inputRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

    const updateHeight = () => {
        setTimeout(() => {
            const tempTextarea = document.createElement('textarea');
            tempTextarea.style.position = 'absolute';
            tempTextarea.style.visibility = 'hidden';
            tempTextarea.style.height = 'auto';
            tempTextarea.style.lineHeight = `${lineHeight}px`;
            tempTextarea.style.overflow = 'hidden';
            tempTextarea.style.whiteSpace = 'pre-wrap';

            let maxContentHeight = defaultHeight;

            inputRefs.current.forEach((ref) => {
                if (ref) {
                    tempTextarea.value = ref.value;

                    const computedStyle = window.getComputedStyle(ref);
                    tempTextarea.style.font = computedStyle.font;
                    tempTextarea.style.padding = computedStyle.padding;
                    tempTextarea.style.border = computedStyle.border;
                    tempTextarea.style.boxSizing = computedStyle.boxSizing;
                    tempTextarea.style.width = computedStyle.width;

                    document.body.appendChild(tempTextarea);
                    const contentHeight = tempTextarea.scrollHeight;
                    document.body.removeChild(tempTextarea);

                    maxContentHeight = Math.max(maxContentHeight, contentHeight);
                }
            });

            setDynamicHeight(Math.min(maxContentHeight, maxHeight));
        }, 0);
    };

    return (
        <div className="flex items-center justify-start">
            {!!rowTitle && (
                <div
                    style={{
                        width: !!rowTitleWidth ? `${rowTitleWidth}px` : `calc(100%/${inputCount + 1})`,
                        minHeight: `${defaultHeight}px`,
                        height: `${dynamicHeight + 2 + 24 + 8}px`,
                        maxHeight: `${maxHeight + 2 + 24 + 8}px`,
                        overflowY: dynamicHeight >= maxHeight ? 'auto' : 'hidden',
                        boxSizing: 'border-box',
                        transition: 'height 0.2s ease-in-out',
                        border: '1px solid #ccc',
                        textAlign: 'center',
                        borderTop: indexElement > 0 ? 'none' : '1px solid #ccc',
                        borderRight: 'none',
                    }}
                >
                    <div className="flex items-center justify-center h-full">{rowTitle}</div>
                </div>
            )}
            {Array.from({ length: inputCount }).map((_, index) => {
                const name =
                    inputCount === 1
                        ? element
                        : indexElement !== undefined
                          ? `${element}[${indexElement}]${attribute[index]}`
                          : `${element}[${attribute[index]}]`;

                const cellWidth = !!rowWidth
                    ? `${rowWidth}px`
                    : !!rowTitleWidth
                      ? `calc((100%/${inputCount}) - ${rowTitleWidth / inputCount}px)`
                      : !!rowTitle
                        ? `calc(100%/${inputCount + 1})`
                        : `calc(100%/${inputCount})`;

                const value =
                    inputCount === 1
                        ? values?.[element]
                        : indexElement !== undefined
                          ? values?.[element]?.[indexElement]?.[attribute?.[index]]
                          : values?.[element]?.[attribute?.[index]];

                return (
                    <div
                        className="p-1 w-full border flex flex-col"
                        style={{
                            width: cellWidth,
                            borderTop: indexElement > 0 ? 'none' : '1px solid #ccc',
                            borderRight: index + 1 === inputCount ? '1px solid #ccc' : 'none',
                        }}
                    >
                        <textarea
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            name={name}
                            value={value}
                            onChange={handleChange}
                            onKeyDown={updateHeight}
                            style={{
                                width: '100%',
                                minHeight: `${defaultHeight}px`,
                                height: `${dynamicHeight}px`,
                                maxHeight: `${maxHeight}px`,
                                resize: 'none',
                                padding: '8px',
                                borderRadius: '4px',
                                lineHeight: '20px',
                                overflowY: dynamicHeight >= maxHeight ? 'auto' : 'hidden',
                                boxSizing: 'border-box',
                                transition: 'height 0.2s ease-in-out',
                                background: '#d0d0d0',
                                outline: 'none',
                            }}
                        />
                        <div className="flex justify-end">
                            <div>{value?.length || 0}/800</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const InputGroupScreen = () => {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {},
        onSubmit: (values: any) => {
            console.log('Form data:', values);
        },
    });

    useEffect(() => {
        console.log(formik.values);
    }, [formik.values]);

    return (
        <div className="flex flex-col items-center justify-between p-4 gap-2">
            {/* <div className="w-full">
                <TableDynamicHeightInputs />
            </div> */}
            <div className="w-full">
                <DynamicHeightInputs
                    inputCount={1}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputZero"
                />
            </div>
            <div className="w-full">
                <DynamicHeightInputs
                    inputCount={2}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputOne"
                    attribute={['meo', 'cho']}
                />
            </div>
            <div className="w-full">
                <DynamicHeightInputs
                    inputCount={3}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputTwo"
                    attribute={['ga', 'lon', 'tho']}
                />
            </div>
            <div className="w-full">
                <DynamicHeightInputs
                    inputCount={4}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputThree"
                    attribute={['voi', 'ran', 'rong', 'rua']}
                    indexElement={0}
                />
            </div>
            <div className="w-full">
                <DynamicHeightInputs
                    inputCount={4}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputFour"
                    attribute={['voi', 'ran', 'rong', 'rua']}
                    indexElement={1}
                />
            </div>
            <div className="w-full">
                <RowDynamicHeightInputs
                    inputCount={4}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputFive"
                    attribute={['voi', 'ran', 'rong', 'rua']}
                    indexElement={0}
                    rowTitle="Row1"
                    rowTitleWidth={500}
                />
            </div>
            <div className="w-full">
                <RowDynamicHeightInputs
                    inputCount={4}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputSix"
                    attribute={['voi', 'ran', 'rong', 'rua']}
                    indexElement={0}
                    rowTitle="Row1"
                />
                <RowDynamicHeightInputs
                    inputCount={4}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputSix"
                    attribute={['voi', 'ran', 'rong', 'rua']}
                    indexElement={1}
                    rowTitle="Row1"
                />
                <RowDynamicHeightInputs
                    inputCount={4}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputSix"
                    attribute={['voi', 'ran', 'rong', 'rua']}
                    indexElement={2}
                    rowTitle="Row1"
                />
                <RowDynamicHeightInputs
                    inputCount={4}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputSix"
                    attribute={['voi', 'ran', 'rong', 'rua']}
                    indexElement={3}
                    rowTitle="Row1"
                />
                <RowDynamicHeightInputs
                    inputCount={4}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputSix"
                    attribute={['voi', 'ran', 'rong', 'rua']}
                    indexElement={4}
                    rowTitle="Row1"
                />
            </div>
            <h3>Table input with scroll X</h3>
            <div className="w-full">
                <RowDynamicHeightInputs
                    inputCount={5}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputSix"
                    attribute={['voi', 'ran', 'rong', 'rua', 'cao']}
                    indexElement={0}
                    rowTitle="Row1"
                />
                <RowDynamicHeightInputs
                    inputCount={5}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputSix"
                    attribute={['voi', 'ran', 'rong', 'rua', 'cao']}
                    indexElement={1}
                    rowTitle="Row1"
                />
                <RowDynamicHeightInputs
                    inputCount={5}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputSix"
                    attribute={['voi', 'ran', 'rong', 'rua', 'cao']}
                    indexElement={2}
                    rowTitle="Row1"
                />
                <RowDynamicHeightInputs
                    inputCount={5}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputSix"
                    attribute={['voi', 'ran', 'rong', 'rua', 'cao']}
                    indexElement={3}
                    rowTitle="Row1"
                />
                <RowDynamicHeightInputs
                    inputCount={5}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputSix"
                    attribute={['voi', 'ran', 'rong', 'rua', 'cao']}
                    indexElement={4}
                    rowTitle="Row1"
                />
                <RowDynamicHeightInputs
                    inputCount={5}
                    handleChange={formik.handleChange}
                    values={formik.values}
                    element="inputSix"
                    attribute={['voi', 'ran', 'rong', 'rua', 'cao']}
                    indexElement={5}
                    rowTitle="Row1"
                />
            </div>
        </div>
    );
};

export default InputGroupScreen;
