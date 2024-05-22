import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import data from './data.js';
import './style.css';
const Education = () => {
    let edu = data.Education;
    let exp = data.experience;
    return (
        <section id="Resume" className="Resume">
            <div className="main">
                <div className="education">
                    <h1 className="header"><p>Education</p></h1>
                    <VerticalTimeline>

                        {/* <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Skills: Data Structures and Algorithms · Oracle Database · Database Management System (DBMS)"
                        iconStyle={{ background: 'rgb(14,45,95)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">National Institute of Technology Karnataka</h3>
                        <h4 className="vertical-timeline-element-subtitle">Minor in Information Technology</h4>
                    </VerticalTimelineElement> */}
                        {edu.map((item, index) => (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                iconStyle={{ background: 'rgb(14,45,95)' }}
                            >
                                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                            </VerticalTimelineElement>
                        )
                        )}
                    </VerticalTimeline>
                </div>
                <div className="experience">
                    <h1 className="header "><p>Experience</p></h1>
                    <VerticalTimeline>
                    {exp.map((item, index) => (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                iconStyle={{ background: 'rgb(14,45,95)' }}
                            >
                                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                            </VerticalTimelineElement>
                        )
                        )}
                    </VerticalTimeline>

                </div>
            </div>
        </section>
    );
}

export default Education;