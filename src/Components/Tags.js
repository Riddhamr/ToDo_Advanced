import React from "react";

const Tags = (props) => {
    const { tagList, setTagList, activeTags, setActiveTags } = props;
    const toggleTag = (updateTag) => {
        const updateTagList = tagList.map((tag) =>
            tag.id === updateTag.id
                ? { ...updateTag, selected: !updateTag.selected }
                : tag
        );
        setTagList(updateTagList);
    };

    const printActiveTags = () => {
        let array = [];
        tagList.forEach((tag) => (tag.selected ? array.push(tag.id) : null));
        console.log(array);
    };
    return (
        <div>
            {printActiveTags()}
            <ul>
                {/* <li
                    style={
                        tagList.length === 0
                            ? { color: "blue" }
                            : { color: "black" }
                    }
                    onClick={() => toggleTag("All-Tags")}
                    key="All-Tags"
                >
                    All Tags
                </li> */}
                {tagList.map((tag) => (
                    <li
                        style={
                            tag.selected
                                ? { color: "blue" }
                                : { color: "black" }
                        }
                        onClick={() => toggleTag(tag)}
                        key={tag.id}
                    >
                        {tag.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tags;
