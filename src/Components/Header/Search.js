import React from "react";
import { useHistory } from "react-router-dom";

export default function Search() {
    const [term, setTerm] = React.useState("");
    const history = useHistory();

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSearch();
        }
    };

    const handleSearch = () => {
        history.push(`/search/${term}`);
    };

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    return (
        <div className="search">
            <h2 className="search title">FIND YOUR MOVIE</h2>
            <div className="search search-bar">
                <input
                    className="search search-bar__input"
                    placeholder="What do you want to watch?"
                    value={term}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                />
                <button
                    className="search search-bar__btn"
                    onClick={handleSearch}
                >
                    SEARCH
                </button>
            </div>
        </div>
    );
}
