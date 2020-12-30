import React from 'react'
import {WithContext as ReactTags} from 'react-tag-input'
import './tagadder.css'
import {useEffect, useState} from "react"
import axios from "axios"
import union from 'underscore/modules/union'

// Code adapted from https://github.com/prakhar1989/react-tags#placeholderOption

const KeyCodes = {
    comma: 188,
    enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

const TagAdder = ({tags, setTags, setValue, register}) => {

    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        axios({
            method: 'GET',
            url: `/tasks`,
        }).then(response => {
            const tasks = response.data.tasks
            const taskTags = union(...tasks.map(task => task.tags))
                .map(value => ({id: value, text: value}))
            setSuggestions(taskTags)
        })
    }, [])

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

    function handleDrag(tag, currPos, newPos) {
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
                       suggestions={suggestions}
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