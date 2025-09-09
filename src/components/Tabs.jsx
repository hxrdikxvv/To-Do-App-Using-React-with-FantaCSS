export function Tabs(props){
    const {todos,selectedTab,setSelectedTab}=props;

    const tabs=["All Tasks","Open Tasks","Completed Tasks"];
    return(
        <nav className="tab-cotainer">
            {
                tabs.map((tab,tabidx)=>{
                    const noofTasks=tab==='All Tasks'? 
                    todos.length :
                    tab==='Open Tasks'? todos.filter(val=>!val.complete).length : todos.filter(val=>val.complete).length

                    return (
                        <button className={"tab-button" + (selectedTab === tab ? "tab-selected " : "")} key={tabidx} onClick={() => setSelectedTab(tab)}>
                            <h4>{tab} <span>({noofTasks})</span></h4>
                        </button>
                    )
                })
            }
            <hr />
        </nav>
    )
}