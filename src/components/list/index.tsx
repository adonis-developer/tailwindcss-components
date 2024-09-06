import React from 'react';
export type ListProps = {
    items?: ListItemDataType[];
    header?: React.ReactNode;
    footer?: React.ReactNode;
    titleHeader?: React.ReactNode | string;
    titleFooter?: React.ReactNode | string;
    width?: string | number;
    renderItem: (item: ListItemDataType) => React.ReactNode;
};
export type ListItemDataType = {
    href?: string;
    title?: string;
    avatar?: string;
    description?: string;
    content?: string;
    altAvatar?: string;
};

function List({
    footer,
    header,
    items,
    width,
    titleHeader = 'Header List',
    titleFooter = 'Footer List',
    renderItem,
}: ListProps) {
    return (
        <div className="tw-list__container" style={{ width: !!width ? width : 'unset' }}>
            <div className="tw-list__header">
                {!!header ? header : <h2 className="text-base font-semibold border-b p-4">{titleHeader}</h2>}
            </div>
            <div className="tw-list__content py-1">{items?.map((item: ListItemDataType) => renderItem(item))}</div>
            <div className="tw-list__footer">
                {!!footer ? footer : <h2 className="text-base font-semibold border-t p-4">{titleFooter}</h2>}
            </div>
        </div>
    );
}

export default List;

export type ListItemProps = {
    avatar?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    content?: React.ReactNode;
    actions?: React.ReactNode[];
};

function ListItem({ avatar, title, description, content, actions }: ListItemProps) {
    return (
        <div className="tw-list-container__item border-b p-4 flex gap-3">
            <div className="tw-list-item__left flex flex-col justify-between">
                <div className="flex gap-3">
                    {!!avatar && <div className="tw-list-item__avatar">{avatar}</div>}
                    <div className="tw-list-meta flex gap-1 flex-col">
                        {!!title && <h3 className="font-semibold text-base"> {title}</h3>}
                        {!!description && <div className="text-[14px] text-[#00000073] text-left">{description}</div>}
                    </div>
                </div>
                {!!content && (
                    <div className="tw-list-item__content text-[14px] text-[#000000e0] text-left py-2"> {content}</div>
                )}
                {!!actions && <div className="tw-list-item__actions flex">{actions.map((action) => action)}</div>}
            </div>
            <div className="tw-list-item__right">
                <div className="img max-w-[280px]">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export { ListItem };
