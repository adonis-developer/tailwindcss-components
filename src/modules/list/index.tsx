import React from 'react';
import List, { ListItem, ListItemDataType } from '../../components/list';
import CloseIcon from '../../components/icons/closeIcon';

function ListScreen() {
    const data = Array.from({
        length: 4,
    }).map((_, i) => ({
        href: 'https://ant.design',
        title: `Ant design part ${i}`,
        avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }));
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="">
                <List
                    width={1297}
                    items={data}
                    renderItem={(item: ListItemDataType) => (
                        <ListItem
                            avatar={
                                <div className="rounded-full w-12 h-12 overflow-hidden shadow-custom-1">
                                    <img src={item.avatar} alt={item?.altAvatar} className="object-cover" />
                                </div>
                            }
                            title={item.title}
                            description={item.description}
                            content={item.content}
                            actions={[
                                <div className="flex items-center justify-start gap-2 px-2 border-r last:border-r-0">
                                    <CloseIcon />
                                    <span>123</span>
                                </div>,
                                <div className="flex items-center justify-start gap-2 px-2 border-r last:border-r-0">
                                    <CloseIcon />
                                    <span>123</span>
                                </div>,
                                <div className="flex items-center justify-start gap-2 px-2 border-r last:border-r-0">
                                    <CloseIcon />
                                    <span>123</span>
                                </div>,
                            ]}
                        />
                    )}
                />
            </div>
        </div>
    );
}

export default ListScreen;
