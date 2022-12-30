import React from "react";
import { isPropertySignature } from "typescript";

interface IProps {
    children : React.ReactNode;
}

interface IState{
    hasError : boolean;
}


export default class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props : IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error : Error) {
        return { hasError: true };
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something wend wrong.</h1>;
        }
        else {
            return this.props.children;
        }
    }
}