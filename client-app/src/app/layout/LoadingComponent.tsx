import { Dimmer, Loader } from "semantic-ui-react";

interface Props{
    inverted?:Boolean,
    content?:String
}

export default function  LoadingComponent({inverted=true,content="Loading...."}:Props) {
    return(
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content} />
        </Dimmer>
    )
    
}