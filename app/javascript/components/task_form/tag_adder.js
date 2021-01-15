import React from 'react'
import {WithContext as ReactTags} from 'react-tag-input'
import {useEffect, useState} from "react"
import axios from "axios"
import union from 'underscore/modules/union'
import {makeStyles} from "@material-ui/core/styles";

// Code adapted from https://github.com/prakhar1989/react-tags#placeholderOption

const useStyles = makeStyles((theme) => ({
        tags: {
            position: 'relative'
        },
        tagInput: {
            width: '50%',
            borderRadius: '2px',
            display: 'inline-block',
            margin: '10px 0px'
        },
        tagInputField: {
            height: '45px',
            margin: 0,
            fontSize: '15px',
            width: '100%',
            border: '1px solid #DCDCDC',
            padding: '5px 20px',
            '&:hover': {
                border: '1px solid black'
            }
        },
        selected: {
            width: '100%'
        },
        tag: {
            border: '1px solid #dddddd',
            background: 'skyblue',
            fontSize: '15px',
            display: 'inline-block',
            padding: '10px',
            margin: '5px 10px 5px 0px',
            borderRadius: '2px',
            '&:hover': {
                border: '1px solid black'
            },
            '&:focus': {
                border: '1px solid #0000CD',
            },
        },
        remove: {
            border: 'none',
            cursor: 'pointer',
            background: 'none'

        },
        suggestions: {
            position: 'absolute',
            '& ul': {
                listStyleType: 'none',
                boxShadow: '.05em .01em .5em rgba(0,0,0,.2)',
                background: 'white',
                width: '200px',
                padding: 0
            },
            '& li': {
                borderBottom: '1px solid #ddd',
                padding: '5px 10px',
                margin: 0
            },
            '& li mark': {
                textDecoration: 'underline',
                background: 'none',
                fontWeight: 600,
            },
            '& ul li.ReactTags__activeSuggestion': {
                background: '#b7cfe0',
                cursor: 'pointer'
            }
        },
        activeSuggestions: {
            background: '#b7cfe0',
            cursor: 'pointer'
        }
    }

))

const KeyCodes = {
    comma: 188,
    enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

const TagAdder = ({tags, setTags, setValue, register}) => {

    const [suggestions, setSuggestions] = useState([])
    const classes = useStyles()

    // Get previously added tags from tasks and use them as suggestions
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
            <ReactTags
                classNames={{
                    tags: classes.tags,
                    tagInput: classes.tagInput,
                    tagInputField: classes.tagInputField,
                    selected: classes.selected,
                    tag: classes.tag,
                    remove: classes.remove,
                    suggestions: classes.suggestions,
                    activeSuggestion: classes.activeSuggestions
                }}
                tags={tagObjects}
                suggestions={suggestions}
                handleDelete={handleDelete}
                allowDeleteFromEmptyInput={false}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                autofocus={false}
                delimiters={delimiters}
                placeholder="Tag"
                name="tags"
                inputFieldPosition="top"
                maxLength={20}
            />
        </div>
    )

}

export default TagAdder