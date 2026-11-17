import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

class AppErrorBoundary extends React.Component<React.PropsWithChildren, {error:string|null}> {
  state={error:null as string|null};
  static getDerivedStateFromError(error:unknown){return {error:error instanceof Error?error.message:String(error)};}
  componentDidCatch(error:Error,info:React.ErrorInfo){console.error('QUIZGO render error',error,info);}
  render(){
    if(this.state.error)return <main><section className="panel"><h1>QUIZGO ha incontrato un errore</h1><p>La pagina non è riuscita a caricarsi correttamente.</p><pre style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere',color:'#fca5a5'}}>{this.state.error}</pre><button className="primary" onClick={()=>window.location.reload()}>Ricarica QUIZGO</button></section></main>;
    return this.props.children;
  }
}
const root=document.getElementById('root');
if(root)ReactDOM.createRoot(root).render(<React.StrictMode><AppErrorBoundary><App/></AppErrorBoundary></React.StrictMode>);
