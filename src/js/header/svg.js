import React, { Component } from 'react'


let matches = '<p>aaaa</p>'.replace(/<[^>]+>/g, '');
    console.log(matches)
class Bell extends Component {
    render() {

        return (
            <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 22" aria-labelledby="title">
                <title>mic</title>
                <g><path d="M2.502 14.08C3.1 10.64 2 3 8.202 1.62 8.307.697 9.08 0 10 0s1.694.697 1.797 1.62C18 3 16.903 10.64 17.497 14.076c.106 1.102.736 1.855 1.7 2.108.527.142.868.66.793 1.206-.075.546-.542.95-1.09.943H1.1C.55 18.34.084 17.936.01 17.39c-.075-.547.266-1.064.794-1.206.963-.253 1.698-1.137 1.698-2.104zM10 22c-1.417.003-2.602-1.086-2.73-2.51-.004-.062.02-.124.063-.17.043-.045.104-.07.166-.07h5c.063 0 .124.025.167.07.044.046.067.108.063.17-.128 1.424-1.313 2.513-2.73 2.51z"></path></g>
            </svg>
        )
    }
}

export { Bell }