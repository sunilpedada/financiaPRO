import React from "react"

export default class View extends React.Component{
  constructor(props){
          super(props);
  }
  componentDidMount(){
    console.log("[view} :",this.props);
  }
    render(){
        return(<div>
                  <header>
            {/* Just an image */}
    <a className="nav-link" href="#">
      <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="img"/>
    </a>
        </header>
        <section>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link " href="#"><i className="fa fa-home" aria-hidden="true"></i>Home <span className="sr-only">(current)</span></a>
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
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i> Dropdown
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
              </nav>
            <div className="jumbotron">
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4"/>
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>
        </section>
        <footer>

        </footer>
        </div>)
    }
}