import clsx from 'clsx';
import React from 'react';

export type StepsProps = {
    steps: { title: string; description: React.ReactNode }[];
    current: number;
    footer: React.ReactNode;
};
function Steps({ current, steps, footer }: StepsProps) {
    return (
        <div className="steps_container w-full h-full p-4 rounded-md border">
            <div className="steps flex justify-between items-center gap-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={clsx('step  flex items-center gap-2 z-[1]', index !== steps.length - 1 && 'flex-1')}
                    >
                        <div className="relative z-[1] flex items-center justify-center bg-white px-2 gap-2">
                            <div
                                className={clsx(
                                    'step_circle w-10 h-10 border rounded-full flex items-center justify-center text-xl transition-all duration-400',
                                    current > index + 1 ? 'bg-blue-200' : current > index && 'bg-blue-500 text-white',
                                )}
                            >
                                <div>
                                    {current > index + 1 ? (
                                        <svg
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M20.6097 5.20743C21.0475 5.54416 21.1294 6.17201 20.7926 6.60976L10.7926 19.6098C10.6172 19.8378 10.352 19.9793 10.0648 19.9979C9.77765 20.0166 9.49637 19.9106 9.29289 19.7072L4.29289 14.7072C3.90237 14.3166 3.90237 13.6835 4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L9.90178 17.4876L19.2074 5.39034C19.5441 4.95258 20.172 4.87069 20.6097 5.20743Z"
                                                fill="#3498db"
                                            />
                                        </svg>
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                            </div>
                            <div className="step_title">{step.title}</div>
                        </div>
                        <div
                            className={clsx(
                                ' flex-1 bg-slate-300 h-1 z-0  transition-all duration-300',
                                current > index + 1 && 'bg-blue-400',
                            )}
                        ></div>
                    </div>
                ))}
            </div>
            <div className="p-4 border border-dashed w-full rounded-md mt-4">{steps[current - 1].description}</div>
            {footer}
        </div>
    );
}

export default Steps;
