export default function SplitPane(props){
    return (
        <div className="grid gap-4 grid-cols-2">
            <div className="column1">
                {props.left}
            </div>
            <div className="column1">
                {props.right}
            </div>
        </div>
    )
}