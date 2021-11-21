import React, { ChangeEvent, useState }  from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props{
    activity:Activity | undefined;
    closeForm:()=>void;
    createOrEdit:(activity:Activity)=>void;
    submitting:boolean;
}
export default function ActivityForm({closeForm,activity:selectedActivity,createOrEdit,submitting}:Props){
    const initialState= selectedActivity??{
        id:'',
        category:'',
        city:'',
        date:'',
        description:'',
        title:'',
        venue:''
    }
    const [activity,setActivity]=useState(initialState);

    function handleSubmitForm()
    {
        console.log(activity);
    }

    function handleInputChange(event:ChangeEvent<HTMLInputElement>){
        const{name,value}=event.target;
        setActivity({...activity,[name]:value});

    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmitForm} autoComplete='off' onChange={handleInputChange} >
                <Form.Input placeholder="Title" value={activity.title} name="title"/>
                <Form.TextArea placeholder="Description" value={activity.description} name="description"/>
                <Form.Input placeholder="Category" value={activity.category} name="category"/>
                <Form.Input type="date" placeholder="Date" value={activity.date} name="date"/>
                <Form.Input placeholder="City" value={activity.city} name="city"/>
                <Form.Input placeholder="Venue" value={activity.venue} name="venue"/>
               <Button floated="right" loading={submitting} positive type="button" content="Submit" onClick={()=>createOrEdit(activity)}  />
               <Button floated="right" positive type="button" onClick={()=>closeForm()} content="Cancel"  />
            </Form>
        </Segment>
    )
}