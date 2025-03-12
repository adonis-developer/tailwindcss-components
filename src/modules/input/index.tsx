import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';

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
        </div>
    );
};

export default InputGroupScreen;

const DynamicHeightInputs: React.FC<any> = ({
    values,
    handleChange,
    indexElement,
    inputCount = 1,
    element = 'inputs',
    attribute = [],
    placeholder = 'Nhập gì đó...',
}: any) => {
    if (attribute.length > 1 && attribute.length !== inputCount) throw new Error('invalid attribute');
    const defaultHeight = 56;
    const maxLines = 11;
    const lineHeight = 20;
    const maxHeight = maxLines * lineHeight - 2;

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
                            width: `calc(100%/${inputCount})`,
                        }}
                    >
                        <textarea
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            name={name}
                            // value={value}
                            defaultValue={value}
                            onChange={handleChange}
                            onKeyDown={updateHeight}
                            placeholder={placeholder}
                            style={{
                                width: `100%`,
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
                                outline: 'none',
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};
