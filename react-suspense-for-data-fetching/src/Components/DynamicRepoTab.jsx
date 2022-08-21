import { useTransition } from "react";
import { useState, useEffect, Suspense } from "react";
import { getStatusChecker, getResourceFromCacheOrFetch } from "../services/serviceHelper";
import ErrorBoundary from "./ApplicationErrorBoundry";
import { RepoContainer } from "./RepoContainer";

const tabs = ["facebook", "github", "instagram", "linkedin", "twitter", "google", "airbnb"];

export const DynamicRepoTab = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [resource, setResource] = useState(null);
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        startTransition(() => {
            const URL = `https://api.github.com/users/${activeTab}/repos`
            const result = getResourceFromCacheOrFetch(activeTab, getStatusChecker(fetch(URL)));
            setResource(result);
        })
    }, [activeTab, startTransition]);

    return (
        <div style={{opacity: isPending ? 0.4 : 1}}>
            <h3>Repository List for <span>{activeTab.toUpperCase()}</span></h3>
            <div className="origanizationList">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`organization ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            {resource && 
                <ErrorBoundary fallback={<div>Something went wrong</div>}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <RepoContainer resource={resource} />
                    </Suspense>
                </ErrorBoundary>
            }
        </div>
    )
}