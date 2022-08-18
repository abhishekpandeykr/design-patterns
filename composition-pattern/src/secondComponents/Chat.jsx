
export default function Chat(props){
    console.log("props are", props)
    return (
        <div className="bg-teal-500">
            This is for chat
            and the message is from {props.welcomeMsg}
        </div>
    )
}