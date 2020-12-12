import React, { Component } from 'react';
import './MyTimeLine.css';

export default class MyTimeLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { timelineData } = this.props;
        return (
            timelineData.length > 0 && (
                <div className="timeline-container">
                    {timelineData.map((data, idx) => (
                        <div key={idx} className="timeline-item">
                            <div className="timeline-item-content">
                                <time>{data.date}</time>
                                <p>{data.text}</p>
                                <a href={data.link} rel='noopener noreferrer' target='_blank'>{data.linkTitle}</a>
                                <span className="circle" />
                            </div>
                        </div>
                    ))}
                </div>
            )
        );
    }
}

