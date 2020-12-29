import React from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import './tagadder.css'

// Code adapted from https://github.com/prakhar1989/react-tags#placeholderOption

const KeyCodes = {
    comma: 188,
    enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

const TagAdder = ({tags, setTags, setValue, register}) => {

    const tagObjects = tags.map(value => ({id: value, text: value}))
    register({name: "tags"}) // Manually register tag adder element
    setValue("tags", tags)

    function handleDelete(i) {
        const newTags = tags.filter((tag, index) => index !== i)
        setValue("tags", newTags)
        setTags(newTags)
    }

    function handleAddition(tag) {
        const newTags = [...tags, tag.text]
        setValue("tags", newTags)
        setTags(newTags)
    }

    function  handleDrag(tag, currPos, newPos) {
        const newTags = tags.slice()
        newTags.splice(currPos, 1)
        newTags.splice(newPos, 0, tag.text)

        // re-render
        setValue("tags", newTags)
        setTags(newTags)
    }

    return (
        <div>
            <ReactTags tags={tagObjects}
                       handleDelete={handleDelete}
                       handleAddition={handleAddition}
                       handleDrag={handleDrag}
                       delimiters={delimiters}
                       name="tags"
                       inputFieldPosition="top"
                       maxLength={20}
            />
        </div>
    )

}

    export default TagAdder