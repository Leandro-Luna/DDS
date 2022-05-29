import * as React from 'react';
import { TimelineViews, TimelineMonth, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject, Resize, DragAndDrop, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import './timeline-resource-grouping.css';
import { extend } from '@syncfusion/ej2-base';
/* import { SampleBase } from '../common/sample-base';
import * as dataSource from './datasource.json'; */
/**
 * schedule timeline resource grouping sample
 */
const TimelineGrouping = () => {
    // data = extend([], dataSource.resourceData.concat(dataSource.timelineResourceData), null, true);
    const dataSource=[{
        EndTime: new Date(2021, 3, 4, 6, 30),
        StartTime: new Date(2021, 3, 4, 4, 30),
        TaskId: 1
    }]
    const workDays = [0, 1, 2, 3, 4, 5];

    const categoryData = [
        { text: 'Agente 1', id: 1, groupId: 1, color: '#df5286' },
        { text: 'Agente 2', id: 2, groupId: 1, color: '#7fa900' },
        { text: 'Agente 3', id: 3, groupId: 2, color: '#ea7a57' },
    ];
    
        return (<div className='schedule-control-section'>
                <div className='col-lg-12 control-section'>
                    <div className='control-wrapper'>
                        <ScheduleComponent cssClass='timeline-resource-grouping' width='80%' height='650px' margin='0 auto'
                            /* selectedDate={new Date(2021, 3, 4)} */ currentView='TimelineWeek' workDays={workDays}
                            eventSettings={dataSource} group={{ resources: ['Projects', 'Categories'] }}>
                            <ResourcesDirective>
                            {/* <ResourceDirective field='ProjectId' title='Choose Project' name='Projects' 
                                        allowMultiple={false} dataSource={this.projectData} textField='text' idField='id' 
                                        colorField='color'>
                                </ResourceDirective> */}
                                <ResourceDirective field='TaskId' title='Category' name='Categories' allowMultiple={true} 
                                    dataSource={categoryData}  textField='text' idField='id' groupIDField='groupId' colorField='color'>
                                </ResourceDirective>
                            </ResourcesDirective>
                            <ViewsDirective>
                                <ViewDirective option='TimelineDay'/>
                                <ViewDirective option='TimelineWeek'/>
                                <ViewDirective option='TimelineWorkWeek'/>
                                <ViewDirective option='TimelineMonth'/>
                                <ViewDirective option='Agenda'/>
                            </ViewsDirective>
                            <Inject services={[TimelineViews, TimelineMonth, Agenda, Resize, DragAndDrop]}/>
                        </ScheduleComponent>
                    </div>
                </div>
            </div>);
    }
export default TimelineGrouping 
