import React from "react"
import ReactMde from "react-mde"  // ✅ Simple default import
import "react-mde/lib/styles/css/react-mde-all.css"  // ✅ Don't forget the CSS
import Showdown from "showdown"

export default function Editor({ tempNoteText, setTempNoteText }) {
    const [selectedTab, setSelectedTab] = React.useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })

    return (
        <section className="pane editor">
            <ReactMde
                value={tempNoteText}
                onChange={setTempNoteText}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
