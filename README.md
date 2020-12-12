# react-timeline-vertical-component
![Screenshot](https://github.com/saish-shinde-007/react-timeline-vertical-component/blob/main/Screen%20Shot%202020-12-11%20at%209.46.24%20PM.png)
# Install the react-timeline-vertical-component Component
`````
npm i react-timeline-vertical-component
`````
# Usage
```
import React, { Component } from 'react'
 
import MyTimeLine from 'react-timeline-vertical-component';

const timelineData = [
    {
        text: 'Got my application developed at SugarCRM published at Forbes Magazine.',
        date: 'October 31 2020',
        link: 'https://www.forbes.com/sites/micahsolomon/2020/07/30/can-your-crm-do-this-sugars--time-aware-customer-platform-changes-the-game/#24096e411859',
        linkTitle: 'Link to my featured app in Forbes.'
    },
    {
        text: 'Published Kubernetes tutorial series on Medium.',
        date: 'Aug 22 2020',
        link: 'https://medium.com/@shindesaish09/managing-kubernetes-cluster-using-kubectl-cli-tutorial-series-e2184739415a',
        linkTitle: 'Link to my mini K8s series.'
    },
    {
        text: 'Finalist at Asia Pacific ART&T challenge held at Singapore for my bachelors project.',
        date: 'April 10 2015',
    }
];

class TimelineExample extends Component {
  render () {
    return (
        <MyTimeLine timelineData={timelineData}/>
    )
  }
}
```

# Props

| Prop  | Usage |
| ------------- | ------------- |
| timelineData  | It takes an array of timeline related data like text(String), date(String), link(String), linkTitle(String).|

Note: This is the initial version of the timeline component. I have plans to extend the functionalities like sorting and
displaying the dateTime format string and rendering the component in ascending or descending order of events.

# License
MIT © [saish007](https://github.com/saish-shinde-007/react-timeline-vertical-component)
