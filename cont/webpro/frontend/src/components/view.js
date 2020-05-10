import React from "react"

export default class View extends React.Component{
    render(){
        return(<div>
            
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="view-card">
      <a className="navbar-brand" href="#">Brand Logo</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#"><i className="fa fa-home" aria-hidden="true"></i>Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fa fa-tachometer" aria-hidden="true"></i>Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fa fa-tasks" aria-hidden="true"></i>Tasks</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fa fa-money" aria-hidden="true"></i>Vechicle Loan</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fa fa-pie-chart" aria-hidden="true"></i>Reports</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      </div>
    </nav>

    <main role="main" className="view-content">
        <h1>Bootstrap starter template</h1>
        <p className="lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>

    </main>
        </div>)
    }
}